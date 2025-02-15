import React from "react";
import GoogleIcon from "../icons/GoogleIcon";
import StarIcon from "../icons/StarIcon";
import TestimonialsSlider from "../organisms/TestimonialsSlider";

const PortfolioSection = () => {
	return (
		<section className="container relative z-10 -mt-16 pb-32 pt-48">
			<div className="flex items-center justify-between">
				<h2 className="text-medium mb-4 mt-8 text-left text-4xl text-[40px] font-bold text-basicDark">
					Dobrze robią, dobry przekaz leci.
				</h2>
				<div className="flex h-fit w-fit items-center justify-center gap-4 border border-[#EBEBEB] bg-white p-4">
					<GoogleIcon />
					<div className="flex gap-0.5">
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
					</div>
					<div className="font-geist font-medium">5.0</div>
				</div>
			</div>
			<p className="text-[17px] font-medium text-[#474747]">
				Przeczytaj opinie, które wystalili nam nasi klienci.
			</p>
			<TestimonialsSlider />
		</section>
	);
};

export default PortfolioSection;
