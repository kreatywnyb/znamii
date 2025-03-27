import { links } from "@/constants";
import Link from "next/link";
import EmpathyIcon from "../icons/EmpathyIcon";
import OpennessIcon from "../icons/OpennessIcon";
import PrecisionIcon from "../icons/PrecisionIcon";
import SmallYellowArrowIcon from "../icons/SmallYellowArrowIcon";
import { CTAButton } from "../molecules/CTAButton";
import PartnersSlider from "../molecules/PartnersSlider";

const ServicesSection = () => {
	return (
		<section className="relative z-10 bg-basicDark py-24 text-white">
			<div className="container flex flex-col">
				<div className="flex flex-col justify-between max-md:space-y-14 md:flex-row">
					<div className="">
						<Link
							className="group relative mb-10 inline-block pr-8 text-[2.5rem] leading-[40px]"
							href={`${links.services.main}${links.services.branding}`}
						>
							Branding
							<span className="absolute right-4 top-4 h-0 w-0 overflow-hidden transition-transform group-hover:h-auto group-hover:w-auto group-hover:-translate-y-4 group-hover:translate-x-4">
								<SmallYellowArrowIcon />
							</span>
						</Link>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<Link href={`${links.services.main}${links.services.video}#logo`}>
									<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
									Logo
								</Link>
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								identyfikacje wizualne
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								Strony internetowe
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								Naming
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								projekty do druku
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								obsługa abonamentowa
							</li>
						</ul>
					</div>
					<div className="">
						<Link
							className="group relative mb-10 inline-block pr-8 text-[2.5rem] leading-[40px]"
							href={`${links.services.main}${links.services.video}`}
						>
							Video
							<span className="absolute right-4 top-4 h-0 w-0 overflow-hidden transition-transform group-hover:h-auto group-hover:w-auto group-hover:-translate-y-4 group-hover:translate-x-4">
								<SmallYellowArrowIcon />
							</span>
						</Link>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								filmy Reklamowe
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								Eventy & Konferencje
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								filmy Korporacyjne
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								Webinary & podcasty
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								SPOTY SPOŁECZNE
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								obsługa abonamentowa
							</li>
						</ul>
					</div>
					<div className="">
						<Link
							className="group relative mb-10 inline-block pr-8 text-[2.5rem] leading-[40px]"
							href={`${links.services.main}${links.services.photo}`}
						>
							Zdjęcia
							<span className="absolute right-4 top-4 h-0 w-0 overflow-hidden transition-transform group-hover:h-auto group-hover:w-auto group-hover:-translate-y-4 group-hover:translate-x-4">
								<SmallYellowArrowIcon />
							</span>
						</Link>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								sesje Wizerunkowe
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								Eventy & konfererencje
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								sesje Biznesowe
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								fotografia produktowa
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								zdjęcia z drona
							</li>
							<li className="group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4">
								<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
								obsługa abonamentowa
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-36 flex flex-col max-lg:space-y-20 lg:flex-row">
					<div className="flex flex-1 flex-col justify-between">
						<p className="mb-12 max-w-[600px] text-3xl font-medium lg:text-[2.5rem] lg:leading-[50px]">
							Wierzymy, że najlepsze pomysły rodzą się w atmosferze swobody. Dlatego działamy luźno,
							a tworzymy sztywniutko.
						</p>
						{/* <ButtonSecondary href={links.contactPage}>poznaj się z nami</ButtonSecondary> */}
						<CTAButton href={links.contactPage} variant="tertiary">
							Poznaj się z nami
						</CTAButton>
					</div>
					<div className="grid max-w-[750px] flex-1 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2">
						<div className="order-1 flex aspect-square max-w-[15.625rem] flex-col justify-between self-end rounded-sm rounded-br-none border border-darkGrey p-5 max-md:mt-auto">
							<PrecisionIcon className="self-end" />
							<span className="text-[1.313rem] font-medium leading-[33px]">Precyzja</span>
						</div>
						<div className="order-3 flex aspect-square h-full w-full max-w-[15.625rem] flex-col justify-between rounded-sm rounded-bl-none border border-darkGrey p-5 max-md:-mt-[1px] max-md:ml-auto max-md:rounded-tl-none">
							<EmpathyIcon className="self-end" />
							<span className="text-[1.313rem] font-medium leading-[33px]">Empatia</span>
						</div>
						<div className="order-5 -ml-[0.063rem] -mr-[0.063rem] -mt-[0.063rem] flex aspect-square max-w-[15.75rem] flex-col justify-between rounded-sm rounded-t-none border border-darkGrey p-5 max-md:-mt-[2px]">
							<OpennessIcon className="self-end" />
							<span className="text-[1.313rem] font-medium leading-[33px]">Otwartość</span>
						</div>
						<div className="order-2 hidden md:block" />
						<div className="order-4 hidden md:block" />
						<div className="order-6 hidden md:block" />
					</div>
				</div>
				<div className="mb-56 mt-10">
					<PartnersSlider />
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
