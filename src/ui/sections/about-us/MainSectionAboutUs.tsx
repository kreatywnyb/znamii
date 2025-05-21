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
	const textFadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const firstParaFadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay: 1 },
		},
	};

	const secondParaFadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay: 1.2 },
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
							word="Dlaczego warto nas wybrać? 🤔"
							as="h2"
							className="max-w-96 text-3xl font-medium lg:text-[2.5rem] lg:leading-[125%]"
						></FlipWords>
					</motion.div>
					<motion.div className="ml-auto flex-1 md:basis-1/4" variants={firstParaFadeIn}>
						<p className="text-[1.063rem] font-medium leading-[160%] md:max-w-[320px]">
							Znami to kameralne studio kreatywne, które powstało z przyjaźni dwóch gości – Puciaka
							i Maksa, którzy znają się od blisko 15 lat. Tak, to ten typ przyjaźni, w której nie ma
							miejsca na spiny i sztywną atmosferę. Dokładnie tak samo traktujemy naszych klientów -
							bez zbędnego zadęcia, za to z sercem i pełnym profesjonalizmem.
						</p>
					</motion.div>
					<motion.div className="flex-1 md:basis-1/4" variants={secondParaFadeIn}>
						<p className="text-[1.063rem] font-medium leading-[160%] md:max-w-[320px]">
							Zrealizujemy dla Ciebie branding, sesje zdjęciowe i video. Informacje o postępach
							otrzymasz zawsze z pierwszej ręki, a dzięki temu, że nie jesteśmy dużą agencją
							kreatywną, możesz spać spokojnie - nie zrujnujemy Twojego portfela.
						</p>
					</motion.div>
				</motion.div>

				<motion.div
					className="relative mt-14 lg:mt-20"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<ImageSlider />
				</motion.div>

				<div className="mt-24 flex flex-col justify-between md:flex-row lg:mt-32 lg:pb-10">
					<motion.div
						ref={valuesRef}
						className="md:pl-6"
						initial={{ opacity: 0 }}
						animate={isValuesInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.6 }}
					>
						<TerminalText
							text="Wartości, jakimi się kierujemy"
							styles="max-w-32"
							animateWhenInView
						/>
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
								Przesuwamy piksele z prawej do lewej, dopóki wszystko nie wygląda tak, jak powinno.
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
								które żyją, ewoluują i odpowiadają na Twoje potrzeby.
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
								Rozumiemy, że projekt to coś więcej niż tylko zadanie – to Twój biznesi często także
								kawał serducha, od którego zależy, co będzie dało się włożyć do garnka na koniec
								miesiąca. Dlatego zawsze staramy się znaleźć czas dla naszych klientów, nawet gdy
								dzień wydaje się zbyt krótki. Utożsamiamy się z Twoimi celami, bo wiemy, że sukces
								Twojej marki to także nasz sukces.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</WhiteBox>
	);
};

export default MainSectionAboutUs;
