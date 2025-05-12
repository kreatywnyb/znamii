import { links } from "@/constants";
import { CTAButton } from "@/ui/molecules/CTAButton";
import Image, { StaticImageData } from "next/image";
import WhiteBox from "@/ui/organisms/WhiteBox";
import React from "react";
import servImg1 from "@public/serv-img-1.webp";
import servImg2 from "@public/case-4.webp";
import StarIcon from "@/ui/icons/StarIcon";
import GoogleIcon from "@/ui/icons/GoogleIcon";
import SubServices, { ScrollableSectionInterface } from "@/ui/organisms/SubServices";
import ServiceCTA from "@/ui/organisms/ServiceCTA";
import { FlipWords } from "@/ui/molecules/FlipWords";

export type ServiceSectionProps = {
	name: string;
	headingTwo: string;
	paragraph: string;
	opinion: {
		authorImg: StaticImageData;
		company: string;
		author: string;
		text: string;
	};
};

const sections: ScrollableSectionInterface[] = [
	{
		id: 1,
		title: "Naming",
		slug: "naming",
		textTop:
			"Dobra nazwa to coś więcej niż zlepek liter – to pierwsze wrażenie, jakie robisz na kliencie. Powinna być chwytliwa, unikalna i budzić zamierzone emocje. W naszym procesie tworzenia nazw łączymy kreatywność z analitycznym podejściem, dzięki czemu powstają nazwy, które zostają w głowie i mają szansę stać się silnym fundamentem Twojej marki.",
		textBottom:
			"Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie budować swoją markę od samego początku.",
		imageLeft: {
			alt: "",
			src: servImg1,
		},
		imageRight: {
			alt: "",
			src: servImg2,
		},
	},
	{
		id: 2,
		title: "Logo",
		slug: "logo",
		imageLeft: {
			alt: "",
			src: servImg1,
		},
		imageRight: {
			alt: "",
			src: servImg2,
		},
		textTop:
			"Dobra nazwa to coś więcej niż zlepek liter – to pierwsze wrażenie, jakie robisz na kliencie. Powinna być chwytliwa, unikalna i budzić zamierzone emocje. W naszym procesie tworzenia nazw łączymy kreatywność z analitycznym podejściem, dzięki czemu powstają nazwy, które zostają w głowie i mają szansę stać się silnym fundamentem Twojej marki.",
		textBottom:
			"Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie budować swoją markę od samego początku.",
	},
	{
		id: 3,
		title: "Identyfikacja wizualna",
		slug: "identyfikacja-wizualna",
		imageLeft: {
			alt: "",
			src: servImg1,
		},
		imageRight: {
			alt: "",
			src: servImg2,
		},
		textTop:
			"Dobra nazwa to coś więcej niż zlepek liter – to pierwsze wrażenie, jakie robisz na kliencie. Powinna być chwytliwa, unikalna i budzić zamierzone emocje. W naszym procesie tworzenia nazw łączymy kreatywność z analitycznym podejściem, dzięki czemu powstają nazwy, które zostają w głowie i mają szansę stać się silnym fundamentem Twojej marki.",
		textBottom:
			"Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie budować swoją markę od samego początku.",
	},
	{
		id: 4,
		title: "Web Design",
		slug: "web-design",
		imageLeft: {
			alt: "",
			src: servImg1,
		},
		imageRight: {
			alt: "",
			src: servImg2,
		},
		textTop:
			"Dobra nazwa to coś więcej niż zlepek liter – to pierwsze wrażenie, jakie robisz na kliencie. Powinna być chwytliwa, unikalna i budzić zamierzone emocje. W naszym procesie tworzenia nazw łączymy kreatywność z analitycznym podejściem, dzięki czemu powstają nazwy, które zostają w głowie i mają szansę stać się silnym fundamentem Twojej marki.",
		textBottom:
			"Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie budować swoją markę od samego początku.",
	},
	{
		id: 5,
		title: "Projekty do druku",
		slug: "projekty-do-druku",
		imageLeft: {
			alt: "",
			src: servImg1,
		},
		imageRight: {
			alt: "",
			src: servImg2,
		},
		textTop:
			"Dobra nazwa to coś więcej niż zlepek liter – to pierwsze wrażenie, jakie robisz na kliencie. Powinna być chwytliwa, unikalna i budzić zamierzone emocje. W naszym procesie tworzenia nazw łączymy kreatywność z analitycznym podejściem, dzięki czemu powstają nazwy, które zostają w głowie i mają szansę stać się silnym fundamentem Twojej marki.",
		textBottom:
			"Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie budować swoją markę od samego początku.",
	},
	{
		id: 6,
		title: "Usługi abonamentowe",
		slug: "uslugi-abonamentowe",
		imageLeft: {
			alt: "",
			src: servImg1,
		},
		imageRight: {
			alt: "",
			src: servImg2,
		},
		textTop:
			"Dobra nazwa to coś więcej niż zlepek liter – to pierwsze wrażenie, jakie robisz na kliencie. Powinna być chwytliwa, unikalna i budzić zamierzone emocje. W naszym procesie tworzenia nazw łączymy kreatywność z analitycznym podejściem, dzięki czemu powstają nazwy, które zostają w głowie i mają szansę stać się silnym fundamentem Twojej marki.",
		textBottom:
			"Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie budować swoją markę od samego początku.",
	},
];

const ServiceSection = ({ opinion, headingTwo, name, paragraph }: ServiceSectionProps) => {
	return (
		<section className="">
			<WhiteBox className="relative z-10 md:[&>div]:-mt-[12%]">
				<div className="container flex flex-col justify-between lg:flex-row">
					<div className="max-w-[780px] flex-1">
						<FlipWords word={name} as="h1"></FlipWords>
						<h2 className="mt-5 text-[1.313rem]">{headingTwo}</h2>
						<p className="mt-8 text-[1.063rem] tracking-[0.02em] text-darkGrey">{paragraph}</p>
						<div className="mt-11 flex flex-col md:flex-row md:space-x-16">
							<CTAButton variant="primaryv2" className="max-md:mb-6" href={links.contactPage}>
								Zrealizuj projekt z nami
							</CTAButton>
							<div className="order-2 flex h-fit w-fit items-center justify-center gap-4 border border-[#EBEBEB] bg-white px-[1.375rem] py-[0.875rem]">
								<GoogleIcon className="h-[1.125rem] w-[1.125rem]" />
								<div className="flex gap-0.5">
									<StarIcon />
									<StarIcon />
									<StarIcon />
									<StarIcon />
									<StarIcon />
								</div>
								<div className="font-geist text-sm font-medium">5.0</div>
							</div>
						</div>
					</div>
					<div className="max-w-[23.75rem] flex-1 max-md:mt-10">
						<div className="relative h-full min-h-[24rem] flex-1 border border-basicDark text-white">
							<div className="h-full">
								<div className="absolute flex h-full flex-col justify-between p-8 text-basicDark transition-all duration-500 group-hover:bg-opacity-0">
									<p className={`text-[1.313rem] font-medium text-basicDark`}>{opinion.text}</p>

									<div className="flex items-end gap-4 max-md:mt-4">
										<div className="relative h-[60px] w-[60px] bg-primary">
											<Image src={opinion.authorImg} className="h-full" alt="author" />
											<div className="absolute -left-4 h-4 w-4 bg-primary font-medium"></div>
										</div>
										<div className={`text-basicDark`}>
											<p className="text-[1.313rem] font-medium">{opinion.author}</p>
											<p className="font-geist text-[0.75rem] font-medium uppercase">
												{opinion.company}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container -mb-10 mt-20 text-5xl md:hidden">
					<FlipWords word={"Nasze usługi"} as="h2"></FlipWords>
				</div>
				<SubServices sections={sections} />
				<ServiceCTA />
			</WhiteBox>
		</section>
	);
};

export default ServiceSection;
