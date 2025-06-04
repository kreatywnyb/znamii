// import API from "@/API";
// import CaseStudyAboutSection from "@/ui/sections/case-studies/CaseStudyAboutSection";
// import CaseStudyDetailsSection from "@/ui/sections/case-studies/CaseStudyDetailsSection";
// import CaseStudyHeroSection from "@/ui/sections/case-studies/CaseStudyHeroSection";
// import CtaSection from "@/ui/sections/CtaSection";
// import CtaBgImg from "@public/cta-poster-1.webp";
// import { Metadata } from "next";
// import { notFound } from "next/navigation";

// export const revalidate = 30;

// export async function generateStaticParams() {
// 	try {
// 		const response = await API.caseStudies.getCaseStudies();
// 		const caseStudies = response.data;

// 		return caseStudies.map((caseStudy) => ({
// 			slug: caseStudy.slug,
// 		}));
// 	} catch (error) {
// 		console.error("Error generating static params:", error);
// 		return [];
// 	}
// }

// export async function generateMetadata(
// 	{ params }: { params: Promise<{ slug: string }> },
// 	// parent: ResolvingMetadata,
// ): Promise<Metadata> {
// 	try {
// 		const { slug } = await params;
// 		const response = await API.caseStudies.getCaseStudy(slug);

// 		// Check if response exists and has data
// 		if (!response || !response.data || response.data.length === 0) {
// 			return {
// 				title: "Case Study Not Found - Znami Studio",
// 				description: "The requested case study could not be found.",
// 			};
// 		}

// 		const caseStudy = response.data[0]?.caseStudyData;

// 		// Check if caseStudyData exists
// 		if (!caseStudy) {
// 			return {
// 				title: "Case Study Not Found - Znami Studio",
// 				description: "The requested case study could not be found.",
// 			};
// 		}

// 		// Create description from case study fragments or use default
// 		let description = "";
// 		if (caseStudy.descriptionLeft) {
// 			// Get first 160 characters of description
// 			description = caseStudy.descriptionLeft.substring(0, 160);
// 			if (description.length === 160) description += "...";
// 		} else {
// 			description = `Realizacja dla firmy ${caseStudy.company}. Zakres prac: ${caseStudy.scopeArray?.join(", ") || ""}. `;
// 		}

// 		const keywords = [
// 			caseStudy.company,
// 			...(caseStudy.industryArray || []),
// 			...(caseStudy.scopeArray || []),
// 			"realizacja",
// 			"case study",
// 			"Znami Studio",
// 		];

// 		return {
// 			title: `${caseStudy.company} ▪ Znami Studio`,
// 			description: description,
// 			keywords: keywords.join(", "),
// 			openGraph: {
// 				title: `${caseStudy.company} ▪ Znami Studio`,
// 				description: description,
// 				type: "article",
// 				publishedTime: caseStudy.year ? `${caseStudy.year}-01-01T00:00:00Z` : undefined,
// 				// images: [
// 				// 	{
// 				// 		url: caseStudy.mainPhoto?.url || previousImages[0]?.url || "",
// 				// 		width: 1200,
// 				// 		height: 630,
// 				// 		alt: `Realizacja dla ${caseStudy.company}`,
// 				// 	},
// 				// ],
// 				siteName: "Znami Studio",
// 				locale: "pl_PL",
// 				images: [
// 					{
// 						url: "https://api.znami.usermd.net/wp-content/uploads/2025/05/og-image.png",
// 						width: 1200,
// 						height: 630,
// 						alt: "Kontakt - Znami",
// 					},
// 				],
// 			},
// 			//   twitter: {
// 			//     card: 'summary_large_image',
// 			//     title: `${caseStudy.company} - Case Study | Znami Studio`,
// 			//     description: description,
// 			//     images: [caseStudy.mainPhoto?.url || previousImages[0]?.url || ''],
// 			//   },
// 			// alternates: {
// 			// 	canonical: `https://znamii.vercel.app/realizacje/${params.slug}`,
// 			// },
// 			//   robots: {
// 			//     index: true,
// 			//     follow: true,
// 			//   }
// 		};
// 	} catch (err) {
// 		console.error("Error generating metadata:", err);
// 		return {
// 			title: "Case Study Not Found - Znami Studio",
// 			description: "The requested case study could not be found.",
// 		};
// 	}
// }

// const CaseStudyPage = async (props: { params: Promise<{ slug: string }> }) => {
// 	const params = await props.params;

// 	try {
// 		const response = await API.caseStudies.getCaseStudy(params.slug);

// 		// Check if response exists and has data
// 		if (!response || !response.data || response.data.length === 0) {
// 			notFound();
// 		}

// 		const caseStudyData = response.data[0]?.caseStudyData;

// 		// Check if caseStudyData exists
// 		if (!caseStudyData) {
// 			notFound();
// 		}

// 		return (
// 			<main className="border-t border-darkGrey bg-background">
// 				<CaseStudyHeroSection
// 					title={caseStudyData?.company}
// 					video={caseStudyData?.mainVideo?.url}
// 					image={caseStudyData?.mainPhoto?.url}
// 				></CaseStudyHeroSection>
// 				<CaseStudyDetailsSection
// 					industry={caseStudyData?.industryArray || []}
// 					workScope={caseStudyData?.scopeArray || []}
// 					year={caseStudyData?.year}
// 				/>
// 				<CaseStudyAboutSection
// 					leftDescription={caseStudyData?.descriptionLeft}
// 					rightDescription={caseStudyData?.descriptionRight}
// 					media={caseStudyData?.media || []}
// 					doubleImageSectionsIndexes={caseStudyData?.doubleImageSectionsIndexes || []}
// 				></CaseStudyAboutSection>
// 				<CtaSection image={CtaBgImg?.src}></CtaSection>
// 			</main>
// 		);
// 	} catch (error) {
// 		console.error("Error fetching case study:", error);
// 		notFound();
// 	}
// };

// export default CaseStudyPage;

import API from "@/API";
import CaseStudyAboutSection from "@/ui/sections/case-studies/CaseStudyAboutSection";
import CaseStudyDetailsSection from "@/ui/sections/case-studies/CaseStudyDetailsSection";
import CaseStudyHeroSection from "@/ui/sections/case-studies/CaseStudyHeroSection";
import CtaSection from "@/ui/sections/CtaSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 300;

export async function generateStaticParams() {
	try {
		const response = await API.caseStudies.getCaseStudies();
		const caseStudies = response.data;

		return caseStudies.map((caseStudy) => ({
			slug: caseStudy.slug,
		}));
	} catch (error) {
		console.error("Error generating static params:", error);
		return [];
	}
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	try {
		const response = await API.caseStudies.getCaseStudy(params.slug);

		if (!response || !response.data || response.data.length === 0) {
			return {
				title: "Case Study Not Found - Znami Studio",
				description: "The requested case study could not be found.",
			};
		}

		const caseStudy = response.data[0]?.caseStudyData;

		if (!caseStudy) {
			return {
				title: "Case Study Not Found - Znami Studio",
				description: "The requested case study could not be found.",
			};
		}

		let description = "";
		if (caseStudy.descriptionLeft) {
			description = caseStudy.descriptionLeft.substring(0, 160);
			if (description.length === 160) description += "...";
		} else {
			description = `Realizacja dla firmy ${caseStudy.company}. Zakres prac: ${caseStudy.scopeArray?.join(", ") || ""}.`;
		}

		const keywords = [
			caseStudy.company,
			...(caseStudy.industryArray || []),
			...(caseStudy.scopeArray || []),
			"realizacja",
			"case study",
			"Znami Studio",
		];

		return {
			title: `${caseStudy.company} ▪ Znami Studio`,
			description,
			keywords: keywords.join(", "),
			openGraph: {
				title: `${caseStudy.company} ▪ Znami Studio`,
				description,
				type: "article",
				publishedTime: caseStudy.year ? `${caseStudy.year}-01-01T00:00:00Z` : undefined,
				siteName: "Znami Studio",
				locale: "pl_PL",
				images: [
					{
						url: "https://api.znami.usermd.net/wp-content/uploads/2025/05/og-image.png",
						width: 1200,
						height: 630,
						alt: `Realizacja dla ${caseStudy.company}`,
					},
				],
			},
		};
	} catch (err) {
		console.error("Error generating metadata:", err);
		return {
			title: "Case Study Not Found - Znami Studio",
			description: "The requested case study could not be found.",
		};
	}
}

const CaseStudyPage = async ({ params }: { params: { slug: string } }) => {
	try {
		const response = await API.caseStudies.getCaseStudy(params.slug);

		if (!response || !response.data || response.data.length === 0) {
			notFound();
		}

		const caseStudyData = response.data[0]?.caseStudyData;

		if (!caseStudyData) {
			notFound();
		}

		return (
			<main className="border-t border-darkGrey bg-background">
				<CaseStudyHeroSection
					title={caseStudyData?.company}
					video={caseStudyData?.mainVideo?.url}
					image={caseStudyData?.mainPhoto?.url}
				/>
				<CaseStudyDetailsSection
					industry={caseStudyData?.industryArray || []}
					workScope={caseStudyData?.scopeArray || []}
					year={caseStudyData?.year}
				/>
				<CaseStudyAboutSection
					leftDescription={caseStudyData?.descriptionLeft}
					rightDescription={caseStudyData?.descriptionRight}
					media={caseStudyData?.media || []}
					doubleImageSectionsIndexes={caseStudyData?.doubleImageSectionsIndexes || []}
				/>
				<CtaSection image={CtaBgImg?.src} />
			</main>
		);
	} catch (error) {
		console.error("Error fetching case study:", error);
		notFound();
	}
};

export default CaseStudyPage;
