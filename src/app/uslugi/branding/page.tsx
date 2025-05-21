import API from "@/API";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import { ScrollableSectionInterface } from "@/ui/organisms/SubServices";
import CtaSection from "@/ui/sections/CtaSection";
import FAQSection, { FAQ } from "@/ui/sections/FAQSection";
import SmallCaseStudiesSection from "@/ui/sections/case-studies/SmallCaseStudiesSection";
import HeroSectionServicesPage from "@/ui/sections/services/HeroSectionServicesPage";
import ProcessSection, { ProgressSectionItem } from "@/ui/sections/services/ProcessSection";
import ServiceSection from "@/ui/sections/services/ServiceSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Branding ▪ Znami Studio",
	// description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
	// keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "Branding ▪ Znami Studio",
		// description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
		type: "website",
		// url: "https://twojastrona.pl/kontakt",
		images: [
			{
				url: "https://api.znami.usermd.net/og-image/",
				width: 1200,
				height: 630,
				alt: "Kontakt - Znami",
			},
		],
	},
	robots: {
		// index: true,
		// follow: true,
	},
};

const sections: ScrollableSectionInterface[] = [
	{
		id: 1,
		title: "Naming",
		slug: "naming",
		textTop:
			"Dobra nazwa to coś więcej niż zlepek liter – to pierwsze wrażenie, jakie zrobisz na kliencie. Powinna być chwytliwa, unikalna i budzić zamierzone emocje. W naszym procesie tworzenia nazw łączymy kreatywność z analitycznym podejściem, dzięki czemu powstają nazwy, które zostają w głowie i mają szansę stać się silnym fundamentem Twojej marki.",
		textBottom:
			"Tworzymy szeroką listę propozycji i każdą z nich dokładnie analizujemy. Sprawdzamy dostępność domen internetowych i profili w social mediach, a także przeprowadzamy małe badanie wśród Twojej grupy docelowej, by mieć pewność, że nazwa trafia w gusta klientów. Na koniec dostajesz 3 najlepsze opcje, które są gotowe do wdrożenia – wszystko po to, byś miał wybór i mógł spokojnie budować swoją markę od samego początku.",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/branding-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/branding-img-2/",
		},
	},
	{
		id: 2,
		title: "Logo",
		slug: "logo",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/logo-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/logo-img-2/",
		},
		textTop:
			"Logo to wizytówka Twojej marki - powinno być nie tylko estetyczne, ale też funkcjonalne i łatwo zapamiętywalne. Dlatego projektując logo, dbamy o to, by było wykonane zgodnie ze sztuką i by pasowało do charakteru Twojej firmy.",
		textBottom:
			"Efekty prac prezentujemy w formie wizualizacji, aby pokazać, jak logo wygląda w różnych kontekstach - np. na szyldzie, wizytówce, czy billboardzie. Po zakończonym projekcie dostarczamy wszystkie niezbędne pliki - rastrowe, wektorowe, w paletach barw RGB i CMYK - gotowe do zastosowania zarówno online, jak i w druku.",
	},
	{
		id: 3,
		title: "Identyfikacja wizualna",
		slug: "identyfikacja-wizualna",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/identyfikacja-wizualna-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/identyfikacja-wizualna-img-2/",
		},
		textTop:
			"Identyfikacja wizualna marki to narzędzie, które pozwala Twojej marce mówić spójnym głosem – zarówno wizualnie, jak i komunikacyjnie. Opracowany dla Ciebie system wspiera strategię komunikacji, podkreśla charakter marki i pomaga wyróżnić się w oczach grupy docelowej, zapaść jej w pamięć, a docelowo zachęcić odbiorców do zakupu.",
		textBottom:
			"Dostarczamy rozbudowany brand book (PDF i opcjonalnie też Figma), który jest praktycznym przewodnikiem dla Ciebie i Twojego zespołu. Zawiera zasady użycia logo, palety kolorów, opis typografii czy Tone of Voice marki. Dodajemy również przykłady zastosowań identyfikacji w realnych sytuacjach. Efekt? Narzędzie, które pozwoli Twojej marce działać w sposób profesjonalny, spójny i atrakcyjny dla Twoich odbiorców.",
	},
	{
		id: 4,
		title: "Web Design",
		slug: "web-design",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/web-design-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/web-design-img-2/",
		},
		textTop:
			"Strona internetowa to coś więcej niż narzędzie – to przestrzeń, w której Twoja marka spotyka się z odbiorcami. Projektujemy strony internetowe dla firm, które odzwierciedlają charakter marki, przyciągają uwagę i są intuicyjne w obsłudze. Wszystko po to, by użytkownik czuł się komfortowo, znalazł to, czego szuka i kupił Twój produkt lub usługę.",
		textBottom:
			"Nasze projektowanie stron internetowych zaczynamy od badania potrzeb Twojej grupy docelowej i dokładnej analizy rynku, na którym działa Twoja firma. Dostosowujemy stronę www do oczekiwań i nawyków użytkowników, dbając o każdy detal UX/UI, by zwiększyć zaangażowanie i liczbę leadów. Możemy stworzyć zarówno prosty landing page, jak i rozbudowane serwisy. Gotowy projekt graficzny strony przygotowany w Figmie przekazujemy Tobie lub partnerskiej firmie (Kreatywny Brand) do wdrożenia strony internetowej.",
	},
	{
		id: 5,
		title: "Projekty do druku",
		slug: "projekty-do-druku",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/projekty-do-druku-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/projekty-do-druku-img-2/",
		},
		textTop:
			"Materiały drukowane (DTP) i opakowania produktowe to nie tylko dodatki – to część doświadczenia, jakie Twoja marka oferuje odbiorcom. Dbamy o to, by każdy projekt wpisywał się w charakter firmy, wspierał branding offline i wywoływał pozytywne emocje u osoby, która trzyma projekt w dłoniach.",
		textBottom:
			"Tworzymy projekty do druku zgodnie z identyfikacją wizualną marki, dzięki czemu wszystkie materiały drukowane są spójne i profesjonalne. Chcesz, by Twoje opakowanie przyciągało uwagę na półce? A może potrzebujesz katalogu firmowego, który opowie historię Twojej marki? Z nami to możliwe. Specjalizujemy się w projektowaniu opakowań i współpracujemy z doświadczonymi drukarniami, dzięki czemu masz wpływ na każdy detal – od rodzaju papieru, przez uszlachetnienia, aż po wybór techniki druku materiałów reklamowych.",
	},
	{
		id: 6,
		title: "Usługi abonamentowe",
		slug: "uslugi-abonamentowe",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/uslugi-abonamentowe-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/uslugi-abonamentowe-img-2/",
		},
		textTop:
			"Marka potrzebuje ciągłej uwagi, by angażować swoją grupę docelową i utrzymać spójną obecność w mediach. Oferujemy stałą obsługę graficzną marki, obejmującą projekty graficzne dla firm, grafiki do social media, materiały promocyjne, zdjęcia oraz produkcję wideo. Dzięki temu zawsze masz pod ręką treści wspierające rozwój marki i jej branding.",
		textBottom:
			"Działamy sprawnie, tworząc projekty w oparciu o key visual marki oraz Twoje cele biznesowe. Przygotowujemy materiały w sposób elastyczny, dopasowany do medium i planu promocji. Ty możesz skupić się na prowadzeniu firmy, a my zadbamy o to, by Twoja marka wyglądała profesjonalnie – na social mediach, w materiałach na targi branżowe czy podczas spotkań z inwestorami. Oferujemy pełne wsparcie i spójną komunikację wizualną.",
	},
];

const progressItems: ProgressSectionItem[] = [
	{
		img: "https://api.znami.usermd.net/process-section-branding-1/",
		title: "1. Rozmawiamy o wizji i wartościach Twojej marki",
		content:
			"Rozpoczynamy od rozmowy, podczas której poznajemy Twoją markę, jej wartości i cele projektu. Na tej podstawie tworzymy dopasowaną ofertę.",
		list: [
			"Przeprowadzamy briefing kreatywny i przygotowujemy ofertę",
			"Opracowujemy harmonogram prac",
		],
	},
	{
		img: "https://api.znami.usermd.net/process-section-branding-2/",
		title: "2. Realizujemy projekt",
		content:
			"Po podpisaniu umowy bierzemy się za projektowanie. Dbamy o każdy szczegół, by dopasować efekt do charakteru Twojej marki.",
		list: [
			"Przeprowadzamy reasearch i zbieramy inspiracje",
			"Pracujemy nad projektem, a potem przeprowadzamy jego prezentację",
		],
	},
	{
		img: "https://api.znami.usermd.net/process-section-branding-3/",
		title: "3. Nanosimy ostatnie szlify",
		content:
			"Minimum jedna runda poprawek jest wliczona w cenę. Działamy jednak tak długo, aż finalny efekt będzie zgodny z Twoimi oczekiwaniami.",
		list: [
			"Wspólnie z Tobą przeprowadzamy rewizję projektu",
			"Robimy sesje poprawkowe, jeśli zachodzi potrzeba",
		],
	},
	{
		img: "https://api.znami.usermd.net/process-section-branding-4/",
		title: "4. Finalizujemy i wdrażamy identyfikację wizualną!",
		content:
			"Przekazujemy gotowe pliki, wystawiamy fakturę i wspieramy wdrożenie. Wszystko po to, by zakończyć projekt w pełni profesjonalnie.",
		list: [
			"Oddajemy gotowe pliki i pomagamy wdrożyć opracowany design",
			"Wystawiamy fakturę i przekazujemy prawa autorskie",
		],
	},
];

const faqs: FAQ[] = [
	{
		id: 1,
		question: "Mam własny pomysł. Czy realizacja będzie dzięki temu tańsza? ",
		answear:
			"Niestety nie. Nasz proces projektowy składa się z wielu etapów, w tym m.in. z badania rynku, opracowania strategii i zaprojektowania od zera lub dopasowania projektu do całej identyfikacji wizualnej. Każdy z etapów odgrywa kluczową rolę w osiągnięciu finalnego rezultatu. Twoja inwestycja w nasze usługi zawsze obejmuje więc cały proces twórczy, a wszystkie pomysły i sugestie traktujemy po prostu jako dodatkowe wytyczne do projektu.",
	},
	{
		id: 2,
		question: "Czy mogę zamówić wyłącznie logo?",
		answear:
			"Tak, wraz z logo otrzymasz pełną dokumentację w postaci Księgi Znaku i stosowne prawa autorskie. Taka usługa ma sens dla drobnych działalności, które nie prowadzą szerszej komunikacji w Internecie (np. osiedlowy sklepik spożywczy). Dla firm, które pragną się stale rozwijać, dużo lepiej sprawdzi się prawidłowo opracowana strategia marki idąca w parze z pełną identyfikacją wizualną i spójnie zaprojektowanymi treściami (jak np. sesja zdjęciowa czy strona internetowa). Zaprojektowanie nowego logo jest więc krokiem w dobrą stronę, ale by osiągać cele biznesowe, zwykle trzeba sięgnąć dalej.",
	},
	{
		id: 3,
		question: "Kiedy następuje płatność, na końcu projektu czy etapami?",
		answear:
			"Bywa, że pobieramy 30% zaliczki. Reszta płatna jest dopiero po zakończeniu projektu. Duże, długoterminowe projekty możemy podzielić dla Ciebie na indywidualne, dostosowane etapy, a rozliczenie będzie następować po każdym z nich. Rozliczamy się na podstawie faktur VAT z 7-dniowym terminem płatności.",
	},
	{
		id: 4,
		question: "W jaki sposób i kiedy przekazujecie prawa autorskie? ",
		answear:
			" Przekazanie praw autorskich majątkowych do projektu zawarte jest w podpisanej umowie, a zapisy te wchodzą w życie w momencie opłacenia przez Ciebie faktury końcowej.",
	},
	{
		id: 5,
		question: "Co, jeśli efekt finalny mnie nie usatysfakcjonuje?",
		answear:
			"Do każdego z etapów projektu przysługuje sesja poprawkowa, która jest ewidencjonowana online. Jeżeli zmian jest więcej, a nie wynikają one z początkowych ustaleń, to dalsze prace naliczane są wg aktualnej stawki godzinowej studia, którą zawsze zawieramy w ofercie. Zawsze też informujemy Cię o tym z wyprzedzeniem.",
	},
	{
		id: 6,
		question: "Branding – co to jest i dlaczego jest ważny?",
		answear:
			"Branding to proces budowania rozpoznawalnej i spójnej marki. Począwszy od logo, przez identyfikację wizualną, aż po komunikację i emocje, jakie wywołuje marka. Dobry branding pomaga wyróżnić się na rynku i tle konkurencji, budować zaufanie i zapadać w pamięć klientom. Co jednak ważne, branding to nie tylko to, jak marka wygląda. Branding to też wartości jakimi firma się kieruje, jej sposób komunikacji z odbiorcami czy podejście do wykonywanych produktów lub usług.",
	},
	{
		id: 7,
		question: "Identyfikacja wizualna – co to takiego?",
		answear:
			"Identyfikacja wizualna to zbiór elementów graficznych reprezentujących markę. Na identyfikację wizualną składa się przede wszystkim logo, paleta barw, typografia, zdjęcia, ikony, ilustracje. Oprócz samych assetów, ważny jest także dokładny sposób ich używania np. jak dobrać zdjęcie czy jak skalować rozmiary tekstów w dokumencie. Dzięki identyfikacji wizualnej marka jest bardziej rozpoznawalna i spójna we wszystkich kanałach komunikacji",
	},
	{
		id: 8,
		question: "Ile kosztuje projekt logo i identyfikacja wizualna?",
		answear:
			"Cena bardzo mocno zależy od zakresu prac, rodzaju i skali działalności i potrzeb komunikacyjnych marki. Sam projekt logo to mniejsza inwestycja, natomiast pełna identyfikacja wizualna z brand bookiem oraz projektami marketingowymi wyceniana jest indywidualnie. Skontaktuj się z nami, a przygotujemy bezpłatną wycenę dopasowaną do Twoich potrzeb. Pamiętaj, że nie jesteśmy wielką korporacją - dzięki czemu nasza oferta jest atrakcyjniejsza cenowo. Jeśli chcesz, wystarczy, że podasz nam swój budżet, a my postaramy się dobrać najbardziej trafny zakres prac, który się w nim zmieści. Chętnie pomożemy!",
	},
	{
		id: 9,
		question: "Jak to jest być skrybą, dobrze?",
		answear:
			"Naszym zdaniem to nie ma tak, że dobrze albo że nie dobrze. Gdybyśmy mieli powiedzieć, co cenimy w życiu najbardziej, powiedzielibyśmy, że ludzi. Ludzi, którzy podali nam pomocną dłoń, kiedy sobie nie radziliśmy, kiedy byliśmy sami. I co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia. My jednak możemy pomóc zrozumieć Ci czym jest Znami Studio <br /> <br /> Znami to kreatywne studio, które oferuje kompleksowe usługi w zakresie tworzenia treści wizualnych i wideo, ze szczególnym uwzględnieniem brandingu <br /> <br /> Nasze usługi obejmują m.in. kompleksową identyfikację wizualną, w tym projektowanie logo, materiały marketingowe i całościową strategię wizualną, która pomoże w budowaniu spójnego wizerunku Twojej marki. Oferujemy profesjonalne sesje zdjęciowe, w tym wizerunkowe, biznesowe, produktowe oraz zdjęcia z drona. Nasza oferta to połączenie kreatywności z doświadczeniem, które pozwala tworzyć angażujące treści wspierające branding Twojej marki. Specjalizujemy się też w produkcji filmów reklamowych, korporacyjnych, materiałów z eventów, webinarów, podcastów oraz video na social media <br /> <br /> Dostosowujemy każdy projekt do indywidualnych potrzeb – od koncepcji, przez produkcję, po montaż, edycję i dostosowanie materiałów do różnych formatów (media społecznościowe, strony www, kampanie online). Zapewniamy pełną obsługę, pomagając Ci wykreować tożsamość wizualną, która wyróżni Twoją firmę na tle konkurencji. Po zakończonej realizacji nie pozostawimy Cię bez wsparcia - zawsze służymy radą! <br /> <br /> Wszystkie nasze projekty, zarówno w zakresie fotografii, jak i produkcji wideo, są realizowane zgodnie z zaplanowaną strategią marki. Tworzymy materiały, które przyciągają uwagę, budują zaufanie oraz angażują odbiorców. Dzięki naszej pomocy Twoja marka zyska spójny, profesjonalny wizerunek, który wyróżni ją wśród innych na rynku. Skontaktuj się z nami, by dowiedzieć się, jak możemy wspierać rozwój Twojego biznesu poprzez kreatywne usługi związane z brandingiem i produkcją materiałów wideo oraz zdjęciowych. Twój sukces to też nasz sukces <3",
	},
];

const BrandingPage = async () => {
	const response = await API.caseStudies.getCaseStudies({
		showOnServicePage: true,
		category: "branding",
	});
	const caseStudies: CaseStudyResponse[] = response.data;

	return (
		<main className="bg-background">
			<HeroSectionServicesPage video="https://api.znami.usermd.net/Znami-Studio-Header-video" />
			<ServiceSection
				name="Branding"
				headingTwo="Dobry branding jest jak ubranie - nie tylko dobrze wygląda, ale jest funkcjonalny i odzwierciedla charakter osoby, a w tym przypadku firmy. Jej tożsamość i wartości. "
				paragraph="Tak jak dobrze dobrany outfit sprawia, że czujesz się pewnie, tak odpowiednio zaprojektowany branding marki przyciąga uwagę, buduje zaufanie i wzmacnia wizerunek firmy. Z nami stworzysz spójną identyfikację wizualną, przemyślaną strategię marki i profesjonalne materiały graficzne. Projektowanie graficzne Znami Studio to nie tylko estetyka - to narzędzie, które pozwoli Ci się rozwinąć na rynku i znacząco zwiększyć sprzedaż."
				opinion={{
					author: "Grzegorz Mikuła",
					authorImg: "https://api.znami.usermd.net/opinion-author-branding/",
					company: "hifood",
					text: "Jeżeli nasi klienci pytają, kto Wam projektował grafikę, bo jest genialna - to chyba najlepsza rekomendacja. Nie wyobrażamy sobie współpracować z nikim innym.",
				}}
				sections={sections}
			/>
			<ProcessSection elements={progressItems} />
			<SmallCaseStudiesSection caseStudies={caseStudies} title="Pa tu, jakie fajne przykłady!" />
			<FAQSection faqs={faqs} />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
};

export default BrandingPage;
