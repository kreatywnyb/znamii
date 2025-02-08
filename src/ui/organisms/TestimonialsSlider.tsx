"use client";
import React from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import author from "@public/author.webp";
import testimonial from "@public/testimonial.webp";

interface Opinion {
	id: number;
	author: string;
	authorImg: StaticImageData;
	company: string;
	src: string;
	text: string;
}

const opinions: Opinion[] = [
	{
		id: 1,
		author: "Krzysztof Winiarski",
		authorImg: author,
		company: "AW-SPORT",
		src: testimonial.src,
		text: "Pełna profeska. Praca zawsze w miłej atmosferze, a jej efekty są zawsze mega zadowalające i co ważne - w szybkim terminie realizowane! Dzięki!",
	},
	{
		id: 2,
		author: "Magda Plaskacz",
		authorImg: author,
		company: "DR SNOW",
		src: testimonial.src,
		text: "Pełna profeska. Praca zawsze w miłej atmosferze, a jej efekty są zawsze mega zadowalające i co ważne - w szybkim terminie realizowane! Dzięki!",
	},
	{
		id: 3,
		author: "Grzegorz Sowa",
		authorImg: author,
		company: "DR SNOW",
		src: testimonial.src,
		text: "Dziękujemy jako klub koszykarski Resovii Rzeszów za profesjonalnie wykonaną sesję zawodników Resovii, zdjęcia grupowe i indywidualne. Pełen profesjonalizm i terminowość!",
	},
];

const settings = {
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	autoplay: true,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 720,
			dots: true,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const TestimonialsSlider = () => {
	return (
		<div className="overflow-hidden">
			<Slider
				{...settings}
				className="cursor-pointer py-16 [&_.slick-track]:flex [&_.slick-track]:gap-4"
			>
				{opinions.map(({ text, id, author, authorImg, src, company }, idx) => {
					return (
						<div key={`${idx}-${id}`} className="group border border-basicDark text-white">
							<div
								className="relative h-[24rem]"
								style={{
									backgroundImage: `url(${src})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							>
								<div className="absolute bottom-0 h-full bg-background p-4 text-basicDark transition-all duration-500 group-hover:bg-opacity-0">
									<div className="h-full overflow-hidden p-8 transition-all duration-500">
										<p className="text-[21px] font-medium group-hover:text-white">{text}</p>
									</div>

									<div className="absolute bottom-8 left-12 flex gap-4 items-end">
										<div className="relative">
											<Image src={authorImg} alt="author" />
											<div className="absolute font-medium -left-4 h-4 w-4 bg-primary"></div>
										</div>
										<div className="group-hover:text-white">
											<p className="text-[21px] font-medium">{author}</p>
											<p className="text-[12px] font-geist font-medium">{company}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default TestimonialsSlider;
