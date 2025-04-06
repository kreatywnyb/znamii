import React from "react";
import GoogleIcon from "../icons/GoogleIcon";
import StarIcon from "../icons/StarIcon";
import TestimonialsSlider from "../organisms/TestimonialsSlider";
import { FlipWords } from "../molecules/FlipWords";

const PortfolioSection = () => {
	return (
		<section className="container relative z-10 -mt-16 pb-32 pt-32 lg:pt-48">
			<div className="flex flex-wrap items-center justify-between">
				<FlipWords word="Dobrze robią, dobry przekaz leci." className="order-1 mb-4 mt-8 text-left text-4xl text-[2.5rem] font-medium text-basicDark">
				</FlipWords>
				<p className="order-1 mb-4 text-[1.063rem] font-medium text-[#474747] lg:hidden">
					Przeczytaj opinie, które wystalili nam nasi klienci.
				</p>
				<div className="order-2 flex h-fit w-fit items-center justify-center gap-4 border border-[#EBEBEB] bg-white px-[1.313rem] py-[0.813rem]">
					<GoogleIcon className="h-[1.125rem] w-[1.125rem]" />
					<div className="flex gap-0.5">
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
					</div>
					<div className="font-geist text-sm font-medium">5.0</div>
				</div>
			</div>
			<p className="order-1 hidden text-[1.063rem] font-medium text-[#474747] lg:block">
				Przeczytaj opinie, które wystalili nam nasi klienci.
			</p>
			<TestimonialsSlider />
		</section>
	);
};

export default PortfolioSection;
