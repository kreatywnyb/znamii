// "use client";
// import React from "react";
// import company1 from "@public/Delante.png";
// import company2 from "@public/Future Mind.png";
// import company3 from "@public/Kapitan Nauka.png";
// import company4 from "@public/MailerLite.png";
// import company5 from "@public/Nurtzo.png";
// import company6 from "@public/Safran.png";
// import company7 from "@public/The Big Thing.png";
// import Slider, { Settings } from "react-slick";
// import Image from "next/image";
// import { StaticImageData } from "next/image";

// const sliderData: { img: StaticImageData; alt: string }[] = [
// 	{ img: company1, alt: "Delante" },
// 	{ img: company2, alt: "Future Mind" },
// 	{ img: company3, alt: "Kapitan nauka" },
// 	{ img: company4, alt: "Mailer Lite" },
// 	{ img: company5, alt: "Nurtuzo" },
// 	{ img: company6, alt: "Safran" },
// 	{ img: company7, alt: "The Big Thing" },
// ];

// const settings: Settings = {
// 	infinite: true,
// 	speed: 1000,
// 	slidesToShow: 4,
// 	autoplay: true,
// 	arrows: false,
// 	autoplaySpeed: 3000,
// 	responsive: [
// 		{
// 			breakpoint: 720,
// 			settings: {
// 				slidesToShow: 2,
// 			},
// 		},
// 		{
// 			breakpoint: 480,
// 			settings: {
// 				slidesToShow: 2.5,
// 			},
// 		},
// 	],
// };

// const PartnersSlider = () => {
// 	return (
// 		<div className="overflow-hidden">
// 			<div className="overflow-hidden py-32 max-md:pt-20 md:-mx-36">
// 				<Slider
// 					{...settings}
// 					className="[&_.slick-slide]:flex [&_.slick-slide]:justify-center [&_.slick-slide]:bg-red-500 [&_.slick-track]:flex [&_.slick-track]:items-center [&_.slick-track]:justify-between"
// 				>
// 					{sliderData.map((item, idx) => (
// 						<div key={idx} className="">
// 							<Image
// 								src={item.img}
// 								alt={item.alt}
// 								className="max-w-[140px] max-md:max-w-[100px] xxl:max-w-[180px]"
// 							/>
// 						</div>
// 					))}
// 				</Slider>
// 			</div>
// 		</div>
// 	);
// };

// export default PartnersSlider;

"use client";
import React from "react";
import company1 from "@public/Delante.png";
import company2 from "@public/Future Mind.png";
import company3 from "@public/Kapitan Nauka.png";
import company4 from "@public/MailerLite.png";
import company5 from "@public/Nurtzo.png";
import company6 from "@public/Safran.png";
import company7 from "@public/The Big Thing.png";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { StaticImageData } from "next/image";

const sliderData: { img: StaticImageData; alt: string }[] = [
	{ img: company1, alt: "Delante" },
	{ img: company2, alt: "Future Mind" },
	{ img: company3, alt: "Kapitan nauka" },
	{ img: company4, alt: "Mailer Lite" },
	{ img: company5, alt: "Nurtuzo" },
	{ img: company6, alt: "Safran" },
	{ img: company7, alt: "The Big Thing" },
];

const settings: Settings = {
	infinite: true,
	speed: 1000,
	slidesToShow: 4,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 3000,
	centerMode: false,
	variableWidth: false,
	rtl: false,
	responsive: [
		{
			breakpoint: 720,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				centerMode: false,
				slidesToScroll: 1,
				infinite: true,
			},
		},
	],
};

const PartnersSlider = () => {
	return (
		<div className="overflow-hidden">
			<div className="overflow-hidden py-32 max-md:pt-20 md:-mx-36">
				<Slider
					{...settings}
					// className="[&_.slick-list]:overflow-visible [&_.slick-slide]:flex [&_.slick-slide]:justify-center [&_.slick-track]:flex [&_.slick-track]:items-center"
					className="[&_.slick-slide]:flex [&_.slick-slide]:justify-center [&_.slick-track]:flex [&_.slick-track]:items-center"
				>
					{sliderData.map((item, idx) => (
						<div key={idx} className="pl-2 pr-4">
							<Image
								src={item.img}
								alt={item.alt}
								className="max-w-[140px] max-md:max-w-[120px] xxl:max-w-[180px]"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default PartnersSlider;
