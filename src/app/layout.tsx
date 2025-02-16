import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/ui/organisms/Header";
import Footer from "@/ui/organisms/Footer";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Znamii - Studio kreatywne",
	description: "Znamii",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" suppressHydrationWarning>
			<body className={` ${geistMono.variable} bg-background antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
