import CaseStudiesList from "@/ui/organisms/case-studies/CaseStudiesList";
import Link from "next/link";
import HeroSectionWithText from "@/ui/sections/HeroSectionWIthText";
import WhiteBox from "@/ui/organisms/WhiteBox";
import { links } from "@/constants";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import API from "@/API";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Realizacje ▪ Znami Studio",
	// description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
	// keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "Realizacje ▪ Znami Studio",
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

export const revalidate = 30;

export default async function CaseStudiesPage() {
	const response = await API.caseStudies.getCaseStudies();
	const caseStudies: CaseStudyResponse[] = response.data;

	const filters: string[] = ["Wszystko", "Branding", "Video", "Zdjęcia"];

	return (
		<main className="bg-background">
			<HeroSectionWithText headingText="Fachuuura! W sensie nasze portfolio" />
			<WhiteBox className="relative z-10 mb-[30rem] [&>div]:-mt-64">
				<div className="container">
					<CaseStudiesList caseStudies={caseStudies} filters={filters} />
					<p className="mt-16 text-[1.313rem]">
						+ Wiele, wiele więcej. Dlatego jeśli nie znalazłeś tego czego szukasz -{" "}
						<Link href={links.contactPage} className="underline">
							odezwij się do nas!
						</Link>
					</p>
				</div>
			</WhiteBox>
		</main>
	);
}
