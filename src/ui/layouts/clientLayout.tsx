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

"use client";
// ClientLayout.tsx
import { useEffect, useState } from "react";
import Header from "@/ui/organisms/Header";
import Footer from "@/ui/organisms/Footer";
import Lenis from "lenis";

import dynamic from "next/dynamic";

const Loader = dynamic(() => import("../atoms/Loader"), {
	ssr: false, // To kluczowe - wyłącza SSR dla tego komponentu
});

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [showLoader, setShowLoader] = useState(true);
	const [appReady, setAppReady] = useState(false);

	// useEffect(() => {
	// 	// Sprawdź, czy animacja była już odtworzona w tej sesji
	// 	const hasAnimationPlayed =
	// 		typeof window !== "undefined"
	// 			? window.sessionStorage?.getItem("heroAnimationPlayed") === "true"
	// 			: false;

	// 	if (hasAnimationPlayed) {
	// 		// Jeśli animacja była już odtworzona, od razu pokaż stronę
	// 		setAppReady(true);
	// 	} else {
	// 		// W przeciwnym razie pokaż loader
	// 		setShowLoader(true);
	// 	}
	// }, []);

	useEffect(() => {
		// Inicjalizuj Lenis tylko jeśli aplikacja jest gotowa
		if (appReady) {
			const lenis = new Lenis();

			function raf(time: number) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);

			// Usuń instancję Lenis przy odmontowaniu komponentu
			return () => {
				lenis.destroy();
			};
		}
	}, [appReady]);

	const handleAnimationComplete = () => {
		// Gdy animacja zakończy się, ukryj loader i pokaż stronę
		setShowLoader(false);
		setAppReady(true);
	};

	return (
		<>
			{showLoader && <Loader onAnimationComplete={handleAnimationComplete} />}
			{appReady && (
				<>
					<Header />
					{children}
					<Footer />
				</>
			)}
		</>
	);
}
