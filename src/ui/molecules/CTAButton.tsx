import Link from "next/link";
import React, { ReactNode } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import { cn } from "@/lib/utils";

export type CTAButton = {
	children: ReactNode;
	href: string;
	variant?: "primary" | "white";
	className?: string;
};

export const CTAButton = ({ children, href, variant = "primary", className }: CTAButton) => {
	return (
		<Link
			href={href}
			className={cn(
				`group relative flex w-fit items-center justify-center overflow-hidden ${variant == "primary" ? "bg-primary" : "border-bg border bg-white"} px-8 py-4 font-geist font-medium uppercase text-basicDark ${className}`,
			)}
		>
			<span className="relative z-20">{children}</span>
			<ArrowIcon className="relative z-20 ml-[0.625rem] h-4 w-4 transition-transform group-hover:rotate-45" />
			<div
				className={cn(
					"absolute left-0 h-full w-full -translate-x-full -translate-y-full transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0",
					variant === "primary" ? "bg-white" : "bg-primary",
				)}
			/>
		</Link>
	);
};
