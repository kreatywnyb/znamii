import ProgressSectionCtaButton from "@/ui/organisms/ProcessSectionCtaButton";
import ProcessSectionItem from "@/ui/organisms/ProcessSectionItem";
import React from "react";

const ProcessSection = () => {
	return (
		<section className="pt-20">
			<ProcessSectionItem />
			<ProcessSectionItem />
			<ProcessSectionItem />
			<ProcessSectionItem />
			<ProgressSectionCtaButton />
		</section>
	);
};

export default ProcessSection;
