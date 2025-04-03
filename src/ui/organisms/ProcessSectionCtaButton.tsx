"use client";
import { links } from "@/constants";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { CTAButton } from "../molecules/CTAButton";

const ProgressSectionCtaButton: React.FC = () => {
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
		<div ref={sectionRef} className="container relative flex space-x-4 md:space-x-20">
			{/* Pasek progresu */}
			<div className="relative">
				<div
					className={twMerge(isActive ? "bg-primary" : "bg-lightGrey", "relative z-30 h-4 w-4")}
				/>
			</div>

			{/* Treść sekcji */}
			<div className="transparent mb-20 flex flex-1 space-x-[1.875rem] text-[1.313rem] text-basicDark md:ml-20">
				<CTAButton variant="primaryv2" href={links.contactPage}>
					zrealizuj projekt z nami
				</CTAButton>
			</div>
		</div>
	);
};

export default ProgressSectionCtaButton;
