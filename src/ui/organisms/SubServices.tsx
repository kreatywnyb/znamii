"use client";
import { links } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

import { CTAButton } from "../molecules/CTAButton";

export interface ScrollableSectionInterface {
	id: number;
	title: string;
	textTop: string;
	textBottom: string;
	imageLeft: {
		src: string | StaticImageData;
		alt: string;
	};
	imageRight: {
		src: string | StaticImageData;
		alt: string;
	};
	slug: string;
}

export type SubServicesProps = {
	sections: ScrollableSectionInterface[];
};

export default function ScrollableSections({ sections }: SubServicesProps) {
	const [activeSlug, setActiveSlug] = useState<string>("");
	const [sectionPositions, setSectionPositions] = useState<Record<string, number>>({});

	const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

	// Zapisywanie pozycji wszystkich sekcji przy pierwszym renderze
	// i obsługa hasha URL w jednym useEffect
	useEffect(() => {
		// Funkcja obliczająca pozycje wszystkich sekcji
		const calculateSectionPositions = () => {
			const positions: Record<string, number> = {};

			sections.forEach((section) => {
				const element = sectionRefs.current[section.slug];
				if (element) {
					// Obliczamy pozycję z uwzględnieniem offsetu nagłówka (64px)
					const position = element.getBoundingClientRect().top + window.scrollY - 64;
					positions[section.slug] = position;
				}
			});

			setSectionPositions(positions);

			// Po zapisaniu pozycji, sprawdzamy czy jest hash w URL
			const hash = window.location.hash.replace("#", "");
			if (hash && positions[hash] !== undefined) {
				// Przewijamy do zapisanej pozycji dla tego hasha
				window.scrollTo({
					top: positions[hash],
					behavior: "smooth",
				});
				setActiveSlug(hash);
			}
		};

		// Dajemy komponentom czas na wyrenderowanie
		const timer = setTimeout(() => {
			calculateSectionPositions();
		}, 500);

		return () => clearTimeout(timer);
	}, [sections]);

	// Funkcja aktualizująca URL z aktywną sekcją
	// const updateUrlHash = (slug: string) => {
	// 	if (!slug) return;
	// 	// Aktualizujemy URL bez przewijania strony
	// 	window.history.replaceState(null, "", `#${slug}`);
	// 	console.log(`URL zaktualizowany do #${slug}`);
	// };

	// Śledzenie aktywnej sekcji na podstawie pozycji scrollowania
	useEffect(() => {
		// Funkcja określająca, która sekcja jest aktywna na podstawie aktualnej pozycji scrollowania
		const handleScroll = () => {
			// Aktualna pozycja scrollowania z uwzględnieniem offsetu nagłówka
			const scrollPosition = window.scrollY + 64; // Dodajemy offset dla lepszego wykrywania

			// Przetwarzamy sectionPositions, aby znaleźć najbliższą sekcję
			const sortedSlugs = Object.keys(sectionPositions).sort(
				(a, b) => sectionPositions[a] - sectionPositions[b],
			);

			// Znajdź najbliższą sekcję, która jest nad obecną pozycją scrollowania
			let activeSection = sortedSlugs[0]; // Domyślnie pierwsza sekcja

			for (let i = 0; i < sortedSlugs.length; i++) {
				const slug = sortedSlugs[i];
				// Jeśli sekcja jest powyżej aktualnej pozycji scrollowania
				if (sectionPositions[slug] <= scrollPosition) {
					activeSection = slug;
				} else {
					// Przerywamy pętlę, gdy znajdziemy pierwszą sekcję poniżej pozycji scrollowania
					break;
				}
			}

			// Aktualizuj aktywną sekcję tylko jeśli się zmieniła
			if (activeSection && activeSection !== activeSlug) {
				setActiveSlug(activeSection);
				// updateUrlHash(activeSection);
			}
		};

		// Dodaj nasłuchiwanie na zdarzenie scroll
		window.addEventListener("scroll", handleScroll, { passive: true });

		// Wywołaj raz, aby ustawić początkową aktywną sekcję
		if (Object.keys(sectionPositions).length > 0) {
			handleScroll();
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [sectionPositions, activeSlug]);

	// Funkcja przewijająca do zapisanej pozycji sekcji
	const handleClickNav = (slug: string) => {
		console.log(slug);

		// Używamy zapisanej pozycji zamiast obliczać ją na nowo
		if (sectionPositions[slug] !== undefined) {
			console.log(`Przewijanie do zapisanej pozycji sekcji ${slug}: ${sectionPositions[slug]}px`);

			window.scrollTo({
				top: sectionPositions[slug],
				behavior: "smooth",
			});

			// Aktualizacja URL i aktywnego sluga
			window.history.pushState(null, "", `#${slug}`);
			setActiveSlug(slug);
		} else {
			console.warn(`Nie znaleziono zapisanej pozycji dla sekcji ${slug}`);
		}
	};

	return (
		<div className="relative my-20 flex min-h-screen flex-col border-b border-t border-lightGrey md:flex-row">
			{/* Left Navigation Column */}
			<div className="sticky top-[4rem] hidden h-screen w-1/4 overflow-auto pl-4 md:flex min-[1536px]:pl-[64px]">
				<div className="z-20 w-full">
					<nav className="flex h-full items-center">
						<div className="mr-5 flex h-[42rem] w-full flex-col justify-between pt-4">
							<ul className="flex flex-col md:space-y-[3.75rem]">
								{sections.map((section) => (
									<li key={section.id}>
										<span
											onClick={() => handleClickNav(section.slug)}
											className={`relative cursor-pointer whitespace-nowrap font-geist text-xs uppercase text-basicDark transition-all duration-300 ${
												activeSlug === section.slug ? "pl-4" : ""
											}`}
										>
											<span
												className={`absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 transform bg-primary transition-all duration-300 ease-in-out ${activeSlug === section.slug ? "scale-100" : "scale-0"}`}
											/>

											{`0${section.id} ${section.title.toUpperCase()}`}
										</span>
									</li>
								))}
							</ul>
							<div className="mt-auto inline-block">
								<CTAButton className="max-md:hidden" href={links.contactPage} variant="primaryv2">
									zrealizuj projekt
								</CTAButton>
							</div>
						</div>
					</nav>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 border-lightGrey">
				{sections.map((section) => (
					<div
						key={section.id}
						id={section.slug}
						// ref={(el) => (sectionRefs.current[section.slug] = el)}
						ref={(el) => {
							sectionRefs.current[section.slug] = el;
						}}
						className="sticky top-[4rem] -mt-[1px] flex min-h-screen flex-col justify-start border-l border-t border-lightGrey bg-white max-md:px-4 max-md:pt-6 md:justify-center md:pl-10"
					>
						<div className="flex h-[42rem] w-full flex-col transition-opacity duration-500 ease-in-out">
							<div className="mb-6 md:mb-10 md:pr-8">
								<h2 className="mb-5 text-2xl font-medium md:text-3xl md:text-[2.5rem]">
									{section.title}
								</h2>
								<p className="text-base leading-normal md:text-[1.313rem] md:text-lg">
									{section.textTop}
								</p>
								<p className="mt-4 text-sm leading-normal text-darkGrey md:mt-5 md:text-[1.063rem] md:text-base">
									{section.textBottom}
								</p>
							</div>

							<div className="mt-auto flex w-full flex-col pr-8 md:flex-row md:justify-between md:space-x-10">
								<div className="mb-4 w-full flex-1 md:mb-0">
									<Image
										alt={section.imageLeft.alt}
										src={section.imageLeft.src}
										className="h-auto w-full object-cover object-center md:w-auto"
									/>
								</div>
								<div className="w-full flex-1 bg-blue-500">
									<Image
										alt={section.imageRight.alt}
										src={section.imageRight.src}
										className="hidden h-full !w-full object-cover object-center md:inline-block"
									/>
								</div>
							</div>

							<CTAButton className="mt-6 w-full md:hidden" href={links.contactPage}>
								zrealizuj projekt
							</CTAButton>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
