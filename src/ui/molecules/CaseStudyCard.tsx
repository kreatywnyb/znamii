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
      className="group relative min-h-[23.75rem] flex items-center justify-center bg-cover bg-center font-medium text-white transition-all w-full h-full"
      style={{ backgroundImage: `url(${caseStudy.mainPhoto.url})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ExpandingLabel text={caseStudy.title} isHovered={isHovered} />
    </Link>
  );
};

export default CaseStudyCard;