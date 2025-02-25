import LogoIcon from "@/ui/icons/LogoIcon";
import React from "react";
import { CTAButton } from "../molecules/CTAButton";
import { links } from "@/constants";
import Link from "next/link";
import Navigation from "../molecules/Navigation";
import MobileNav from "../molecules/MobileNav";

const Header = () => {
	return (
		<header className="relative z-50 bg-basicDark">
			<div className="container relative z-20 flex h-full items-center justify-between py-5">
				<div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-basicDark md:hidden" />
				<div className="relative z-20 flex h-full flex-1 items-center bg-basicDark">
					<Link href={links.homePage}>
						<LogoIcon />
					</Link>
				</div>
				<div className="hidden flex-1 justify-center md:flex">
					<Navigation />
				</div>
				<div className="hidden flex-1 justify-end md:flex">
					<CTAButton className="!text-xs" href={links.contactPage}>
						Zrealizuj projekt
					</CTAButton>
				</div>
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
