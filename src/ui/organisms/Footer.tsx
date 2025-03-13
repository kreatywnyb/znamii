import React from "react";
import InstagramIcon from "../icons/InstagramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { contactMail, phoneNumber } from "@/constants";
import CopyButton from "../molecules/CopyButton";

const Footer = () => {


	return (
		<footer className="max-w-screen container fixed bottom-0 left-1/2 -z-10 -translate-x-1/2 md:h-96">
			<div className="max-md:place-items-left grid grid-cols-1 font-medium md:grid-cols-3">
				<h3 className="text-[2.5rem]">Poklikasz?</h3>
				<div className="flex items-end text-[1.313rem] leading-[33.6px]">
					<div>{contactMail}</div>
					<div>
						<CopyButton textToCopy={contactMail}/>
					</div>
				</div>
			</div>
			<div className="max-md:place-items-left grid grid-cols-1 font-medium md:grid-cols-3 mb-10">
				<div className="hidden md:block"></div>
				<div className="flex items-center text-[1.313rem] mt-auto"><a href={`tel:${phoneNumber}`} className="-mb-[7px]">{phoneNumber}</a></div>
				<div className="mt-4 flex gap-2 md:mt-0 md:justify-end md:gap-8">
					<a href="" className="border border-[#00000022] p-[13px] hover:bg-gray-200 transition-colors">
						<InstagramIcon />
					</a>
					<a href="" className="border border-[#00000022] p-[13px] hover:bg-gray-200 transition-colors">
						<YoutubeIcon />
					</a>
				</div>
			</div>
			<div className="border-lightGray max-md:place-items-left grid grid-cols-1 border-t border-[#00000022] py-4 font-geist text-xs md:grid-cols-3">
				<a className="block uppercase" href="">
					Studio
				</a>
				<a className="block uppercase" href="">
					Kontakt
				</a>
				<a className="block uppercase md:text-right" href="">
					Projekty
				</a>
				<a className="block uppercase md:hidden md:text-right" href="">
					Polityka prywatności
				</a>
			</div>
			<div className="max-md:place-items-left grid grid-cols-1 border-t border-[#00000022] py-4 font-geist text-xs md:grid-cols-3">
				<div className="block uppercase max-md:order-2 max-md:mt-4">©2025</div>
				<div className="block uppercase max-md:order-1">ul. okulickiego 18, rzeszów</div>
				<a className="block uppercase max-md:hidden md:text-right" href="">
					polityka prywatności
				</a>
			</div>
			<div></div>
		</footer>
	);
};

export default Footer;
