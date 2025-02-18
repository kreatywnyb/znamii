"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Checkbox } from "@/ui/molecules/Checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonPrimary } from "../molecules/ButtonPrimary";
import Link from "next/link";
import SecurityIcon from "../icons/SecurityIcon";
import InfoIcon from "../icons/InfoIcon";

const MAX_MESSAGE_LENGTH = 360;

type FormData = {
	services: string;
	name: string;
	email: string;
	message: string;
	policy: boolean;
};

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setError,
	} = useForm<FormData>();
	const [selectedServices, setSelectedServices] = useState<string[]>([]);

	const services = ["Branding", "Video", "Zdjęcia", "Współpraca"];
	const message = watch("message", "");
	const remainingChars = MAX_MESSAGE_LENGTH - message.length;
	const isOverLimit = remainingChars < 0;

	const onSubmit = (data: FormData) => {
		console.log("assssssssssssssssss");
		
		setError("services", { message: "Wybierz przynajmniej jedną usługę" });
		console.log({ ...data, services: selectedServices });
	};

	const handleCheckboxChange = (service: string) => {
		setSelectedServices((prev) =>
			prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
		);
	};

	return (
		<div className="relative bg-ultraLightGray p-8 shadow-lg after:absolute after:-right-4 after:-top-4 after:h-4 after:w-4 after:bg-primary">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<div>
				<div className="mb-3 flex justify-between">
						<label className="block text-[17px] font-medium text-basicDark">
							W czym możemy ci pomóc?
						</label>
						{errors.services && <p className="text-[17px] text-errorRed">{errors.services.message}</p>}
					</div>
					<div className="mt-2 grid grid-cols-4 gap-2">
						{services.map((service) => (
							<div key={service} className="flex items-center space-x-2">
								<Checkbox
									id={service}
									checked={selectedServices.includes(service)}
									onCheckedChange={() => handleCheckboxChange(service)}
								/>
								<label
									htmlFor={service}
									className="cursor-pointer font-geist text-sm font-medium uppercase text-basicDark"
								>
									{service}
								</label>
							</div>
						))}
					</div>
				</div>

				<div>
					<div className="mb-3 flex justify-between">
						<label className="block text-[17px] font-medium text-basicDark">
							Jak się do ciebie zwracać
						</label>
						{errors.name && <p className="text-[17px] text-errorRed">{errors.name.message}</p>}
					</div>
					<Input
						{...register("name", { required: "*Wpisz swoje imię / pseudonim" })}
						className={`mt-1 w-full ${errors.name ? "border-errorRed bg-[#FFF1F2] placeholder:text-errorRed" : "border-basicDark"}`}
						placeholder="IMIĘ"
					/>
				</div>

				<div>
					<div className="mb-3 flex justify-between">
						<label className="block text-[17px] font-medium text-basicDark">
							Email do kontaktu
						</label>
						{errors.email && <p className="text-[17px] text-errorRed">{errors.email.message}</p>}
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
						<label className="block text-[17px] font-medium text-basicDark">
							Opowiedz co cię sprowadza
						</label>
						{errors.message && (
							<p className="text-[17px] text-errorRed">{errors.message.message}</p>
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

					{errors.policy && <p className="text-[17px] text-errorRed">{errors.policy.message}</p>}
				</div>

				<ButtonPrimary type="submit" className="w-full">
					Działamy z projektem
				</ButtonPrimary>
			</form>
		</div>
	);
};

export default ContactForm;
