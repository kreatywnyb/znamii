import React from "react";
import GoogleIcon from "../icons/GoogleIcon";
import StarIcon from "../icons/StarIcon";
import TestimonialsSlider from "../organisms/TestimonialsSlider";

const PortfolioSection = () => {
	return (
		<section className="container relative z-10 -mt-16 pb-32 pt-48">
			<div className="flex items-center flex-wrap justify-between">
				<h2 className="text-medium mb-4 mt-8 text-left text-4xl order-1 text-[40px] font-bold text-basicDark">
					Dobrze robią, dobry przekaz leci.
				</h2>
				<p className="text-[17px] font-medium order-1 text-[#474747] lg:hidden mb-4">
				Przeczytaj opinie, które wystalili nam nasi klienci.
			</p>
				<div className="flex h-fit w-fit items-center order-2 justify-center gap-4 border border-[#EBEBEB] bg-white p-4">
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
			<p className="text-[17px] font-medium order-1 text-[#474747] lg:block hidden">
				Przeczytaj opinie, które wystalili nam nasi klienci.
			</p>
			<TestimonialsSlider />
		</section>
	);
};

export default PortfolioSection;
