import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionHomePage from "@/ui/sections/HeroSectionHomePage";
import ServicesSection from "@/ui/sections/ServicesSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import ReviewsSection from "@/ui/sections/ReviewsSection";
import CaseStudiesSection from "@/ui/sections/case-studies/CaseStudiesSection";

import case1 from "@public/case-1.webp";
import case2 from "@public/case-2.webp";
import case3 from "@public/case-3.webp";
import case4 from "@public/case-4.webp";
import case5 from "@public/case-5.webp";
import case6 from "@public/case-6.webp";
import CaseStudy from "@/models/caseStudy";

const caseStudies: CaseStudy[] = [
	{
		name: "Pienińska Przystań",
		image: case1.src,
		cols: 2,
		category: "Branding",
		slug: "pieninska-przystan",
	},
	{ name: "PRO100", image: case2.src, cols: 1, category: "Branding", slug: "pro100" },
	{ name: "AW-Sport", image: case3.src, cols: 1, category: "Branding", slug: "aw-sport" },
	{
		name: "The Big Thing",
		image: case4.src,
		cols: 2,
		category: "Branding",
		slug: "the-big-thing",
	},
	{ name: "Future Mind", image: case5.src, cols: 2, category: "Branding", slug: "future-mind" },
	{ name: "ONDE", image: case6.src, cols: 1, category: "Branding", slug: "onde" },
];

export default function Home() {
	return (
		<main className="bg-background">
			<HeroSectionHomePage />
			<ServicesSection />
			<CaseStudiesSection
				caseStudies={caseStudies}
				title="Zobacz nasze realizacje. Są w pytkę.
"
			/>
			<ReviewsSection />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
}
