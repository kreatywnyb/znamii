"use client";
import { links } from "@/constants";
import KbLogoIcon from "@/ui/icons/KbLogoIcon";
import LinkedinIcon from "@/ui/icons/LinkedinIcon";
import { CTAButton } from "@/ui/molecules/CTAButton";
import WhiteBox from "@/ui/organisms/WhiteBox";
import TerminalText from "@/ui/atoms/TerminalText";
import pawelImg from "@public/pawel.webp";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { JSX, useRef } from "react";
import { useInView } from "framer-motion";
import TeamMember from "./TeamMember";

const team: {
	img: StaticImageData;
	roles: string[];
	name: string;
	socials: { link: string; icon: (props?: React.SVGProps<SVGSVGElement>) => JSX.Element };
	description: {
		title: string;
		desc: string;
		hobbies: string[];
	};
}[] = [
	{
		img: pawelImg,
		name: "Paweł “Puciak” Ciupak",
		roles: ["współzałożyciel", "fotograf", "Videographer"],
		socials: {
			link: "https://www.linkedin.com/in/puciak/",
			icon: LinkedinIcon,
		},
		description: {
			title: "Paweł Filmowiec, fotograf, tatko, ojciec współzałożyciel 😏",
			desc: "Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie",
			hobbies: [
				"futbol amerykański",
				"formuła 1",
				"zimowe slalomy i hopki",
				"lubi w playstation",
				"czarna kawa",
				"czarny humor",
			],
		},
	},
	{
		img: pawelImg,
		name: "Maks Myśliwiec",
		roles: ["współzałożyciel", "Brand Designer"],
		socials: {
			link: "https://www.linkedin.com/in/maksymilian-mysliwiec/",
			icon: LinkedinIcon,
		},
		description: {
			title: "Maks Filmowiec, fotograf, tatko, ojciec współzałożyciel 😏",
			desc: "Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie",
			hobbies: [
				"futbol amerykański",
				"formuła 1",
				"zimowe slalomy i hopki",
				"lubi w playstation",
				"czarna kawa",
				"czarny humor",
			],
		},
	},
	{
		img: pawelImg,
		name: "Mateusz Sala",
		roles: ["Kreatywny brand (PARTNER biznesowy)", "website development"],
		socials: {
			link: "",
			icon: KbLogoIcon,
		},
		description: {
			title: "Mateusz Filmowiec, fotograf, tatko, ojciec współzałożyciel 😏",
			desc: "Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś mógł spokojnie",
			hobbies: [
				"futbol amerykański",
				"formuła 1",
				"zimowe slalomy i hopki",
				"lubi w playstation",
				"czarna kawa",
				"czarny humor",
			],
		},
	},
];

const TeamSectionAboutUs = () => {
	const terminalRef = useRef(null);
	const isTerminalInView = useInView(terminalRef, { once: true, amount: 0.3 });

	return (
		<WhiteBox>
			<div className="container">
				<h2 className="mb-0 text-[2.5rem] leading-[50px] lg:mb-0">Aleście ekipę zmontowali</h2>
				<div className="flex flex-col">
					{team.map((item, idx) => (
						<TeamMember key={idx} item={item} idx={idx} />
					))}
				</div>
				<div className="mt-10 flex flex-col items-center justify-between max-md:space-y-8 md:mt-20 md:flex-row">
					<div ref={terminalRef} className="font-geist text-xs uppercase max-md:text-center">
						<TerminalText
							text="Zainteresowany współpracą?"
							animateWhenInView={true}
							styles="inline-block"
						/>
						<br className="hidden max-md:block" />
						{isTerminalInView && (
							<Link
								href={links.contactPage}
								className="underline ml-2"
								style={{
									opacity: 0,
									animation: "fadeIn .5s ease-in-out 1.5s forwards",
								}}
							>
								odezwij się do nas na maila!
							</Link>
						)}
						<style jsx>{`
							@keyframes fadeIn {
								from {
									opacity: 0;
									transform: translateY(10px);
								}
								to {
									opacity: 1;
									transform: translateY(0px);
								}
							}
						`}</style>
					</div>
					<CTAButton href={links.contactPage} variant="primaryv2">
						Zrealizuj projekt z nami
					</CTAButton>
				</div>
			</div>
		</WhiteBox>
	);
};

export default TeamSectionAboutUs;
