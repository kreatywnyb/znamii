import React from "react";
import CopyIcon from "../icons/CopyIcon";
import InstagramIcon from "../icons/InstagramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { contactMail } from "@/constants";

const Footer = () => {
	return (
		<footer className="container fixed bottom-0 left-1/2 -z-10 md:h-96 -translate-x-1/2 max-w-screen">
			<div className="grid md:grid-cols-3 grid-cols-1 max-md:place-items-center font-medium">
				<h3 className="text-[40px]">Poklikasz?</h3>
				<div className="flex items-end text-[21px] leading-[33.6px]">
					<div>{contactMail}</div>
					<CopyIcon className="mb-2 ml-2" />
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 py-4 font-medium max-md:place-items-center">
				<div className="hidden md:block"></div>
				<div className="text-[21px] leading-[33.6px]">+48 694 211 577</div>
				<div className="flex md:justify-end gap-2 md:mt-0 mt-4 md:gap-8">
					<a href="" className="border border-[#00000022] p-[13px]">
						<InstagramIcon />
					</a>
					<a href="" className="border border-[#00000022] p-[13px]">
						<YoutubeIcon />
					</a>
				</div>
			</div>
			<div className="border-lightGray grid grid-cols-1 md:grid-cols-3 max-md:place-items-center border-t border-[#00000022] py-4 font-geist">
				<a className="block uppercase" href="">
					Studio
				</a>
				<a className="block uppercase" href="">
					Kontakt
				</a>
				<a className="block md:text-right uppercase" href="">
					Projekty
				</a>
				<a className="block md:text-right uppercase md:hidden" href="">
					Polityka prywatności
				</a>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 max-md:place-items-center border-t border-[#00000022] py-4 font-geist">
				<div className="block uppercase max-md:order-2 max-md:mt-4">©2025</div>
				<div className="block uppercase max-md:order-1">ul. okulickiego 18, rzeszów</div>
				<a className="block md:text-right uppercase max-md:hidden" href="">
					polityka prywatności
				</a>
			</div>
			<div></div>
		</footer>
	);
};

export default Footer;
