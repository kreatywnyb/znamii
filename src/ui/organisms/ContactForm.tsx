"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Checkbox } from "@/ui/molecules/Checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonPrimary } from "../molecules/ButtonPrimary";

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
		<div className="rounded-lg bg-lightGrey p-8 shadow-lg">
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
					<label className="mb-4 block text-[17px] font-medium text-basicDark">
						Jak się do ciebie zwracać?
					</label>
					<Input
						{...register("name", { required: "To pole jest wymagane" })}
						className="mt-1 w-full"
						placeholder="IMIĘ"
					/>
					{errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
				</div>

				<div>
					<label className="block text-sm font-medium text-basicDark">Email do kontaktu</label>
					<Input
						placeholder="E-MAIL"
						type="email"
						{...register("email", {
							required: "To pole jest wymagane",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Nieprawidłowy adres email",
							},
						})}
						className="mt-1 w-full"
					/>
					{errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
				</div>

				<div>
					<label className="mb-4 block text-[17px] text-sm font-medium text-basicDark">
						Opowiedz co cię sprowadza
					</label>
					<Textarea
                    	placeholder="OPISZ FIRME I PROJEKT ..."
						{...register("message", { required: "To pole jest wymagane" })}
						className="mt-1 w-full"
					/>
					{errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
				</div>

				<ButtonPrimary type="submit" className="w-full">
					Działamy z projektem
				</ButtonPrimary>
			</form>
		</div>
	);
};

export default ContactForm;
