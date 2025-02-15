import LogoIcon from "@/ui/icons/LogoIcon";
import React from "react";
import { CTAButton } from "../molecules/CTAButton";
import { links } from "@/constants";
import Link from "next/link";
import Navigation from "../molecules/Navigation";

const Header = () => {
	return (
		<header className="relative z-20 bg-basicDark py-5">
			<div className="container flex items-center justify-between">
				<div className="flex-1">
					<Link href={links.homePage}>
						<LogoIcon />
					</Link>
				</div>
				<div className="flex flex-1 justify-center">
					<Navigation />
				</div>
				<div className="hidden flex-1 justify-end md:flex">
					<CTAButton href={links.contactPage}>Zralizuj projekt</CTAButton>
				</div>
				<div className="flex text-white md:hidden">Burger</div>
			</div>
		</header>
	);
};

export default Header;
