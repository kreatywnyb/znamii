"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import NavItem from "../atoms/NavItem";
import { links } from "@/constants";
import NavItemExpanded from "../atoms/NavItemExpanded";
import { CTAButton } from "./CTAButton";
import { usePathname } from "next/navigation";

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const pathname = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<div className="flex h-full items-center text-xs md:hidden">
			<div
				className="relative z-20 flex h-6 cursor-pointer flex-col justify-center space-y-2"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<span
					className={cn(
						"block h-[2px] w-7 bg-primary transition",
						isOpen && "translate-y-[5px] rotate-45",
					)}
				></span>
				<span
					className={cn(
						"block h-[2px] w-7 bg-primary transition",
						isOpen && "-translate-y-[5px] -rotate-45",
					)}
				></span>
			</div>
			<div
				// className={cn(
				// 	"container absolute left-0 right-0 top-full z-0 w-full border-b border-primary bg-basicDark py-4 text-white transition-transform",
				// 	!isOpen && "-translate-y-[250%]",
				// )}

				className={cn(
					"container absolute left-0 top-14 w-full border-b border-primary bg-basicDark py-4 text-white transition-transform duration-200 md:hidden",
					!isOpen && "z-0 -translate-y-[150%]",
				)}
			>
				<ul className="flex flex-col space-y-4">
					<li>
						<NavItem href={links.aboutUs}>Studio znami</NavItem>
					</li>
					<li>
						<NavItemExpanded
							main={{ text: "Usługi" }}
							subMenu={[
								{ href: `${links.services.main}/${links.services.video}`, text: "Video" },
								{ href: `${links.services.main}/${links.services.photo}`, text: "Zdjęcia" },
								{ href: `${links.services.main}/${links.services.branding}`, text: "Branding" },
							]}
						/>
					</li>
					<li className="transition-colors hover:text-primary">
						<NavItem href={links.portfolio}>Realizacje</NavItem>
					</li>
					<li className="transition-colors hover:text-primary">
						<NavItem href={links.contactPage}>Kontakt</NavItem>
					</li>
				</ul>
				<div className="mt-4 flex">
					<CTAButton className="!px-4 !py-2" href={links.contactPage}>
						Zralizuj projekt
					</CTAButton>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
