import React from "react";
import case1 from "@public/case-1.webp";
import case2 from "@public/case-2.webp";
import case3 from "@public/case-3.webp";
import case4 from "@public/case-4.webp";
import case5 from "@public/case-5.webp";
import case6 from "@public/case-6.webp";
import { CTAButton } from "../molecules/CTAButton";

interface PortfolioItem {
	name: string;
	image: string;
	cols: 1 | 2 | 3;
}

const portfolioItems: PortfolioItem[] = [
	{ name: "Pienińska przystań", image: case1.src, cols: 2 },
	{ name: "PRO100", image: case2.src, cols: 1 },
	{ name: "AW-Sport", image: case3.src, cols: 1 },
	{ name: "The Big Thing", image: case4.src, cols: 2 },
	{ name: "Future Mind", image: case5.src, cols: 2 },
	{ name: "ONDE", image: case6.src, cols: 1 },
];

const PortfolioSection = () => {
	return (
		<section className="container relative z-10 -mt-28 bg-white px-16 py-16">
			<h2 className="mb-4 mt-8 text-left text-4xl text-[40px] font-medium text-basicDark">
				Zobacz nasze realizacje. Są w pytkę.
			</h2>
			<div className="mt-12 grid w-full grid-cols-3 gap-4">
				{portfolioItems.map((item, index) => (
					<div
						key={index}
						className={`${item.cols === 2 && "col-span-2"} group relative flex h-[380px] items-center justify-center bg-cover bg-center text-2xl font-bold text-white`}
						style={{ backgroundImage: `url(${item.image})` }}
					>
						<div className="absolute bottom-4 left-4 h-4 w-4 bg-white">
							<div className="w-fit -translate-y-8 translate-x-4 whitespace-nowrap border border-white bg-black p-4 text-white opacity-0 transition group-hover:-translate-y-16 group-hover:opacity-100">
								{item.name}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center py-16">
				{" "}
				<CTAButton href="" variant="white">
					Zobacz wszystkie realizacje
				</CTAButton>
			</div>
		</section>
	);
};

export default PortfolioSection;
