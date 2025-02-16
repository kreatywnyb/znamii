import case1 from "@public/case-1.webp";
import case2 from "@public/case-2.webp";
import case3 from "@public/case-3.webp";
import case4 from "@public/case-4.webp";
import case5 from "@public/case-5.webp";
import case6 from "@public/case-6.webp";

import CaseStudy from "@/models/caseStudy";
import CaseStudiesList from "@/ui/organisms/case-studies/CaseStudiesList";
import Link from "next/link";

export default function Home() {
	const caseStudies: CaseStudy[] = [
        { name: "Pienińska przystań", image: case1.src, cols: 2, category: "Zdjęcia", slug: "pieninska-przystan" },
        { name: "PRO100", image: case2.src, cols: 1, category: "Zdjęcia", slug: "pro100" },
        { name: "AW-Sport", image: case3.src, cols: 1, category: "Branding", slug: "aw-sport" },
        { name: "The Big Thing", image: case4.src, cols: 2, category: "Branding", slug: "the-big-thing" },
        { name: "Future Mind", image: case5.src, cols: 2, category: "Video", slug: "future-mind" },
        { name: "ONDE", image: case6.src, cols: 1, category: "Video", slug: "onde" },
        
	];

	const filters: string[] = ["All", "Branding", "Video", "Zdjęcia"];

	return (
		<main className="bg-background">
			<section className="pb-96 pt-20 bg-basicDark">
				<div className="container ">
					<h1 className="text-white text-[58px]">Fachuuura! W sensie nasze portfolio</h1>
				</div>
			</section>
			<section className="container max-w-[1700px] relative z-10 mb-[30rem] -mt-64 bg-white px-20 py-20">
				<CaseStudiesList caseStudies={caseStudies} filters={filters} />
                <p className="text-[21px] mt-16">+ Wiele, wiele więcej. Dlatego jeśli nie znalazłeś tego czego szukasz - <Link href={""}>odezwij się do nas!</Link></p>
			</section>
		</main>
	);
}
