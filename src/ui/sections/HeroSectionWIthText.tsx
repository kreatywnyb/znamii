import React from "react";
import { FlipWords } from "../molecules/FlipWords";

export type HeroSectionWithTextProps = {
	headingText: string;
};

const HeroSectionWithText = ({ headingText }: HeroSectionWithTextProps) => {
	return (
		<section className="bg-basicDark pb-96 pt-20 max-md:pb-80 max-md:pt-12">
			<div className="container">
				<FlipWords
					as="h1"
					className="text-4xl text-white lg:text-[3.625rem]"
					word={headingText}
				></FlipWords>
			</div>
		</section>
	);
};

export default HeroSectionWithText;
