import React from "react";

const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="14"
			height="16"
			viewBox="0 0 14 16"
			fill="none"
			{...props}
		>
			<mask id="path-1-inside-1_753_780" fill="white">
				<rect x="4.06604" y="1.44263" width="9.38874" height="9.38874" rx="0.938874" />
			</mask>
			<rect
				x="4.06604"
				y="1.44263"
				width="9.38874"
				height="9.38874"
				rx="0.938874"
				stroke="#6E6E73"
				stroke-width="2"
				mask="url(#path-1-inside-1_753_780)"
			/>
			<mask id="path-2-inside-2_753_780" fill="white">
				<rect x="0.545288" y="5.37671" width="9.38874" height="9.38874" rx="0.938874" />
			</mask>
			<rect
				x="0.545288"
				y="5.37671"
				width="9.38874"
				height="9.38874"
				rx="0.938874"
				fill="#F8F8FA"
				stroke="#6E6E73"
				stroke-width="2"
				mask="url(#path-2-inside-2_753_780)"
			/>
		</svg>
	);
};

export default CopyIcon;
