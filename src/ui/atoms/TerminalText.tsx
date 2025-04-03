"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface TerminalTextEffectProps {
	text: string;
	speed?: number;
	loop?: boolean;
	styles?: string;
}

const TerminalTextEffect: React.FC<TerminalTextEffectProps> = ({
	text,
	speed = 50,
	loop = false,
	styles,
}) => {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
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
		}
	}, [currentIndex, text, speed, loop]);

	return (
		<motion.div
			className={twMerge("w-fit rounded-md font-geist text-xs font-normal uppercase", styles)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<span dangerouslySetInnerHTML={{ __html: displayedText }} />
		</motion.div>
	);
};

export default TerminalTextEffect;
