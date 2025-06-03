"use client";
import { LoaderProvider } from "@/contexts/LoaderContext";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/Header";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import dynamic from "next/dynamic";

const Loader = dynamic(() => import("../atoms/Loader"), {
	ssr: false,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const [showLoader, setShowLoader] = useState(true);

	const [appReady, setAppReady] = useState(false);

	useEffect(() => {
		if (appReady) {
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
	}, [appReady]);

	const handleAnimationComplete = () => {
		setShowLoader(false);
		setAppReady(true);
	};

	return (
		<LoaderProvider>
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
