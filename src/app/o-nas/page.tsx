import KnowledgeSharing from "@/ui/sections/about-us/KnowledgeSharing";
import MainSectionAboutUs from "@/ui/sections/about-us/MainSectionAboutUs";
import PhotosSectionAboutUs from "@/ui/sections/about-us/PhotosSectionAboutUs";
import TeamSectionAboutUs from "@/ui/sections/about-us/TeamSectionAboutUs";
import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionWithText from "@/ui/sections/HeroSectionWIthText";
import CtaBgImg from "@public/cta-poster-1.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "O nas ▪ Znami Studio",
	description:
		"Znami to studio kreatywne, które stworzy dla Ciebie kompleksowy branding, sesje foto i wideo - profesjonalnie, na czas i w dobrej cenie! ",
	// keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "O nas ▪ Znami Studio",
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
		// index: true,
		// follow: true,
	},
};

export default function AboutUsPage() {
	return (
		<main className="bg-background">
			<HeroSectionWithText headingText={"Cześć! Czy to twój kasztan? 😏"} />
			<MainSectionAboutUs />
			<div className="overflow-hidden">
				<PhotosSectionAboutUs />
				<TeamSectionAboutUs />
				<KnowledgeSharing />
			</div>
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
}
