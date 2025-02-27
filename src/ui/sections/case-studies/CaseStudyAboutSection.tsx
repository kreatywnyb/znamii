import React from "react";
import { CTAButton } from "../../molecules/CTAButton";
import Image from "next/image";
import placeholderImage from "@public/case-study-material.webp";
import WhiteBox from "@/ui/organisms/WhiteBox";

interface CaseStudyAboutSectionProps {
	leftDescription: string;
	rightDescription?: string;
	rightDescription2?: string;
}

const CaseStudyAboutSection: React.FC<CaseStudyAboutSectionProps> = ({
	leftDescription,
	rightDescription,
	rightDescription2,
}) => {
	return (
		// <section className="container my-8 bg-white p-16">
		<WhiteBox className="my-8 [&>div]:p-16">
			<div className="container flex justify-between">
				<div className="flex max-w-[380px] flex-col justify-between">
					<p className="text-[1.313rem]">{leftDescription}</p>
					<CTAButton href="">Zrealizuj projekt z nami</CTAButton>
				</div>
				<div className="max-w-[482px]">
					<p className="mb-12">{rightDescription}</p>
					<p>{rightDescription2}</p>
				</div>
			</div>
			<Image src={placeholderImage} alt="alt" className="mt-32" />
			<Image src={placeholderImage} alt="alt" />
		</WhiteBox>
		// </section>
	);
};

export default CaseStudyAboutSection;
