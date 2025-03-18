"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const FlipWords = ({
	word,
	className,
	animationDuration = 0.2,
	staggerDelay = 0.1,
}: {
	word: string;
	className?: string;
	animationDuration?: number;
	staggerDelay?: number;
}) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: "0px 0px -50px 0px",
	});

	return (
		<div ref={ref}>
			<AnimatePresence>
				{inView && (
					<h2 className={cn("perspective-500 relative z-10 inline-block", className)}>
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
										delay: index * staggerDelay,
										duration: animationDuration,
									}}
									className="inline-block origin-bottom transform-gpu"
								>
									{chunk}
								</motion.span>
							),
						)}
					</h2>
				)}
			</AnimatePresence>
		</div>
	);
};
