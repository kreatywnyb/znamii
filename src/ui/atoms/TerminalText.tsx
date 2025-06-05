"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useLoader } from "@/contexts/LoaderContext";

interface TerminalTextEffectProps {
	text: string;
	speed?: number;
	loop?: boolean;
	styles?: string;
	animateWhenInView?: boolean;
	onAnimationComplete?: () => void;
	disableAnimation?: boolean; // New prop for bot detection
}

const TerminalTextEffect: React.FC<TerminalTextEffectProps> = ({
	text,
	speed = 50,
	loop = false,
	styles,
	animateWhenInView = false,
	onAnimationComplete,
	disableAnimation, // If passed, use this; otherwise use context
}) => {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	const { isBot } = useLoader();
	
	// Use passed prop or fallback to context
	const shouldDisableAnimation = disableAnimation ?? isBot;
	const shouldAnimate = shouldDisableAnimation ? true : (animateWhenInView ? isInView : true);

	useEffect(() => {
		// For bots: show all text immediately
		if (shouldDisableAnimation) {
			setDisplayedText(text);
			setCurrentIndex(text.length);
			// Call completion callback immediately for bots
			setTimeout(() => {
				onAnimationComplete?.();
			}, 0);
			return;
		}

		// Regular animation logic for users
		if (!shouldAnimate) return;

		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timeout);
		} else if (loop) {
			setTimeout(() => {
				setDisplayedText("");
				setCurrentIndex(0);
			}, 1000);
		} else if (onAnimationComplete && currentIndex === text.length) {
			setTimeout(() => {
				onAnimationComplete();
			}, 500);
		}
	}, [currentIndex, text, speed, loop, shouldAnimate, onAnimationComplete, shouldDisableAnimation]);

	useEffect(() => {
		// Reset state when text changes, unless it's a bot
		if (!shouldDisableAnimation) {
			setDisplayedText("");
			setCurrentIndex(0);
		}
	}, [text, shouldDisableAnimation]);

	// For bots: return simple div without motion
	if (shouldDisableAnimation) {
		return (
			<div
				ref={ref}
				className={twMerge(
					"w-fit whitespace-pre-line rounded-md font-geist text-xs font-normal uppercase",
					styles,
				)}
			>
				{text}
			</div>
		);
	}

	// Regular motion component for users
	return (
		<motion.div
			ref={ref}
			className={twMerge(
				"w-fit whitespace-pre-line rounded-md font-geist text-xs font-normal uppercase",
				styles,
			)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.1 }}
		>
			{displayedText}
		</motion.div>
	);
};

export default TerminalTextEffect;