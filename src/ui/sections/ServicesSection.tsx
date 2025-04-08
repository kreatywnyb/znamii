"use client";
import { links } from "@/constants";
import Link from "next/link";
import { useEffect, useRef, useState, ReactNode } from "react";
import EmpathyIcon from "../icons/EmpathyIcon";
import OpennessIcon from "../icons/OpennessIcon";
import PrecisionIcon from "../icons/PrecisionIcon";
import SmallYellowArrowIcon from "../icons/SmallYellowArrowIcon";
import { CTAButton } from "../molecules/CTAButton";
import PartnersSlider from "../molecules/PartnersSlider";
import { FlipWords } from '../molecules/FlipWords';

// Interface for the IntersectionObserver options
interface UseInViewOptions extends IntersectionObserverInit {
	triggerOnce?: boolean;
}

// Custom hook for detecting when an element is in viewport
const useInView = (options: UseInViewOptions = {}) => {
	const [isInView, setIsInView] = useState<boolean>(false);
	const ref = useRef<HTMLElement | null>(null);
	const { triggerOnce = false, ...observerOptions } = options;

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsInView(true);
				// If triggerOnce is true and element is in view, unobserve it
				if (triggerOnce) {
					observer.unobserve(element);
				}
			} else if (!triggerOnce) {
				setIsInView(false);
			}
		}, observerOptions);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, [options, triggerOnce]);

	return { ref, isInView };
};

// Props interface for ServiceMenuItem
interface ServiceMenuItemProps {
	href?: string;
	children: ReactNode;
}

// Service menu item component with animation
const ServiceMenuItem = ({ href, children }: ServiceMenuItemProps) => {
	const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<li
			ref={ref as React.RefObject<HTMLLIElement>}
			className={`group relative cursor-pointer font-geist tracking-[0.05em] transition-transform hover:translate-x-4 ${
				isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
			}`}
			style={{
				transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
				transitionDelay: isInView ? "0.1s" : "0s",
			}}
		>
			{href ? (
				<Link href={href}>
					<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
					{children}
				</Link>
			) : (
				<>
					<span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 transform bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100" />
					{children}
				</>
			)}
		</li>
	);
};

// Props interface for ServiceHeading
interface ServiceHeadingProps {
	href: string;
	children: ReactNode;
}

// Animated heading for service sections
const ServiceHeading = ({ href, children }: ServiceHeadingProps) => {
	const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<Link
			ref={ref as React.RefObject<HTMLAnchorElement>}
			className={`group relative mb-10 inline-block pr-8 text-[2.5rem] leading-[40px] ${
				isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
			}`}
			style={{
				transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
			}}
			href={href}
		>
			{children}
			<span className="absolute right-4 top-4 h-0 w-0 overflow-hidden transition-transform group-hover:h-auto group-hover:w-auto group-hover:-translate-y-4 group-hover:translate-x-4">
				<SmallYellowArrowIcon />
			</span>
		</Link>
	);
};

// Props interface for ValueBox
interface ValueBoxProps {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
	title: string;
	order: number;
	className?: string;
}

// Value box component with animation
const ValueBox = ({ icon: Icon, title, order, className = "" }: ValueBoxProps) => {
	const { ref, isInView } = useInView({ threshold: 1, triggerOnce: true });

	return (
		<div
			ref={ref as React.RefObject<HTMLDivElement>}
			className={`${className} flex aspect-square flex-col justify-between rounded-sm border border-darkGrey p-5 ${
				isInView ? "scale-100 opacity-100" : "scale-95 opacity-0"
			}`}
			style={{
				transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
				transitionDelay: isInView ? `${order * 0.15}s` : "0s",
			}}
		>
			<Icon className="self-end" />
			<span className="text-[1.313rem] font-medium leading-[33px]">{title}</span>
		</div>
	);
};

const ServicesSection: React.FC = () => {
	// Animation for the tagline
	const { ref: taglineRef, isInView: taglineInView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<section className="relative z-10 bg-basicDark py-24 text-white">
			<div className="container flex flex-col">
				<div className="flex flex-col justify-between max-md:space-y-14 md:flex-row">
					<div className="">
						<ServiceHeading href={`${links.services.main}${links.services.branding}`}>
							Branding
						</ServiceHeading>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<ServiceMenuItem href={`${links.services.main}${links.services.video}#naming`}>
								Logo
							</ServiceMenuItem>
							<ServiceMenuItem
								href={`${links.services.main}${links.services.video}#identyfikacja-wizualna`}
							>
								identyfikacje wizualne
							</ServiceMenuItem>
							<ServiceMenuItem href={`${links.services.main}${links.services.video}#web-design`}>
								Strony internetowe
							</ServiceMenuItem>
							<ServiceMenuItem href={`${links.services.main}${links.services.video}#naming`}>
								Naming
							</ServiceMenuItem>
							<ServiceMenuItem
								href={`${links.services.main}${links.services.video}#projekty-do-druku`}
							>
								projekty do druku
							</ServiceMenuItem>
							<ServiceMenuItem
								href={`${links.services.main}${links.services.video}#uslugi-abonamentowe`}
							>
								obsługa abonamentowa
							</ServiceMenuItem>
						</ul>
					</div>
					<div className="">
						<ServiceHeading href={`${links.services.main}${links.services.video}`}>
							Video
						</ServiceHeading>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<ServiceMenuItem>filmy Reklamowe</ServiceMenuItem>
							<ServiceMenuItem>Eventy & Konferencje</ServiceMenuItem>
							<ServiceMenuItem>filmy Korporacyjne</ServiceMenuItem>
							<ServiceMenuItem>Webinary & podcasty</ServiceMenuItem>
							<ServiceMenuItem>SPOTY SPOŁECZNE</ServiceMenuItem>
							<ServiceMenuItem>obsługa abonamentowa</ServiceMenuItem>
						</ul>
					</div>
					<div className="">
						<ServiceHeading href={`${links.services.main}${links.services.photo}`}>
							Zdjęcia
						</ServiceHeading>
						<ul className="space-y-3 text-xs font-normal uppercase text-lightGrey">
							<ServiceMenuItem>sesje Wizerunkowe</ServiceMenuItem>
							<ServiceMenuItem>Eventy & konfererencje</ServiceMenuItem>
							<ServiceMenuItem>sesje Biznesowe</ServiceMenuItem>
							<ServiceMenuItem>fotografia produktowa</ServiceMenuItem>
							<ServiceMenuItem>zdjęcia z drona</ServiceMenuItem>
							<ServiceMenuItem>obsługa abonamentowa</ServiceMenuItem>
						</ul>
					</div>
				</div>
				<div className="mt-36 flex flex-col max-lg:space-y-20 lg:flex-row">
					<div className="flex flex-1 flex-col justify-between">
						<p
							ref={taglineRef as React.RefObject<HTMLParagraphElement>}
							className={`mb-12 max-w-[600px] text-3xl font-medium lg:text-[2.5rem] lg:leading-[50px] ${
								taglineInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
							}`}
						>
							<FlipWords word="Wierzymy, że najlepsze pomysły rodzą się w atmosferze swobody. Dlatego działamy luźno,
							a tworzymy sztywniutko."></FlipWords>
						</p>
						<div
							className={`${taglineInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
							style={{
								transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
								transitionDelay: taglineInView ? "0.2s" : "0s",
							}}
						>
							<CTAButton href={links.contactPage} variant="tertiary">
								Poznaj się z nami
							</CTAButton>
						</div>
					</div>
					<div className="grid max-w-[750px] flex-1 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2">
						<ValueBox
							icon={PrecisionIcon}
							title="Precyzja"
							order={1}
							className="order-1 max-w-[15.625rem] self-end rounded-br-none max-md:mt-auto"
						/>
						<ValueBox
							icon={EmpathyIcon}
							title="Empatia"
							order={2}
							className="order-3 h-full w-full max-w-[15.625rem] rounded-bl-none max-md:-mt-[1px] max-md:ml-auto max-md:rounded-tl-none"
						/>
						<ValueBox
							icon={OpennessIcon}
							title="Otwartość"
							order={3}
							className="order-5 -ml-[0.063rem] -mr-[0.063rem] -mt-[0.063rem] max-w-[15.75rem] rounded-t-none max-md:-mt-[2px]"
						/>
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
