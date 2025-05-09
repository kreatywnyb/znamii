import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			// screens: {
			// 	xxl: "1900px",
			// },
		},
		extend: {
			screens: { xxl: "2000px" },
			colors: {
				primary: "#FFB217",
				basicDark: "#08080a",
				darkGrey: "#6e6e73",
				lightGrey: "#e3e3e3",
				ultraLightGray: "#f8f8fa",
				errorRed: "#ef3b4a",
				background: "#F5F5F5",
			},
			boxShadow: {},
			fontFamily: {
				geist: "var(--font-geist-mono)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out forwards",
				"overlay-hide": "overlay-hide 0.8s ease-in-out forwards",
				"image-zoom": "image-zoom 1.2s ease-out 0.7s forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"overlay-hide": {
					"0%": { transform: "scaleY(1)" },
					"100%": { transform: "scaleY(0)" },
				},
				"image-zoom": {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(1.05)" },
				},
			},
		},
	},
	plugins: [forms, typography, require("tailwindcss-animate")],
} satisfies Config;
