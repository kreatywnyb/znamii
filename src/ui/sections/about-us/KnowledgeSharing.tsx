"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import sharing1Img from "@public/sharing-1.webp";
import sharing2Img from "@public/sharing-2.webp";
import sharing3Img from "@public/sharing-3.webp";
import wsizImg from "@public/WSIZ-logo.webp";
import Link from "next/link";
import { links } from "@/constants";
import { FlipWords } from "@/ui/molecules/FlipWords";
import TerminalTextEffect from "@/ui/atoms/TerminalText";

const KnowledgeSharing = () => {
	const [offsetY, setOffsetY] = useState(0);
	const [isDesktop, setIsDesktop] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	// Check if screen is larger than 768px (desktop)
	useEffect(() => {
		const checkScreenSize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	// Handle scroll for parallax effect
	useEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				setOffsetY(rect.top);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section ref={sectionRef} className="overflow-hidden py-20 lg:py-40">
			<div className="container flex flex-col max-lg:space-y-16 lg:flex-row">
				<div className="flex max-w-[28.75rem] flex-col justify-between">
					<div className="flex-1">
						{/* <FlipWords
							as="h2"
							word={`Dzielimy się wiedzą, bo sharing is caring`}
							className="mb-12 text-[2.5rem] leading-[3.125rem]"
						/> */}
						<FlipWords
							as="h2"
							word={`Dzielimy się wiedzą,\nbo sharing is caring`}
							className="mb-12 text-[2.5rem] leading-[3.125rem]"
						/>

						<p className="text-[1.313rem]">
							Prowadzimy prelekcje i szkolenia dla uczelni oraz firm, łącząc nasze doświadczenie z
							pasją do przekazywania wiedzy.{" "}
							<Link href={links.contactPage} className="text-primary underline">
								Napisz do nas
							</Link>{" "}
							jeśli chcesz żebyśmy pojawili się także u Ciebie.
						</p>
					</div>
					<div className="max-md:mt-8">
						<TerminalTextEffect
							text="Jesteśmy partnerem:"
							animateWhenInView
							styles="mb-10 inline-block font-geist text-[0.75rem] uppercase"
						></TerminalTextEffect>
						<Image alt="WSIZ Logo" src={wsizImg} width={800} height={800} className="h-20 w-auto" />
					</div>
				</div>
				<div className="flex flex-1 flex-col">
					<div
						className="overflow-hidden"
						style={{
							transform: isDesktop ? `translateY(${Math.max(offsetY * 0.2, -200)}px)` : "",
							transition: "transform 0.2s linear",
						}}
					>
						<Image
							alt="Sharing knowledge presentation"
							src={sharing3Img}
							className="ml-auto md:max-w-[455px]"
						/>
					</div>
					<div className="mt-8 flex flex-col justify-end max-lg:space-y-8 md:mt-[62px] md:flex-row lg:space-x-16">
						<div
							className="overflow-hidden"
							style={{
								transform: isDesktop ? `translateY(${Math.max(offsetY * 0.4, -200)}px)` : "",
								transition: "transform 0.2s linear",
							}}
						>
							<Image
								alt="Sharing knowledge workshop"
								src={sharing1Img}
								width={800}
								height={800}
								className="h-fit flex-1 md:max-w-[291px]"
							/>
						</div>
						<div
							className="overflow-hidden"
							style={{
								transform: isDesktop ? `translateY(${Math.max(offsetY * 0.3, -200)}px)` : "",
								transition: "transform 0.2s linear",
							}}
						>
							<Image
								alt="Sharing knowledge lecture"
								src={sharing2Img}
								width={800}
								height={800}
								className="h-fit flex-1 md:max-w-[291px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KnowledgeSharing;
