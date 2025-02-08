import React from "react";
import { CTAButton } from "../molecules/CTAButton";

interface CtaSectionProps {
	image: string;
	text?: string;
	title?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, text, image }) => {
	return (
		<section
			className="mx-16 mb-[30rem] relative z-10 flex min-h-[471px] flex-col items-start bg-basicDark bg-cover bg-center py-24 text-center text-white px-32 "
			style={{ backgroundImage: `url(${image})` }}
		>
			<h2 className="mb-4 text-[58px] text-left leading-[72.5px] max-w-[40rem] text-medium ">{ title || "Gotowy by zrealizować swój projekt z nami?"}</h2>
			<p className="mb-12 text-lg text-[21px] text-medium text-lightGrey">
				{" "}
				{text || "Zrealizujemy projekty, które do tej pory były wyłącznie w Twojej głowie."}{" "}
			</p>
			<CTAButton href="">Zrealizuj projekt z nami</CTAButton>
		</section>
	);
};

export default CtaSection;
