import React from "react";
import CopyIcon from "../icons/CopyIcon";
import InstagramIcon from "../icons/InstagramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const Footer = () => {
	return (
		<footer className="container h-96 mt-32">
			<div className="grid grid-cols-3 justify-end font-medium ">
				<h3 className="text-[40px]">Poklikasz?</h3>
				<div className="flex items-end text-[21px] leading-[33.6px]">
					<div>kontakt@znami.co</div>
					<CopyIcon className="mb-2 ml-2" />
				</div>
			</div>
			<div className="grid grid-cols-3 py-4 font-medium">
				<div></div>
				<div className="text-[21px] leading-[33.6px]">+48 694 211 577</div>
				<div className="flex gap-2 justify-end">
					<a href="" className="border-[#00000022] border p-[13px]">
						<InstagramIcon />
					</a>
					<a href="" className="border-[#00000022] border p-[13px]">
						<YoutubeIcon />
					</a>
				</div>
			</div>
			<div className="border-lightGray grid grid-cols-3 border-t border-[#00000022] py-4">
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
			<div className="grid grid-cols-3 border-t border-[#00000022] py-4">
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
