import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionHomePage from "@/ui/sections/HeroSectionHomePage";
import ServicesSection from "@/ui/sections/ServicesSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import ReviewsSection from "@/ui/sections/ReviewsSection";

import CaseStudiesSection from "@/ui/sections/case-studies/CaseStudiesSection";

export default function Home() {

	return (
		<main className="bg-background">
			<HeroSectionHomePage />
			<ServicesSection />
			<CaseStudiesSection />
			<ReviewsSection />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
}
