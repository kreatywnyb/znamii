import React from "react";
import { CTAButton } from "../../molecules/CTAButton";
import CaseStudy from "@/models/caseStudy";
import CaseStudiesList from "../../organisms/case-studies/CaseStudiesList";

import { FlipWords } from "@/ui/molecules/FlipWords";
import { links } from "@/constants";

export type SmallCaseStudiesSectionProps = {
	title: string;
	caseStudies: CaseStudy[];
};

const SmallCaseStudiesSection: React.FC<SmallCaseStudiesSectionProps> = ({
	title,
	caseStudies,
}) => {
	return (
		<section className="my-20">
			<div className="container">
				<FlipWords
					word={title}
					className="mb-4 mt-8 text-left text-4xl font-medium text-basicDark"
				></FlipWords>

				<CaseStudiesList caseStudies={caseStudies} />

				<div className="flex justify-center py-16">
					<CTAButton
						href={links.portfolio}
						variant="secondary"
						className="whitespace-nowrap max-sm:text-sm"
					>
						Zobacz wszystkie realizacje
					</CTAButton>
				</div>
			</div>
		</section>
	);
};

export default SmallCaseStudiesSection;
