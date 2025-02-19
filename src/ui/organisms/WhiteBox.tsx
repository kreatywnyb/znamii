import { cn } from "@/lib/utils";
import React from "react";

const WhiteBox = ({ className, children }: React.HTMLProps<HTMLDivElement>) => {
	return (
		<section className={cn("relative z-40 flex justify-center px-4", className)}>
			<div className="w-full max-w-[1700px] bg-white py-20">{children}</div>
		</section>
	);
};

export default WhiteBox;
