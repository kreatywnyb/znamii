import KnowledgeSharing from "@/ui/sections/about-us/KnowledgeSharing";
import MainSectionAboutUs from "@/ui/sections/about-us/MainSectionAboutUs";
import PhotosSectionAboutUs from "@/ui/sections/about-us/PhotosSectionAboutUs";
import TeamSectionAboutUs from "@/ui/sections/about-us/TeamSectionAboutUs";
import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionWithText from "@/ui/sections/HeroSectionWIthText";
import CtaBgImg from "@public/cta-poster-1.webp";

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
