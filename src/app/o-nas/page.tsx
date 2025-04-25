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
	// description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
	// keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "O nas ▪ Znami Studio",
		// description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
		type: "website",
		// url: "https://twojastrona.pl/kontakt",
		// images: [
		// 	{
		// 		url: "https://twojastrona.pl/img/og-contact.jpg",
		// 		width: 1200,
		// 		height: 630,
		// 		alt: "Kontakt - Nazwa Twojej Firmy",
		// 	},
		// ],
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
