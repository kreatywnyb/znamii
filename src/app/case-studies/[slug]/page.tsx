import API from "@/API";
import { notFound } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/page";
import CaseStudyDetailsSection from "@/ui/sections/case-studies/CaseStudyDetailsSection";
import CaseStudyHeroSection from "@/ui/sections/case-studies/CaseStudyHeroSection";

const CaseStudyPage = async ({ params }: PageProps) => {
	// const { slug } = await params;
	// const caseStudy = await API.caseStudies.getCaseStudy(slug);

	const caseStudy = {
		industry: "IT ⬝  Marketing",
		workScope: "identyfikacja wizualna  ⬝  design strony internetowej",
		year: "2024",
	};

	if (!caseStudy) return notFound();

	return (
		<main className="bg-background">
			<CaseStudyHeroSection
				title="Nazwa klienta"
				video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			/>
			<CaseStudyDetailsSection
				industry={caseStudy.industry}
				workScope={caseStudy.workScope}
				year={caseStudy.year}
			/>
		</main>
	);
};

export default CaseStudyPage;
