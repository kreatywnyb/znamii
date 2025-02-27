import { contactMail } from "@/constants";
import EmailIcon from "@/ui/icons/EmailIcon";
import PhoneIcon from "@/ui/icons/PhoneIcon";
import ContactForm from "@/ui/organisms/ContactForm";
import imagePawel from "@public/pawel.jpg";
import Image from "next/image";
import AddressSection from "../../ui/sections/contact/AddressSection";

export default function Home() {
	return (
		<main className="mb-[30rem] border-t border-darkGrey bg-background">
			<section className="bg-basicDark pb-48 pt-20">
				<div className="container grid grid-cols-2 gap-16 px-4 text-white">
					<div className="flex flex-col gap-16 pr-24">
						<h1 className="text-[3.625rem] text-white">
							Zrealizuj projekt <br /> razem z nami!
						</h1>
						<p className="pr-20 text-[1.063rem]">
							Też nie lubimy formularzy, ale pamiętaj, że to minuta roboty, a branding, zdjęcia i
							wideo posłużą Ci na lata.
						</p>
						<div>
							<div className="flex items-center gap-8 text-[2.5rem] font-medium">
								<PhoneIcon /> <p>+48 694 211 577</p>
							</div>
							<div className="flex items-center justify-start gap-8 text-[2.5rem] font-medium">
								<EmailIcon /> <p>{contactMail}</p>
							</div>
						</div>
						<div className="flex w-full justify-between">
							<div className="relative">
								<Image src={imagePawel} alt="" className="border border-white"></Image>
								<p className="absolute bottom-1 left-2 text-[1.313rem]">Paweł</p>
							</div>
							<div className="h-[174px] w-[174px] bg-primary"></div>
						</div>
					</div>
					<div>
						<ContactForm></ContactForm>
					</div>
				</div>
			</section>
			<AddressSection></AddressSection>
		</main>
	);
}
