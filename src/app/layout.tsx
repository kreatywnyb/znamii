// import ClientLayout from "@/ui/layouts/clientLayout";
// import type { Metadata } from "next";
// import { Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

// const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

// export const metadata: Metadata = {
// 	title: "Znami Studio - Branding, video i zdjęcia",
// 	description: "Znami Studio - Branding, video i zdjęcia",
// 	robots: {
// 		index: isProduction ? true : false,
// 		follow: isProduction ? true : false,
// 	},
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="pl" suppressHydrationWarning>
// 			<body className={`${geistMono.variable} bg-background pt-12 antialiased md:pt-14`}>
// 				<ClientLayout>{children}</ClientLayout>
// 			</body>
// 		</html>
// 	);
// }

import ClientLayout from "@/ui/layouts/clientLayout";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { headers } from "next/headers";
import { isBot } from "next/dist/server/web/spec-extension/user-agent";

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

// Komponent zabezpieczenia hasłem
function PasswordProtection({ children }: { children: React.ReactNode }) {
	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						(function() {
							if (typeof window !== 'undefined') {
								const auth = sessionStorage.getItem('znami_auth');
								
								if (!auth) {
									const password = prompt('Wprowadź hasło dostępu:');
									
									if (password === 'znami1234') {
										sessionStorage.setItem('znami_auth', 'true');
									} else {
										alert('Nieprawidłowe hasło!');
										window.location.reload();
									}
								}
							}
						})();
					`,
				}}
			/>
			{children}
		</>
	);
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const headersList = headers();
	const userAgent = (await headersList).get("user-agent") || "";

	// Detect if this is a bot request
	const isBotRequest = isBot(userAgent);

	return (
		<html lang="pl" suppressHydrationWarning>
			<head>
				{/* DNS prefetch and preconnect for faster connection */}
				<link rel="dns-prefetch" href="https://api.znami.usermd.net" />
				<link rel="preconnect" href="https://api.znami.usermd.net" />

				{/* Preload critical videos */}
				<link
					rel="preload"
					href="https://api.znami.usermd.net/wp-content/uploads/2025/05/header-video-photo.mp4"
					as="video"
					type="video/mp4"
				/>
				<link
					rel="preload"
					href="https://api.znami.usermd.net/wp-content/uploads/2025/05/header-video-video.mp4"
					as="video"
					type="video/mp4"
				/>
				<link
					rel="preload"
					href="https://api.znami.usermd.net/wp-content/uploads/2025/05/znami-studio-header-branding.mp4"
					as="video"
					type="video/mp4"
				/>
			</head>
			<body className={`${geistMono.variable} bg-background pt-12 antialiased md:pt-14`}>
				<PasswordProtection>
					<ClientLayout isBot={isBotRequest}>{children}</ClientLayout>
				</PasswordProtection>
				{/* Microsoft Clarity */}
				<Script
					id="clarity-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "risnqsscu0");
            `,
					}}
				/>
			</body>
		</html>
	);
}
