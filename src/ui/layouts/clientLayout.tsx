// "use client";
// // ClientLayout.tsx
// import { useEffect } from "react";
// import Header from "@/ui/organisms/Header";
// import Footer from "@/ui/organisms/Footer";
// import Lenis from "lenis";

// export default function ClientLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	useEffect(() => {
// 		const lenis = new Lenis();

// 		function raf(time: number) {
// 			lenis.raf(time);
// 			requestAnimationFrame(raf);
// 		}

// 		requestAnimationFrame(raf);

// 		// Usuń instancję Lenis przy odmontowaniu komponentu
// 		return () => {
// 			lenis.destroy();
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<Header />
// 			{children}
// 			<Footer />
// 		</>
// 	);
// }

// "use client";
// // ClientLayout.tsx
// import { useEffect, useState } from "react";
// import Header from "@/ui/organisms/Header";
// import Footer from "@/ui/organisms/Footer";
// import Lenis from "lenis";

// import dynamic from "next/dynamic";
// import { twMerge } from "tailwind-merge";

// const Loader = dynamic(() => import("../atoms/Loader"), {
// 	ssr: false, // To kluczowe - wyłącza SSR dla tego komponentu
// });

// export default function ClientLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	const [showLoader, setShowLoader] = useState(true);
// 	const [appReady, setAppReady] = useState(false);

// 	useEffect(() => {
// 		// Inicjalizuj Lenis tylko jeśli aplikacja jest gotowa
// 		if (appReady) {
// 			const lenis = new Lenis();

// 			function raf(time: number) {
// 				lenis.raf(time);
// 				requestAnimationFrame(raf);
// 			}

// 			requestAnimationFrame(raf);

// 			// Usuń instancję Lenis przy odmontowaniu komponentu
// 			return () => {
// 				lenis.destroy();
// 			};
// 		}
// 	}, [appReady]);

// 	const handleAnimationComplete = () => {
// 		// Gdy animacja zakończy się, ukryj loader i pokaż stronę
// 		setShowLoader(false);
// 		setAppReady(true);
// 	};

// 	return (
// 		<>
// 			{showLoader && <Loader onAnimationComplete={handleAnimationComplete} />}
// 			{/* {appReady && ( */}
// 			<>
// 				<div
// 					className={twMerge(
// 						"fixed left-0 top-0 z-[55] block h-full w-full bg-basicDark",
// 						appReady && "hidden",
// 					)}
// 				/>
// 				<Header />
// 				{children}
// 				<Footer />
// 			</>
// 			{/* )} */}
// 		</>
// 	);
// }

"use client";
import { useLoader } from "@/contexts/LoaderContext";
import Footer from "@/ui/organisms/Footer";
import Header from "@/ui/organisms/Header";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Loader from "../atoms/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const [showLoader, setShowLoader] = useState(true);
	const { setAnimationFinished } = useLoader();

	const [appReady, setAppReady] = useState(false);

	useEffect(() => {
		if (appReady) {
			const lenis = new Lenis();

			function raf(time: number) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);
			return () => lenis.destroy();
		}
	}, [appReady]);

	const handleAnimationComplete = () => {
		sessionStorage.setItem("heroAnimationPlayed", "true");
		setShowLoader(false);
		setAppReady(true);
		setAnimationFinished(true);
	};

	return (
		<>
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
		</>
	);
}
