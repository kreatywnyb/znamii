import { useState } from "react";
import Link from "next/link";
import ExpandingLabel from "@/ui/molecules/ExpandingLabel";
import CaseStudy from "@/models/caseStudy";
import { links } from "@/constants";

interface CaseStudyCardProps {
	caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href={`${links.portfolio}/${caseStudy.slug}`}
			className={`
				${caseStudy.cols === 2 ? "md:col-span-2" : "md:col-span-1"} 
				group relative min-h-[23.75rem] flex items-center justify-center bg-cover bg-center font-medium text-white transition-all
			`}
			style={{ backgroundImage: `url(${caseStudy.image})` }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<ExpandingLabel text={caseStudy.name} isHovered={isHovered} />
		</Link>
	);
};

export default CaseStudyCard;