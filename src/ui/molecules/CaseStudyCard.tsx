import { useState } from "react";
import Link from "next/link";
import ExpandingLabel from "@/ui/molecules/ExpandingLabel";
import { links } from "@/constants";
import { CaseStudyResponse } from "@/API/models/caseStudies";

interface CaseStudyCardProps {
	caseStudy: CaseStudyResponse;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href={`${links.portfolio}/${caseStudy.slug}`}
			className="group relative flex h-full min-h-[23.75rem] w-full items-center justify-center overflow-hidden bg-cover bg-center font-medium text-white transition-all"
			// style={{ backgroundImage: `url(${caseStudy.mainPhoto.url})` }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				style={{ backgroundImage: `url(${caseStudy.mainPhoto.url})` }}
				className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
			/>
			<ExpandingLabel text={caseStudy.title} isHovered={isHovered} />
		</Link>
	);
};

export default CaseStudyCard;
