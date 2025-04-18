"use client";
import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@public/loader-animation.json"; // Dostosuj ścieżkę

interface LoaderProps {
	onAnimationComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onAnimationComplete }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<AnimationItem | null>(null);

	useEffect(() => {
		// Opóźnij inicjalizację animacji o 0.5 sekundy
		const animationTimeout = setTimeout(() => {
			if (containerRef.current) {
				// Inicjalizacja animacji Lottie
				animationRef.current = lottie.loadAnimation({
					container: containerRef.current,
					renderer: "svg",
					loop: false,
					autoplay: true,
					animationData: animationData,
				});

				// Nasłuchuj zakończenia animacji
				animationRef.current.addEventListener("complete", () => {
					console.log("Animacja zakończona");
					// Ustaw flagę w sessionStorage
					if (typeof window !== "undefined") {
						window.sessionStorage?.setItem("heroAnimationPlayed", "true");
					}
					// Wywołaj callback aby poinformować rodzica o zakończeniu
					onAnimationComplete();
				});
			}
		}, 500); // 500ms = 0.5s opóźnienia

		// Czyszczenie przy odmontowaniu komponentu
		return () => {
			clearTimeout(animationTimeout);
			if (animationRef.current) {
				animationRef.current.destroy();
			}
		};
	}, [onAnimationComplete]);

	return (
		<div className="fixed left-0 top-0 z-[100] flex h-screen w-screen flex-col items-center justify-center bg-basicDark">
			<div ref={containerRef} className="w-full max-w-lg" />
		</div>
	);
};

export default Loader;

// const Loader: React.FC<LoaderProps> = ({ onAnimationComplete }) => {
// 	const containerRef = useRef<HTMLDivElement>(null);
// 	const animationRef = useRef<AnimationItem | null>(null);

// 	useEffect(() => {
// 		if (containerRef.current) {
// 			// Inicjalizacja animacji Lottie
// 			animationRef.current = lottie.loadAnimation({
// 				container: containerRef.current,
// 				renderer: "svg",
// 				loop: false,
// 				autoplay: true,
// 				animationData: animationData,
// 			});

// 			// Nasłuchuj zakończenia animacji
// 			animationRef.current.addEventListener("complete", () => {
// 				console.log("Animacja zakończona");
// 				// Ustaw flagę w sessionStorage
// 				if (typeof window !== "undefined") {
// 					window.sessionStorage?.setItem("heroAnimationPlayed", "true");
// 				}
// 				// Wywołaj callback aby poinformować rodzica o zakończeniu
// 				onAnimationComplete();
// 			});
// 		}

// 		// Czyszczenie przy odmontowaniu komponentu
// 		return () => {
// 			if (animationRef.current) {
// 				animationRef.current.destroy();
// 			}
// 		};
// 	}, [onAnimationComplete]);

// 	return (
// 		<div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-basicDark">
// 			<div ref={containerRef} className="w-full max-w-lg" />
// 		</div>
// 	);
// };

// export default Loader;
