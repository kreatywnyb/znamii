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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" suppressHydrationWarning>
			<body className={`${geistMono.variable} bg-background pt-12 antialiased md:pt-14`}>
				<PasswordProtection>
					<ClientLayout>{children}</ClientLayout>
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
