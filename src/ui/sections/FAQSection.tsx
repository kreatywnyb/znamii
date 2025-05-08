"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FlipWords } from "../molecules/FlipWords";

interface FAQ {
	id: number;
	question: string;
	answear: string;
}

const faqs: FAQ[] = [
	{
		id: 1,
		question: "Mam własny pomysł. Czy realizacja będzie dzięki temu tańsza?",
		answear:
			"Niestety nie. Nasz proces projektowy składa się z wielu etapów, w tym m. in. z badania rynku, opracowania strategii i zaprojektowania lub dopasowania projektu do całej identyfikacji wizualnej. Każdy z etapów odgrywa kluczową rolę w osiągnięciu finalnego rezultatu. Twoja inwestycja w nasze usługi zawsze obejmuje więc cały proces twórczy, a wszystkie pomysły i sugestie traktujemy po prostu jako dodatkowe wytyczne do projektu.",
	},
	{
		id: 2,
		question: "Czy mogę zamówić wyłącznie logo?",
		answear:
			"Tak, wraz z logo otrzymasz pełną dokumentację w postaci Księgi Znaku i stosowne prawa autorskie. Wierzymy jednak, że za sukcesem firm stoi prawidłowo opracowana strategia marki idąca w parze z całą identyfikacją wizualną i spójnie zaprojektowanymi treściami (jak np. sesja zdjęciowa czy strona internetowa). Zaprojektowanie nowego logo jest krokiem w dobrą stronę, ale by osiągać cele biznesowe, warto sięgnąć dalej.",
	},
];

const FAQSection: React.FC = () => {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const toggleFaq = (id: number): void => {
		setOpenFaq(openFaq === id ? null : id);
	};

	return (
		<section className="container my-20">
			<div>
				<FlipWords
					as="h2"
					className="text-4xl"
					word="Fekju, fakju, FAQ. Czy jakoś tak..."
				></FlipWords>
			</div>
			<section className="mt-14 space-y-4">
				{faqs.map((faq, idx) => (
					<div key={faq.id} className="overflow-hidden transition-shadow duration-300">
						<div
							className={twMerge(
								"border-b border-lightGrey",
								// openFaq === faq.id && "border-basicDark",
								idx === faqs.length - 1 && "border-none",
							)}
						>
							<button
								onClick={() => toggleFaq(faq.id)}
								className="flex w-full cursor-pointer items-center justify-between py-5 text-left text-[1.313rem] font-medium text-gray-900 md:text-[1.313rem] md:text-xl"
								aria-expanded={openFaq === faq.id}
								aria-controls={`faq-content-${faq.id}`}
							>
								<span>{faq.question}</span>
								<div className="relative ml-10 h-6 min-w-6 shrink-0 items-center justify-center">
									{/* Ikona "+" z animacją */}
									<svg
										className={twMerge(
											"absolute inset-0 h-6 w-6 transform transition-all duration-300 ease-in-out",
											openFaq === faq.id && "rotate-180 opacity-0",
										)}
										width="20"
										height="21"
										viewBox="0 0 20 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10.3724 10.441V0.940918H9.37236V10.441H-0.00585938V11.441H9.37237V20.9409H10.3724V11.441H19.7509V10.441H10.3724Z"
											fill="#08080A"
										/>
									</svg>
									{/* Ikona "-" z animacją */}
									<svg
										className={twMerge(
											"absolute inset-0 h-6 w-6 scale-0 transform opacity-0 transition-all duration-300 ease-in-out",
											openFaq === faq.id && "scale-100 opacity-100",
										)}
										width="20"
										height="3"
										viewBox="0 0 20 3"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<rect y="1" width="20" height="1" fill="#08080A" />
									</svg>
								</div>
							</button>
							<div
								id={`faq-content-${faq.id}`}
								className={twMerge(
									"max-h-0 overflow-hidden transition-all duration-500 ease-in-out",
									openFaq === faq.id && "max-h-96", // Dostosuj wartość max-h do najdłuższej odpowiedzi
								)}
								aria-hidden={openFaq !== faq.id}
							>
								<div
									className="prose prose-blue translate-y-4 transform pb-6 pt-2 text-[1.063rem] leading-[160%] text-darkGrey opacity-0 transition-all delay-100 duration-500 ease-in-out md:text-[1.063rem] lg:max-w-[80%]"
									style={{
										opacity: openFaq === faq.id ? 1 : 0,
										transform: openFaq === faq.id ? "translateY(0)" : "translateY(1rem)",
									}}
								>
									{faq.answear}
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
		</section>
	);
};

export default FAQSection;
