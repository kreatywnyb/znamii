import { notFound } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/page";
import CaseStudyDetailsSection from "@/ui/sections/case-studies/CaseStudyDetailsSection";
import CaseStudyHeroSection from "@/ui/sections/case-studies/CaseStudyHeroSection";
import CtaSection from "@/ui/sections/CtaSection";
import CtaBgImg from "@public/cta-poster-3.webp";
import CaseStudyAboutSection from "@/ui/sections/case-studies/CaseStudyAboutSection";

const CaseStudyPage = async ({ params }: PageProps) => {
	// const { slug } = await params;
	// const caseStudy = await API.caseStudies.getCaseStudy(slug);

	const caseStudy = {
		industry: "IT ⬝  Marketing",
		workScope: "identyfikacja wizualna  ⬝  design strony internetowej",
		year: "2024",
		leftDescription:
			"Lorem ipsum dolor sit amet consectetur. Nibh nullam sit laoreet est quisque cursus posuere nunc",
		rigthDescription:
			"Lorem ipsum dolor sit amet consectetur. Nibh nullam sit laoreet est quisque cursus posuere nunc a. Vitae scelerisque commodo adipiscing est feugiat neque lobortis. Pretium in luctus augue cursus vehicula dapibus. Ultrices sed mauris mattis id erat sed eget amet commodo.",
		rightDescription2:
			" Quam mauris tempor sit aliquet. Vitae tortor orci natoque egestas amet feugiat tortor bibendum. Venenatis cum velit sapien justo purus placerat fermentum. Id dictumst dolor ante amet montes volutpat sed. Magna senectus massa ridiculus facilisis tristique non aliquam sed etiam.",
	};

	if (!caseStudy) return notFound();

	return (
		<main className="bg-background">
			<CaseStudyHeroSection
				title="Nazwa klienta"
				video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
			></CaseStudyHeroSection>
			<CaseStudyDetailsSection
				industry={caseStudy.industry}
				workScope={caseStudy.workScope}
				year={caseStudy.year}
			/>
			<CaseStudyAboutSection
				leftDescription={caseStudy.leftDescription}
				rightDescription={caseStudy.rigthDescription}
				rightDescription2={caseStudy.rightDescription2}
			></CaseStudyAboutSection>
			<CtaSection image={CtaBgImg.src}></CtaSection>
		</main>
	);
};

export default CaseStudyPage;
