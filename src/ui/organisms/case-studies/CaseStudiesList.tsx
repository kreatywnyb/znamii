"use client";

import React, { useState } from "react";
import CaseStudy from "@/models/caseStudy";
import CaseStudiesFilters from "./CaseStudiesFilters";
import CaseStudyCard from "@/ui/molecules/CaseStudyCard";

interface CaseStudiesListProps {
	caseStudies: CaseStudy[];
	filters?: string[];
}

const CaseStudiesList: React.FC<CaseStudiesListProps> = ({ caseStudies, filters }) => {
	const [selectedFilter, setSelectedFilter] = useState<string>(filters?.[0] || "All");

	const filteredItems = filters
		? caseStudies.filter(
				(item) => selectedFilter === "Wszystkie" || item.category === selectedFilter,
			)
		: caseStudies;

	return (
		<div>
			{filters && filters.length > 0 && (
				<CaseStudiesFilters filters={filters} onFilterChange={setSelectedFilter} />
			)}

			<div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
				{filteredItems.map((item, index) => (
					<CaseStudyCard key={index} caseStudy={item} />
				))}
			</div>
		</div>
	);
};

export default CaseStudiesList;
