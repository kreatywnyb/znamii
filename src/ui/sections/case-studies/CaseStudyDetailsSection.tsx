import React from "react";

interface CaseStudyDetailsSectionProps {
	industry: string;
	workScope?: string;
	year?: string;
}

const CaseStudyDetailsSection: React.FC<CaseStudyDetailsSectionProps> = ({ industry, workScope, year }) => {
	return (
		<section className="container bg-white p-16 my-8">
			<div className="flex flex-col">
				<div className="flex justify-between py-8 border-b border-[#e3e3e3]">
					<p className="text-[21px] font-medium">Branża</p>
					<p className="font-geist text-[12px]">{industry}</p>
				</div>
				<div className="flex justify-between py-8 border-b border-[#e3e3e3]">
					<p className="text-[21px] font-medium">Zakres wykonanych prac</p>
					<p className="font-geist text-[12px] uppercase">{workScope}</p>
				</div>
				<div className="flex justify-between py-8 border-[#e3e3e3]">
					<p className="text-[21px] font-medium">Rok realizacji</p>
					<p className="font-geist text-[12px] uppercase">{year}</p>
				</div>
			</div>
		</section>
	);
};

export default CaseStudyDetailsSection;
