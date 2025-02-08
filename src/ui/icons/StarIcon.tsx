import React from "react";

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg width="12" height="13" viewBox="0 0 12 13" fill="none" {...props}>
			<g clip-path="url(#clip0_934_272)">
				<path
					d="M9.72975 12.3122L5.99625 9.56821L2.26275 12.3122L3.69625 7.88071L-0.0352478 5.15421H4.57175L5.99625 0.71521L7.42075 5.15421H12.0273L8.29625 7.88071L9.72975 12.3122Z"
					fill="#FFB217"
				/>
			</g>
			<defs>
				<clipPath id="clip0_934_272">
					<rect x="-0.00384521" y="0.654663" width="12" height="12" rx="2" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default StarIcon;
