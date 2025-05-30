"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useLoader } from "@/contexts/LoaderContext";

const HeroSectionHomePage = () => {
	const { animationFinished } = useLoader();

	return (
		<section className="bg-basicDark text-white">
			<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
				<div className="relative z-[20] flex w-full flex-1 flex-col items-center justify-center">
					{animationFinished && (
						<TextGenerateEffect
							bigWords={"Zbuduj wizerunek marki"}
							classNameOne="text-6xl lg:text-[6.438rem]"
						/>
					)}
				</div>

				<div className="absolute left-1/2 top-1/2 z-[10] -translate-x-1/2 -translate-y-1/2 max-md:w-full">
					<video
						src="https://api.znami.usermd.net/hero-video/"
						className="h-fit animate-fadeIn opacity-0 max-md:w-full"
						style={{ animationFillMode: "forwards", animationDuration: "1s" }}
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSectionHomePage;
