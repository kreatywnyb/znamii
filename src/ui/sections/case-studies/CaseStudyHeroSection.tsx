"use client";
import { FlipWords } from "@/ui/molecules/FlipWords";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

interface CaseStudyHeroSectionProps {
	title: string;
	video?: string;
	image?: string;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({ title, video, image }) => {
	const mediaRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const [mediaHeight, setMediaHeight] = useState(0);
	const [titleHeight, setTitleHeight] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check if mobile on mount and resize
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	useEffect(() => {
		const updateDimensions = () => {
			// Measure title height
			if (titleRef.current) {
				setTitleHeight(titleRef.current.offsetHeight);
			}
			
			// Measure media height
			if (mediaRef.current) {
				const height = mediaRef.current.offsetHeight + (isMobile ? 25 : 50);
				setMediaHeight(height);
			}
		};

		// Initial measurement
		updateDimensions();

		// Update on resize
		window.addEventListener("resize", updateDimensions);

		// For images, update when loaded
		if (image && mediaRef.current) {
			const imgElement = mediaRef.current.querySelector("img");
			if (imgElement) {
				imgElement.addEventListener("load", updateDimensions);
			}
		}

		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, [image, video, isMobile, title]);

	// Calculate safe padding that accounts for title height and provides buffer
	const basePadding = isMobile ? 40 : 80; // Base spacing between title and media
	const titleContainerHeight = titleHeight 
	const minPaddingBottom = titleContainerHeight + basePadding;
	const dynamicPaddingBottom = Math.max(mediaHeight / 2, minPaddingBottom);

	return (
		<section className="relative mb-16 md:mb-32">
			{/* Black background section with dynamic height */}
			<div className="relative bg-basicDark" style={{ paddingBottom: `${dynamicPaddingBottom}px` }}>
				<div className="container pt-12 md:pt-20">
					<div ref={titleRef}>
						<FlipWords
							word={title}
							as="h1"
							className="mb-8 md:mb-16 h-auto text-4xl text-white lg:text-[3.625rem] leading-tight"
						/>
					</div>
				</div>
			</div>

			{/* Media container - positioned to center on boundary */}
			<div className="container relative">
				<div
					ref={mediaRef}
					className="relative"
					style={{
						marginTop: `-${mediaHeight / 2 - (isMobile ? 25 : 50)}px`,
					}}
				>
					{video ? (
						<video
							muted
							playsInline
							webkit-playsinline="true"
							loop
							autoPlay
							className="w-full"
							src={video}
							controls
						/>
					) : image ? (
						<Image
							src={image}
							alt={title}
							width={1920}
							height={1080}
							unoptimized
							className="w-full object-cover"
							quality={95}
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, (max-width: 1920px) 100vw, 1920px"
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					) : null}
				</div>
			</div>
		</section>
	);
};

export default CaseStudyHeroSection;