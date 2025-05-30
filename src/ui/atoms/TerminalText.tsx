// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { twMerge } from "tailwind-merge";

// interface TerminalTextEffectProps {
// 	text: string;
// 	speed?: number;
// 	loop?: boolean;
// 	styles?: string;
// 	animateWhenInView?: boolean;
// 	onAnimationComplete?: () => void; // Add callback prop
// }

// const TerminalTextEffect: React.FC<TerminalTextEffectProps> = ({
// 	text,
// 	speed = 50,
// 	loop = false,
// 	styles,
// 	animateWhenInView = false,
// 	onAnimationComplete,
// }) => {
// 	const [displayedText, setDisplayedText] = useState("");
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const ref = useRef(null);
// 	const isInView = useInView(ref, { once: true, amount: 0.5 });
// 	const shouldAnimate = animateWhenInView ? isInView : true;

// 	useEffect(() => {
// 		// Only start animation if shouldAnimate is true
// 		if (!shouldAnimate) return;

// 		if (currentIndex < text.length) {
// 			const timeout = setTimeout(() => {
// 				setDisplayedText((prev) => prev + text[currentIndex]);
// 				setCurrentIndex((prev) => prev + 1);
// 			}, speed);

// 			return () => clearTimeout(timeout);
// 		} else if (loop) {
// 			setTimeout(() => {
// 				setDisplayedText("");
// 				setCurrentIndex(0);
// 			}, 1000);
// 		} else if (onAnimationComplete && currentIndex === text.length) {
// 			setTimeout(() => {
// 				onAnimationComplete();
// 			}, 500);
// 		}
// 	}, [currentIndex, text, speed, loop, shouldAnimate, onAnimationComplete]);

// 	// Reset state when text changes
// 	useEffect(() => {
// 		setDisplayedText("");
// 		setCurrentIndex(0);
// 	}, [text]);

// 	return (
// 		<motion.div
// 			ref={ref}
// 			className={twMerge("w-fit rounded-md font-geist text-xs font-normal uppercase", styles)}
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			transition={{ duration: 0.1 }}
// 		>
// 			<span dangerouslySetInnerHTML={{ __html: displayedText }} />
// 		</motion.div>
// 	);
// };

// export default TerminalTextEffect;

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface TerminalTextEffectProps {
	text: string;
	speed?: number;
	loop?: boolean;
	styles?: string;
	animateWhenInView?: boolean;
	onAnimationComplete?: () => void;
}

const TerminalTextEffect: React.FC<TerminalTextEffectProps> = ({
	text,
	speed = 50,
	loop = false,
	styles,
	animateWhenInView = false,
	onAnimationComplete,
}) => {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });
	const shouldAnimate = animateWhenInView ? isInView : true;

	useEffect(() => {
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
	}, [currentIndex, text, speed, loop, shouldAnimate, onAnimationComplete]);

	useEffect(() => {
		setDisplayedText("");
		setCurrentIndex(0);
	}, [text]);

	return (
		<motion.div
			ref={ref}
			className={twMerge(
				"w-fit whitespace-pre-line rounded-md font-geist text-xs font-normal uppercase", // 👈 DODANE
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
