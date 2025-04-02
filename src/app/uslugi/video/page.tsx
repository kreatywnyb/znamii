import API from "@/API";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import SmallCaseStudiesSection from "@/ui/sections/case-studies/SmallCaseStudiesSection";
import CtaSection from "@/ui/sections/CtaSection";
import FAQSection from "@/ui/sections/FAQSection";
import HeroSectionServicesPage from "@/ui/sections/services/HeroSectionServicesPage";
import ProcessSection from "@/ui/sections/services/ProcessSection";
import ServiceSection from "@/ui/sections/services/ServiceSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import authorImg from "@public/kamil-pormbinski.webp";

const VideoPage = async () => {
	const response = await API.caseStudies.getCaseStudies({
		showOnServicePage: true,
		category: "video",
	});
	const caseStudies: CaseStudyResponse[] = response.data;

	return (
		<main className="bg-background">
			<HeroSectionServicesPage />
			<ServiceSection
				name="Video"
				headingTwo="Sprawdź jak pomogliśmy innym markom przekształć pomysły w rzeczywistość
				Sprawdź jak pomogliśmy innym markom przekształć."
				paragraph="This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me. Tutaj jakaś ckliwa historia jak pomogliśmy innym markom przekształcić. This team knows their stuff. I'm grateful for their."
				opinion={{
					author: "Kamil Porembiński",
					authorImg: authorImg,
					company: "podcast spod wody",
					text: "Paweł i jego ekipa to idealny wybór jeżeli szukasz realizacji związanych z wideo.Zawsze pomocni, mega merytoryczni i kreatywni! Polecam :)",
				}}
			/>
			<ProcessSection />
			<SmallCaseStudiesSection caseStudies={caseStudies} title="Pa tu, jakie fajne przykłady!" />
			<FAQSection />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
};

export default VideoPage;
