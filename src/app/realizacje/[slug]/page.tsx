import API from "@/API";
import CaseStudyAboutSection from "@/ui/sections/case-studies/CaseStudyAboutSection";
import CaseStudyDetailsSection from "@/ui/sections/case-studies/CaseStudyDetailsSection";
import CaseStudyHeroSection from "@/ui/sections/case-studies/CaseStudyHeroSection";
import CtaSection from "@/ui/sections/CtaSection";
import CtaBgImg from "@public/cta-poster-3.webp";
import { Metadata } from "next";

export const revalidate = 30;

export async function generateStaticParams() {
	const response = await API.caseStudies.getCaseStudies();
	const caseStudies = response.data;

	return caseStudies.map((caseStudy) => ({
		slug: caseStudy.slug,
	}));
}

export async function generateMetadata(
	{ params }: { params: Promise<{ slug: string }> },
	// parent: ResolvingMetadata,
): Promise<Metadata> {
	try {
		const { slug } = await params;
		const response = await API.caseStudies.getCaseStudy(slug);
		const caseStudy = response.data[0].caseStudyData;

		// Utwórz opis z fragmentów opisu case study lub użyj domyślnego
		let description = "";
		if (caseStudy.descriptionLeft) {
			// Pobierz pierwsze 160 znaków opisu
			description = caseStudy.descriptionLeft.substring(0, 160);
			if (description.length === 160) description += "...";
		} else {
			description = `Realizacja dla firmy ${caseStudy.company}. Zakres prac: ${caseStudy.scopeArray.join(", ")}.`;
		}

		const keywords = [
			caseStudy.company,
			...caseStudy.industryArray,
			...caseStudy.scopeArray,
			"realizacja",
			"case study",
			"Znami Studio",
		];

		return {
			title: `${caseStudy.company} ▪ Znami Studio`,
			description: description,
			keywords: keywords.join(", "),
			openGraph: {
				title: `${caseStudy.company} ▪ Znami Studio`,
				description: description,
				type: "article",
				publishedTime: caseStudy.year ? `${caseStudy.year}-01-01T00:00:00Z` : undefined,
				// images: [
				// 	{
				// 		url: caseStudy.mainPhoto?.url || previousImages[0]?.url || "",
				// 		width: 1200,
				// 		height: 630,
				// 		alt: `Realizacja dla ${caseStudy.company}`,
				// 	},
				// ],
				siteName: "Znami Studio",
				locale: "pl_PL",
				images: [
					{
						url: "https://api.znami.usermd.net/wp-content/uploads/2025/05/og-image.png",
						width: 1200,
						height: 630,
						alt: "Kontakt - Znami",
					},
				],
			},
			//   twitter: {
			//     card: 'summary_large_image',
			//     title: `${caseStudy.company} - Case Study | Znami Studio`,
			//     description: description,
			//     images: [caseStudy.mainPhoto?.url || previousImages[0]?.url || ''],
			//   },
			// alternates: {
			// 	canonical: `https://znamii.vercel.app/realizacje/${params.slug}`,
			// },
			//   robots: {
			//     index: true,
			//     follow: true,
			//   }
		};
	} catch (err) {
		console.log(err);
	}

	return {
		title: "Znami Studio",
	};
}

const CaseStudyPage = async (props: { params: Promise<{ slug: string }> }) => {
	const params = await props.params;
	const response = await API.caseStudies.getCaseStudy(params.slug);

	if (!response) return <div>Coś poszło nie tak</div>;

	const caseStudy = response.data[0].caseStudyData;

	return (
		<main className="border-t border-darkGrey bg-background">
			<CaseStudyHeroSection
				title={caseStudy?.company}
				video={caseStudy?.mainVideo?.url}
				image={caseStudy?.mainPhoto.url}
			></CaseStudyHeroSection>
			<CaseStudyDetailsSection
				industry={caseStudy?.industryArray}
				workScope={caseStudy?.scopeArray}
				year={caseStudy?.year}
			/>
			<CaseStudyAboutSection
				leftDescription={caseStudy?.descriptionLeft}
				rightDescription={caseStudy?.descriptionRight}
				media={caseStudy?.media}
				doubleImageSectionsIndexes={caseStudy?.doubleImageSectionsIndexes}
			></CaseStudyAboutSection>
			<CtaSection image={CtaBgImg?.src}></CtaSection>
		</main>
	);
};

export default CaseStudyPage;
