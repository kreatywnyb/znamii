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
		formState: { errors },
		watch,
		setValue,
		reset,
	} = useForm<ContactFormData>();
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
				reset();
				setSelectedServices([]);
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
				type: "success",
				message: "Wiadomość wysłana",
				subMessage: "Zwykle odpisujemy w 24h",
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

			return updatedServices;
		});
	};

	useEffect(() => {
		setValue("services", []);
	}, [setValue]);

	register("services", {
		validate: (value) => value.length > 0 || "*Wybierz przynajmniej jedną usługę",
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
			className="bg-basicDark pb-48 pt-20"
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
						<FlipWords as="h1" className="leading-[125%] text-white max-w-96" word="Zrealizuj projekt razem z nami!">
						</FlipWords>

					<motion.p
						className="pb-[3.75rem] pr-20 pt-5 text-[1.063rem] leading-[160%]"
						variants={itemVariants}
					>
						Też nie lubimy formularzy, ale pamiętaj, że to minuta roboty, a branding, zdjęcia i
						wideo posłużą Ci na lata.
					</motion.p>
					<motion.div className="text-xl lg:text-[2.5rem]" variants={itemVariants}>
						<motion.div
							className="flex items-center gap-4 font-medium lg:gap-8"
							whileHover={{ x: 10 }}
							transition={{ type: "spring", stiffness: 400 }}
						>
							<PhoneIcon className="max-lg:size-6" />{" "}
							<p className="whitespace-nowrap">+48 694 211 577</p>
						</motion.div>
						<motion.div
							className="mt-4 flex items-center justify-start gap-4 font-medium lg:mt-14 lg:gap-8"
							whileHover={{ x: 10 }}
							transition={{ type: "spring", stiffness: 400 }}
						>
							<EmailIcon className="max-lg:size-6" /> <p className="-mt-2">{contactMail}</p>
						</motion.div>
					</motion.div>
					<motion.div className="mt-auto flex w-full justify-between" variants={itemVariants}>
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
					</motion.div>
				</motion.div>
				<motion.div variants={formVariants}>
					<motion.div
						className="relative bg-ultraLightGray p-8 shadow-lg max-md:mx-2 max-md:px-4"
						initial={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
						whileHover={{ boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)" }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className="absolute -right-4 -top-4 h-4 w-4 bg-primary"
							initial={{ scale: 0 }}
							animate={{ scale: 1, rotate: 180 }}
							transition={{ delay: 0.7, duration: 0.5 }}
						/>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<div>
								<div className="mb-5 flex justify-between">
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
									className={`mt-1 w-full rounded-[2px] ${errors.name ? "border-errorRed bg-[#FFF1F2] placeholder:text-errorRed" : "border-basicDark"}`}
									placeholder="Imię"
									disabled={isSubmitting}
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
								<div className="mb-3 flex justify-between">
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

							<div className="flex items-center">
								<Checkbox
									{...register("policy", { required: "*Zapoznaj się z polityka prywatności" })}
									id="policy"
									disabled={isSubmitting}
								/>
								<label
									htmlFor="policy"
									className={`cursor-pointert ml-2 text-sm font-medium text-darkGrey ${isSubmitting ? "opacity-70" : ""}`}
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

							<motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
								<ButtonPrimary type="submit" className="w-full" isLoading={isSubmitting}>
									Działamy z projektem
								</ButtonPrimary>
							</motion.div>
						</form>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default ContactSection;
