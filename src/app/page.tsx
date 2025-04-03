import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionHomePage from "@/ui/sections/HeroSectionHomePage";
import ServicesSection from "@/ui/sections/ServicesSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import ReviewsSection from "@/ui/sections/ReviewsSection";
import CaseStudiesSection from "@/ui/sections/case-studies/CaseStudiesSection";
import API from "@/API";
import { CaseStudyResponse } from "@/API/models/caseStudies";

export const revalidate = 30;

export default async function Home() {
	const response = await API.caseStudies.getCaseStudies({ showOnHomePage: true });
	const caseStudies: CaseStudyResponse[] = response.data;

	return (
		<main className="bg-background">
			<HeroSectionHomePage />
			<ServicesSection />
			<CaseStudiesSection caseStudies={caseStudies} title="Zobacz nasze realizacje. Są w pytkę." />
			<ReviewsSection />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
}
