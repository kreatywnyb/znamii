import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionHomePage from "@/ui/sections/HeroSectionHomePage";
import ServicesSection from "@/ui/sections/ServicesSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import ReviewsSection from "@/ui/sections/ReviewsSection";
import CaseStudiesSection from "@/ui/sections/case-studies/CaseStudiesSection";
import API from "@/API";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import { Metadata } from "next";

const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

export const revalidate = 30;

export const metadata: Metadata = {
	title: "Znami Studio - Branding, video i zdjęcia",
	description:
		"Znami to studio kreatywne, które stworzy dla Ciebie kompleksowy branding, sesje foto i wideo - profesjonalnie, na czas i w dobrej cenie!",
	openGraph: {
		title: "Znami Studio - Branding, video i zdjęcia",
		description:
			"Znami to studio kreatywne, które stworzy dla Ciebie kompleksowy branding, sesje foto i wideo - profesjonalnie, na czas i w dobrej cenie! ",
		type: "website",
		// url: "https://twojastrona.pl/kontakt",
		images: [
			{
				url: "https://api.znami.usermd.net/wp-content/uploads/2025/05/og-image.png",
				width: 1200,
				height: 630,
				alt: "Kontakt - Znami",
			},
		],
	},
	robots: {
		index: isProduction ? true : false,
		follow: isProduction ? true : false,
	},
};

export default async function Home() {
	const response = await API.caseStudies.getCaseStudies({ showOnHomePage: true });
	const caseStudies: CaseStudyResponse[] = response.data;

	return (
		<main className="bg-background">
			<HeroSectionHomePage />
			<ServicesSection />
			<CaseStudiesSection
				caseStudies={caseStudies}
				title="Zobacz nasze realizacje. Są w pytkę 😎"
			/>
			<ReviewsSection />
			<CtaSection title="Masz pomysł? Zamieńmy go w rzeczywistość!" image={CtaBgImg.src} />
		</main>
	);
}
