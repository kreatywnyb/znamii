"use client";
import React from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import krzysztofImage from "@public/krzysztof-winiarski.webp";
import magdaImage from "@public/magda-plaskacz.webp";
import grzegorzImage from "@public/grzegorz-sowa.webp";
import grzegorzMikulaImage from "@public/grzegorz-mikula.webp";
import bartekImage from "@public/bartek-les.webp";
import kamilImage from "@public/kamil-pormbinski.webp";
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
		authorImg: krzysztofImage,
		company: "AW-SPORT",
		src: testimonial.src,
		text: "Pełna profeska. Praca zawsze w miłej atmosferze, a jej efekty są zawsze mega zadowalające i co ważne - w szybkim terminie realizowane! Dzięki!",
	},
	{
		id: 2,
		author: "Magda Plaskacz",
		authorImg: magdaImage,
		company: "DR SNOW",
		src: testimonial.src,
		text: "Pełna profeska. Praca zawsze w miłej atmosferze, a jej efekty są zawsze mega zadowalające i co ważne - w szybkim terminie realizowane! Dzięki!",
	},
	{
		id: 3,
		author: "Grzegorz Sowa",
		authorImg: grzegorzImage,
		company: "DR SNOW",
		src: testimonial.src,
		text: "Dziękujemy jako klub koszykarski Resovii Rzeszów za profesjonalnie wykonaną sesję zawodników Resovii, zdjęcia grupowe i indywidualne. Pełen profesjonalizm i terminowość!",
	},
	{
		id: 4,
		author: "Grzegorz Mikuła",
		authorImg: grzegorzMikulaImage,
		company: "hiFOOD",
		src: testimonial.src,
		text: "Jeżeli nasi klienci pytają,kto Wam projektował grafikę, bo jest genialna - to chyba najlepsza rekomendacja. Nie wyobrażamy sobie współpracować z nikim innym.",
	},
	{
		id: 5,
		author: "Raphael Sheffield",
		authorImg: grzegorzImage,
		company: "Safran aircraft engines poland",
		src: testimonial.src,
		text: "Jeżeli nasi klienci pytają,kto Wam projektował grafikę, bo jest genialna - to chyba najlepsza rekomendacja. Nie wyobrażamy sobie współpracować z nikim innym.",
	},
	{
		id: 6,
		author: "Bartek Leś",
		authorImg: bartekImage,
		company: "recovery lab",
		src: testimonial.src,
		text: "Zrobili dla mojej firmy całą stronę internetową (od brandu, przez materiały foto/wideo aż do kodowania i wypuszczenia jej w świat). Jestem bardzo zadowolony ze współpracy!",
	},
	{
		id: 7,
		author: "Kamil Porembiński",
		authorImg: kamilImage,
		company: "podcast spod wody",
		src: testimonial.src,
		text: "Paweł i jego ekipa to idealny wybór jeżeli szukasz realizacji związanych z wideo. Zawsze pomocni, mega merytoryczni i kreatywni! Polecam :)",
	},
];

const settings = {
	infinite: true,
	speed: 1500,
	slidesToShow: 3,
	autoplay: true,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1000,
			dots: true,
			settings: {
				slidesToShow: 2,
			},
		},
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
						<div
							key={`${idx}-${id}`}
							className="group aspect-square border border-basicDark text-white"
						>
							<div
								className="relative h-full"
								style={{
									backgroundImage: `url(${src})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							>
								<div className="absolute bottom-0 h-full bg-background text-basicDark transition-all duration-500 group-hover:bg-opacity-0 md:p-4">
									<div className="h-full overflow-hidden p-8 transition-all duration-500">
										<p className="text-[21px] font-medium group-hover:text-white">{text}</p>
									</div>

									<div className="absolute bottom-8 left-12 flex items-end gap-4">
										<div className="relative h-[60px] w-[60px] bg-primary">
											<Image src={authorImg} alt="author" />
											<div className="absolute -left-4 h-4 w-4 bg-primary font-medium"></div>
										</div>
										<div className="group-hover:text-white">
											<p className="text-[21px] font-medium">{author}</p>
											<p className="font-geist text-[12px] font-medium">{company}</p>
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
