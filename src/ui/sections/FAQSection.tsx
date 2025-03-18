import React from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
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

const FAQSection = () => {
	return (
		<section className="container my-20">
			<div>
				<h2 className="text-[2.5rem]">Fekju, fakju, FAQ. Czy jakoś tak...</h2>
			</div>
			<section className="mt-14 space-y-4">
				{faqs.map((faq, idx) => (
					<div key={faq.id} className="overflow-hidden transition-shadow duration-300">
						<details
							className={twMerge(
								"group cursor-pointer border-b border-lightGrey open:border-basicDark",
								idx === faqs.length - 1 && "border-none",
							)}
						>
							<summary className="flex list-none items-center justify-between py-5 text-lg font-medium text-gray-900 md:text-[1.313rem] md:text-xl">
								<span>{faq.question}</span>
								<div className="relative ml-10 h-6 min-w-6 shrink-0 items-center justify-center">
									{/* Ikona "+" z animacją */}
									<svg
										className="absolute inset-0 h-6 w-6 transform transition-all duration-300 ease-in-out group-open:rotate-180 group-open:opacity-0"
										width="20"
										height="21"
										viewBox="0 0 20 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
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
										className="absolute inset-0 h-6 w-6 scale-0 transform opacity-0 transition-all duration-300 ease-in-out group-open:scale-100 group-open:opacity-100"
										width="20"
										height="3"
										viewBox="0 0 20 3"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect y="1" width="20" height="1" fill="#08080A" />
									</svg>
								</div>
							</summary>
							<div className="prose prose-blue max-w-none pb-6 pt-2 text-sm text-darkGrey md:text-[1.063rem]">
								{faq.answear}
							</div>
						</details>
					</div>
				))}
			</section>
		</section>
	);
};

export default FAQSection;
