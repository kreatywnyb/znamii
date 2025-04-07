// "use client";
// import { links } from "@/constants";
// import { cn } from "@/lib/utils";
// import LogoIcon from "@/ui/icons/LogoIcon";
// import Link from "next/link";
// import { CTAButton } from "../molecules/CTAButton";
// import MobileNav from "../molecules/MobileNav";
// import Navigation from "../molecules/Navigation";

// const Header = () => {
// 	return (
// 		<header className={cn("relative z-50 bg-basicDark")}>
// 			<div className="container relative z-20 flex h-full items-center justify-between py-5">
// 				<div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-basicDark md:hidden" />
// 				<div className="relative z-20 flex h-full flex-1 items-center bg-basicDark">
// 					<Link href={links.homePage}>
// 						<LogoIcon />
// 					</Link>
// 				</div>
// 				<div className="hidden flex-1 justify-center md:flex">
// 					<Navigation />
// 				</div>
// 				<div className="hidden flex-1 justify-end md:flex">
// 					<CTAButton className="!text-xs" href={links.contactPage} variant="primary">
// 						Zrealizuj projekt
// 					</CTAButton>
// 				</div>
// 				<MobileNav />
// 			</div>
// 		</header>
// 	);
// };

// export default Header;
"use client";
import { links } from "@/constants";
import { cn } from "@/lib/utils";
import LogoIcon from "@/ui/icons/LogoIcon";
import Link from "next/link";
import { CTAButton } from "../molecules/CTAButton";
import MobileNav from "../molecules/MobileNav";
import Navigation from "../molecules/Navigation";
import { useEffect, useState } from "react";

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);

	// Handle scroll events
	useEffect(() => {
		const handleScroll = () => {
			// Set sticky when scroll position is > 100px
			setIsSticky(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 z-50 w-full bg-basicDark transition-all duration-300",
				isSticky ? "py-5" : "py-5",
			)}
		>
			<div className="container relative z-20 flex h-full items-center justify-between">
				{/* Logo */}
				<div className="relative z-20 flex h-full flex-1 items-center">
					<Link href={links.homePage}>
						<LogoIcon />
					</Link>
				</div>

				{/* Center section with moving navigation */}
				<div
					className="relative hidden h-full flex-1 py-2 md:block"
					onMouseLeave={() => !isSticky && setIsSticky(true)}
				>
					<div
						className={cn(
							"nav-container transition-all duration-500 ease-in-out",
							isSticky
								? "invisible translate-x-full opacity-0"
								: "visible translate-x-0 opacity-100",
						)}
					>
						<Navigation />
					</div>
				</div>

				{/* Right section with CTA and burger */}
				<div className="hidden flex-1 items-center justify-end md:flex">
					<div
						className={cn(
							"desk mr-6 cursor-pointer transition-all duration-500 ease-in-out",
							isSticky ? "visible opacity-100" : "invisible opacity-0",
						)}
						onMouseEnter={() => {
							if (isSticky) setIsSticky(false);
						}}
						onClick={() => isSticky && setIsSticky(false)}
					>
						{/* Burger Icon */}
						<div className="relative z-20 flex h-6 cursor-pointer flex-col justify-center space-y-2">
							<span className={cn("block h-[2px] w-7 bg-primary transition")}></span>
							<span className={cn("block h-[2px] w-7 bg-primary transition")}></span>
						</div>
					</div>

					{/* CTA Button - Always visible */}
					<CTAButton className="!text-xs" href={links.contactPage} variant="primary">
						Zrealizuj projekt
					</CTAButton>
				</div>

				{/* Original Mobile Nav - Unchanged */}
				<div className="md:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
