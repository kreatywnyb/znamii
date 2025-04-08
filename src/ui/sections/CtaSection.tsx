"use client"
import React, { useEffect } from "react";
import { CTAButton } from "../molecules/CTAButton";
import { links } from "@/constants";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FlipWords } from "../molecules/FlipWords";

interface CtaSectionProps {
	image: string;
	text?: string;
	title?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, text, image }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const textVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				delay: 0.5,
				ease: "easeOut",
			},
		},
	};

	const buttonVariants: Variants = {
		hidden: { opacity: 0, y: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.5,
				delay: 1,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="relative z-10 mb-[30rem] flex justify-center px-4" ref={ref}>
			<div
				className="relative z-10 mx-auto flex min-h-[471px] w-full max-w-[1700px] flex-col items-start bg-basicDark bg-cover bg-center px-6 py-24 text-white md:px-32 xxl:max-w-[2200px]"
				style={{ backgroundImage: `url(${image})` }}
			>
				<FlipWords
					word={title || "Gotowy by zrealizować swój projekt z nami?"}
					className="mb-4 max-w-[40rem] text-left text-[2rem] font-medium md:text-[3.625rem] md:leading-[125%] min-h-96:"
				>
				</FlipWords>
				
				<motion.p
					className="mb-[3.75rem] text-[1.313rem] text-lg font-medium leading-[160%] text-lightGrey"
					initial="hidden"
					animate={controls}
					variants={textVariants}
				>
					{text || "Zrealizujemy projekty, które do tej pory były wyłącznie w Twojej głowie."}
				</motion.p>
				
				<motion.div
					initial="hidden"
					animate={controls}
					variants={buttonVariants}
					className="inline-block"
				>
					<CTAButton
						href={links.contactPage}
						className="whitespace-nowrap text-center max-md:w-full max-sm:text-sm"
					>
						Zrealizuj projekt z nami
					</CTAButton>
				</motion.div>
			</div>
		</section>
	);
};

export default CtaSection;