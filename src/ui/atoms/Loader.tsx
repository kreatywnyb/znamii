"use client";

import React, { useEffect, useRef, useCallback } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@public/loader-animation.json";
import { useLoader } from "@/contexts/LoaderContext";

interface LoaderProps {
	onAnimationComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onAnimationComplete }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<AnimationItem | null>(null);
	const { setAnimationFinished } = useLoader();

	const handleAnimationComplete = useCallback(() => {
		console.log("Animacja zakończona");
		if (typeof window !== "undefined") {
			sessionStorage.setItem("heroAnimationPlayed", "true");
		}
		onAnimationComplete();
		setAnimationFinished(true);
	}, [onAnimationComplete, setAnimationFinished]);

	useEffect(() => {
		sessionStorage.setItem("heroAnimationPlayed", "false");

		const animationTimeout = setTimeout(() => {
			if (!containerRef.current) return;

			animationRef.current = lottie.loadAnimation({
				container: containerRef.current,
				renderer: "svg",
				loop: false,
				autoplay: true,
				animationData,
			});

			animationRef.current.addEventListener("complete", handleAnimationComplete);
		}, 200);

		return () => {
			clearTimeout(animationTimeout);
			if (animationRef.current) {
				animationRef.current.removeEventListener("complete", handleAnimationComplete);
				animationRef.current.destroy();
			}
		};
	}, [handleAnimationComplete]);

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-basicDark">
			<div ref={containerRef} className="w-full max-w-lg" />
		</div>
	);
};

export default Loader;
