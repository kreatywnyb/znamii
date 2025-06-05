"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useLoader } from "@/contexts/LoaderContext";

const HeroSectionHomePage = () => {
	const { animationFinished, isBot } = useLoader();

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
						src="https://api.znami.usermd.net/wp-content/uploads/2025/05/hero-video.webm"
						className={`h-fit max-md:w-full ${
							isBot
								? "opacity-100" // Immediately visible for bots
								: "animate-fadeIn opacity-0" // Animated for users
						}`}
						style={
							isBot
								? {} // No animation styles for bots
								: {
										animationFillMode: "forwards",
										animationDuration: "1s",
									}
						}
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
