"use client";
import { LoaderProvider } from "@/contexts/LoaderContext";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/Header";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Loader = dynamic(() => import("../atoms/Loader"), {
	ssr: false,
});

interface ClientLayoutProps {
	children: React.ReactNode;
	isBot?: boolean;
}

export default function ClientLayout({ children, isBot = false }: ClientLayoutProps) {
	const pathname = usePathname();

	// Określ routy, na których loader nie powinien się pokazywać
	const noLoaderRoutes = ["/branding", "/video", "/zdjecia"];
	const shouldSkipLoader = noLoaderRoutes.some((route) => pathname.includes(route));

	// Skip loader entirely for bots
	const [showLoader, setShowLoader] = useState(!isBot && !shouldSkipLoader);
	const [appReady, setAppReady] = useState(isBot || shouldSkipLoader);

	useEffect(() => {
		if (appReady) {
			// Don't initialize Lenis for bots (smooth scrolling library)
			if (!isBot) {
				const lenis = new Lenis({
					lerp: 0.15,
				});

				function raf(time: number) {
					lenis.raf(time);
					requestAnimationFrame(raf);
				}

				requestAnimationFrame(raf);
				return () => lenis.destroy();
			}
		}
	}, [appReady, isBot, shouldSkipLoader]);

	const handleAnimationComplete = () => {
		setShowLoader(false);
		setAppReady(true);
	};

	return (
		<LoaderProvider isBot={isBot}>
			{showLoader && <Loader onAnimationComplete={handleAnimationComplete} />}
			<>
				<div
					className={twMerge(
						"fixed left-0 top-0 z-[55] block h-full w-full bg-basicDark",
						appReady && "hidden",
					)}
				/>
				<Header />
				{children}
				<Footer />
			</>
		</LoaderProvider>
	);
}
