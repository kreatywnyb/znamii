import AddressSection from "../../ui/sections/contact/AddressSection";
import ContactSection from "../../ui/sections/contact/ContactFormSection";

export default function ContactPage() {
	return (
		<main className="mb-[30rem] border-t border-darkGrey bg-background">
			<ContactSection />
			<AddressSection />
		</main>
	);
}
