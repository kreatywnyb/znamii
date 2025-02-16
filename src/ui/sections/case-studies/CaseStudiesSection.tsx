import React from "react";
import { CTAButton } from "../../molecules/CTAButton";
import CaseStudy from "@/models/caseStudy";
import CaseStudiesList from "../../organisms/case-studies/CaseStudiesList";
import case1 from "@public/case-1.webp";
import case2 from "@public/case-2.webp";
import case3 from "@public/case-3.webp";
import case4 from "@public/case-4.webp";
import case5 from "@public/case-5.webp";
import case6 from "@public/case-6.webp";

const CaseStudiesSection: React.FC = () => {

	const caseStudies: CaseStudy[] = [
		{ name: "Pienińska przystań", image: case1.src, cols: 2, category: "Branding", slug: "pieninska-przystan" },
		{ name: "PRO100", image: case2.src, cols: 1, category: "Branding", slug: "pro100" },
		{ name: "AW-Sport", image: case3.src, cols: 1, category: "Branding", slug: "aw-sport" },
		{ name: "The Big Thing", image: case4.src, cols: 2, category: "Branding", slug: "the-big-thing" },
		{ name: "Future Mind", image: case5.src, cols: 2, category: "Branding", slug: "future-mind" },
		{ name: "ONDE", image: case6.src, cols: 1, category: "Branding", slug: "onde" },	
	];

	return (
		<section className="container relative z-10 -mt-28 bg-white px-16 py-16">
			<h2 className="mb-4 mt-8 text-left text-4xl font-medium text-basicDark">
				Zobacz nasze realizacje. Są w pytkę.
			</h2>
			
			<CaseStudiesList caseStudies={caseStudies} />

			<div className="flex justify-center py-16">
				<CTAButton href="/case-studies" variant="white">
					Zobacz wszystkie realizacje
				</CTAButton>
			</div>
		</section>
	);
};

export default CaseStudiesSection;
