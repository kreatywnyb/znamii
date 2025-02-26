import React from "react";

export type HeroSectionWithTextProps = {
	headingText: string;
};

const HeroSectionWithText = ({ headingText }: HeroSectionWithTextProps) => {
	return (
		<section className="bg-basicDark pb-96 pt-20">
			<div className="container">
				<h1 className="text-4xl text-white lg:text-[3.625rem]">{headingText}</h1>
			</div>
		</section>
	);
};

export default HeroSectionWithText;
