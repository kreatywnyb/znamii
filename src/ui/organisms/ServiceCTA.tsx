import React from "react";
import { CTAButton } from "../molecules/CTAButton";
import { links } from "@/constants";

const ServiceCTA = () => {
	return (
		<div className="container relative mt-20">
			<div className="flex flex-col items-center justify-between bg-basicDark md:flex-row">
				<div className="py-10 max-md:px-4 md:pl-16 lg:py-[3.75rem]">
					<h3 className="text-3xl leading-tight text-white lg:text-[2.5rem]">
						Śmianko w necie, wsparcie w świecie. <br /> Po projekcie doradzamy{" "}
						<span className="text-primary">bezpłatnie!</span>
					</h3>
					<p className="mt-4 text-[1.063rem] leading-normal text-lightGrey">
						Po zakończonej realizacji brandingu otrzymasz rzetelną pomoc - zupełnie za darmo.
					</p>
					<CTAButton className="mt-10" href={links.contactPage}>
						Zrealizuj projekt z nami
					</CTAButton>
				</div>
				<div className="flex">
					<video src="/video-1.mp4" className="md:max-h-[22rem]" autoPlay loop muted playsInline />
				</div>
			</div>
			<div className="absolute right-0 top-full h-4 w-4 bg-primary" />
		</div>
	);
};

export default ServiceCTA;
