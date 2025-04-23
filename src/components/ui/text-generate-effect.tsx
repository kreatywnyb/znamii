"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import TerminalText from "@/ui/atoms/TerminalText";

export const TextGenerateEffect = ({
	bigWords,
	onTerminalTextComplete, // Add callback prop for TerminalText completion
	classNameOne,
}: {
	bigWords: string;
	smallWords?: string;
	classNameOne?: string;
	classNameTwo?: string;
	onTerminalTextComplete?: () => void;
}) => {
	const [scope, animate] = useAnimate();
	const [startSecondAnimation, setStartSecondAnimation] = useState(false);

	const wordsArray = bigWords.split(" ");

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
	}, [scope, wordsArray.length, animate]);

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

	return (
		<div>
			<div className={cn("overflow-hidden", classNameOne)}>
				<div>{renderWords()}</div>
			</div>

			<div className="flex w-full justify-center">
				{/* <div className="mt-4 flex h-10 w-full md:w-[29.5rem]"> */}
				<div className="mt-4 flex h-10">
					{startSecondAnimation && (
						<>
							<span className="hidden md:inline-block">
								<TerminalText
									speed={30}
									// text="Znami to studio kreatywne, które zrealizuje dla Twojej firmy <br /> branding, nagrania wideo i sesje zdjęciowe"
									text={`Znami to studio kreatywne, które zrealizuje dla Twojej firmy\nbranding, nagrania wideo i sesje zdjęciowe`}
									styles=" h-10 flex text-center"
									onAnimationComplete={onTerminalTextComplete}
								/>
							</span>
							<span className="inline-block md:hidden">
								<TerminalText
									speed={30}
									text="Znami to studio kreatywne, które zrealizuje dla Twojej firmy branding, nagrania wideo i sesje zdjęciowe"
									styles=" h-10 flex text-center"
									onAnimationComplete={onTerminalTextComplete}
								/>
							</span>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
