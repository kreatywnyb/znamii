import { cn } from "@/lib/utils";
import React from "react";

const WhiteBox = ({ className, children }: React.HTMLProps<HTMLDivElement>) => {
	return (
		<section className={cn("relative z-20 flex justify-center md:px-4", className)}>
			<div className="w-full max-w-[1700px] bg-white py-10 lg:py-20 xxl:max-w-[2200px]">
				{children}
			</div>
		</section>
	);
};

export default WhiteBox;
