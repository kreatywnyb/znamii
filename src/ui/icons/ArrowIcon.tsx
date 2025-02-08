import React from "react";

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.54981 9.45075L9.45136 2.54919M9.45136 2.54919V9.11213M9.45136 2.54919H3.01026"
        stroke="#08080A"
      />
    </svg>
  );
};

export default ArrowIcon;
