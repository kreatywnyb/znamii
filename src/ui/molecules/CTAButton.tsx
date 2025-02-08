import Link from "next/link";
import React, { ReactNode } from "react";
import Arrow from "../icons/Arrow";

export type CTAButton = {
  children: ReactNode;
  href: string;
};

export const CTAButton = ({ children, href }: CTAButton) => {
  return (
    <Link
      href={href}
      className="bg-primary uppercase font-medium text-basicDark font-geist flex w-fit items-center justify-center py-4 px-8 space-x-[0.625rem]"
    >
      <span>{children}</span>
      <Arrow className="w-4 h-4" />
    </Link>
  );
};
