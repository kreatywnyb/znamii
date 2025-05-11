"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import krzysztofImage from "@public/krzysztof-winiarski.webp";
import magdaImage from "@public/magda-plaskacz.webp";
import grzegorzImage from "@public/grzegorz-sowa.webp";
import grzegorzMikulaImage from "@public/grzegorz-mikula.webp";
import bartekImage from "@public/bartek-les.webp";
import kamilImage from "@public/kamil-pormbinski.webp";
import kasiaImage from "@public/kasia-wlodarczyk.webp";
import raphaelImage from "@public/raphael-sheffield.webp";

interface Opinion {
	id: number;
	author: string;
	authorImg: StaticImageData;
	company: string;
	src?: string;
	text: string;
}

const opinions: Opinion[] = [
	{
		id: 1,
		author: "Krzysztof Winiarski",
		authorImg: krzysztofImage,
		company: "AW-SPORT",
		src: "/person-speaking.mp4",
		text: "Pełna profeska. Praca zawsze w miłej atmosferze, a jej efekty są zawsze mega zadowalające i co ważne - w szybkim terminie realizowane! Dzięki!",
	},
	{
		id: 2,
		author: "Magda Plaskacz",
		authorImg: magdaImage,
		company: "DR SNOW",
		text: "Pełna profeska. Praca zawsze w miłej atmosferze, a jej efekty są zawsze mega zadowalające i co ważne - w szybkim terminie realizowane! Dzięki!",
	},
	{
		id: 3,
		author: "Grzegorz Sowa",
		authorImg: grzegorzImage,
		company: "DR SNOW",
		text: "Dziękujemy jako klub koszykarski Resovii Rzeszów za profesjonalnie wykonaną sesję zawodników Resovii, zdjęcia grupowe i indywidualne. Pełen profesjonalizm i terminowość!",
	},
	{
		id: 4,
		author: "Kasia Włodarczyk",
		authorImg: kasiaImage,
		company: "fundacja Generaacja",
		src: "/person-speaking.mp4",
		text: "XYZ",
	},
	{
		id: 5,
		author: "Grzegorz Mikuła",
		authorImg: grzegorzMikulaImage,
		company: "hiFOOD",
		text: "Jeżeli nasi klienci pytają, kto Wam projektował grafikę, bo jest genialna - to chyba najlepsza rekomendacja. Nie wyobrażamy sobie współpracować z nikim innym.",
	},
	{
		id: 6,
		author: "Raphael Sheffield",
		authorImg: raphaelImage,
		company: "Safran aircraft engines poland",
		text: "Jeżeli nasi klienci pytają, kto Wam projektował grafikę, bo jest genialna - to chyba najlepsza rekomendacja. Nie wyobrażamy sobie współpracować z nikim innym.",
	},
	{
		id: 7,
		author: "Bartek Leś",
		authorImg: bartekImage,
		company: "recovery lab",
		src: "/person-speaking.mp4",
		text: "Zrobili dla mojej firmy całą stronę internetową (od brandu, przez materiały foto/wideo aż do kodowania i wypuszczenia jej w świat). Jestem bardzo zadowolony ze współpracy!",
	},
	{
		id: 8,
		author: "Kamil Porembiński",
		authorImg: kamilImage,
		company: "podcast spod wody",
		text: "Paweł i jego ekipa to idealny wybór jeżeli szukasz realizacji związanych z wideo. Zawsze pomocni, mega merytoryczni i kreatywni! Polecam :)",
	},
	{
		id: 9,
		author: "Natalia Boniecka",
		authorImg: kamilImage,
		company: "blawesome",
		text: "Super profesjonaliści! Mega robota z zaprojektowaniem identyfikacji wizualnej dla Blawesome! 💛Polecam z całego serduszka!",
	},
];

const settings = {
	infinite: true,
	speed: 1500,
	slidesToShow: 3,
	autoplaySpeed: 3500,
	autoplay: true,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 1500,
			dots: true,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 1100,
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
	const sliderRef = useRef<Slider | null>(null);

	return (
		<div className="relative -mx-[.4rem] overflow-hidden">
			<Slider
				ref={sliderRef}
				{...settings}
				className="h-full cursor-pointer py-16 pb-8 [&_.slick-track]:flex [&_.slick-track]:gap-4"
			>
				{opinions.map(({ text, id, author, authorImg, src, company }, idx) => {
					return (
						<div
							key={`${idx}-${id}`}
							className="relative h-full min-h-[24rem] flex-1 border border-basicDark text-white"
						>
							<div className="h-full">
								{src && (
									<div className="after:absolute after:h-full after:w-full after:bg-black after:bg-opacity-50">
										<video
											className="absolute inset-0 h-full w-full object-cover"
											autoPlay
											muted
											loop
											playsInline
										>
											<source src={src} type="video/mp4" />
										</video>
									</div>
								)}

								<div className="absolute flex h-full flex-col justify-between p-8 text-basicDark transition-all duration-500 group-hover:bg-opacity-0">
									<p
										className={`text-[1.313rem] font-medium ${src ? "text-white" : "text-basicDark"}`}
									>
										{text}
									</p>

									<div className="flex items-end gap-4 max-md:mt-4">
										<div className="relative h-[60px] w-[60px] bg-primary">
											<Image src={authorImg} className="h-full" alt="author" />
											<div className="absolute -left-4 h-4 w-4 bg-primary font-medium"></div>
										</div>
										<div className={`${src ? "text-white" : "text-basicDark"}`}>
											<p className="text-[1.313rem] font-medium">{author}</p>
											<p className="font-geist text-[0.75rem] font-medium uppercase">{company}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>

			<div className="flex justify-center gap-2 p-[11px] md:justify-end">
				<button
					className="flex h-10 w-10 items-center justify-center border border-basicDark text-basicDark transition-colors hover:bg-[#00000011]"
					onClick={() => sliderRef.current?.slickPrev()}
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.5 3.5L5.5 8L10.5 12.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				<button
					className="flex h-10 w-10 items-center justify-center border border-basicDark text-basicDark transition-colors hover:bg-[#00000011]"
					onClick={() => sliderRef.current?.slickNext()}
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.5 3.5L10.5 8L5.5 12.5"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default TestimonialsSlider;
