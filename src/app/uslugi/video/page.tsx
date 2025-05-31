import API from "@/API";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import { ScrollableSectionInterface } from "@/ui/organisms/SubServices";
import SmallCaseStudiesSection from "@/ui/sections/case-studies/SmallCaseStudiesSection";
import CtaSection from "@/ui/sections/CtaSection";
import FAQSection, { FAQ } from "@/ui/sections/FAQSection";
import HeroSectionServicesPage from "@/ui/sections/services/HeroSectionServicesPage";
import ProcessSection, { ProgressSectionItem } from "@/ui/sections/services/ProcessSection";
import ServiceSection from "@/ui/sections/services/ServiceSection";
import CtaBgImg from "@public/cta-poster-1.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Video ▪ Znami Studio",
	description:
		"Tworzymy treści wideo wspierające wizerunek marki. Produkujemy m.in. filmy reklamowe, produktowe, z eventów, webinary i video na social media.",
	// keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "Video ▪ Znami Studio",
		description:
			"Tworzymy treści wideo wspierające wizerunek marki. Produkujemy m.in. filmy reklamowe, produktowe, z eventów, webinary i video na social media.",
		type: "website",
		// url: "https://twojastrona.pl/kontakt",
		images: [
			{
				url: "https://api.znami.usermd.net/wp-content/uploads/2025/05/og-image.png",
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
		title: "Filmy reklamowe",
		textTop:
			"Filmy reklamowe to skuteczne narzędzie do promowania Twoich produktów i usług. Pracujemy nad każdym etapem procesu – od scenariusza, przez zdjęcia, montaż, aż po produkcję filmów marketingowych, aby efekt był spójny z charakterem marki i przemawiał do Twoich obecnych i przyszłych klientów.",
		textBottom:
			"Zaczynamy od briefu, na podstawie którego opracowujemy koncepcję i harmonogram zdjęć. Organizujemy plan zdjęciowy – scenografię, oświetlenie, ekipę. Po nagraniach przechodzimy do montażu, dodajemy animacje, efekty dźwiękowe, lektora oraz elementy video marketingowe. Finalny film dostarczamy w formatach gotowych do publikacji na social mediach, w telewizji czy kampaniach internetowych.",
		slug: "filmy-reklamowe",
		imageLeft: {
			alt: "Ujęcie z konferencji - profesjonalna relacja wideo z eventu firmowego od Znami Studio",
			src: "https://api.znami.usermd.net/filmy-reklamowe-img-1/",
		},
		imageRight: {
			alt: "Nagrania wideo na żywo - usługa filmowania eventów i spotkań biznesowych realizowana przez Znami Studio",
			src: "https://api.znami.usermd.net/filmy-reklamowe-img-2/",
		},
	},
	{
		id: 2,
		title: "Eventy i konferencje",
		textTop:
			"Filmy z eventów to świetny sposób na podsumowanie wydarzenia lub promocję jego kolejnej edycji. Podczas konferencji lub imprezy uchwycimy najważniejsze momenty: wystąpienia, reakcje uczestników, networking, kulisy organizacji oraz inne istotne momenty z wydarzeń.",
		textBottom:
			"Dbamy o swój dress code i pracujemy dyskretnie, by nie zakłócać przebiegu wydarzenia, a jednocześnie uchwycić wszystkie kluczowe momenty. Poza nagraniami wideo oferujemy także zdjęcia z eventów i dynamiczne podsumowania montażowe. Gotowe filmy nadają się do publikacji w social mediach, na stronach internetowych, jako materiały promocyjne czy firmowe archiwum. Materiały video z eventów sprawdzą się świetnie do sprzedaży kolejnych edycji wydarzenia i podtrzymywania zainteresowania pomiędzy nimi. Przygotujemy wideo zarówno w poziomych formatach, jak i wideo w formatach pionowych.",
		slug: "eventy-i-konferencje",
		imageLeft: {
			alt: "Backstage filmu korporacyjnego - profesjonalna produkcja wideo dla firm realizowana przez Znami Studio",
			src: "https://api.znami.usermd.net/eventy-i-konferencje-image-1/",
		},
		imageRight: {
			alt: "Spotkanie firmowe z prezentacją - ujęcie do filmu korporacyjnego promującego działalność firmy realizowanego przez Znami",
			src: "https://api.znami.usermd.net/eventy-i-konferencje-image-2/",
		},
	},
	{
		id: 3,
		title: "Filmy korporacyjne",
		textTop:
			"Filmy korporacyjne pokazują Twoją firmę od kuchni – pomagają budować zaufanie i angażujący wizerunek marki. Realizujemy filmy przedstawiające zespół, procesy produkcji, misję firmy, a także historię marki i wartości. Materiały mogą być wykorzystane na stronie www, w prezentacjach sprzedażowych, marketingu czy wydarzeniach branżowych.",
		textBottom:
			"Na początku omawiamy cele filmu i kluczowe treści do przekazania. Nagrania realizujemy w Twojej siedzibie lub w innych, uzgodnionych z Tobą lokalizacjach. Oferujemy pełne wsparcie w zakresie scenariusza, produkcji filmowej, oświetlenia, dźwięku i montażu. Gotowy materiał dostosowujemy do różnych platform i formatów, dodając napisy, grafiki czy animacje, tak aby przedstawić Twoją firmę w jak najlepszym świetle i podkreślić jej unikalność.",
		slug: "filmy-korporacyjne",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/filmy-korporacyjne-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/filmy-korporacyjne-img-2/",
		},
	},
	{
		id: 4,
		title: "Webinary i podcasty",
		textTop:
			"Profesjonalnie nagrane webinary i podcasty to świetny sposób na dzielenie się wiedzą i stałe budowanie relacji z odbiorcami. Materiały tego typu mogą zapewnić Twojej firmie dochód pasywny, a także stanowić doskonałe narzędzie w strategii content marketingowej. Nasza usługa obejmuje nagranie, edycję i dostosowanie materiału pod YouTube czy Spotify.",
		textBottom:
			"Zapewniamy wysokiej jakości obraz i dźwięk dzięki profesjonalnemu sprzętowi. Pracujemy nad montażem, dodając napisy, intro, dźwiękowe dżingle, które podnoszą atrakcyjność nagrań. Dla webinarów oferujemy wsparcie w transmisji na żywo i zapis materiału do późniejszego wykorzystania (np. do reels czy jako treści do organicznego wykorzystania w social mediach).",
		slug: "webinary-i-podcasty",
		imageLeft: {
			alt: "Prowadząca webinar w trakcie nagrania - profesjonalna produkcja webinarów i podcastów realizowana przez Znami Studio",
			src: "https://api.znami.usermd.net/webinary-i-podcasty-img-1/",
		},
		imageRight: {
			alt: "Prowadząca webinar przy laptopie - kadr z realizacji transmisji i nagrań online przez Znami Studio",
			src: "https://api.znami.usermd.net/webinary-i-podcasty-img-2/",
		},
	},
	{
		id: 5,
		title: "Spoty społeczne",
		textTop:
			"Spoty społeczne to filmy, które mają angażować odbiorcę i zwracać uwagę na ważne tematy. Tworzymy materiały dla organizacji pozarządowych, firm realizujących działania CSR czy inicjatyw społecznych, również tych dotowanych przez państwo czy UE.",
		textBottom:
			"Pracę zaczynamy od analizy grupy docelowej i dopasowania formy filmu do oczekiwanych emocji i reakcji. Dbamy o scenariusz, nagrania i montaż – tworząc spoty, które mogą być gotowe do emisji w telewizji, na social mediach lub w kampaniach internetowych. Staramy się dbać o dostępność treści, dlatego do filmów dodajemy także animacje czy napisy, które zwiększają ich zrozumienie.",
		slug: "spoty-spoleczne",
		imageLeft: {
			alt: "Backstage z realizacji filmu społecznego - produkcja wideo realizowana przez Znami Studio",
			src: "https://api.znami.usermd.net/spoty-spoleczne-img-1/",
		},
		imageRight: {
			alt: "Ujęcie z kampanii wideo - film społeczny realizowany przez Znami Studio",
			src: "https://api.znami.usermd.net/spoty-spoleczne-img-2/",
		},
	},
	{
		id: 6,
		title: "Usługi abonamentowe",
		textTop:
			"Stała współpraca w zakresie wideo to idealne rozwiązanie dla firm, które potrzebują regularnych materiałów promocyjnych, w tym treści wideo do social mediów. Oferujemy nagrywanie rolek na Instagram i TikTok, produkcję webinarów, a także montaż przesłanych przez Ciebie materiałów wideo. Nasze usługi obejmują również produkcję contentu video na potrzeby kampanii reklamowych.",
		textBottom:
			"Razem ustalamy harmonogram działań i zakres usług. W przypadku nagrań zajmujemy się wszystkim – od ustawienia oświetlenia po montaż filmów. Gotowe materiały przekazujemy w formatach dostosowanych do platform takich jak Instagram, TikTok, YouTube czy Vimeo. Dzięki abonamentowi masz pewność, że Twoje treści wideo będą regularnie aktualizowane, spójne z wizerunkiem marki, ponieważ dbamy też o branding, grafiki i zgodne z trending content oraz najnowszymi standardami mediów społecznościowych.",
		slug: "uslugi-abonamentowe",
		imageLeft: {
			alt: "Produkcja filmowa w usłudze abonamentowej realizowana przez Znami Studio",
			src: "https://api.znami.usermd.net/uslugi-abonamentowe-vide-img-1/",
		},
		imageRight: {
			alt: "Konsultacje i montaż materiałów wideo - cykliczna produkcja wideo dla firm w ramach abonamentu Znami",
			src: "https://api.znami.usermd.net/uslugi-abonamentowe-vide-img-2/",
		},
	},
];

const progressItems: ProgressSectionItem[] = [
	{
		content:
			"Chcemy poznać Twoją markę oraz cele jakie ma do osiągnięcia. Dzięki temu będziemy w stanie dostosować ofertę specjalnie dla Ciebie.",
		img: "https://api.znami.usermd.net/process-section-video-img-1/",
		list: [
			"Przeprowadzamy briefing kreatywny i przygotowujemy ofertę",
			"Opracowujemy harmonogram prac",
		],
		title: "1. Rozmawiamy o Twoich potrzebach",
		alt: "Briefing kreatywny pod nagrania wideo realizowane przez Znami Studio",
	},
	{
		content:
			"Jest to bardzo ważny etap. Szukamy wtedy lokalizacji, analizujemy możliwości, zbieramy inspiracje i przygotowujemy koncepcję.",
		img: "https://api.znami.usermd.net/process-section-video-img-2/",
		list: [
			"Opracowujemy koncept filmu lub scenariusz",
			"Przygotowujemy rzeczy, które będą potrzebne na planie zdjęciowym",
		],
		title: "2. Pre-produkcja",
		alt: "Pre-produkcja i przygotowanie scenariusza pod film realizowany przez Znami Studio",
	},
	{
		content:
			"Wideo nagrywamy w ustalonym wspólnie miejscu i dniu. Cały materiał realizowany jest według wcześniej ustalonych wytycznych z briefu.",
		img: "https://api.znami.usermd.net/process-section-video-img-3/",
		list: [
			"Rozstawiamy sprzęt, przygotowujemy modeli i plan zdjęciowy",
			"Nagrywamy zaplanowane materiały wideo",
		],
		title: "3. Dzień zdjęciowy",
		alt: "Dzień zdjęciowy - nagrywanie materiałów wideo przez Znami Studio",
	},
	{
		content:
			"To tutaj zadziewa się magia kina. Montujemy wersję „raw-cut”, na którą następnie nanosimy odpowiednie kolory, animacje i inne dodatki.",
		img: "https://api.znami.usermd.net/process-section-video-img-4/",
		list: [
			"Montujemy wyselekcjonowany materiał",
			"Dodajemy animacje, transkrypcje i nanosimy color-grading",
		],
		title: "4. Post-produkcja",
		alt: "Animacje, transkrypcje i color-grading - post-produkcja filmu realizowanego przez Znami Studio",
	},
	{
		content:
			"Gdy całość projektu jest zaakceptowana exportujemy filmy w formatach, które zostały wcześniej ustalone i wrzucamy do chmury.",
		img: "https://api.znami.usermd.net/process-section-video-img-5/",
		list: [
			"Exportujemy i przekazujemy finalny projekt",
			"Wystawiamy fakturę i przekazujemy prawa autorskie",
		],
		title: "5. Finalizacja projektu i przekazanie plików",
		alt: "Finalizacja gotowego projektu - realizacji wideo przygotowanej przez Znami Studio",
	},
];

const faqs: FAQ[] = [
	{
		id: 1,
		question: "Ile kosztuje film?",
		answear:
			"To zależy. Żyjemy w czasach, gdzie mówi się, że video w marketingu, to potęga, ale kiedyś było prościej, bo mieliśmy tylko reklamy w TV. Teraz filmy można wykorzystywać na wielu platformach i w kilku formatach. Pogadajmy, czego konkretnie potrzebujesz, aby dostosować Twój budżet do tego, aby filmy spełniły Twoje najważniejsze cele.",
	},
	{
		id: 2,
		question: "Czy nagrany materiał na YouTube nada się również na TikTok, czy Reels?",
		answear:
			"Czasami tak, czasami nie. Zależy to od tego, co nagrywamy i w jaki sposób. Jeśli jednak na etapie pre-produkcji otrzymamy od Ciebie informację, że materiał ma być dostosowany do różnych formatów, to jesteśmy w stanie nagrać go tak, aby pasował do każdego z nich",
	},
	{
		id: 3,
		question: "Jak wygląda proces realizacji video?",
		answear:
			"Najpierw pogadanka. Musimy się dowiedzieć, czego potrzebujesz, jaki będzie zakres prac i co chcesz daną realizacją osiągnąć. Następnie podsumowujemy temat i w przeciągu kilku dni przesyłamy naszą ofertę. Kolejnym krokiem jest pre-produkcja czyli omówienie konceptu czy pisanie scenariusza (nie każda realizacja wymaga scenariusza, ale warto przegadać jakiś plan). <br /> <br /> Umawiamy się na dzień nagraniowy i działamy. Następnie - montaż - czyli tam gdzie się zadziewa cała magia. Po skończonym montażu prezentujemy to co stworzyliśmy w wersji „surowej lub preview” to znaczy jest to montaż bez m.in. color-gradingu czy efektów specjalnych. Jeśli sama forma jest ok, przechodzimy do kolorowania filmu i finalizowania. <br /> <br /> Oczywiście, jeśli po drodze są jakieś uwagi to je wprowadzamy - najczęściej pracujemy na systemie godzinowym więc zmieścimy tyle poprawek i wytrzyma zakres ustalonych godzin. Gdy już wszyscy są zadowoleni - rozliczamy się :)",
	},
	{
		id: 4,
		question: "Czy z gotowym filmem dostanę również surowe materiały?",
		answear:
			"Nie bałdzo :( Zamawiając u nas film otrzymujesz gotowy produkt czyli gotowy film właśnie. Działamy trochę jak restauracja - wydajemy gotowe danie, a nie surowe składniki do ugotowania ich w domu przez klienta. Pasjonatom gotowania dajemy jednak możliwość zakupu surowego materiału - jest to dodatkowo płatne i wyceniamy to indywidualnie w oparciu o skalę projektu.",
	},
	{
		id: 5,
		question: "Mam gotowy materiał wideo. Czy mogę zlecić Wam sam montaż?",
		answear:
			"Jasne, nie ma znaczenia czy projekt realizowaliśmy, my czy klient nagrał go samemu. Zawsze jednak należy pamiętać, że sam montaż może w ogólnym rozrachunku wyjść drożej, ponieważ jesteśmy zmuszeni zaplanować dodatkowe godziny potrzebne na zapoznanie się z materiałem, selekcję ujęć oraz ich ewentualną poprawę (np. stabilizacja obrazu). Z doświadczenia wiemy, że już po fakcie klienci często decydują się na zrealizowanie całego materiału przez nas, od nowa. Dlatego zawsze sugerujemy, by całość realizacji powierzać w nasze, chętne do działania rączki",
	},
	{
		id: 6,
		question: "Potrzebuję zrobić jakiś materiał wideo, ale kompletnie nie mam pomysłu. Pomożecie?",
		answear:
			"Noajak! Nie martw się, nie każdy musi mieć polot modliszki i mieć umysł bystry niczym Sheldon Cooper. My również go nie mamy, więc trzymamy się zasady “co dwie głowy to nie jedna”. Do tego procesu chętnie usiądziemy z Tobą. Wypijemy dobrą kawę i pomyślimy jakie działania video mogłyby najlepiej zadziałać dla Twojej firmy i w twojej branży.",
	},
	{
		id: 7,
		question: "Co to jest film reklamowy i dlaczego warto go mieć?",
		answear:
			"Film reklamowy to profesjonalnie przygotowany materiał wideo, który promuje Twoją firmę, produkt lub usługę. Dobrze przygotowany film zwiększa rozpoznawalność marki, przyciąga uwagę klientów i skutecznie wspiera działania marketingowe.",
	},
	{
		id: 8,
		question: "Co to jest film korporacyjny?",
		answear:
			"Film korporacyjny to materiał wideo, który przedstawia Twoją firmę, jej misję, wartości oraz zespół. Jest to doskonały sposób na pokazanie transparentności i budowanie zaufania wśród klientów oraz partnerów biznesowych.",
	},
	{
		id: 9,
		question: "Czy filmy mogą pomóc w zwiększeniu sprzedaży?",
		answear:
			" Lol, jeszcze jak! Filmy reklamowe i promujące produkty są jednym z najskuteczniejszych narzędzi zwiększających konwersję. Wideo potrafi wywołać silniejsze emocje u odbiorcy, co może prowadzić do podjęcia decyzji o zakupie. Dodatkowo, film jako format ma wyższy wskaźnik zaangażowania w porównaniu do innych form contentu, co zwiększa szanse na dotarcie do szerszego kręgu potencjalnych klientów.",
	},
	{
		id: 10,
		question: "Jak to jest być skrybą, dobrze?",
		answear:
			"Naszym zdaniem to nie ma tak, że dobrze albo że nie dobrze. Gdybyśmy mieli powiedzieć, co cenimy w życiu najbardziej, powiedzielibyśmy, że ludzi. Ludzi, którzy podali nam pomocną dłoń, kiedy sobie nie radziliśmy, kiedy byliśmy sami. I co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia. My jednak możemy pomóc zrozumieć Ci czym jest Znami Studio <br /> <br /> Znami to kreatywne studio, które oferuje kompleksowe usługi w zakresie tworzenia treści wizualnych i wideo, ze szczególnym uwzględnieniem brandingu <br /> <br /> Nasze usługi obejmują m.in. kompleksową identyfikację wizualną, w tym projektowanie logo, materiały marketingowe i całościową strategię wizualną, która pomoże w budowaniu spójnego wizerunku Twojej marki. Oferujemy profesjonalne sesje zdjęciowe, w tym wizerunkowe, biznesowe, produktowe oraz zdjęcia z drona. Nasza oferta to połączenie kreatywności z doświadczeniem, które pozwala tworzyć angażujące treści wspierające branding Twojej marki. Specjalizujemy się też w produkcji filmów reklamowych, korporacyjnych, materiałów z eventów, webinarów, podcastów oraz video na social media <br /> <br /> Dostosowujemy każdy projekt do indywidualnych potrzeb – od koncepcji, przez produkcję, po montaż, edycję i dostosowanie materiałów do różnych formatów (media społecznościowe, strony www, kampanie online). Zapewniamy pełną obsługę, pomagając Ci wykreować tożsamość wizualną, która wyróżni Twoją firmę na tle konkurencji. Po zakończonej realizacji nie pozostawimy Cię bez wsparcia - zawsze służymy radą! <br /> <br /> Wszystkie nasze projekty, zarówno w zakresie fotografii, jak i produkcji wideo, są realizowane zgodnie z zaplanowaną strategią marki. Tworzymy materiały, które przyciągają uwagę, budują zaufanie oraz angażują odbiorców. Dzięki naszej pomocy Twoja marka zyska spójny, profesjonalny wizerunek, który wyróżni ją wśród innych na rynku. Skontaktuj się z nami, by dowiedzieć się, jak możemy wspierać rozwój Twojego biznesu poprzez kreatywne usługi związane z brandingiem i produkcją materiałów wideo oraz zdjęciowych. Twój sukces to też nasz sukces <3",
	},
];

const VideoPage = async () => {
	const response = await API.caseStudies.getCaseStudies({
		showOnServicePage: true,
		category: "video",
	});
	const caseStudies: CaseStudyResponse[] = response.data;

	return (
		<main className="bg-background">
			<HeroSectionServicesPage
				video="https://api.znami.usermd.net/header-video-video/"
				video2="https://api.znami.usermd.net/header-video-vide-2/"
			/>
			<ServiceSection
				name="Video"
				headingTwo="Profesjonalne video to skuteczne narzędzie, które świetnie zwiększy zasięgi, zbuduje zaufanie i wzmocni wizerunek Twojej marki. "
				paragraph="Oferujemy produkcję video dla firm – przygotujemy dla Ciebie film promocyjny, relację z eventu, materiały wideo do social mediów czy content do kampanii reklamowych. Stworzymy spójny, dynamiczny i atrakcyjny przekaz w ramach video marketingu, który przyciągnie uwagę Twoich odbiorców i będzie spójny ze strategią komunikacji marki."
				opinion={{
					author: "Kamil Porembiński",
					authorImg: "https://api.znami.usermd.net/opinion-author-video/",
					company: "podcast spod wody",
					text: "Paweł i jego ekipa to idealny wybór jeżeli szukasz realizacji związanych z wideo.Zawsze pomocni, mega merytoryczni i kreatywni! Polecam :)",
				}}
				sections={sections}
				ctaVideo="https://api.znami.usermd.net/z-telefonem-puciak/"
			/>
			<ProcessSection elements={progressItems} />
			<SmallCaseStudiesSection caseStudies={caseStudies} title="Pa tu, jakie fajne przykłady! 🤤" />
			<FAQSection faqs={faqs} />
			<CtaSection image={CtaBgImg.src} />
		</main>
	);
};

export default VideoPage;
