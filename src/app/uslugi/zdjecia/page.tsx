import CtaSection from "@/ui/sections/CtaSection";
import HeroSectionServicesPage from "@/ui/sections/services/HeroSectionServicesPage";
import ServiceSection from "@/ui/sections/services/ServiceSection";
import React from "react";
import authorImg from "@public/krzysztof-winiarski.webp";
import CtaBgImg from "@public/cta-poster-1.webp";
import API from "@/API";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import SmallCaseStudiesSection from "@/ui/sections/case-studies/SmallCaseStudiesSection";
import FAQSection from "@/ui/sections/FAQSection";

const FotoPage = async () => {
	const response = await API.caseStudies.getCaseStudies({
		showOnServicePage: true,
		category: "branding",
	});
	const caseStudies: CaseStudyResponse[] = response.data;

	return (
		<main className="bg-background">
			<HeroSectionServicesPage />
			<ServiceSection
				name="Zdjęcia"
				headingTwo="Profesjonalna sesja zdjęciowa dla biznesu to inwestycja, która przynosi wiele korzyści i potrafi szybko się zwrócić."
				paragraph="Nie ważne czy potrzebujesz zdjęć biznesowych na stronę www, LinkedIn czy na Instagram czy zakładasz biznes i potrzebujesz udokumentować swoje usługi lub produkty. A może organizujesz konferencję czy inny event i potrzebujesz materiału marketingowego do sprzedaży kolejnych edycji - z tym wszystkim Ci pomożemy!"
				opinion={{
					author: "Krzysztof Pitera",
					authorImg: authorImg,
					company: "klient",
					text: "Wszystko poszło sprawnie, atmosfera była na luzie, a zdjęcia wyszły świetnie. Widać, że pełen profesjonalizm, ale bez sztywności. Na pewno jeszcze wrócę!",
				}}
			/>
			<SmallCaseStudiesSection caseStudies={caseStudies} title="Pa tu, jakie fajne przykłady!" />
			<FAQSection />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
};

export default FotoPage;
