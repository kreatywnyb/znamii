import CaseStudyDetailsSection from "@/ui/sections/case-studies/CaseStudyDetailsSection";
import CaseStudyHeroSection from "@/ui/sections/case-studies/CaseStudyHeroSection";
import CtaSection from "@/ui/sections/CtaSection";
import CtaBgImg from "@public/cta-poster-3.webp";
import CaseStudyAboutSection from "@/ui/sections/case-studies/CaseStudyAboutSection";
import API from "@/API";
import { PageProps } from "../../../../.next/types/app/page";

export const revalidate = 30;

export async function generateStaticParams() {
	const response = await API.caseStudies.getCaseStudies();
	const caseStudies = response.data;

	return caseStudies.map((caseStudy) => ({
		slug: caseStudy.slug,
	}));
}

const CaseStudyPage = async ({ params }: PageProps) => {
	const { slug } = await params;
	const response = await API.caseStudies.getCaseStudy(slug);
	const caseStudy = response.data[0].caseStudyData;

	return (
		<main className="border-t border-darkGrey bg-background">
			<CaseStudyHeroSection
				title={caseStudy.company}
				video={caseStudy.mainVideo.url}
			></CaseStudyHeroSection>
			<CaseStudyDetailsSection
				industry={caseStudy.industryArray}
				workScope={caseStudy.scopeArray}
				year={caseStudy.year}
			/>
			<CaseStudyAboutSection
				leftDescription={caseStudy.descriptionLeft}
				rightDescription={caseStudy.descriptionRight}
				photos={caseStudy.gallery}
				videos={caseStudy.videos}
			></CaseStudyAboutSection>
			<CtaSection image={CtaBgImg.src}></CtaSection>
		</main>
	);
};

export default CaseStudyPage;
