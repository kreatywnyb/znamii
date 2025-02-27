import Link from "next/link";
import React, { ReactNode } from "react";
import ArrowIcon from "../icons/ArrowIcon";

export type ButtonSecondaryProps = {
	children: ReactNode;
	href: string;
};

const ButtonSecondary = ({ children, href }: ButtonSecondaryProps) => {
	return (
		<Link
			href={href}
			className="flex w-fit items-center justify-center space-x-[0.625rem] border border-white px-8 py-4 font-geist text-xs font-medium uppercase"
		>
			<span>{children}</span>
			<ArrowIcon className="h-4 w-4 [&>path]:stroke-white" />
		</Link>
	);
};

export default ButtonSecondary;
