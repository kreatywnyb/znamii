import WhiteBox from "@/ui/organisms/WhiteBox";
import React from "react";

interface CaseStudyDetailsSectionProps {
	industry: string[];
	workScope?: string[];
	year?: string;
}

const CaseStudyDetailsSection: React.FC<CaseStudyDetailsSectionProps> = ({
	industry,
	workScope,
	year,
}) => {
	return (
		<WhiteBox className="">
			<div className="container flex flex-col">
				<div className="flex flex-col justify-between border-b border-[#e3e3e3] py-8 max-md:space-y-4 md:flex-row">
					<p className="text-[1.313rem] font-medium">Branża</p>
					<p className="font-geist text-[0.75rem] uppercase">{industry?.join(" ⬝ ")}</p>
				</div>
				<div className="flex flex-col justify-between border-b border-[#e3e3e3] py-8 max-md:space-y-4 md:flex-row">
					<p className="text-[1.313rem] font-medium">Zakres wykonanych prac</p>
					<p className="font-geist text-[0.75rem] uppercase">{workScope?.join(" ⬝ ")}</p>
				</div>
				<div className="flex flex-col justify-between border-[#e3e3e3] py-8 max-md:space-y-4 md:flex-row">
					<p className="text-[1.313rem] font-medium">Rok realizacji</p>
					<p className="font-geist text-[0.75rem] uppercase">{year}</p>
				</div>
			</div>
		</WhiteBox>
	);
};

export default CaseStudyDetailsSection;
