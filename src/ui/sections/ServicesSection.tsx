import React from "react";
import ButtonSecondary from "../molecules/ButtonSecondary";
import { links } from "@/constants";
import PrecisionIcon from "../icons/PrecisionIcon";
import EmpathyIcon from "../icons/EmpathyIcon";
import OpennessIcon from "../icons/OpennessIcon";
import Link from "next/link";
import SmallYellowArrowIcon from "../icons/SmallYellowArrowIcon";
import PartnersSlider from "../molecules/PartnersSlider";

const ServicesSection = () => {
	return (
		<section className="relative z-10 bg-basicDark py-24 text-white">
			<div className="container flex flex-col">
				<div className="flex flex-col justify-between max-md:space-y-14 md:flex-row">
					<div className="">
						<Link
							className="group relative mb-10 inline-block pr-8 text-[40px] leading-[40px]"
							href={`${links.services.main}${links.services.branding}`}
						>
							Branding
							<span className="absolute right-4 top-4 h-0 w-0 overflow-hidden transition-transform group-hover:h-auto group-hover:w-auto group-hover:-translate-y-4 group-hover:translate-x-4">
								<SmallYellowArrowIcon />
							</span>
						</Link>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<li className="cursor-pointer transition-transform hover:translate-x-2">Logo</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								identyfikacje wizualne
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								Strony internetowe
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">Naming</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								projekty do druku
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								obsługa abonamentowa
							</li>
						</ul>
					</div>
					<div className="">
						<Link
							className="group relative mb-10 inline-block pr-8 text-[40px] leading-[40px]"
							href={`${links.services.main}${links.services.video}`}
						>
							Video
							<span className="absolute right-4 top-4 h-0 w-0 overflow-hidden transition-transform group-hover:h-auto group-hover:w-auto group-hover:-translate-y-4 group-hover:translate-x-4">
								<SmallYellowArrowIcon />
							</span>
						</Link>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								filmy Reklamowe
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								Eventy & Konferencje
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								filmy Korporacyjne
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								Webinary & podcasty
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								SPOTY SPOŁECZNE
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								obsługa abonamentowa
							</li>
						</ul>
					</div>
					<div className="">
						<Link
							className="group relative mb-10 inline-block pr-8 text-[40px] leading-[40px]"
							href={`${links.services.main}${links.services.photo}`}
						>
							Zdjęcia
							<span className="absolute right-4 top-4 h-0 w-0 overflow-hidden transition-transform group-hover:h-auto group-hover:w-auto group-hover:-translate-y-4 group-hover:translate-x-4">
								<SmallYellowArrowIcon />
							</span>
						</Link>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								sesje Wizerunkowe
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								Eventy & konfererencje
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								sesje Biznesowe
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								fotografia produktowa
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								zdjęcia z drona
							</li>
							<li className="cursor-pointer transition-transform hover:translate-x-2">
								obsługa abonamentowa
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-36 flex flex-col max-lg:space-y-20 lg:flex-row">
					<div className="flex flex-1 flex-col justify-between">
						<p className="mb-12 max-w-[600px] text-3xl font-medium lg:text-[40px] lg:leading-[50px]">
							Wierzymy, że najlepsze pomysły rodzą się w atmosferze swobody. Dlatego działamy luźno,
							a tworzymy sztywniutko.
						</p>
						<ButtonSecondary href={links.contactPage}>poznaj się z nami</ButtonSecondary>
					</div>
					<div className="grid flex-1 grid-cols-1 grid-rows-3 max-md:space-y-2 md:grid-cols-3 md:grid-rows-2">
						<div className="order-1 flex aspect-square max-w-[250px] flex-col justify-between rounded-sm border border-darkGrey p-5 max-md:mt-auto">
							<PrecisionIcon className="self-end" />
							<span className="text-[21px] font-medium leading-[33px]">Precyzja</span>
						</div>
						<div className="order-3 flex aspect-square max-w-[250px] flex-col justify-between rounded-sm border border-darkGrey p-5 max-md:ml-auto">
							<EmpathyIcon className="self-end" />
							<span className="text-[21px] font-medium leading-[33px]">Empatia</span>
						</div>
						<div className="order-5 flex aspect-square max-w-[250px] flex-col justify-between rounded-sm border border-darkGrey p-5">
							<OpennessIcon className="self-end" />
							<span className="text-[21px] font-medium leading-[33px]">Otwartość</span>
						</div>
						<div className="order-2 hidden md:block" />
						<div className="order-4 hidden md:block" />
						<div className="order-6 hidden md:block" />
					</div>
				</div>
				<div className="mb-32 mt-10">
					<PartnersSlider />
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
