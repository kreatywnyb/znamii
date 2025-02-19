"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export const TextGenerateEffect = ({
	bigWords,
	smallWords,
	classNameOne,
	classNameTwo,
}: {
	bigWords: string;
	smallWords: string;
	classNameOne?: string;
	classNameTwo?: string;
}) => {
	const [scope, animate] = useAnimate();
	const [startSecondAnimation, setStartSecondAnimation] = useState(false);

	const wordsArray = bigWords.split(" ");
	const smallWordsArray = smallWords.split(" ");

	// 🔹 Animacja dla dużych słów (spadają jedno po drugim)
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
				y: 0, // Animacja opadania na miejsce
			},
			{
				duration: 0.5,
				delay: stagger(0.5), // Opóźnienie animacji kolejnych słów
			},
		);

		// 🔹 Uruchomienie drugiej animacji PO ukończeniu pierwszej
		const totalAnimationTime = wordsArray.length * 500; // Liczba słów * czas ich animacji
		const timer = setTimeout(() => {
			setStartSecondAnimation(true);
		}, totalAnimationTime);

		return () => clearTimeout(timer);
	}, [scope, wordsArray.length]);

	// 🔹 Renderowanie dużych słów (spadają z góry)
	const renderWords = () => {
		return (
			<motion.div ref={scope} className="inline-flex flex-wrap justify-center sm:space-x-6">
				{wordsArray.map((word, idx) => (
					<motion.span
						key={word + idx}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2, delay: idx * 0.5 }}
						className={cn("block leading-tight", idx === 1 && "max-sm:mx-4")}
					>
						{word}
					</motion.span>
				))}
			</motion.div>
		);
	};

	// 🔹 Renderowanie małych słów (słowo po słowie, litera po literze)
	const renderSmallWords = () => {
		return (
			<motion.div
				className={cn("flex flex-wrap justify-center space-x-2", classNameTwo)}
				initial="hidden"
				animate={startSecondAnimation ? "visible" : "hidden"}
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.5, // 🔥 Każde słowo pojawia się po kolei
						},
					},
				}}
			>
				{smallWordsArray.map((word, wordIdx) => {
					const letters = word.split("");

					return (
						<React.Fragment key={`${word}-${wordIdx}`}>
							<motion.div
								// key={`${word}-${wordIdx}`}
								className="inline-block"
								variants={{
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: {
											staggerChildren: 0.05, // 🔥 Litery pojawiają się po kolei w słowie
										},
									},
								}}
							>
								{/* 🔹 Animacja litera po literze */}
								{letters.map((letter, letterIdx) => (
									<motion.span
										key={`${letter}-${letterIdx}`}
										variants={{
											hidden: { opacity: 0, y: -10 },
											visible: { opacity: 1, y: 0 },
										}}
										transition={{ duration: 0.3 }}
										className="inline-block"
									>
										{letter}
									</motion.span>
								))}
							</motion.div>
							{word === "firmy" && <div className="md:w-full" />}
						</React.Fragment>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div>
			<div className={cn("overflow-hidden", classNameOne)}>
				<div>{renderWords()}</div>
			</div>
			<div className={cn("mt-4 text-center font-geist uppercase")}>
				<div className="h-5">{renderSmallWords()}</div>
			</div>
		</div>
	);
};
