import { links } from "@/constants";
import { cn } from "@/lib/utils";
import KbLogoIcon from "@/ui/icons/KbLogoIcon";
import LinkedinIcon from "@/ui/icons/LinkedinIcon";
import { CTAButton } from "@/ui/molecules/CTAButton";
import WhiteBox from "@/ui/organisms/WhiteBox";
import pawelImg from "@public/pawel.webp";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";

const team: {
	img: StaticImageData;
	roles: string[];
	name: string;
	socials: { link: string; icon: (props?: React.SVGProps<SVGSVGElement>) => JSX.Element };
}[] = [
	{
		img: pawelImg,
		name: "Paweł “Puciak” Ciupak",
		roles: ["współzałożyciel", "fotograf", "Videographer"],
		socials: {
			link: "https://www.linkedin.com/in/puciak/",
			icon: LinkedinIcon,
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
	},
	{
		img: pawelImg,
		name: "Mateusz Sala",
		roles: ["Kreatywny brand (PARTNER biznesowy)", "website development"],
		socials: {
			link: "",
			icon: KbLogoIcon,
		},
	},
];

const TeamSectionAboutUs = () => {
	return (
		<WhiteBox>
			<div className="container">
				<h2 className="mb-0 text-[2.5rem] leading-[50px] lg:mb-0">Aleście ekipę zmontowali</h2>
				<div className="flex flex-col">
					{team.map((item, idx) => (
						<div
							className="flex flex-col justify-between border-b border-lightGrey py-20 max-md:space-y-10 lg:flex-row"
							key={`${item.name}-${idx}`}
						>
							<div className="flex flex-col md:flex-row md:items-center md:space-x-6">
								<Image alt="Paweł Ciupak" src={item.img} />
								<span className="inline-block whitespace-nowrap text-[1.313rem] leading-[33px] max-md:mt-2">
									{item.name}
								</span>
							</div>
							<div className="flex flex-col md:flex-row md:items-center">
								<div className="flex flex-col font-geist text-xs max-md:space-y-4 md:flex-row">
									{item.roles.map((role, idx) => (
										<span
											className={twMerge(
												"relative inline-block whitespace-nowrap uppercase",
												item.roles.length !== idx + 1 &&
													"mr-4 pr-4 after:absolute after:right-0 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:bg-basicDark max-md:after:hidden",
											)}
											key={`${item}-${idx}`}
										>
											{role}
										</span>
									))}
								</div>
								<a
									href={item.socials.link}
									target="_blank"
									className={cn(
										"inline-block w-fit p-2 max-md:mt-10 md:ml-[8.375rem]",
										idx !== 2 && "rounded-[0.125rem] border border-lightGrey",
									)}
								>
									{item.socials.icon()}
								</a>
							</div>
						</div>
					))}
				</div>
				<div className="mt-20 flex flex-col items-center justify-between max-md:space-y-8 md:flex-row">
					<p className="font-geist text-xs uppercase max-md:text-center">
						Zainteresowany współpracą? <br className="hidden max-md:block" />
						<Link href={links.contactPage} className="underline">
							odezwij się do nas na maila!
						</Link>
					</p>
					<CTAButton href={links.contactPage}>Zrealizuj projekt z nami</CTAButton>
				</div>
			</div>
		</WhiteBox>
	);
};

export default TeamSectionAboutUs;
