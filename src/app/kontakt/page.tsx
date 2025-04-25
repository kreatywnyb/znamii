import { Metadata } from "next";
import AddressSection from "../../ui/sections/contact/AddressSection";
import ContactSection from "../../ui/sections/contact/ContactFormSection";

export const metadata: Metadata = {
	title: "Kontakt ▪ Znami Studio",
	description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
	keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "Kontakt | Nazwa Twojej Firmy",
		description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
		type: "website",
		// url: "https://twojastrona.pl/kontakt",
		// images: [
		// 	{
		// 		url: "https://twojastrona.pl/img/og-contact.jpg",
		// 		width: 1200,
		// 		height: 630,
		// 		alt: "Kontakt - Nazwa Twojej Firmy",
		// 	},
		// ],
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
