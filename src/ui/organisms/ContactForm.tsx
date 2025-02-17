"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Checkbox } from "@/ui/molecules/Checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonPrimary } from "../molecules/ButtonPrimary";
import Link from 'next/link';

type FormData = {
	name: string;
	email: string;
	message: string;
};

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const [selectedServices, setSelectedServices] = useState<string[]>([]);

	const services = ["Branding", "Video", "Zdjęcia", "Współpraca"];

	const onSubmit = (data: FormData) => {
		console.log({ ...data, services: selectedServices });
	};

	const handleCheckboxChange = (service: string) => {
		setSelectedServices((prev) =>
			prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
		);
	};

	return (
		<div className="bg-lightGrey p-8 shadow-lg">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<div>
					<p className="mb-4 text-[17px] text-basicDark">W czym możemy Ci pomóc?</p>
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
					<div className="flex justify-between mb-3">
						<label className="block text-[17px] font-medium text-basicDark">
							Jak się do ciebie zwracać
						</label>
						{errors.name && <p className="text-[17px] text-errorRed">{errors.name.message}</p>}
					</div>
					<Input
						{...register("name", { required: "*Wpisz swoje imię / pseudonim" })}
						className="mt-1 w-full"
						placeholder="IMIĘ"
					/>
				</div>

				<div>
					<div className="flex justify-between mb-3">
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
						className="mt-1 w-full"
					/>
				</div>

				<div>
				<div className="flex justify-between mb-3">
						<label className="block text-[17px] font-medium text-basicDark">
						Opowiedz co cię sprowadza
						</label>
						{errors.message && <p className="text-[17px] text-errorRed">{errors.message.message}</p>}
					</div>
					<Textarea
						placeholder="OPISZ FIRME I PROJEKT ..."
						{...register("message", { required: "*Opisz firmę i projekt" })}
						className="mt-1 w-full"
					/>
				</div>
				<Checkbox
					id="policy"
				/>
				<label htmlFor="policy" className="cursor-pointert text-sm font-medium text-darkGrey -mt-2 ml-2"> 
					Zapoznałem się z <Link href="/policy" className="underline">Polityką Prywatności</Link>
				</label>

				<ButtonPrimary type="submit" className="w-full">
					Działamy z projektem
				</ButtonPrimary>
			</form>
		</div>
	);
};

export default ContactForm;
