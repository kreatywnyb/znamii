import { FlipWords } from "@/ui/molecules/FlipWords";
import Image from "next/image";
import React from "react";

interface CaseStudyHeroSectionProps {
	title: string;
	video?: string;
	image?: string;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({ title, video, image }) => {
	return (
		<section className="mb-32">
			<div className="bg-basicDark pb-48 pt-20 md:pb-96">
				<div className="container">
					<FlipWords
						word={title}
						as="h1"
						className="mb-16 h-[3.8rem] text-4xl text-white lg:text-[3.625rem]"
					></FlipWords>
				</div>
			</div>
			<div className="container relative lg:-mt-72">
				{video ? (
					<div className="max-md:absolute max-md:left-4 max-md:right-4 max-md:top-0 max-md:-translate-y-1/2">
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
