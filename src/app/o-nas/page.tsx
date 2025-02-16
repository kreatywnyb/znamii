import MainSectionAboutUs from "@/ui/sections/about-us/MainSectionAboutUs";
import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionWithText from "@/ui/sections/HeroSectionWIthText";
import CtaBgImg from "@public/cta-poster-1.webp";

export default function AboutUsPage() {
	return (
		<main className="bg-background">
			<HeroSectionWithText headingText={"Cześć! Czy to twój kasztan? 😏"} />
			<MainSectionAboutUs />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
}
