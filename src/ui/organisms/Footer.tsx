import React from "react";
import CopyIcon from "../icons/CopyIcon";
import InstagramIcon from "../icons/InstagramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import { contactMail } from "@/constants";

const Footer = () => {
	return (
		<footer className="container fixed bottom-0 left-1/2 -z-10 h-96 w-screen -translate-x-1/2">
			<div className="grid grid-cols-3 justify-end font-medium">
				<h3 className="text-[40px]">Poklikasz?</h3>
				<div className="flex items-end text-[21px] leading-[33.6px]">
					<div>{contactMail}</div>
					<CopyIcon className="mb-2 ml-2" />
				</div>
			</div>
			<div className="grid grid-cols-3 py-4 font-medium">
				<div></div>
				<div className="text-[21px] leading-[33.6px]">+48 694 211 577</div>
				<div className="flex justify-end gap-8">
					<a href="" className="border border-[#00000022] p-[13px]">
						<InstagramIcon />
					</a>
					<a href="" className="border border-[#00000022] p-[13px]">
						<YoutubeIcon />
					</a>
				</div>
			</div>
			<div className="border-lightGray grid grid-cols-3 border-t border-[#00000022] py-4 font-geist">
				<a className="block uppercase" href="">
					Studio
				</a>
				<a className="block uppercase" href="">
					Kontakt
				</a>
				<a className="block text-right uppercase" href="">
					Projekty
				</a>
			</div>
			<div className="grid grid-cols-3 border-t border-[#00000022] py-4 font-geist">
				<div className="block uppercase">©2025</div>
				<div className="block uppercase">ul. okulickiego 18, rzeszów</div>
				<a className="block text-right uppercase" href="">
					polityka prywatności
				</a>
			</div>
			<div></div>
		</footer>
	);
};

export default Footer;
