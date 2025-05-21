import ProgressSectionCtaButton from "@/ui/organisms/ProcessSectionCtaButton";
import ProcessSectionItem from "@/ui/organisms/ProcessSectionItem";
import React from "react";

export type ProgressSectionItem = {
	title: string;
	content: string;
	list: string[];
	img: string;
};

const ProcessSection = ({ elements }: { elements: ProgressSectionItem[] }) => {
	return (
		<section className="pt-20">
			<div>
				{elements.map((item, idx) => {
					return <ProcessSectionItem key={idx} item={item} />;
				})}
			</div>
			{/* <ProcessSectionItem />
			<ProcessSectionItem />
			<ProcessSectionItem /> */}
			<ProgressSectionCtaButton />
		</section>
	);
};

export default ProcessSection;
