"use client";
import { motion, useMotionValueEvent, useScroll, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import img1 from "@public/serv-img-1.webp";

const ProgressSection: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(contentRef, { once: true, amount: 0.3 });

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

	// Animation variants for the slide-in effect
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const slideInVariants = {
		hidden: {
			x: -30,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 100,
			},
		},
	};

	return (
		<div ref={sectionRef} className="container relative flex space-x-4 md:space-x-20">
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
			<motion.div
				ref={contentRef}
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="transparent mb-20 ml-2 flex flex-1 flex-col space-y-6 text-[1.313rem] text-basicDark md:ml-10 md:flex-row md:space-x-4 md:space-y-0 lg:ml-20 lg:space-x-[1.875rem]"
			>
				<motion.div
					variants={slideInVariants}
					className="relative aspect-square w-full max-w-full md:max-w-[15rem] lg:max-w-[17.5rem]"
				>
					<Image src={img1} alt="" className="h-full w-full object-cover object-center" />
				</motion.div>
				<motion.div
					variants={slideInVariants}
					className="flex-1 bg-white px-4 py-6 md:px-6 md:py-8 lg:px-10 lg:py-11"
				>
					<h3 className="text-xl md:text-[1.313rem]">1. Rozmawiamy o Twoich potrzebach</h3>
					<p className="my-4 text-base text-darkGrey md:my-5 md:text-[1.063rem]">
						Chcemy poznać Twoją markę oraz cele jakie ma do osiągnięcia. Dzięki temu będziemy w
						stanie dostosować ofertę specjalnie dla Ciebie.
					</p>
					<ul className="list-sq">
						<li className="relative pl-3 text-base md:text-[1.063rem]">
							<span className="absolute left-0 top-1/2 h-[0.313rem] w-[0.313rem] -translate-y-1/2 bg-basicDark" />
							Przeprowadzamy briefing kreatywny i przygotowujemy ofertę
						</li>
						<li className="relative pl-3 text-base md:text-[1.063rem]">
							<span className="absolute left-0 top-1/2 h-[0.313rem] w-[0.313rem] -translate-y-1/2 bg-basicDark" />
							Opracowujemy harmonogram prac
						</li>
					</ul>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default ProgressSection;
