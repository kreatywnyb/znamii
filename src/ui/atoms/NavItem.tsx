import Link from "next/link";
import React, { ReactNode } from "react";

export type NavItemProps = {
	href: string;
	children: ReactNode;
};

const NavItem = ({ href, children }: NavItemProps) => {
	return (
		<Link className="transition-colors hover:text-primary" href={href}>
			{children}
		</Link>
	);
};

export default NavItem;
