import API from "@/API";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import CtaSection from "@/ui/sections/CtaSection";
import FAQSection from "@/ui/sections/FAQSection";
import SmallCaseStudiesSection from "@/ui/sections/case-studies/SmallCaseStudiesSection";
import HeroSectionServicesPage from "@/ui/sections/services/HeroSectionServicesPage";
import ServiceSection from "@/ui/sections/services/ServiceSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import authoImg from "@public/grzegorz-mikula.webp";
import React from "react";

const BrandingPage = async () => {
	const response = await API.caseStudies.getCaseStudies({
		showOnServicePage: true,
		category: "branding",
	});
	const caseStudies: CaseStudyResponse[] = response.data;

	return (
		<main className="bg-background">
			<HeroSectionServicesPage />
			<ServiceSection
				name="Branding"
				headingTwo="Dobry branding jest jak ubranie. Powinien nie tylko dobrze się prezentować,
                        ale także być funkcjonalny i odzwierciedlać charakter osoby, która go nosi."
				paragraph="Tak jak dobrze dobrany outfit sprawia, że czujesz się pewnie, tak odpowiednio zaprojektowany branding marki przyciąga uwagę i buduje zaufanie. Z nami stworzysz identyfikację wizualną i materiały graficzne, które będą idealnie pasować do Twojego biznesu, przekazywać jego wartości i przyciągać klientów szczerym przekazem."
				opinion={{
					author: "Grzegorz Mikuła",
					authorImg: authoImg,
					company: "hifood",
					text: "Jeżeli nasi klienci pytają, kto Wam projektował grafikę, bo jest genialna - to chyba najlepsza rekomendacja Nie wyobrażamy sobie współpracować z nikim innym.",
				}}
			/>
			<SmallCaseStudiesSection caseStudies={caseStudies} title="Pa tu, jakie fajne przykłady!" />
			<FAQSection />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
};

export default BrandingPage;
