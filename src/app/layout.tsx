import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/ui/organisms/Header";
import Footer from "@/ui/organisms/Footer";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

export const metadata: Metadata = {
	title: "Znami Studio - Branding, video i zdjęcia",
	description: "Znami Studio - Branding, video i zdjęcia",
	robots: {
		index: isProduction ? true : false,
		follow: isProduction ? true : false,
	},
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
