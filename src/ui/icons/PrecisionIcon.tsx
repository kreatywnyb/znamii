import React from "react";

const PrecisionIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.4959 29.846C21.7187 29.5821 15.4855 23.1851 15.4855 15.3441C15.4855 7.50312 21.7187 1.10613 29.4959 0.842212V29.846Z"
        stroke="white"
      />
      <path
        d="M0.498745 0.841866C8.27596 1.10578 14.5091 7.50277 14.5091 15.3438C14.5091 23.1847 8.27596 29.5817 0.498745 29.8457L0.498745 0.841866Z"
        stroke="white"
      />
    </svg>
  );
};

export default PrecisionIcon;
