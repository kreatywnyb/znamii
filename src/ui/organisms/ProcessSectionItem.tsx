"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import img1 from "@public/serv-img-1.webp";

const ProgressSection: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 50%", "end 50%"], // Animacja zaczyna się w połowie sekcji
	});

	const [isActive, setIsActive] = useState(false);
	const [lastScroll, setLastScroll] = useState(0);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const scrollingDown = latest > lastScroll; // Czy przewijamy w dół?
		setLastScroll(latest);

		// Ustawiamy aktywność, gdy animacja się zaczyna
		if (latest > 0 && !isActive) {
			setIsActive(true);
		}

		// Resetujemy aktywność, gdy pasek animacji się skończył i użytkownik przewija w górę
		if (latest === 0 && !scrollingDown) {
			setIsActive(false);
		}
	});

	return (
		<div ref={sectionRef} className="container relative flex space-x-20">
			{/* Pasek progresu */}
			<div className="relative">
				<div
					className={twMerge(isActive ? "bg-primary" : "bg-lightGrey", "relative z-30 h-4 w-4")}
				/>
				<div className="absolute left-1/2 top-0 z-20 h-full w-[1px] -translate-x-1/2 overflow-hidden bg-gray-200">
					<motion.div
						className="h-full w-full bg-primary"
						style={{
							scaleY: scrollYProgress, // Animacja działa tylko dla aktywnej sekcji
							transformOrigin: "top",
						}}
					/>
				</div>
			</div>

			{/* Treść sekcji */}
			<div className="transparent mb-20 ml-20 flex flex-1 space-x-[1.875rem] text-[1.313rem] text-basicDark">
				<div className="relative aspect-square max-h-[17.5rem] w-full max-w-[17.5rem] bg-red-500">
					<Image src={img1} alt="" className="h-full w-full object-cover object-center" />
				</div>
				<div className="max-w-[45rem] flex-1 bg-white px-10 py-11">
					<h3>1. Rozmawiamy o Twoich potrzebach</h3>
					<p className="my-10 text-[1.063rem] text-darkGrey">
						Chcemy poznać Twoją markę oraz cele jakie ma do osiągnięcia. Dzięki temu będziemy w
						stanie dostosować ofertę specjalnie dla Ciebie.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProgressSection;
