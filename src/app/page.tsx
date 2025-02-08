import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionHomePage from "@/ui/sections/HeroSectionHomePage";
import ServicesSection from "@/ui/sections/ServicesSection";
import CtaBgImg from "@public/cta-poster-1.webp"
import PortfolioSection from '../ui/sections/PortfolioSection';
import ReviewsSection from "@/ui/sections/ReviewsSection";


export default function Home() {
  return (
    <main className="bg-background">
      <HeroSectionHomePage />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <CtaSection image={CtaBgImg.src}/>
    </main>
  );
}
