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
	title: "Zdjęcia ▪ Znami Studio",
	// description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
	// keywords: ["kontakt", "formularz kontaktowy", "adres", "telefon"],
	openGraph: {
		title: "Zdjęcia ▪ Znami Studio",
		// description: "Skontaktuj się z nami. Odpowiemy na wszystkie Twoje pytania.",
		type: "website",
		// url: "https://twojastrona.pl/kontakt",
		images: [
			{
				url: "https://api.znami.usermd.net/og-image",
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
		title: "Sesje biznesowe",
		textTop:
			"Profesjonalne zdjęcia biznesowe to podstawa skutecznego budowania wizerunku marki osobistej. Idealnie sprawdzają się na LinkedIn, stronie internetowej czy w materiałach promocyjnych. Dbamy o to, by fotografie wizerunkowe oddawały Twój charakter i pokazywały Cię jako osobę, której można zaufać.",
		textBottom:
			"Każdą sesję zdjęciową rozpoczynamy od omówienia Twoich potrzeb – dobieramy styl, tło i klimat zdjęć, które będą najlepiej pasować do Twojej branży i strategii marki. Pracujemy w studiu lub w wybranej przez Ciebie lokalizacji. Efekty przekazujemy w formie obrobionych zdjęć w najwyższej jakości – zarówno gotowych do druku, jak i publikacji online na stronie czy social mediach.",
		slug: "sesje-biznesowe",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/sesje-biznesowe-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/sesje-biznesowe-img-2/",
		},
	},
	{
		id: 2,
		title: "Eventy i konferencje",
		textTop:
			"Zdjęcia i filmy z eventów to idealny sposób na uwiecznienie ważnych momentów Twojej firmy. Profesjonalna fotorelacja z eventu lub film z konferencji pomoże podkreślić jego znaczenie i podzielić się atmosferą z klientami lub pracownikami.",
		textBottom:
			"Podczas eventów jesteśmy wszędzie tam, gdzie dzieje się coś istotnego – uchwycimy prelegentów, uczestników i najważniejsze punkty programu. Oferujemy także nagrania wideo, które montujemy w dynamiczny film podsumowujący (tzw. aftermovie), wspierający video marketing marki. Materiały przekazujemy w formie cyfrowej, gotowe do użycia na social mediach, w relacjach czy materiałach promocyjnych.",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/eventy-i-konferencje-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/eventy-i-konferencje-img-2/",
		},
		slug: "eventy-i-konferencje",
	},
	{
		id: 3,
		slug: "sesje-wizerunkowe",
		title: "Sesje wizerunkowe",
		textTop:
			"Zdjęcia wizerunkowe to coś więcej niż portrety – to narzędzie, które pomaga Twojej marce mocno zakomunikować odbiorcom branżę, w jakiej działasz. Nasze sesje wizerunkowe dla firmy podkreślą charakter Twojej działalności i wyróżnią Cię na tle konkurencji.",
		textBottom:
			"Pracujemy w plenerze, biurze lub dowolnej lokalizacji, która pasuje do Twojej marki. Przygotowujemy stylizację, rekwizyty i aranżację tak, by zdjęcia były spójne z Twoją identyfikacją wizualną i strategią komunikacji. Po sesji wybieramy najlepsze kadry i poddajemy je profesjonalnej obróbce – dzięki temu finalne zdjęcia do personal brandingu są gotowe do publikacji i budowy spójnego wizerunku marki.",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/sesje-wizerunkowe-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/sesje-wizerunkowe-img-2/",
		},
	},
	{
		id: 4,
		title: "Fotografia produktowa",
		textTop:
			"Dobre zdjęcia produktów to klucz do sukcesu w e-commerce i reklamie. Tworzymy ujęcia, które eksponują każdy detal i pomagają przekonać klientów do zakupu. Dbamy o to, by fotografia produktowa dla e-commerce oddawała jakość i charakter oferowanych przez Ciebie artykułów oraz wzmacniała ich odbiór w sieci.",
		textBottom:
			"Przygotowujemy zarówno packshoty produktowe na neutralnym tle, jak i zdjęcia stylizowane, które pokazują produkty w użyciu. Korzystamy z profesjonalnego oświetlenia i sprzętu, aby uzyskać najwyższą jakość obrazu. Po sesji otrzymujesz obrobione pliki w formacie idealnym do druku, zdjęcia do sklepu internetowego, social mediów lub katalogów online i profesjonalnych materiałów reklamowych.",
		slug: "fotografia-produktowa",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/fotografia-produktowa-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/fotografia-produktowa-img-2/",
		},
	},
	{
		id: 5,
		title: "Zdjęcia z drona",
		textTop:
			"Ujęcia z lotu ptaka pozwalają spojrzeć na świat z zupełnie nowej perspektywy. Fotografia z drona i filmy z drona do promocji, świetnie sprawdzają się w reklamie nieruchomości, eventów czy dużych kampanii reklamowych. To prosty sposób na pokazanie, że do projektu podeszło się profesjonalnie i nowocześnie – z użyciem ujęć z powietrza.",
		textBottom:
			"Korzystamy z dronów wysokiej klasy, co gwarantuje ostre i wyraźne ujęcia nawet w trudnych warunkach. Przed realizacją ustalamy z Tobą scenariusz i cele sesji. Finalny materiał dostarczamy w formie plików obrobionych i gotowych do użycia, zgodnych z wymogami platform cyfrowych czy mediów drukowanych.",
		slug: "zdjecia-z-drona",
		imageLeft: {
			alt: "",
			src: "https://api.znami.usermd.net/zdjecia-z-drona-img-1/",
		},
		imageRight: {
			alt: "",
			src: "https://api.znami.usermd.net/zdjecia-z-drona-img-2/",
		},
	},
	{
		id: 6,
		title: "Usługi abonamentowe",
		textTop:
			"Nie zawsze wystarczy jedna sesja – dlatego oferujemy stałą współpracę obejmującą abonament na zdjęcia i wideo, który zapewni Twojej firmie regularne i spójne materiały wizualne dla firm. To świetne rozwiązanie, jeśli organizujesz cykliczne wydarzenia lub stale potrzebujesz zdjęć produktowych, wizerunkowych czy z biura.",
		textBottom:
			"Na początku ustalamy Twoje potrzeby, harmonogram i zakres prac. Regularnie dostarczamy zdjęcia i materiały wideo, które są w pełni dopasowane do identyfikacji wizualnej firmy. Dzięki abonamentowi oszczędzasz czas i masz pewność, że zawsze otrzymasz wysokiej jakości treści wizualne, takie jak profesjonalna fotografia, wideo i grafiki.",
		slug: "uslugi-abonamentowe",
		imageLeft: { alt: "", src: "https://api.znami.usermd.net/uslugi-abonamentowe-photo-img-1/" },
		imageRight: { alt: "", src: "https://api.znami.usermd.net/uslugi-abonamentowe-photo-img-2/" },
	},
];

const progressItems: ProgressSectionItem[] = [
	{
		img: "https://api.znami.usermd.net/process-section-photo-1/",
		title: "1. Rozmawiamy o Twoich potrzebach",
		content:
			"Chcemy poznać Twoją markę oraz cele, jakie ma do osiągnięcia. Dzięki temu będziemy w stanie dostosować ofertę specjalnie dla Ciebie.",
		list: [
			"Przeprowadzamy briefing kreatywny i przygotowujemy ofertę",
			"Opracowujemy harmonogram prac",
		],
	},
	{
		img: "https://api.znami.usermd.net/process-section-photo-2/",
		title: "2. Pre-produkcja",
		content:
			"Jest to bardzo ważny etap. Szukamy wtedy lokalizacji, analizujemy możliwości, zbieramy inspiracje i przygotowujemy koncepcję.",
		list: [
			"Opracowujemy koncept zdjęć i tworzymy moodboard",
			"Przygotowujemy rzeczy, które będą potrzebne w dniu zdjęciowym",
		],
	},
	{
		img: "https://api.znami.usermd.net/process-section-photo-3/",
		title: "3. Realizujemy sesję fotograficzną",
		content:
			"Zdjęcia realizujemy w ustalonym wspólnie miejscu i dniu. Wszystkie fotografie wykonujemy wg ustalonego moodboardu i harmonogramu.",
		list: [
			"Rozstawiamy sprzęt, przygotowujemy modeli i plan zdjęciowy",
			"Robimy wszystkie zaplanowane zdjęcia",
		],
	},
	{
		img: "https://api.znami.usermd.net/process-section-photo-4/",
		title: "4. Selekcjonujemy i retuszujemy zdjęcia",
		content:
			"Przeprowadzamy wstępną preselekcję i wysyłamy Ci zdjęcia ze znakiem wodnym do wyboru. Te, które wybierzesz, poddamy następnie obróbce.",
		list: [
			"Wybierasz zdjęcia, które najbardziej Ci się podobają",
			"Obrabiamy i retuszujemy wskazane przez Ciebie zdjęcia ",
		],
	},
	{
		img: "https://api.znami.usermd.net/process-section-photo-5/",
		title: "5. Finalizujemy projekt i przekazujemy gotowe zdjęcia",
		content:
			"Gdy zdjęcia zostaną zaakceptowane, wysyłamy je najczęściej w 2 formatach, które są odpowiednio dostosowane do digitalu oraz do DTP.",
		list: ["Export zdjęć wg wytycznych", "Umieszczenie zdjęć w chmurze"],
	},
];

const faqs: FAQ[] = [
	{
		id: 1,
		question: "Jak wygląda proces sesji zdjęciowej? ",
		answear:
			"Przede wszystkim rozmawiamy o wartościach firmy i jakie cele ma spełnić sesja zdjęciowa. Dyskutujemy nad możliwościami i nad tym jakie efekty chcemy uzyskać. Następnie umawiamy dzień zdjęciowy. Wedle potrzeby sesja może odbyć się u nas, w innym studio, u Ciebie w firmie lub innej, wybranej przez Ciebie przestrzeni. Po sesji dostajesz od nas link do zdjęć, które przeszły wstępną selekcję. Są one pomniejszone oraz mają nałożony znak wodny, aby omyłkowo ich nie opublikować i aby nie zajmowały za dużo miejsca i płynnie je można było przeglądać. Wybierasz te, które wg Ciebie są najlepsze i które mają przejść proces retuszu. Zdjęcia po obróbce wysyłamy najczęściej już w dwóch formatach. W mniejszej rozdzielczości i mniejszej wadze do zastosowań digitalowych (np. strona www, media społecznościowe) i w pełnym rozmiarze 72 lub 300 dpi do zastosowań DTP (druk, reklama zewnętrzna, publikacje papierowe itp.). ",
	},
	{
		id: 2,
		question: "Jak najlepiej przygotować się do sesji zdjęciowej?",
		answear:
			"Najważniejszymi punktami do zapamiętania to dobry humor i brak wzorzystej odzieży. Cała reszta zawsze klaruje się w rozmowie, na której planujemy realizację.",
	},
	{
		id: 3,
		question: "Czy zdjęcia nadają się do mediów społecznościowych i do druku?",
		answear:
			"Tak. Zdjęcia portretowe/ wizerunkowe zawsze oddajemy w dwóch formatach. Jeden format jest dostosowany pod media społecznościowe - mają niską wagę pliku i odpowiednio mniejszą rozdzielczość (72 dpi). Drugi format to oryginalna wielkość zdjęcia (300 dpi), co pozwala na druk w bardzo dobrej jakości. Przy zdjęciach produktowych czy eventowych uzgadniamy indywidualnie potrzeby i finalne wytyczne co do exportu zdjęć i formatu plików.",
	},
	{
		id: 4,
		question: "Czy po czasie mogę dobrać dodatkowe zdjęcia?",
		answear:
			"Zazwyczaj jest taka możliwość. Przestrzenie dyskowe są u nas jednak na bieżąco zajmowane nowymi materiałami, dlatego, jeśli chcesz mieć pewność, że Twój projekt będzie przechowany bezpiecznie, możesz zamówić usługę archiwizacji. W jej ramach utrzymujemy surowy materiał przez okres co najmniej roku od wykonania sesji.",
	},
	{
		id: 5,
		question: "Jak wygląda proces płatności?",
		answear:
			"Wysokość zaliczki ustalamy indywidualnie. Przy mniejszych projektach zdarza się, że nie pobieramy jej wcale - wtedy płatność wynosi 100% i następuje dopiero po zaakceptowaniu zdjęć. Jeśli istnieje potrzeba wynajęcia dodatkowej przestrzeni, modela lub sprzętu, to zaliczką jest koszt tych niezbędnych elementów, które wymagają przedpłaty. Całość rozliczamy fakturą VAT z 7-dniowym terminem płatności.",
	},
	{
		id: 6,
		question: "Czy w cenie zamówienia dostanę również surowe/ niewybrane zdjęcia?",
		answear:
			"Niestety nie. Zamawianym produktem zawsze są gotowe zdjęcia. Jeśli potrzebujesz dodatkowych ujęć, zawsze masz możliwość ich dokupienia. Zależy nam na zachowaniu spójności w retuszowaniu zdjęć i nie chcemy by nasze zdjęcia, były retuszowane przez osoby trzecie. Działamy trochę jak restauracja - wydajemy gotowe dania, a nie surowe składniki do ugotowania w domu  :D Pasjonatom gotowania dajemy jednak możliwość zakupu surowego materiału - jest to dodatkowo płatne i wyceniamy to  indywidualnie w oparciu o skalę projektu.",
	},
	{
		id: 7,
		question: "Czym różni się sesja wizerunkowa od sesji biznesowej?",
		answear:
			"Sesja biznesowa skupia się na portretach do wykorzystania na LinkedIn, stronie www czy w materiałach firmowych. Sesja wizerunkowa jest szersza – pokazuje Ciebie w kontekście Twojej marki, wartości i charakteru działalności. Obie formy mają na celu budowanie profesjonalnego wizerunku, ale sesja wizerunkowa kładzie większy nacisk na storytelling i klimat zdjęć. <br /> <br /> Sesja wizerunkowa to profesjonalna sesja zdjęciowa, której celem jest pokazanie Ciebie lub Twojej marki w spójny i atrakcyjny sposób. To narzędzie wspierające strategię marki i pomagające budować autentyczny wizerunek w oczach klientów. Przyda się każdemu, kto chce wyróżnić się na tle konkurencji. <br /> <br /> Zdjęcia biznesowe to profesjonalne portrety wykorzystywane m.in. na stronach internetowych, w CV, na LinkedIn czy w materiałach promocyjnych firmy. Pomagają budować zaufanie i wiarygodność – zarówno w kontaktach B2B, jak i w relacjach z klientami. To ważny element identyfikacji wizualnej każdej marki, niezależnie od branży.",
	},
	{
		id: 8,
		question: "Fotografia produktowa – co obejmuje i jak wygląda?",
		answear:
			"Fotografia produktowa to zdjęcia, których celem jest atrakcyjna prezentacja produktu. Fotografia produktowa może obejmować packshoty (zdjęcia produktów na białym tle), zdjęcia stylizowane (np. z aranżacją) lub ujęcia kontekstowe (przedstawienie produktu w użyciu). Sesja produktowa to proces, który zazwyczaj obejmuje planowanie ujęć, sesję zdjęciową, dobór odpowiedniego oświetlenia oraz profesjonalną obróbkę. Tego typu zdjęcia są kluczowe dla sklepów internetowych, katalogów i kampanii reklamowych.",
	},
	{
		id: 9,
		question: "Jak to jest być skrybą, dobrze?",
		answear:
			"Naszym zdaniem to nie ma tak, że dobrze albo że nie dobrze. Gdybyśmy mieli powiedzieć, co cenimy w życiu najbardziej, powiedzielibyśmy, że ludzi. Ludzi, którzy podali nam pomocną dłoń, kiedy sobie nie radziliśmy, kiedy byliśmy sami. I co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia. My jednak możemy pomóc zrozumieć Ci czym jest Znami Studio <br /> <br /> Znami to kreatywne studio, które oferuje kompleksowe usługi w zakresie tworzenia treści wizualnych i wideo, ze szczególnym uwzględnieniem brandingu <br /> <br /> Nasze usługi obejmują m.in. kompleksową identyfikację wizualną, w tym projektowanie logo, materiały marketingowe i całościową strategię wizualną, która pomoże w budowaniu spójnego wizerunku Twojej marki. Oferujemy profesjonalne sesje zdjęciowe, w tym wizerunkowe, biznesowe, produktowe oraz zdjęcia z drona. Nasza oferta to połączenie kreatywności z doświadczeniem, które pozwala tworzyć angażujące treści wspierające branding Twojej marki. Specjalizujemy się też w produkcji filmów reklamowych, korporacyjnych, materiałów z eventów, webinarów, podcastów oraz video na social media <br /> <br /> Dostosowujemy każdy projekt do indywidualnych potrzeb – od koncepcji, przez produkcję, po montaż, edycję i dostosowanie materiałów do różnych formatów (media społecznościowe, strony www, kampanie online). Zapewniamy pełną obsługę, pomagając Ci wykreować tożsamość wizualną, która wyróżni Twoją firmę na tle konkurencji. Po zakończonej realizacji nie pozostawimy Cię bez wsparcia - zawsze służymy radą! <br /> <br /> Wszystkie nasze projekty, zarówno w zakresie fotografii, jak i produkcji wideo, są realizowane zgodnie z zaplanowaną strategią marki. Tworzymy materiały, które przyciągają uwagę, budują zaufanie oraz angażują odbiorców. Dzięki naszej pomocy Twoja marka zyska spójny, profesjonalny wizerunek, który wyróżni ją wśród innych na rynku. Skontaktuj się z nami, by dowiedzieć się, jak możemy wspierać rozwój Twojego biznesu poprzez kreatywne usługi związane z brandingiem i produkcją materiałów wideo oraz zdjęciowych. Twój sukces to też nasz sukces <3",
	},
];

const FotoPage = async () => {
	const response = await API.caseStudies.getCaseStudies({
		showOnServicePage: true,
		category: "branding",
	});
	const caseStudies: CaseStudyResponse[] = response.data;

	return (
		<main className="bg-background">
			<HeroSectionServicesPage video="https://api.znami.usermd.net/wp-content/uploads/2025/05/header-video-photo.webm" />
			<ServiceSection
				name="Zdjęcia"
				headingTwo="Profesjonalna sesja zdjęciowa dla biznesu to inwestycja, która przynosi wiele korzyści i szybko się zwraca."
				paragraph="Nie ważne, czy potrzebujesz zdjęć biznesowych na stronę www, zdjęć na LinkedIn, zdjęć na Instagram, czy zakładasz nową firmę i chcesz udokumentować swoje produkty lub usługi. Może organizujesz konferencję lub event firmowy i potrzebujesz materiałów do promocji kolejnych edycji? We wszystkim Ci pomożemy! Z nami zdjęcia reklamowe i content wizualny będą profesjonalne, a cała sesja dopasowana do Twoich potrzeb."
				opinion={{
					author: "Krzysztof Pitera",
					authorImg: "https://api.znami.usermd.net/opinion-author-photo/",
					company: "klient b2c",
					text: "Wszystko poszło sprawnie, atmosfera była na luzie, a zdjęcia wyszły świetnie. Widać, że pełen profesjonalizm, ale bez sztywności. Na pewno jeszcze wrócę!",
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

export default FotoPage;
