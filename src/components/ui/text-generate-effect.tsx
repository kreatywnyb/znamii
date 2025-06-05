"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { Funnel_Display } from "next/font/google";
import { useLoader } from "@/contexts/LoaderContext";
import TerminalTextEffect from "@/ui/atoms/TerminalText";

const funnelDisplay = Funnel_Display({
	variable: "--font-funnel-display",
	subsets: ["latin"],
});

export const TextGenerateEffect = ({
	bigWords,
	onTerminalTextComplete,
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
	const { isBot } = useLoader();

	const wordsArray = bigWords.split(" ");

	// 🔹 Animacja dla dużych słów (spadają jedno po drugim)
	useEffect(() => {
		// Skip animations for bots
		if (isBot) {
			setStartSecondAnimation(true);
			return;
		}

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
	}, [scope, wordsArray.length, animate, isBot]);

	// 🔹 Renderowanie dużych słów (spadają z góry)
	const renderWords = () => {
		return (
			<motion.div
				ref={scope}
				className={`inline-flex flex-wrap justify-center sm:space-x-6 ${funnelDisplay.className} tracking-[-0.02em]`}
			>
				{wordsArray.map((word, idx) => (
					<motion.span
						key={word + idx}
						initial={isBot ? false : { opacity: 0, y: -20 }}
						animate={isBot ? false : { opacity: 1, y: 0 }}
						transition={isBot ? undefined : { duration: 0.2, delay: idx * 0.5 }}
						className={cn(
							"block leading-tight", 
							idx === 1 && "max-sm:mx-4",
							// Ensure immediate visibility for bots
							isBot && "opacity-100"
						)}
						style={isBot ? { opacity: 1, transform: "translateY(0px)" } : undefined}
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
				<div className="mt-4 flex h-10">
					{startSecondAnimation && (
						<>
							<span className="hidden md:inline-block">
								<TerminalTextEffect
									speed={isBot ? 0 : 30} // Instant for bots
									text={`Znami to studio kreatywne, które stworzy dla Twojej firmy branding, nagrania wideo i zdjęcia tak dobre,\nże nawet Twoja konkurencja zacznie je lajkować`}
									styles="h-10 flex text-center"
									onAnimationComplete={onTerminalTextComplete}
									disableAnimation={isBot}
								/>
							</span>
							<span className="mx-auto inline-block max-w-[300px] p-4 md:hidden">
								<TerminalTextEffect
									speed={isBot ? 0 : 30} // Instant for bots
									text="Znami to studio kreatywne, które stworzy dla Twojej firmy branding, nagrania wideo i zdjęcia tak dobre, że nawet Twoja konkurencja zacznie je lajkować"
									styles="h-10 flex text-center"
									onAnimationComplete={onTerminalTextComplete}
									disableAnimation={isBot}
								/>
							</span>
						</>
					)}
				</div>
			</div>
		</div>
	);
};