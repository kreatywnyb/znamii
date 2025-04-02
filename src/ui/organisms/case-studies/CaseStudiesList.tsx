"use client";

import React, { useState } from "react";
import CaseStudiesFilters from "./CaseStudiesFilters";
import CaseStudyCard from "@/ui/molecules/CaseStudyCard";
import { CaseStudyResponse } from "@/API/models/caseStudies";

interface CaseStudiesListProps {
  caseStudies: CaseStudyResponse[];
  filters?: string[];
}

const CaseStudiesList: React.FC<CaseStudiesListProps> = ({ caseStudies, filters }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(filters?.[0] || "All");

  const filteredItems = filters
    ? caseStudies.filter((item) => selectedFilter === "All" || item.category.some(x => x.name === selectedFilter))
    : caseStudies;

  const getSpanClass = (index: number) => {
    const rowPosition = Math.floor(index / 2);
    const isEvenRow = rowPosition % 2 === 0;
    const isFirstInRow = index % 2 === 0;
    
    // For even rows (0, 2, 4...): first card is 2-col wide, second is 1-col wide
    // For odd rows (1, 3, 5...): first card is 1-col wide, second is 2-col wide
    if ((isEvenRow && isFirstInRow) || (!isEvenRow && !isFirstInRow)) {
      return "md:col-span-2";
    } else {
      return "md:col-span-1";
    }
  };

  return (
    <div>
      {filters && filters.length > 0 && (
        <CaseStudiesFilters filters={filters} onFilterChange={setSelectedFilter} />
      )}

      <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {filteredItems.map((item, index) => (
          <div key={index} className={getSpanClass(index)}>
            <CaseStudyCard caseStudy={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesList;