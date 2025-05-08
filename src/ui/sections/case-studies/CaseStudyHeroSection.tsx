import { FlipWords } from "@/ui/molecules/FlipWords";
import React from "react";
import Image from "next/image";

interface CaseStudyHeroSectionProps {
	title: string;
	video?: string;
	image?: string;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({ title, video, image }) => {
	return (
		<section className="mb-32">
			<div className="bg-basicDark pb-96 pt-20 max-md:mb-8">
				<div className="container">
					<FlipWords
						word={title}
						as="h1"
						className="mb-16 h-[3.8rem] text-[3.625rem] text-white"
					></FlipWords>
				</div>
			</div>
			<div className="container -mt-72">
				{video ? (
					<video muted playsInline loop autoPlay className="w-full" src={video} controls />
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
