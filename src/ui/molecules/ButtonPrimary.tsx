import React, { ReactNode } from "react";
import ArrowIcon from "../icons/ArrowIcon";

export type ButtonPrimaryProps = {
	children: ReactNode;
	type: "submit" | "reset" | "button" | undefined;
	variant?: "primary" | "white";
	className?: string;
};

export const ButtonPrimary = ({className, children, type, variant = "primary" }: ButtonPrimaryProps) => {
	return (
		<button
			type={type}
			className={`flex w-fit items-center justify-center space-x-[0.625rem] ${variant == "primary" ? "bg-primary" : "border-bg border bg-white"} px-8 py-4 font-geist font-medium uppercase text-basicDark ${className}`}
		>
			<span>{children}</span>
			<ArrowIcon className="h-4 w-4" />
		</button>
	);
};
