import case1 from "@public/case-1.webp";
import case2 from "@public/case-2.webp";
import case3 from "@public/case-3.webp";
import case4 from "@public/case-4.webp";
import case5 from "@public/case-5.webp";
import case6 from "@public/case-6.webp";

import CaseStudy from "@/models/caseStudy";
import CaseStudiesList from "@/ui/organisms/case-studies/CaseStudiesList";
import Link from "next/link";
import HeroSectionWithText from "@/ui/sections/HeroSectionWIthText";
import WhiteBox from "@/ui/organisms/WhiteBox";

export default function Home() {
	const caseStudies: CaseStudy[] = [
		{
			name: "Pienińska przystań",
			image: case1.src,
			cols: 2,
			category: "Zdjęcia",
			slug: "pieninska-przystan",
		},
		{ name: "PRO100", image: case2.src, cols: 1, category: "Zdjęcia", slug: "pro100" },
		{ name: "AW-Sport", image: case3.src, cols: 1, category: "Branding", slug: "aw-sport" },
		{
			name: "The Big Thing",
			image: case4.src,
			cols: 2,
			category: "Branding",
			slug: "the-big-thing",
		},
		{ name: "Future Mind", image: case5.src, cols: 2, category: "Video", slug: "future-mind" },
		{ name: "ONDE", image: case6.src, cols: 1, category: "Video", slug: "onde" },
	];

	const filters: string[] = ["All", "Branding", "Video", "Zdjęcia"];

	return (
		<main className="bg-background">
			<HeroSectionWithText headingText="Fachuuura! W sensie nasze portfolio" />
			{/* <section className="container relative z-10 -mt-64 mb-[30rem] max-w-[1700px] bg-white px-20 py-20"> */}
			<WhiteBox className="relative z-10 mb-[30rem] [&>div]:-mt-64">
				<div className="container">
					<CaseStudiesList caseStudies={caseStudies} filters={filters} />
					<p className="mt-16 text-[1.313rem]">
						+ Wiele, wiele więcej. Dlatego jeśli nie znalazłeś tego czego szukasz -{" "}
						<Link href={""}>odezwij się do nas!</Link>
					</p>
				</div>
			</WhiteBox>
			{/* </section> */}
		</main>
	);
}
