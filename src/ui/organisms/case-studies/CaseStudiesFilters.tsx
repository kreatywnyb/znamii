"use client";

import React, { useState } from "react";

interface CaseStudiesFiltersProps {
  filters: string[];
  onFilterChange: (filter: string) => void;
}

const CaseStudiesFilters: React.FC<CaseStudiesFiltersProps> = ({ filters, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(filters[0]);

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="mb-8 flex gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 border ${
            selectedFilter === filter ? "bg-black text-white" : "border-black text-black"
          } transition`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default CaseStudiesFilters;
