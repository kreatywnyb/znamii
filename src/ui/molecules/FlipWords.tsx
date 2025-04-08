"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

export const FlipWords = ({
	word,
	className,
	animationDuration = 0.2,
	staggerDelay = 0.07,
	delay = 0, // Added optional delay prop with default value of 0
	as: Component = "h2", // Default to h2 but allow overriding
}: {
	word: string;
	className?: string;
	animationDuration?: number;
	staggerDelay?: number;
	delay?: number; // Type definition for the delay prop
	as?: React.ElementType; // Accept any valid HTML element or component
}) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: "0px 0px -50px 0px",
	});

	return (
		<div ref={ref} className="min-h-16">
			<AnimatePresence>
				{inView && (
					<Component className={cn("perspective-500 relative z-10 inline-block", className)}>
						{word.split(/(\s+)/g).map((chunk: string, index: number) =>
							chunk.trim() === "" ? (
								<span key={word + index}>{chunk}</span>
							) : (
								<motion.span
									key={word + index}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									transition={{
										delay: delay + (index * staggerDelay), // Apply base delay plus stagger delay
										duration: animationDuration,
									}}
									className="inline-block origin-bottom transform-gpu"
								>
									{chunk}
								</motion.span>
							),
						)}
					</Component>
				)}
			</AnimatePresence>
		</div>
	);
};