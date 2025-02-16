import React from "react";

const ChevronIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="8"
			height="4"
			viewBox="0 0 8 4"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3.66441 3.74977C3.5331 3.75 3.40305 3.72428 3.28171 3.67408C3.16038 3.62388 3.05017 3.5502 2.95741 3.45727L0.310905 0.810272L1.01791 0.103271L3.66441 2.74977L6.31091 0.103271L7.01791 0.810272L4.37141 3.45677C4.27868 3.54979 4.16849 3.62356 4.04715 3.67385C3.92582 3.72413 3.79575 3.74993 3.66441 3.74977Z"
				fill="#FFB217"
			/>
		</svg>
	);
};

export default ChevronIcon;
