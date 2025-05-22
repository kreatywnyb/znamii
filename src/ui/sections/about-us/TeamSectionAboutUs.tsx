"use client";
import { links } from "@/constants";
import KbLogoIcon from "@/ui/icons/KbLogoIcon";
import LinkedinIcon from "@/ui/icons/LinkedinIcon";
import { CTAButton } from "@/ui/molecules/CTAButton";
import WhiteBox from "@/ui/organisms/WhiteBox";
import TerminalText from "@/ui/atoms/TerminalText";
// import pawelImg from "@public/pawel.webp";
// import { StaticImageData } from "next/image";
import Link from "next/link";
import { JSX, useRef } from "react";
import { useInView } from "framer-motion";
import TeamMember from "./TeamMember";

const team: {
	// img: StaticImageData;
	img: string;
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
		// img: pawelImg,
		img: "https://api.znami.usermd.net/wp-content/uploads/2025/05/Glowki-Puciak.mp4",
		name: "Paweł “Puciak” Ciupak",
		roles: ["współzałożyciel", "fotograf", "Videographer"],
		socials: {
			link: "https://www.linkedin.com/in/puciak/",
			icon: LinkedinIcon,
		},
		description: {
			title: "Filmowiec, fotograf, wulkan energii 😏",
			desc: "Specjalista od realizacji video oraz sesji zdjęciowych z kwitnącym doświadczeniem w zakresie motion designu. Prowadzi szkolenia z produkcji video. Jest duszą towarzystwa z magiczną zdolnością tworzenia swobodnej atmosfery, nawet na najbardziej drewnianych planach zdjęciowych. Gdy tylko klient nie ma nic przeciwko, to Puciak dzwoni zamiast pisać. Jest wszędzie, o wszystkim pamięta, przytuli.",
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
		// img: pawelImg,
		img: "https://api.znami.usermd.net/wp-content/uploads/2025/05/Glowki-Maks.mp4",
		name: "Maks Myśliwiec",
		roles: ["współzałożyciel", "Brand Designer"],
		socials: {
			link: "https://www.linkedin.com/in/maksymilian-mysliwiec/",
			icon: LinkedinIcon,
		},
		description: {
			title: "Brand designer z sercem marketera, cicha woda 🌊",
			desc: "Na spotkaniach nie mówi za wiele, ale uważnie słucha i ma w zanadrzu mem na każdą okazję. Odpowiedzialny jest za identyfikacje wizualne, projekty stron internetowych, grafiki na media społecznościowe oraz te do druku. Od lat współpracuje z zespołami marketingowymi różnych firm i agencji. Wykłada na uczelni wyższej i czasem prowadzi prelekcje na konferencjach. Artystyczny łeb - nie zauważa powiadomień, gdy już wciągnie się w pracę.",
			hobbies: [
				"japonia i język japoński",
				"muzyka z winyli",
				"granie na gitarzu",
				"gry retro",
				"team biała czekolada",
				"absurdalny humor",
			],
		},
	},
	{
		// img: pawelImg,
		img: "https://api.znami.usermd.net/wp-content/uploads/2025/05/Glowki-Mati.mp4",
		name: "Mateusz Sala",
		roles: ["Kreatywny brand (PARTNER biznesowy)", "website development"],
		socials: {
			link: "",
			icon: KbLogoIcon,
		},
		description: {
			title: "Gdzie Znami nie może, tam Mateusza pośle 😎",
			desc: "Współzałożyciel agencji Kreatywny Brand, która jako nasz partner biznesowy, odpowiada za kodowanie i szerokopojęty development stron internetowych tworzonych przez Znami Studio. Często pojawia się na callach, by trzymać rękę na pulsie i móc sprawniej koordynować prace nad wdrożeniem stron. Posiada wieloletnie doświadczenie jako web i product designer.",
			hobbies: [
				"smart home i automatyzacje",
				"produkty firmy apple",
				"ostre sosy",
				"kawka z przelewu",
				"śmieszy go disco polo",
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
				<h2 className="mb-0 text-[2.5rem] leading-[50px] lg:mb-0">Aleście ekipę zmontowali 😅</h2>
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
								className="ml-2 underline"
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
