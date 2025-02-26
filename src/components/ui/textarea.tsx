import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				rows={5}
				className={cn(
					"placeholder:text-ultraLightGrey flex min-h-[60px] w-full border border-basicDark bg-transparent bg-white p-4 text-[0.75rem] text-darkGrey shadow-sm placeholder:font-geist placeholder:text-[0.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";

export { Textarea };
