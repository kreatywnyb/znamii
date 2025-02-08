import React from "react";
import GoogleIcon from "../icons/GoogleIcon";
import StarIcon from '../icons/StarIcon';
import TestimonialsSlider from "../organisms/TestimonialsSlider";

const PortfolioSection = () => {
	return (
		<section className="container relative z-10 -mt-16 pb-32 pt-48">
			<div className="flex justify-between items-center">
				<h2 className="text-medium mb-4 mt-8 text-left text-4xl text-[40px] font-bold text-basicDark">
					Dobrze robią, dobry przekaz leci.
				</h2>
                <div className="border-[#EBEBEB] border bg-white flex justify-center gap-4 items-center p-4 w-fit h-fit">
                    <GoogleIcon/>
                    <div className="flex gap-0.5">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    </div>
                    <div className="font-geist font-medium">
                        5.0
                    </div>
                </div>
			</div>
			<p className="text-[17px] text-[#474747] font-medium">Przeczytaj opinie, które wystalili nam nasi klienci.</p>
            <TestimonialsSlider></TestimonialsSlider>
		</section>
	);
};

export default PortfolioSection;
