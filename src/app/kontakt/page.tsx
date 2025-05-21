import { Metadata } from "next";
import AddressSection from "../../ui/sections/contact/AddressSection";
import ContactSection from "../../ui/sections/contact/ContactFormSection";

export const metadata: Metadata = {
	title: "Kontakt ▪ Znami Studio",
	description:
		"Tworzymy treści wideo wspierające wizerunek marki. Produkujemy m.in. filmy reklamowe, produktowe, z eventów, webinary i video na social media.",
	keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "Kontakt | Nazwa Twojej Firmy",
		description:
			"Tworzymy treści wideo wspierające wizerunek marki. Produkujemy m.in. filmy reklamowe, produktowe, z eventów, webinary i video na social media.",
		type: "website",
		// url: "https://twojastrona.pl/kontakt",
		images: [
			{
				url: "https://api.znami.usermd.net/wp-content/uploads/2025/05/og-image.png",
				width: 1200,
				height: 630,
				alt: "Kontakt - Znami",
			},
		],
	},
	robots: {
		// index: true,
		// follow: true,
	},
};

export default function ContactPage() {
	return (
		<main className="mb-[30rem] border-t border-darkGrey bg-background">
			<ContactSection />
			<AddressSection />
		</main>
	);
}
