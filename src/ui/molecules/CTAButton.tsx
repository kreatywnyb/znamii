import Link from "next/link";
import React, { ReactNode } from "react";
import ArrowIcon from "../icons/ArrowIcon";

export type CTAButton = {
	children: ReactNode;
	href: string;
	variant?: "primary" | "white";
};

export const CTAButton = ({ children, href, variant = "primary" }: CTAButton) => {
	return (
		<Link
			href={href}
			className={`flex w-fit items-center justify-center space-x-[0.625rem] ${variant == "primary" ? "bg-primary" : "border border-bg bg-white"} px-8 py-4 font-geist font-medium uppercase text-basicDark`}
		>
			<span>{children}</span>
			<ArrowIcon className="h-4 w-4" />
		</Link>
	);
};
