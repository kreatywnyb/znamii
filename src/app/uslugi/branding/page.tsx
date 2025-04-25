import API from "@/API";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import CtaSection from "@/ui/sections/CtaSection";
import FAQSection from "@/ui/sections/FAQSection";
import SmallCaseStudiesSection from "@/ui/sections/case-studies/SmallCaseStudiesSection";
import HeroSectionServicesPage from "@/ui/sections/services/HeroSectionServicesPage";
import ServiceSection from "@/ui/sections/services/ServiceSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import authoImg from "@public/grzegorz-mikula.webp";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Branding ▪ Znami Studio",
	// description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
	// keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "Branding ▪ Znami Studio",
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
