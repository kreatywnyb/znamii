"use client";

import React, { useState } from "react";
import CaseStudy from "@/models/caseStudy";
import CaseStudiesFilters from "./CaseStudiesFilters";
import Link from "next/link";

interface CaseStudiesListProps {
	caseStudies: CaseStudy[];
	filters?: string[];
}

const CaseStudiesList: React.FC<CaseStudiesListProps> = ({ caseStudies, filters }) => {
	const [selectedFilter, setSelectedFilter] = useState<string>(filters?.[0] || "All");

	const filteredItems = filters
		? caseStudies.filter((item) => selectedFilter === "All" || item.category === selectedFilter)
		: caseStudies;

	return (
		<div>
			{filters && filters.length > 0 && (
				<CaseStudiesFilters filters={filters} onFilterChange={setSelectedFilter} />
			)}

			<div className="mt-12 grid w-full grid-cols-3 gap-4">
				{filteredItems.map((item, index) => (
					<Link
						href={`realizacje/${item.slug}`}
						key={index}
						className={`${
							item.cols === 2 ? "col-span-2" : "col-span-1"
						} group relative flex h-[380px] items-center justify-center bg-cover bg-center text-2xl font-bold text-white`}
						style={{ backgroundImage: `url(${item.image})` }}
					>
						<div className="absolute bottom-4 left-4 h-4 w-4 bg-white">
							<div className="w-fit -translate-y-8 translate-x-4 whitespace-nowrap border border-white bg-black p-4 text-white opacity-0 transition group-hover:-translate-y-16 group-hover:opacity-100">
								{item.name}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CaseStudiesList;
