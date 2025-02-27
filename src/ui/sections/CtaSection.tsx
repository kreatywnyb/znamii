import React from "react";
import { CTAButton } from "../molecules/CTAButton";

interface CtaSectionProps {
	image: string;
	text?: string;
	title?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ title, text, image }) => {
	return (
		<section className="relative z-10 mb-[30rem] flex justify-center px-4">
			<div
				className="relative z-10 mx-auto flex min-h-[471px] w-full max-w-[1700px] flex-col items-start bg-basicDark bg-cover bg-center px-6 py-24 text-white md:px-32 xxl:max-w-[2200px]"
				style={{ backgroundImage: `url(${image})` }}
			>
				<h2 className="mb-4 max-w-[40rem] text-left text-[2rem] font-medium md:text-[3.625rem] md:leading-[72.5px]">
					{title || "Gotowy by zrealizować swój projekt z nami?"}
				</h2>
				<p className="mb-12 text-[1.313rem] text-lg font-medium text-lightGrey">
					{" "}
					{text || "Zrealizujemy projekty, które do tej pory były wyłącznie w Twojej głowie."}{" "}
				</p>
				<CTAButton href="" className="whitespace-nowrap text-center max-md:w-full max-sm:text-sm">
					Zrealizuj projekt z nami
				</CTAButton>
			</div>
		</section>
	);
};

export default CtaSection;
