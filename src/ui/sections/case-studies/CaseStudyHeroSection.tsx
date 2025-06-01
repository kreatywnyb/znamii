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
	const [mediaHeight, setMediaHeight] = useState(0);

	useEffect(() => {
		const updateMediaHeight = () => {
			if (mediaRef.current) {
				const height = mediaRef.current.offsetHeight + 50;
				setMediaHeight(height);
			}
		};

		// Initial measurement
		updateMediaHeight();

		// Update on resize
		window.addEventListener("resize", updateMediaHeight);

		// For images, update when loaded
		if (image && mediaRef.current) {
			const imgElement = mediaRef.current.querySelector("img");
			if (imgElement) {
				imgElement.addEventListener("load", updateMediaHeight);
			}
		}

		return () => {
			window.removeEventListener("resize", updateMediaHeight);
		};
	}, [image, video]);

	return (
		<section className="relative mb-32">
			{/* Black background section with dynamic height */}
			<div className="relative bg-basicDark" style={{ paddingBottom: `${mediaHeight / 2}px` }}>
				<div className="container pt-20">
					<FlipWords
						word={title}
						as="h1"
						className="mb-16 h-[3.8rem] text-4xl text-white lg:text-[3.625rem]"
					/>
				</div>
			</div>

			{/* Media container - positioned to center on boundary */}
			<div className="container relative">
				<div
					ref={mediaRef}
					className="relative"
					style={{
						marginTop: `-${mediaHeight / 2 - 50}px`,
						// marginBottom: `${mediaHeight / 2}px`
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
