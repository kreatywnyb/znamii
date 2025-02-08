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
      className="flex uppercase font-geist border-white border w-fit items-center justify-center px-8 font-medium py-4 space-x-[0.625rem]"
    >
      <span>{children}</span>
      <ArrowIcon className="w-4 h-4 [&>path]:stroke-white" />
    </Link>
  );
};

export default ButtonSecondary;
