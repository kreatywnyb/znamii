import React from "react";

interface CaseStudyHeroSectionProps {
	title: string;
	video?: string;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({ title, video }) => {
	return (
		<section className="mb-32">
			<div className="bg-basicDark pt-20 pb-96">
				<div className="container">
					<h1 className="mb-16 text-[58px] text-white">{title}</h1>
				</div>
			</div>
			<div className="container -mt-96">
				<video className="w-full" src={video} controls></video>
			</div>
		</section>
	);
};

export default CaseStudyHeroSection;
