"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Checkbox } from "@/ui/molecules/Checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { contactMail } from "@/constants";
import EmailIcon from "@/ui/icons/EmailIcon";
import PhoneIcon from "@/ui/icons/PhoneIcon";
import imagePawel from "@public/pawel.jpg";
import maksImage from "@public/maks.webp";
import Image from "next/image";
import { ButtonPrimary } from "@/ui/molecules/ButtonPrimary";
import InfoIcon from "@/ui/icons/InfoIcon";
import SecurityIcon from "@/ui/icons/SecurityIcon";

const MAX_MESSAGE_LENGTH = 360;

type FormData = {
	services: string[];
	name: string;
	email: string;
	message: string;
	policy: boolean;
};

const ContactSection: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm<FormData>();
	const [selectedServices, setSelectedServices] = useState<string[]>([]);

	const services = ["Branding", "Video", "Zdjęcia", "Współpraca"];
	const message = watch("message", "");
	const remainingChars = MAX_MESSAGE_LENGTH - message.length;
	const isOverLimit = remainingChars < 0;

	const onSubmit = (data: FormData) => {
		data.services = selectedServices;
		console.log(data);
		return;
	};

	const handleCheckboxChange = (service: string, checked: boolean) => {
		setSelectedServices((prevServices) => {
			const updatedServices = checked
				? [...prevServices, service]
				: prevServices.filter((s) => s !== service);

			setValue("services", updatedServices);

			return updatedServices;
		});
	};

	useEffect(() => {
		setValue("services", []);
	}, [setValue]);

	register("services", {
		validate: (value) => value.length > 0 || "*Wybierz przynajmniej jedną usługę",
	});

	return (
		<section className="bg-basicDark pb-48 pt-20">
			<div className="container grid grid-cols-1 gap-16 px-4 text-white lg:grid-cols-2">
				<div className="flex flex-col gap-16 lg:pr-24">
					<h1 className="text-white">
						Zrealizuj projekt <br /> razem z nami!
					</h1>
					<p className="pr-20 text-[1.063rem]">
						Też nie lubimy formularzy, ale pamiętaj, że to minuta roboty, a branding, zdjęcia i
						wideo posłużą Ci na lata.
					</p>
					<div className="text-xl lg:text-[2.5rem]">
						<div className="flex items-center gap-4 font-medium lg:gap-8">
							<PhoneIcon className="max-lg:size-6" />{" "}
							<p className="whitespace-nowrap">+48 694 211 577</p>
						</div>
						<div className="mt-4 flex items-center justify-start gap-4 font-medium lg:mt-14 lg:gap-8">
							<EmailIcon className="max-lg:size-6" /> <p className="-mt-2">{contactMail}</p>
						</div>
					</div>
					<div className="flex w-full justify-between">
						<div className="flex w-full justify-between max-w-[522px]">
							<div className="relative h-[174px] w-[174px]">
								<Image src={imagePawel} alt="" className="border border-white" />
								<p className="absolute bottom-1 left-2 text-[1.313rem]">Paweł</p>
								<div
									className={`absolute left-0 top-0 h-full w-full bg-primary transition-opacity ${selectedServices.includes("Video") || selectedServices.includes("Zdjęcia") || selectedServices.includes("Współpraca") ? "opacity-0" : "opacity-100"}`}
								/>
							</div>
							<div className="relative h-[174px] w-[174px]">
								<Image src={maksImage} alt="" className="border border-white" />
								<p className="absolute bottom-1 left-2 text-[1.313rem]">Maks</p>
								<div
									className={`absolute left-0 top-0 h-full w-full bg-primary transition-opacity ${selectedServices.includes("Branding") || selectedServices.includes("Współpraca") ? "opacity-0" : "opacity-100"}`}
								/>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="relative bg-ultraLightGray p-8 shadow-lg after:absolute after:-right-4 after:-top-4 after:h-4 after:w-4 after:bg-primary max-md:mx-2 max-md:px-4">
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<div>
								<div className="mb-3 flex justify-between">
									<label className="block text-[1.063rem] font-medium text-basicDark">
										W czym możemy ci pomóc?
									</label>
									{errors.services && (
										<p className="text-[1.063rem] text-errorRed">{errors.services.message}</p>
									)}
								</div>
								<div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
									{services.map((service) => (
										<div key={service} className="flex items-center space-x-2">
											<Checkbox
												value={service}
												checked={selectedServices.includes(service)}
												onCheckedChange={(checked) =>
													handleCheckboxChange(service, checked ? true : false)
												}
											/>
											<label
												htmlFor={service}
												className="cursor-pointer font-geist text-sm font-base uppercase text-basicDark"
											>
												{service}
											</label>
										</div>
									))}
								</div>
							</div>

							<div>
								<div className="mb-3 flex justify-between">
									<label className="block text-[1.063rem] font-medium text-basicDark">
										Jak się do ciebie zwracać
									</label>
									{errors.name && (
										<p className="text-[1.063rem] text-errorRed">{errors.name.message}</p>
									)}
								</div>
								<Input
									{...register("name", { required: "*Wpisz swoje imię / pseudonim" })}
									className={`mt-1 w-full ${errors.name ? "border-errorRed bg-[#FFF1F2] placeholder:text-errorRed" : "border-basicDark"}`}
									placeholder="IMIĘ"
								/>
							</div>

							<div>
								<div className="mb-3 flex justify-between">
									<label className="block text-[1.063rem] font-medium text-basicDark">
										Email do kontaktu
									</label>
									{errors.email && (
										<p className="text-[1.063rem] text-errorRed">{errors.email.message}</p>
									)}
								</div>
								<Input
									placeholder="E-MAIL"
									type="email"
									{...register("email", {
										required: "*Wpisz swój adres e-mail",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Nieprawidłowy adres email",
										},
									})}
									className={`mt-1 w-full ${errors.email ? "border-errorRed bg-[#FFF1F2] placeholder:text-errorRed" : "border-basicDark"}`}
								/>
								<div className="mt-2 flex w-full items-center justify-end gap-1 text-darkGrey">
									<SecurityIcon />
									Dbamy o dane i nie wysyłamy spamu
								</div>
							</div>

							<div>
								<div className="mb-3 flex justify-between">
									<label className="block text-[1.063rem] font-medium text-basicDark">
										Opowiedz co cię sprowadza
									</label>
									{errors.message && (
										<p className="text-[1.063rem] text-errorRed">{errors.message.message}</p>
									)}
								</div>
								<Textarea
									placeholder="OPISZ FIRME I PROJEKT ..."
									{...register("message", { required: "*Opisz firmę i projekt" })}
									className={`mt-1 w-full ${errors.message ? "border-errorRed bg-[#FFF1F2] placeholder:text-errorRed" : "border-basicDark"}`}
								/>
								<div
									className={`mt-2 flex w-full items-center justify-end gap-1 ${isOverLimit ? "text-errorRed" : "text-darkGrey"}`}
								>
									<InfoIcon className={`${isOverLimit ? "fill-errorRed" : "fill-darkGrey"}`} />
									{isOverLimit ? "Wiadomość ma za dużo znaków" : "Pozostało znaków"}{" "}
									{MAX_MESSAGE_LENGTH - remainingChars} z {MAX_MESSAGE_LENGTH}
								</div>
							</div>

							<div className="flex items-center">
								<Checkbox
									{...register("policy", { required: "*Zapoznaj się z polityka prywatności" })}
									id="policy"
								/>
								<label
									htmlFor="policy"
									className="cursor-pointert ml-2 text-sm font-medium text-darkGrey"
								>
									Zapoznałem się z{" "}
									<Link href="/policy" className="underline">
										Polityką Prywatności
									</Link>
								</label>

								{errors.policy && (
									<p className="text-[1.063rem] text-errorRed">{errors.policy.message}</p>
								)}
							</div>

							<ButtonPrimary type="submit" className="w-full">
								Działamy z projektem
							</ButtonPrimary>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
