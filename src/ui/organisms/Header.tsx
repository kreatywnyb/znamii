"use client";
import { links } from "@/constants";
import { cn } from "@/lib/utils";
import LogoIcon from "@/ui/icons/LogoIcon";
import Link from "next/link";
import { CTAButton } from "../molecules/CTAButton";
import MobileNav from "../molecules/MobileNav";
import Navigation from "../molecules/Navigation";

const Header = () => {
	// const pathname = usePathname();
	// const isHomePage = pathname === "/";

	return (
		<header className={cn("relative z-50 bg-basicDark")}>
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
					<CTAButton className="!text-xs" href={links.contactPage} variant="primary">
						Zrealizuj projekt
					</CTAButton>
				</div>
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
