import React from "react";
import { CTAButton } from "../../molecules/CTAButton";
import Image from "next/image";
import placeholderImage from "@public/case-study-material.webp";
import WhiteBox from "@/ui/organisms/WhiteBox";
import { links } from "@/constants";

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
		<WhiteBox className="my-8 [&>div]:md:p-16">
			<div className="container flex flex-col justify-between max-lg:space-y-4 lg:flex-row lg:space-x-10">
				<div className="flex max-w-[28rem] flex-col justify-between">
					<p className="text-[1.313rem]">{leftDescription}</p>
					<span className="hidden md:block">
						<CTAButton variant="primaryv2" href={links.contactPage}>
							Zrealizuj projekt z nami
						</CTAButton>
					</span>
				</div>
				<div className="max-w-[40rem] max-md:mt-20">
					<p className="mb-12">{rightDescription}</p>
					<p>{rightDescription2}</p>
					<span className="mt-10 block md:hidden">
						<CTAButton variant="primaryv2" href={links.contactPage}>
							Zrealizuj projekt z nami
						</CTAButton>
					</span>
				</div>
			</div>
			<Image src={placeholderImage} alt="alt" className="mt-32" />
			<Image src={placeholderImage} alt="alt" />
		</WhiteBox>
		// </section>
	);
};

export default CaseStudyAboutSection;
