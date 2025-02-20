import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSectionHomePage = () => {
	return (
		<section className="bg-basicDark text-white">
			<div className="container relative flex h-full min-h-[720px] w-full">
				<div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center">
					<TextGenerateEffect
						bigWords={"Zbuduj wizerunek marki"}
						classNameOne="text-6xl lg:text-[103px]"
						smallWords={
							"Znami to studio kreatywne, które zrealizuje dla Twojej firmy branding, nagrania wideo i sesje zdjęciowe"
						}
						classNameTwo="mt-4 text-center text-sm  font-geist uppercase"
					/>
				</div>
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:w-full">
					<video
						src="/hero-video-min.mp4"
						className="max-md:w-full"
						autoPlay
						loop
						muted
						playsInline
						poster="/hero-poster.png"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSectionHomePage;
