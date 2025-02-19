"use client";
import EmpathyIcon from "@/ui/icons/EmpathyIcon";
import OpennessIcon from "@/ui/icons/OpennessIcon";
// import PlayVideoIcon from "@/ui/icons/PlayVideoIcon";
import PrecisionIcon from "@/ui/icons/PrecisionIcon";
import WhiteBox from "@/ui/organisms/WhiteBox";
import photo from "@public/case-1.webp";
import Image from "next/image";

const MainSectionAboutUs = () => {
	// const videoRef = useRef(null);

	return (
		<WhiteBox className="z-50 [&>div]:-mt-64">
			<div className="container">
				<div className="flex flex-col justify-between gap-4 lg:flex-row">
					<div className="flex-1">
						<h2 className="text-[40px] font-medium leading-[50px]">
							Jak do tego doszło, <br /> nie wiem?
						</h2>
					</div>
					<div className="flex-1">
						<p className="max-w-[320px] text-[17px] font-medium leading-[27px]">
							Tutaj jakaś ckliwa historia jak pomogliśmy innym markom przekształcić ich pomysły w
							rzeczywistość prawdź jak pomogliśmy innym markom przekształcić ich itede ite
						</p>
					</div>
					<div className="flex-1">
						<p className="max-w-[320px] text-[17px] font-medium leading-[27px]">
							Sprawdź jak pomogliśmy innym markom przekształc pomysły w rzeczywistość prawdź jak
							pomogliśmy innym markom przekształcić ich pomysły.
						</p>
					</div>
				</div>
				<div className="relative mt-20">
					{/* <video
							src="https://videocdn.cdnpk.net/videos/a24ed66a-86d5-4bbc-be4c-dd7467814f17/horizontal/previews/clear/large.mp4?token=exp=1739800145~hmac=62e3ec6d1913fa9ce0637a34e1bf1c399417888065a8bab8346903c73a91b7ad"
							autoPlay
							className="aspect-video w-full"
							ref={videoRef}
						/>
						<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
							<PlayVideoIcon />
						</span> */}
					<Image src={photo} alt="" className="w-full" />
				</div>
				<div className="mt-32 flex flex-col justify-between md:flex-row">
					<div className="md:pl-6">
						<p className="font-geist text-xs uppercase">
							Wartości, jakimi <br /> się kierujemy
						</p>
					</div>
					<div className="flex w-full max-w-[879px] flex-1 flex-col max-md:mt-10 md:pr-[200px]">
						<div>
							<div className="mb-5 flex items-center space-x-5">
								<span>
									<PrecisionIcon className="h-[30px] w-[30px] [&>path]:stroke-basicDark" />
								</span>
								<h3 className="text-[40px] leading-[50px]">Precyzja</h3>
							</div>
							<p className="text-[17px] leading-[27px] tracking-[0.02em]">
								Przesuwamy piksele z prawa na lewo, dopóki wszystko nie wygląda tak, jak powinno.
								Poprawiamy każdą niedoskonałość na zdjęciu czy filmie, bo wiemy, że to właśnie
								detale robią różnicę. Czasami wracamy do projektu wiele razy, żeby upewnić się, że
								każdy element gra w punkt. Nie jest to obsesja – to po prostu sposób, w jaki
								tworzymy rzeczy, które cieszą oko i działają na wyobraźnię. Albo to obsesja.
							</p>
						</div>
						<div className="my-10 border-b border-t border-lightGrey py-10">
							<div className="mb-5 flex items-center space-x-5">
								<span>
									<OpennessIcon className="h-[30px] w-[30px] [&>path]:stroke-basicDark" />
								</span>
								<h3 className="text-[40px] leading-[50px]">Otwartość</h3>
							</div>
							<p className="text-[17px] leading-[27px] tracking-[0.02em]">
								Jesteśmy jak stacja benzynowa – otwarci. Zmieniasz wizję w trakcie projektu? Żaden
								problem, zrobimy poprawki, zmiksujemy pomysły i działamy dalej. Pomysły z kosmosu,
								klienci z nietypowych branż czy niestandardowe zlecenia? Uwielbiamy takie wyzwania.
								Otwartość to dla nas codzienność – to dzięki luźnej atmosferze tworzymy projekty,
								które żyją, ewoluują i odpowiadają na potrzeby klienta.
							</p>
						</div>
						<div>
							<div className="mb-5 flex items-center space-x-5">
								<span>
									<EmpathyIcon className="h-[30px] w-[30px] [&>path]:stroke-basicDark" />
								</span>
								<h3 className="text-[40px] leading-[50px]">Empatia</h3>
							</div>
							<p className="text-[17px] leading-[27px] tracking-[0.02em]">
								Rozumiemy, że Twój projekt to coś więcej niż tylko zadanie – to Twój pomysł, wizja a
								często także kawałek serca. Dlatego zawsze staramy się znaleźć czas, nawet gdy dzień
								wydaje się za krótki. Utożsamiamy się z Twoimi celami, bo wiemy, że sukces Twojej
								marki to także nasz sukces.
							</p>
						</div>
					</div>
				</div>
			</div>
		</WhiteBox>
	);
};

export default MainSectionAboutUs;
