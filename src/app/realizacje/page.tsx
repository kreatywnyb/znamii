import CaseStudiesList from "@/ui/organisms/case-studies/CaseStudiesList";
import Link from "next/link";
import HeroSectionWithText from "@/ui/sections/HeroSectionWIthText";
import WhiteBox from "@/ui/organisms/WhiteBox";
import { links } from "@/constants";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import API from "@/API";
import { Metadata } from "next";

const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

export const metadata: Metadata = {
	title: "Realizacje ▪ Znami Studio",
	description:
		"Znami to studio kreatywne, które stworzy dla Ciebie kompleksowy branding, sesje foto i wideo - profesjonalnie, na czas i w dobrej cenie! ",
	// keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "Realizacje ▪ Znami Studio",
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
		index: isProduction ? true : false,
		follow: isProduction ? true : false,
	},
};

export const revalidate = 300;

export default async function CaseStudiesPage() {
	const response = await API.caseStudies.getCaseStudies();
	const caseStudies: CaseStudyResponse[] = response.data;

	const filters: string[] = ["Wszystko", "Branding", "Video", "Zdjęcia"];

	return (
		<main className="bg-background">
			<HeroSectionWithText headingText="Fachuuura! W sensie nasze portfolio 👀" />
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
