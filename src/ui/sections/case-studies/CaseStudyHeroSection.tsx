"use client";
import { FlipWords } from "@/ui/molecules/FlipWords";
import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

interface CaseStudyHeroSectionProps {
	title: string;
	video?: string;
	image?: string;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({ title, video, image }) => {
	return (
		<section className="mb-32">
			<div className="bg-basicDark pb-64 pt-20 md:pb-96">
				<div className="container">
					<FlipWords
						word={title}
						as="h1"
						className="mb-16 h-[3.8rem] text-[3.625rem] text-white"
					></FlipWords>
				</div>
			</div>
			<div className="container relative lg:-mt-72">
				{video ? (
					<div className="max-md:absolute max-md:left-4 max-md:right-4 max-md:top-0 max-md:-translate-y-1/2">
						{/* <video
							muted
							playsInline
							webkit-playsinline="true"
							loop
							autoPlay
							className="w-full"
							src={video}
							controls
						/> */}
						<ReactPlayer
							url={video}
							width="100%"
							height="100%"
							loop
							muted
							playing
							controls
							playsinline
							className="h-full w-full object-cover"
						/>
					</div>
				) : image ? (
					<Image
						src={image}
						alt={title}
						width={1200}
						height={675}
						className="w-full object-cover"
					/>
				) : null}
			</div>
		</section>
	);
};

export default CaseStudyHeroSection;
