"use client";
import { links } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
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

const SubServices = ({ sections }: SubServicesProps) => {
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const initialLoad = useRef<boolean>(true);

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768); // Breakpoint 768px dla urządzeń mobilnych
		};

		// Sprawdź przy pierwszym renderowaniu
		checkIfMobile();

		// Dodaj event listener dla zmian rozmiaru okna
		window.addEventListener("resize", checkIfMobile);

		// Cleanup
		return () => {
			window.removeEventListener("resize", checkIfMobile);
		};
	}, []);

	useEffect(() => {
		if (initialLoad.current && typeof window !== "undefined") {
			// Pobierz fragment URL (bez znaku #)
			const hash = window.location.hash.replace("#", "");

			if (hash) {
				// Znajdź indeks sekcji na podstawie sluga
				const sectionIndex = sections.findIndex((section) => section.slug === hash);

				if (sectionIndex !== -1) {
					// Ustaw aktywny slajd i przewiń do odpowiedniej sekcji
					console.log("Znaleziono sekcję dla hash:", hash, "indeks:", sectionIndex);
					setActiveSlide(sectionIndex);

					// Daj chwilę na wyrenderowanie komponentu przed przewinięciem
					setTimeout(() => {
						scrollToSection(sectionIndex);
					}, 300);
				}
			}

			// Oznacz, że pierwsze ładowanie zostało zakończone
			initialLoad.current = false;
		}
	}, [sections]);

	// Użyj zdarzenia scroll do detekcji aktywnej sekcji
	useEffect(() => {
		// Wysokość viewportu
		const viewportHeight = window.innerHeight;

		// Funkcja obliczająca aktualną sekcję na podstawie przewinięcia
		const handleScroll = (): void => {
			if (!containerRef.current) return;

			// Pobierz pozycję kontenera względem viewportu
			const containerTop = containerRef.current.getBoundingClientRect().top;
			const containerHeight = containerRef.current.offsetHeight;

			// Oblicz, jak daleko użytkownik przewinął w kontenerze (jako proporcja)
			// Od 0 (góra) do 1 (dół)
			let scrollProgress = -containerTop / (containerHeight - viewportHeight);

			// Ogranicz zakres od 0 do 1
			scrollProgress = Math.max(0, Math.min(1, scrollProgress));

			// Oblicz indeks aktywnego slajdu na podstawie postępu przewijania
			// Podziel zakres 0-1 na sections.length przedziałów
			const newActiveIndex = Math.min(
				Math.floor(scrollProgress * sections.length),
				sections.length - 1,
			);

			// Aktualizuj tylko, jeśli indeks się zmienił
			if (newActiveIndex !== activeSlide) {
				setActiveSlide(newActiveIndex);
			}
		};

		// Zarejestruj listener zdarzenia scroll
		window.addEventListener("scroll", handleScroll);

		// Wywołaj raz na początku, aby ustawić początkowy stan
		handleScroll();

		// Cleanup
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [activeSlide, sections.length]);

	// Funkcja do przewijania do określonej sekcji po kliknięciu na menu
	const scrollToSection = (index: number): void => {
		if (!containerRef.current) return;

		const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
		const containerHeight = containerRef.current.offsetHeight;
		const sectionHeight = containerHeight / sections.length; // 🔥 Dynamiczna wysokość sekcji

		// 🔄 Nowa precyzyjna pozycja scrolla
		const scrollTarget = containerTop + (sectionHeight / 6) * 6 * index;

		// 📌 Smooth scroll
		window.scrollTo({
			top: scrollTarget,
			behavior: "smooth",
		});
	};

	return (
		<div ref={containerRef} className="relative my-20 h-[10000px]">
			{/* Sticky container z widoczną zawartością */}
			<div className="sticky top-0 flex items-center border-b border-t border-lightGrey lg:top-[calc(50vh-425px)] xxl:top-[calc(50vh-570px)]">
				<div className="container mx-auto px-4">
					<div className={`flex flex-col ${isMobile ? "" : "md:flex-row"} items-center`}>
						{/* Nawigacja (na górze w mobile, po lewej w desktop) */}
						<div className={`${isMobile ? "w-full" : "md:w-1/4"}`}>
							<nav>
								{isMobile ? (
									// Mobilna nawigacja - tylko aktywny element
									<div className="relative w-full py-2">
										<div className="flex items-center justify-between">
											<h3 className="font-geist font-bold uppercase text-black">
												{sections[activeSlide].title}
											</h3>
											<div className="flex space-x-3">
												<button
													className="p-2 disabled:opacity-50"
													disabled={activeSlide === 0}
													onClick={() => scrollToSection(activeSlide - 1)}
												>
													<ArrowIcon className="-rotate-[135deg]" />
												</button>
												<button
													className="p-2 disabled:opacity-50"
													disabled={activeSlide === sections.length - 1}
													onClick={() => scrollToSection(activeSlide + 1)}
												>
													<ArrowIcon className="rotate-45" />
												</button>
											</div>
										</div>
									</div>
								) : (
									// Desktopowa nawigacja - pełna lista
									<ul className="flex flex-col py-[3.75rem] md:space-y-[3.75rem]">
										{sections.map((section, index) => (
											<li
												key={section.id}
												className={`cursor-pointer font-geist text-xs uppercase transition-all duration-300 ${
													activeSlide === index ? "font-bold text-primary" : "text-basicDark"
												}`}
												onClick={() => scrollToSection(index)}
											>
												{`0${section.id} ${section.title.toUpperCase()}`}
											</li>
										))}
										<li>
											<CTAButton className="mt-5 max-md:hidden" href={links.contactPage}>
												zrealizuj projekt
											</CTAButton>
										</li>
									</ul>
								)}
							</nav>
						</div>

						{/* Zawartość slajdu (na dole w mobile, po prawej w desktop) */}
						<div className={`${isMobile ? "w-full" : "border-l border-lightGrey pl-14 md:w-3/4"}`}>
							<div
								className={`relative overflow-hidden md:!my-[3.75rem] ${isMobile ? "min-h-screen" : "h-[730px] xxl:h-[1000px]"}`}
							>
								{sections.map((section, index) => (
									<div
										key={`content-${section.id}`}
										className={`absolute h-full w-full transition-all duration-500 ${
											activeSlide === index
												? "translate-x-0 opacity-100"
												: "translate-x-20 opacity-0"
										} ${isMobile ? "flex flex-col" : "flex justify-center md:flex-col"}`}
									>
										<div className={` ${isMobile ? "mb-4" : "md:pr-8"}`}>
											<h2 className="mb-5 text-3xl font-medium max-md:hidden md:text-[2.5rem]">
												{section.title}
											</h2>
											<p className="text-lg leading-normal md:text-[1.313rem]">{section.textTop}</p>
											<p className="mt-5 text-base leading-normal text-darkGrey md:text-[1.063rem]">
												{section.textBottom}
											</p>
										</div>
										<div
											className={`${isMobile ? "h-40 w-full" : "mt-14 flex w-full justify-between space-x-10 pb-10"}`}
										>
											<div>
												<Image alt={section.imageLeft.alt} src={section.imageLeft.src} />
											</div>
											<div className="">
												<Image
													alt={section.imageRight.alt}
													src={section.imageRight.src}
													className="max-md:hidden"
												/>
												<CTAButton className="mt-10 md:hidden" href={links.contactPage}>
													zrealizuj projekt
												</CTAButton>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubServices;
