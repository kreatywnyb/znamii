"use client";

import { useForm, Controller } from "react-hook-form";
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
import Toast from "@/ui/molecules/Toast";
import API from "@/API";
import { ContactFormData } from "@/API/models/contactFormData";
import { motion } from "framer-motion";
import { FlipWords } from "../../molecules/FlipWords";

const MAX_MESSAGE_LENGTH = 360;

type ToastState = {
	show: boolean;
	type: "success" | "error";
	message: string;
	subMessage?: string;
};

const ContactSection: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		watch,
		setValue,
		reset,
		control,
		trigger,
		clearErrors,
	} = useForm<ContactFormData>({
		defaultValues: {
			policy: false,
			services: [],
		},
		mode: "onChange", // Changed from default 'onSubmit' to 'onChange'
	});
	const [selectedServices, setSelectedServices] = useState<string[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toast, setToast] = useState<ToastState>({
		show: false,
		type: "success",
		message: "",
	});

	const services = ["Branding", "Video", "Zdjęcia", "Współpraca"];
	const message = watch("message", "");
	const remainingChars = MAX_MESSAGE_LENGTH - message.length;
	const isOverLimit = remainingChars < 0;

	const onSubmit = async (data: ContactFormData) => {
		if (isOverLimit) return;

		setIsSubmitting(true);
		data.services = selectedServices;

		try {
			const result = await API.contact.send(data);

			if (result.status < 300) {
				setToast({
					show: true,
					type: "success",
					message: "Wiadomość wysłana",
					subMessage: "Zwykle odpisujemy w 24h",
				});
				// Reset form with complete options to ensure all state is cleared
				reset(
					{
						policy: false,
						services: [],
						name: "",
						email: "",
						message: "",
					},
					{
						keepErrors: false,
						keepDirty: false,
						keepIsSubmitted: false,
						keepTouched: false,
						keepIsValid: false,
						keepSubmitCount: false,
					},
				);
				setSelectedServices([]);
				// Explicitly clear all errors
				clearErrors();
			} else {
				setToast({
					show: true,
					type: "error",
					message: "Coś poszło nie tak",
					subMessage: "Prosimy skontakować się telefonicznie lub mailowo",
				});
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setToast({
				show: true,
				type: "error",
				message: "Coś poszło nie tak",
				subMessage: "Prosimy skontakować się telefonicznie lub mailowo",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleCheckboxChange = (service: string, checked: boolean) => {
		setSelectedServices((prevServices) => {
			const updatedServices = checked
				? [...prevServices, service]
				: prevServices.filter((s) => s !== service);

			setValue("services", updatedServices);

			// Clear the services error if at least one service is selected
			if (updatedServices.length > 0) {
				clearErrors("services");
			} else {
				// Trigger validation to show error when all services are unselected
				trigger("services");
			}

			return updatedServices;
		});
	};

	const copyToClipboard = (text: string) => {
		try {
			navigator.clipboard
				.writeText(text)
				.then(() => {
					setToast({
						show: true,
						message: "Skopiowano do schowka",
						type: "success",
					});
				})
				.catch((err) => {
					console.error("Błąd podczas kopiowania do schowka:", err);
				});
		} catch (err) {
			console.error("Wystąpił nieoczekiwany błąd:", err);
		}
	};

	useEffect(() => {
		setValue("services", []);
	}, [setValue]);

	// Clear errors when submission is successful
	useEffect(() => {
		if (isSubmitSuccessful) {
			clearErrors();
		}
	}, [isSubmitSuccessful, clearErrors]);

	// Register the services field for validation
	register("services", {
		validate: (value) => value.length > 0 || "*Wybierz minimum 1 usługę",
	});

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const formVariants = {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
		},
	};

	const imageHoverVariants = {
		hover: { scale: 1.05, transition: { duration: 0.3 } },
	};

	return (
		<motion.section
			className="bg-basicDark pb-48 pt-12"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			{toast.show && (
				<Toast
					message={toast.message}
					subMessage={toast.subMessage}
					type={toast.type}
					onClose={() => setToast({ ...toast, show: false })}
				/>
			)}

			<div className="container grid grid-cols-1 gap-16 px-4 text-white lg:grid-cols-2">
				<motion.div className="flex flex-col lg:pr-24" variants={containerVariants}>
					<FlipWords
						as="h1"
						className="max-w-[28rem] leading-[125%] text-white"
						word="Zrealizuj projekt razem z nami!"
					></FlipWords>

					<motion.p
						className="pr-20 pt-5 text-[1.063rem] leading-[160%] lg:pb-[3.75rem]"
						variants={itemVariants}
					>
						Też nie lubimy formularzy, ale pamiętaj, że to minuta roboty, a branding, zdjęcia i
						wideo posłużą Ci na lata.
					</motion.p>
					<motion.div className="hidden text-xl lg:block lg:text-[2.5rem]" variants={itemVariants}>
						<motion.div
							className="flex cursor-pointer items-center gap-4 font-medium transition-transform active:scale-95 lg:gap-8"
							onClick={() => copyToClipboard("+48694211577")}
						>
							<PhoneIcon className="max-lg:size-6" />{" "}
							<p className="whitespace-nowrap">+48 694 211 577</p>
						</motion.div>
						<motion.div
							className="mt-4 flex cursor-pointer items-center justify-start gap-4 font-medium transition-transform active:scale-95 lg:mt-14 lg:gap-8"
							onClick={() => copyToClipboard(contactMail)}
						>
							<EmailIcon className="max-lg:size-6" /> <p className="-mt-2">{contactMail}</p>
						</motion.div>
					</motion.div>
					<motion.div
						className="mt-auto hidden w-full justify-between lg:flex"
						variants={itemVariants}
					>
						<div className="flex w-full flex-col">
							{selectedServices.length > 0 && (
								<span className="text-[1.063rem] leading-[160%] max-md:mt-10 md:mb-10">
									Skontaktuje się z Tobą:
								</span>
							)}
							<div className="flex w-full max-w-[32.625rem] justify-between max-md:mt-10">
								<motion.div
									className="relative h-[10.875rem] w-[10.875rem]"
									whileHover="hover"
									variants={imageHoverVariants}
								>
									<Image src={imagePawel} alt="" className="h-full w-full border border-white" />
									<p className="absolute bottom-1 left-2 text-[1.313rem]">Paweł</p>
									<motion.div
										className={`absolute left-0 top-0 h-full w-full bg-primary transition-opacity`}
										animate={{
											opacity:
												selectedServices.includes("Video") ||
												selectedServices.includes("Zdjęcia") ||
												selectedServices.includes("Współpraca")
													? 0
													: 1,
										}}
										transition={{ duration: 0.5 }}
									/>
								</motion.div>
								<motion.div
									className="relative h-[10.875rem] w-[10.875rem]"
									whileHover="hover"
									variants={imageHoverVariants}
								>
									<Image src={maksImage} alt="" className="h-full w-full border border-white" />
									<p className="absolute bottom-1 left-2 text-[1.313rem]">Maks</p>
									<motion.div
										className={`absolute left-0 top-0 h-full w-full bg-primary`}
										animate={{
											opacity:
												selectedServices.includes("Branding") ||
												selectedServices.includes("Współpraca")
													? 0
													: 1,
										}}
										transition={{ duration: 0.5 }}
									/>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</motion.div>
				<motion.div variants={formVariants}>
					<motion.div
						className="relative bg-ultraLightGray p-8 shadow-lg max-md:px-4"
						initial={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
						whileHover={{ boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)" }}
						transition={{ duration: 0.3 }}
					>
						{/* <motion.div
							className="absolute -right-4 -top-4 h-4 w-4 bg-primary"
							initial={{ scale: 0 }}
							animate={{ scale: 1, rotate: 180 }}
							transition={{ delay: 0.7, duration: 0.5 }}
						/> */}
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
							<div>
								<div className="mb-3 flex flex-col justify-between md:flex-row">
									<label className="block text-[1.063rem] font-medium text-basicDark">
										W czym możemy ci pomóc?
									</label>
									{errors.services && (
										<p className="text-[1.063rem] text-errorRed">{errors.services.message}</p>
									)}
								</div>
								<div className="mt-2 flex flex-col justify-between max-md:space-y-4 md:flex-row">
									{services.map((service) => (
										<div key={service} className="flex items-center space-x-2">
											<Checkbox
												value={service}
												checked={selectedServices.includes(service)}
												onCheckedChange={(checked) =>
													handleCheckboxChange(service, checked ? true : false)
												}
												disabled={isSubmitting}
											/>
											<label
												htmlFor={service}
												className={`font-base cursor-pointer font-geist text-sm uppercase text-basicDark ${isSubmitting ? "opacity-70" : ""}`}
											>
												{service}
											</label>
										</div>
									))}
								</div>
							</div>

							<div>
								<div className="mb-3 flex flex-col justify-between md:flex-row">
									<label className="block text-[1.063rem] font-medium text-basicDark">
										Jak się do ciebie zwracać
									</label>
									{errors.name && (
										<p className="text-[1.063rem] text-errorRed">{errors.name.message}</p>
									)}
								</div>
								<Input
									{...register("name", { required: "*Wpisz swoje imię / pseudonim" })}
									className={`mt-1 w-full rounded-[2px] ${errors.name ? "border-errorRed bg-[#FFF1F2] placeholder:text-errorRed" : "border-basicDark"}`}
									placeholder="Imię"
									disabled={isSubmitting}
								/>
							</div>

							<div>
								<div className="mb-3 flex flex-col justify-between md:flex-row">
									<label className="block text-[1.063rem] font-medium text-basicDark">
										Email do kontaktu
									</label>
									{errors.email && (
										<p className="text-[1.063rem] text-errorRed">{errors.email.message}</p>
									)}
								</div>
								<Input
									placeholder="E-mail"
									type="email"
									{...register("email", {
										required: "*Wpisz swój adres e-mail",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Nieprawidłowy adres email",
										},
									})}
									className={`mt-1 w-full rounded-[2px] ${errors.email ? "border-errorRed bg-[#FFF1F2] placeholder:text-errorRed" : "border-basicDark"}`}
									disabled={isSubmitting}
								/>
								<div className="mt-2 flex w-full items-center justify-end gap-1 text-darkGrey">
									<SecurityIcon />
									Dbamy o dane i nie wysyłamy spamu
								</div>
							</div>

							<div>
								<div className="mb-3 flex flex-col justify-between md:flex-row">
									<label className="block text-[1.063rem] font-medium text-basicDark">
										Opowiedz co cię sprowadza
									</label>
									{errors.message && (
										<p className="text-[1.063rem] text-errorRed">{errors.message.message}</p>
									)}
								</div>
								<Textarea
									placeholder="Opisz firmę i projekt ..."
									{...register("message", { required: "*Opisz firmę i projekt" })}
									className={`mt-1 w-full rounded-[2px] ${errors.message ? "border-errorRed bg-[#FFF1F2] placeholder:text-errorRed" : "border-basicDark"}`}
									disabled={isSubmitting}
								/>
								<div
									className={`mt-2 flex w-full items-center justify-end gap-1 ${isOverLimit ? "text-errorRed" : "text-darkGrey"}`}
								>
									<InfoIcon className={`${isOverLimit ? "fill-errorRed" : "fill-darkGrey"}`} />
									{isOverLimit ? "Wiadomość ma za dużo znaków" : "Pozostało znaków"}{" "}
									{MAX_MESSAGE_LENGTH - remainingChars} z {MAX_MESSAGE_LENGTH}
								</div>
							</div>

							<div className="mb-3 flex flex-col justify-between md:flex-row md:items-center">
								<div className="flex items-start">
									<Controller
										name="policy"
										control={control}
										rules={{
											validate: (value) => value === true || "*Zapoznaj się z polityką prywatności",
										}}
										render={({ field }) => (
											<Checkbox
												checked={field.value}
												onCheckedChange={(checked) => {
													field.onChange(checked);
													// Always trigger validation immediately when changed
													trigger("policy");
												}}
												id="policy"
												disabled={isSubmitting}
											/>
										)}
									/>
									<label
										htmlFor="policy"
										className={`ml-2 cursor-pointer text-sm font-medium text-darkGrey ${isSubmitting ? "opacity-70" : ""}`}
									>
										Zapoznałem się z{" "}
										<Link href="/policy" className="underline">
											Polityką Prywatności
										</Link>
									</label>
								</div>
								{errors.policy && !isSubmitSuccessful && (
									<p className="mt-2 text-[1.063rem] text-errorRed md:-mt-1">
										{errors.policy.message}
									</p>
								)}
							</div>

							<motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
								<ButtonPrimary
									type="submit"
									className="w-full max-md:mt-10"
									isLoading={isSubmitting}
								>
									Działamy z projektem
								</ButtonPrimary>
							</motion.div>
						</form>
					</motion.div>

					<motion.div
						className="mt-auto flex w-full justify-between lg:hidden"
						variants={itemVariants}
					>
						<div className="flex w-full flex-col">
							{selectedServices.length > 0 && (
								<span className="text-[1.063rem] leading-[160%] max-md:mt-10 md:mb-10">
									Skontaktuje się z Tobą:
								</span>
							)}
							<div className="flex w-full max-w-[32.625rem] justify-between max-md:mt-10">
								<motion.div
									className="relative h-[10.875rem] w-[10.875rem]"
									whileHover="hover"
									variants={imageHoverVariants}
								>
									<Image src={imagePawel} alt="" className="h-full w-full border border-white" />
									<p className="absolute bottom-1 left-2 text-[1.313rem]">Paweł</p>
									<motion.div
										className={`absolute left-0 top-0 h-full w-full bg-primary transition-opacity`}
										animate={{
											opacity:
												selectedServices.includes("Video") ||
												selectedServices.includes("Zdjęcia") ||
												selectedServices.includes("Współpraca")
													? 0
													: 1,
										}}
										transition={{ duration: 0.5 }}
									/>
								</motion.div>
								<motion.div
									className="relative h-[10.875rem] w-[10.875rem]"
									whileHover="hover"
									variants={imageHoverVariants}
								>
									<Image src={maksImage} alt="" className="h-full w-full border border-white" />
									<p className="absolute bottom-1 left-2 text-[1.313rem]">Maks</p>
									<motion.div
										className={`absolute left-0 top-0 h-full w-full bg-primary`}
										animate={{
											opacity:
												selectedServices.includes("Branding") ||
												selectedServices.includes("Współpraca")
													? 0
													: 1,
										}}
										transition={{ duration: 0.5 }}
									/>
								</motion.div>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="block text-xl max-md:mt-10 lg:hidden lg:text-[2.5rem]"
						variants={itemVariants}
					>
						<motion.div
							className="flex cursor-pointer items-center gap-4 font-medium transition-transform active:scale-95 lg:gap-8"
							onClick={() => copyToClipboard("+48694211577")}
						>
							<PhoneIcon className="max-lg:size-6" />{" "}
							<p className="whitespace-nowrap">+48 694 211 577</p>
						</motion.div>
						<motion.div
							className="mt-4 flex cursor-pointer items-center justify-start gap-4 font-medium transition-transform active:scale-95 lg:mt-14 lg:gap-8"
							onClick={() => copyToClipboard(contactMail)}
						>
							<EmailIcon className="max-lg:size-6" /> <p className="-mt-2">{contactMail}</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default ContactSection;
