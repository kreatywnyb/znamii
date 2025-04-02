import React, { ReactNode } from "react";
import ArrowIcon from "../icons/ArrowIcon";

export type ButtonPrimaryProps = {
	children: ReactNode;
	type: "submit" | "reset" | "button" | undefined;
	variant?: "primary" | "white";
	className?: string;
	isLoading?: boolean;
};

export const ButtonPrimary = ({
	className,
	children,
	type,
	variant = "primary",
	isLoading = false,
}: ButtonPrimaryProps) => {
	return (
		<button
			type={type}
			disabled={isLoading}
			className={`flex w-fit items-center justify-center space-x-[0.625rem] ${
				variant == "primary" ? "bg-primary" : "border-bg border bg-white"
			} px-8 py-4 font-geist font-medium uppercase text-basicDark ${
				isLoading ? "cursor-not-allowed opacity-70" : ""
			} ${className}`}
		>
			<span className="flex items-center">
				{isLoading && (
					<svg
						className="mr-2 h-4 w-4 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				)}
				{children}
			</span>
			<ArrowIcon className="h-4 w-4" />
		</button>
	);
};