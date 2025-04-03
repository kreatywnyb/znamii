"use client";
// ClientLayout.tsx
import { useEffect } from "react";
import Header from "@/ui/organisms/Header";
import Footer from "@/ui/organisms/Footer";
import Lenis from "lenis";

export default function ClientLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
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
	}, []);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
