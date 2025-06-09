"use client";

import Link from "next/link";
import React, { ReactNode, useEffect, useRef } from "react";
import ArrowIcon from "../icons/ArrowIcon";

import { twMerge } from "tailwind-merge";

export type CTAButton = {
	children: ReactNode;
	href: string;
	variant?: "primary" | "secondary" | "tertiary" | "primaryv2";
	className?: string;
	pixelSize?: number;
	id?: string;
};

export const CTAButton = ({
	children,
	href,
	variant = "primary",
	className,
	pixelSize = 16,
	id,
}: CTAButton) => {
	const buttonRef = useRef<HTMLAnchorElement>(null);
	const pixelGridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!buttonRef.current || !pixelGridRef.current) return;

		const button = buttonRef.current;
		const pixelGrid = pixelGridRef.current;

		// Wyczyść istniejące piksele przy przebudowie
		pixelGrid.innerHTML = "";

		const buttonWidth = button.offsetWidth;
		const buttonHeight = button.offsetHeight;

		const rows = Math.ceil(buttonHeight / pixelSize);
		const cols = Math.ceil(buttonWidth / pixelSize);

		// Utwórz siatkę pixeli
		for (let i = 0; i < rows * cols; i++) {
			const pixel = document.createElement("div");
			const row = Math.floor(i / cols);
			const col = i % cols;

			pixel.className = "absolute opacity-0 transform scale-0 transition-all";
			pixel.style.width = `${pixelSize}px`;
			pixel.style.height = `${pixelSize}px`;
			pixel.style.left = `${col * pixelSize}px`;
			pixel.style.top = `${row * pixelSize}px`;
			// pixel.style.backgroundColor = variant === "primary" ? "white" : "#primary-color";
			// Random delay między 0 a 500ms
			if (variant === "primary") {
				pixel.style.backgroundColor = "white";
			} else if (variant === "secondary") {
				pixel.style.backgroundColor = "black"; // Zastąp swoim rzeczywistym kolorem
			} else if (variant === "tertiary") {
				pixel.style.backgroundColor = "white"; // Zastąp swoim rzeczywistym kolorem
			} else if (variant === "primaryv2") {
				pixel.style.backgroundColor = "black";
			}
			pixel.style.transitionDelay = `${Math.random() * 500}ms`;
			pixel.style.transitionDuration = "200ms";

			pixelGrid.appendChild(pixel);
		}

		// Dodaj interakcję
		const pixels = pixelGrid.querySelectorAll("div");

		button.addEventListener("mouseenter", () => {
			pixels.forEach((pixel) => {
				pixel.classList.remove("opacity-0", "scale-0");
				pixel.classList.add("opacity-100", "scale-100");
			});
		});

		button.addEventListener("mouseleave", () => {
			pixels.forEach((pixel) => {
				pixel.classList.remove("opacity-100", "scale-100");
				pixel.classList.add("opacity-0", "scale-0");
			});
		});

		// Cleanup
		return () => {
			button.removeEventListener("mouseenter", () => {});
			button.removeEventListener("mouseleave", () => {});
		};
	}, [variant, pixelSize]);

	return (
		<Link
			ref={buttonRef}
			href={href}
			className={twMerge(
				"group relative flex w-fit items-center justify-center overflow-hidden px-8 py-4 font-geist text-xs font-medium uppercase",
				variant === "primary" && "bg-primary text-basicDark",
				variant === "secondary" &&
					"border border-basicDark bg-transparent text-basicDark hover:text-white",
				variant === "tertiary" &&
					"border border-white bg-transparent text-white hover:text-basicDark",
				variant === "primaryv2" && "bg-primary text-basicDark hover:text-white",
				className,
			)}
			id={id && id}
		>
			{/* Pixel grid container */}
			<div ref={pixelGridRef} className="absolute inset-0 z-10" style={{ pointerEvents: "none" }} />

			{/* Content */}
			<span className="relative z-20">{children}</span>
			<ArrowIcon
				className={twMerge(
					"relative z-20 ml-[0.625rem] h-3 w-3 transition-transform group-hover:rotate-45",
					variant === "tertiary" && "[&>path]:stroke-white group-hover:[&>path]:stroke-basicDark",
					variant === "secondary" && "group-hover:[&>path]:stroke-white",
					variant === "primaryv2" && "group-hover:[&>path]:stroke-white",
				)}
			/>
		</Link>
	);
};
