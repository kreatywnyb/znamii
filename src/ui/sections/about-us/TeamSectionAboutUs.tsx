import { contactMail, links } from "@/constants";
import Image, { StaticImageData } from "next/image";
import LinkedinIcon from "@/ui/icons/LinkedinIcon";
import pawelImg from "@public/pawel.webp";
import { CTAButton } from "@/ui/molecules/CTAButton";
import KbLogoIcon from "@/ui/icons/KbLogoIcon";
import { twMerge } from "tailwind-merge";
import { JSX } from "react";

const team: {
	img: StaticImageData;
	roles: string[];
	name: string;
	socials: { link: string; icon: (props?: React.SVGProps<SVGSVGElement>) => JSX.Element };
}[] = [
	{
		img: pawelImg,
		name: "Paweł “Puciak” Ciupak",
		roles: ["co-founder", "fotograf", "Videographer"],
		socials: {
			link: "https://www.linkedin.com/in/puciak/",
			icon: LinkedinIcon,
		},
	},
	{
		img: pawelImg,
		name: "Maks Myśliwiec",
		roles: ["co-founder", "Brand Designer"],
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
		<section className="px-4">
			<div className="mx-auto max-w-[1700px] bg-white">
				<div className="container py-20">
					<h2 className="mb-20 text-[40px] leading-[50px]">Aleście ekipę zmontowali</h2>
					<div className="flex flex-col">
						{team.map((item, idx) => (
							<div
								className="flex flex-col justify-between border-b border-lightGrey py-20 max-md:space-y-10 lg:flex-row"
								key={`${item.name}-${idx}`}
							>
								<div className="flex flex-col md:flex-row md:items-center md:space-x-6">
									<Image alt="Paweł Ciupak" src={item.img} />
									<span className="inline-block whitespace-nowrap text-[21px] leading-[33px]">
										{item.name}
									</span>
								</div>
								<div className="flex flex-col md:flex-row md:items-center">
									<div className="flex flex-col font-geist text-xs max-md:space-y-4 md:flex-row">
										{item.roles.map((role, idx) => (
											<span
												className={twMerge(
													"relative inline-block whitespace-nowrap",
													item.roles.length !== idx + 1 &&
														"mr-4 pr-4 after:absolute after:right-0 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:bg-basicDark max-md:after:hidden",
												)}
												key={`${item}-${idx}`}
											>
												{role}
											</span>
										))}
									</div>
									<a href={item.socials.link} target="_blank" className="max-md:pt-10 md:pl-28">
										{item.socials.icon()}
									</a>
								</div>
							</div>
						))}
					</div>
					<div className="mt-20 flex flex-col items-center justify-between max-md:space-y-8 md:flex-row">
						<p className="font-geist text-xs uppercase max-md:text-center">
							Zainteresowany współpracą? <br className="hidden max-md:block" />
							<a href={`mailto:${contactMail}`} className="underline">
								odezwij się do nas na maila!
							</a>
						</p>
						<CTAButton href={links.contactPage}>Zrealizuj projekt z nami</CTAButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSectionAboutUs;
