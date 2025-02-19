"use client";
import Link from "next/link";
import React, { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";
import { cn } from "@/lib/utils";

export type NavItemExpandedProps = {
	main: {
		text: string;
		href?: string;
	};
	subMenu: {
		text: string;
		href: string;
	}[];
};

const NavItemExpanded = ({ main, subMenu }: NavItemExpandedProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative" onMouseLeave={() => setIsOpen(false)}>
			<div onMouseEnter={() => setIsOpen(true)} onClick={() => setIsOpen((prev) => !prev)}>
				{main.href ? (
					<Link href={main.href} className="flex items-center space-x-2">
						<span>{main.text}</span>
						<span className={cn("transition-transform", isOpen && "rotate-180")}>
							<ChevronIcon />
						</span>
					</Link>
				) : (
					<div className="flex items-center space-x-2">
						<span>{main.text}</span>
						<span className={cn("transition-transform", isOpen && "rotate-180")}>
							<ChevronIcon />
						</span>
					</div>
				)}
			</div>
			{isOpen && (
				<div className="absolute left-1/2 top-full z-20 flex w-24 -translate-x-1/2 flex-col space-y-2 bg-basicDark px-4 py-4">
					{subMenu.map((item, idx) => (
						<Link key={idx} href={item.href} className="transition-colors hover:text-primary">
							{item.text}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default NavItemExpanded;
