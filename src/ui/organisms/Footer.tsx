import React from "react";
import InstagramIcon from "../icons/InstagramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { contactMail, links, phoneNumber } from "@/constants";
import CopyButton from "../molecules/CopyButton";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="max-w-screen container fixed bottom-0 left-1/2 -z-10 -translate-x-1/2 md:h-96">
			<div className="max-md:place-items-left grid grid-cols-1 font-medium md:grid-cols-3">
				<h3 className="text-[2.5rem] max-md:mb-2">Poklikasz?</h3>
				<div className="flex items-end text-[1.313rem] leading-[160%] no-underline">
					<div>{contactMail}</div>
					<div>
						<CopyButton textToCopy={contactMail} />
					</div>
				</div>
			</div>
			<div className="max-md:place-items-left mb-4 mt-2 grid grid-cols-1 font-medium md:mb-10 md:mt-1 md:grid-cols-3">
				<div className="hidden md:block"></div>
				<div className="mt-auto flex items-center text-[1.313rem] leading-[160%]">
					<a href={`tel:${phoneNumber}`} className="-mb-[7px]">
						{phoneNumber}
					</a>
				</div>
				<div className="mt-6 flex gap-2 md:mt-0 md:justify-end md:gap-8">
					<a
						href="https://www.instagram.com/znami.co/"
						target="_blank"
						className="border border-[#00000022] p-[13px] transition-colors hover:bg-gray-200"
					>
						<InstagramIcon />
					</a>
					<a
						href="https://www.youtube.com/@Znamico"
						target="_blank"
						className="border border-[#00000022] p-[13px] transition-colors hover:bg-gray-200"
					>
						<YoutubeIcon />
					</a>
				</div>
			</div>
			<div className="border-lightGray max-md:place-items-left grid grid-cols-1 border-t border-[#00000022] py-4 font-geist text-xs max-md:space-y-3 md:grid-cols-3">
				<Link className="block uppercase" href={links.aboutUs}>
					Studio
				</Link>
				<Link className="block uppercase" href={links.contactPage}>
					Kontakt
				</Link>
				<Link className="block uppercase md:text-right" href={links.portfolio}>
					Projekty
				</Link>
				<Link className="block uppercase md:hidden md:text-right" href={links.privacyPolicy}>
					Polityka prywatności
				</Link>
			</div>
			<div className="max-md:place-items-left grid grid-cols-1 border-t border-[#00000022] py-4 font-geist text-xs max-md:pb-8 md:grid-cols-3">
				<div className="block uppercase max-md:order-2 max-md:mt-4">©2025</div>
				<div className="block uppercase no-underline max-md:order-1">
					ul. okulickiego 18, rzeszów
				</div>
				<a className="block uppercase max-md:hidden md:text-right" href={links.privacyPolicy}>
					polityka prywatności
				</a>
			</div>
			<div></div>
		</footer>
	);
};

export default Footer;
