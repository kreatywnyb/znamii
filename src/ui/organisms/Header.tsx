"use client";
import { links } from "@/constants";
import { cn } from "@/lib/utils";
import LogoIcon from "@/ui/icons/LogoIcon";
import Link from "next/link";
import { CTAButton } from "../molecules/CTAButton";
import MobileNav from "../molecules/MobileNav";
import Navigation from "../molecules/Navigation";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isHover, setIsHover] = useState(true);
	const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);
	const headerRef = useRef(null);
	const pathname = usePathname(); // Get current pathname for URL change detection

	// Handle mouse over/out on header
	const handleMouseEnterHeader = () => {
		setIsMouseOverHeader(true);
	};

	const handleMouseLeaveHeader = () => {
		setIsMouseOverHeader(false);
		if (isSticky && isHover) {
			setIsHover(false);
		}
	};

	// Reset header state when URL changes
	useEffect(() => {
		// Reset states when URL changes
		setIsSticky(false);
		setIsHover(true);
	}, [pathname]);

	// Handle scroll events
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				// When at top, always reset to initial state
				setIsSticky(false);
				setIsHover(true);
				return;
			}

			// Only update the sticky state if mouse is not over header
			if (!isMouseOverHeader) {
				// Set sticky when scroll position is > 100px
				setIsSticky(window.scrollY > 100);

				// Also reset hover state when scrolling and mouse is not over header
				if (isHover) {
					setIsHover(false);
				}
			}
		};

		// Initialize scroll position check
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isMouseOverHeader, isHover]);

	return (
		<header
			ref={headerRef}
			className={cn(
				"fixed top-0 z-50 w-full bg-basicDark py-5 transition-all duration-300",
				isSticky && !isHover ? "md:py-2" : "py-5",
			)}
			onMouseEnter={handleMouseEnterHeader}
			onMouseLeave={handleMouseLeaveHeader}
		>
			<div className="container relative z-20 flex h-full items-center justify-between">
				{/* Logo */}
				<div className="relative z-20 flex h-full flex-1 items-center">
					<Link href={links.homePage}>
						<LogoIcon />
					</Link>
				</div>

				{/* Center section with moving navigation */}
				<div className="relative hidden h-full flex-1 py-2 md:block">
					<div
						className={cn(
							"nav-container transition-all duration-500 ease-in-out",
							isSticky && !isHover
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
							isSticky && !isHover ? "visible opacity-100" : "invisible opacity-0",
						)}
						onMouseEnter={() => {
							setIsHover(true);
						}}
						onClick={() => isSticky && setIsHover(true)}
					>
						{/* Burger Icon */}
						<div className="relative z-20 flex h-6 cursor-pointer flex-col justify-center space-y-2">
							<span className={cn("block h-[2px] w-7 bg-primary transition")}></span>
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
