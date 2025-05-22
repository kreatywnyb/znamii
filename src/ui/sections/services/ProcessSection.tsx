import { FlipWords } from "@/ui/molecules/FlipWords";
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
			<div className="container mb-16">
				<FlipWords
					word="Jasny proces to najlesze rezultaty ✌️"
					className="mb-4 mt-8 text-left text-4xl font-medium text-basicDark"
				></FlipWords>
			</div>
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
