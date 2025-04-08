"use client";
import EmpathyIcon from "@/ui/icons/EmpathyIcon";
import OpennessIcon from "@/ui/icons/OpennessIcon";
import PrecisionIcon from "@/ui/icons/PrecisionIcon";
import { FlipWords } from "@/ui/molecules/FlipWords";
import ImageSlider from "@/ui/organisms/about-us/ImageSlider";
import WhiteBox from "@/ui/organisms/WhiteBox";
import TerminalText from "@/ui/atoms/TerminalText";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MainSectionAboutUs = () => {
	// Animation variants
	const textFadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const slideFromRight = {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	// Using refs for scroll triggered animations
	const valuesRef = useRef(null);
	const precisionRef = useRef(null);
	const opennessRef = useRef(null);
	const empathyRef = useRef(null);

	const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
	const isPrecisionInView = useInView(precisionRef, { once: true, amount: 0.3 });
	const isOpennessInView = useInView(opennessRef, { once: true, amount: 0.3 });
	const isEmpathyInView = useInView(empathyRef, { once: true, amount: 0.3 });

	return (
		<WhiteBox className="z-20 [&>div]:-mt-64">
			<div className="container overflow-x-hidden">
				<motion.div
					className="flex flex-col justify-between gap-4 lg:flex-row"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.2,
							},
						},
					}}
				>
					<motion.div className="flex-1 md:basis-2/5" variants={textFadeIn}>
						<FlipWords
							word="Jak do tego doszło, nie wiem?"
							as="h2"
							className="max-w-96 text-3xl font-medium lg:text-[2.5rem] lg:leading-[125%]"
						></FlipWords>
					</motion.div>
					<motion.div className="ml-auto flex-1 md:basis-1/4" variants={textFadeIn}>
						<p className="text-[1.063rem] font-medium leading-[160%] md:max-w-[320px]">
							Tutaj jakaś ckliwa historia jak pomogliśmy innym markom przekształcić ich pomysły w
							rzeczywistość prawdź jak pomogliśmy innym markom przekształcić ich itede ite
						</p>
					</motion.div>
					<motion.div className="flex-1 md:basis-1/4" variants={textFadeIn}>
						<p className="text-[1.063rem] font-medium leading-[160%] md:max-w-[320px]">
							Sprawdź jak pomogliśmy innym markom przekształc pomysły w rzeczywistość prawdź jak
							pomogliśmy innym markom przekształcić ich pomysły.
						</p>
					</motion.div>
				</motion.div>

				<motion.div
					className="relative mt-20"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<ImageSlider />
				</motion.div>

				<div className="mt-32 flex flex-col justify-between md:flex-row lg:pb-10">
					<motion.div
						ref={valuesRef}
						className="md:pl-6"
						initial={{ opacity: 0 }}
						animate={isValuesInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.6 }}
					>
						<TerminalText text="Wartości, jakimi się kierujemy" animateWhenInView />
					</motion.div>

					<div className="flex w-full max-w-[55rem] flex-1 flex-col max-md:mt-10 md:pl-8 md:pr-[12.5rem]">
						<motion.div
							ref={precisionRef}
							initial="hidden"
							animate={isPrecisionInView ? "visible" : "hidden"}
							variants={slideFromRight}
						>
							<div className="mb-5 flex items-center space-x-5">
								<span>
									<PrecisionIcon className="h-[1.875rem] w-[1.875rem] [&>path]:stroke-basicDark" />
								</span>
								<h3 className="text-[2.5rem] leading-[50px]">Precyzja</h3>
							</div>
							<p className="text-[1.063rem] leading-[160%] tracking-[0.02em]">
								Przesuwamy piksele z prawa na lewo, dopóki wszystko nie wygląda tak, jak powinno.
								Poprawiamy każdą niedoskonałość na zdjęciu czy filmie, bo wiemy, że to właśnie
								detale robią różnicę. Czasami wracamy do projektu wiele razy, żeby upewnić się, że
								każdy element gra w punkt. Nie jest to obsesja – to po prostu sposób, w jaki
								tworzymy rzeczy, które cieszą oko i działają na wyobraźnię. Albo to obsesja.
							</p>
						</motion.div>

						<motion.div
							ref={opennessRef}
							className="my-10 border-b border-t border-lightGrey py-10"
							initial="hidden"
							animate={isOpennessInView ? "visible" : "hidden"}
							variants={slideFromRight}
						>
							<div className="mb-5 flex items-center space-x-5">
								<span>
									<OpennessIcon className="h-[1.875rem] w-[1.875rem] [&>path]:stroke-basicDark" />
								</span>
								<h3 className="text-[2.5rem] leading-[150%]">Otwartość</h3>
							</div>
							<p className="text-[1.063rem] leading-[160%] tracking-[0.02em]">
								Jesteśmy jak stacja benzynowa – otwarci. Zmieniasz wizję w trakcie projektu? Żaden
								problem, zrobimy poprawki, zmiksujemy pomysły i działamy dalej. Pomysły z kosmosu,
								klienci z nietypowych branż czy niestandardowe zlecenia? Uwielbiamy takie wyzwania.
								Otwartość to dla nas codzienność – to dzięki luźnej atmosferze tworzymy projekty,
								które żyją, ewoluują i odpowiadają na potrzeby klienta.
							</p>
						</motion.div>

						<motion.div
							ref={empathyRef}
							initial="hidden"
							animate={isEmpathyInView ? "visible" : "hidden"}
							variants={slideFromRight}
						>
							<div className="mb-5 flex items-center space-x-5">
								<span>
									<EmpathyIcon className="h-[1.875rem] w-[1.875rem] [&>path]:stroke-basicDark" />
								</span>
								<h3 className="text-[2.5rem] leading-[150%]">Empatia</h3>
							</div>
							<p className="text-[1.063rem] leading-[160%] tracking-[0.02em]">
								Rozumiemy, że Twój projekt to coś więcej niż tylko zadanie – to Twój pomysł, wizja a
								często także kawałek serca. Dlatego zawsze staramy się znaleźć czas, nawet gdy dzień
								wydaje się za krótki. Utożsamiamy się z Twoimi celami, bo wiemy, że sukces Twojej
								marki to także nasz sukces.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</WhiteBox>
	);
};

export default MainSectionAboutUs;
