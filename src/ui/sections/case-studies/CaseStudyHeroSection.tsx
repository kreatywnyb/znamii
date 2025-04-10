import { FlipWords } from "@/ui/molecules/FlipWords";
import React from "react";

interface CaseStudyHeroSectionProps {
	title: string;
	video?: string;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({ title, video }) => {
	return (
		<section className="mb-32">
			<div className="bg-basicDark pb-96 pt-20">
				<div className="container">
					<FlipWords word={title} as="h1" className="mb-16 text-[3.625rem] h-[3.8rem] text-white"></FlipWords>
				</div>
			</div>
			<div className="container -mt-96">
				<video muted autoPlay className="w-full" src={video} controls></video>
			</div>
		</section>
	);
};

export default CaseStudyHeroSection;
