// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// const HeroSectionHomePage = () => {
// 	return (
// 		<section className="bg-basicDark text-white">
// 			<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
// 				<div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center">
// 					<div>
// 						<TextGenerateEffect
// 							bigWords={"Zbuduj wizerunek marki"}
// 							classNameOne="text-6xl lg:text-[6.438rem]"
// 						/>
// 					</div>
// 				</div>

// 				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:w-full">
// 					<video
// 						src="/hero-video-min.mp4"
// 						className="h-fit max-md:w-full"
// 						autoPlay
// 						loop
// 						muted
// 						playsInline
// 						poster="/hero-poster.png"
// 					/>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default HeroSectionHomePage;

// "use client";

// import { useEffect, useState } from "react";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// const HeroSectionHomePage = () => {
// 	const [showVideo, setShowVideo] = useState(false);
// 	const [showText, setShowText] = useState(false);
// 	const [revealPage, setRevealPage] = useState(false);

// 	useEffect(() => {
// 		// Start animation sequence after component mounts
// 		const videoTimer = setTimeout(() => {
// 			setShowVideo(true);
// 		}, 0); // Show video after 1 second

// 		const textTimer = setTimeout(() => {
// 			setShowText(true);
// 		}, 2500); // Show text after 2.5 seconds

// 		const pageTimer = setTimeout(() => {
// 			setRevealPage(true);
// 		}, 4000); // Reveal page after 4 seconds

// 		return () => {
// 			clearTimeout(videoTimer);
// 			clearTimeout(textTimer);
// 			clearTimeout(pageTimer);
// 		};
// 	}, []);

// 	const overlayStyle: React.CSSProperties = {
// 		position: "fixed",
// 		top: 0,
// 		left: 0,
// 		width: "100vw",
// 		height: "100vh",
// 		backgroundColor: "black",
// 		zIndex: 100,
// 		opacity: revealPage ? 0 : 1,
// 		transition: "opacity 0.8s ease-in-out",
// 		pointerEvents: revealPage ? "none" : "auto",
// 	};

// 	return (
// 		<>
// 			{/* Full-screen overlay (will fade out to reveal the page) */}
// 			<div style={overlayStyle} />

// 			<section className="bg-basicDark text-white">
// 				<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
// 					<div className="relative z-[200] flex w-full flex-1 flex-col items-center justify-center">
// 						{showText && (
// 							<div
// 								className="animate-fadeIn opacity-0"
// 								style={{
// 									animationFillMode: "forwards",
// 									animationDelay: "0.3s",
// 									animationDuration: "1s",
// 								}}
// 							>
// 								<TextGenerateEffect
// 									bigWords={"Zbuduj wizerunek marki"}
// 									classNameOne="text-6xl lg:text-[6.438rem]"
// 								/>
// 							</div>
// 						)}
// 					</div>

// 					<div className="absolute left-1/2 top-1/2 z-[120] -translate-x-1/2 -translate-y-1/2 max-md:w-full">
// 						{showVideo && (
// 							<video
// 								src="/hero-video-min.mp4"
// 								className="animate-fadeIn h-fit opacity-0 max-md:w-full"
// 								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
// 								autoPlay
// 								loop
// 								muted
// 								playsInline
// 								poster="/hero-poster.png"
// 							/>
// 						)}
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default HeroSectionHomePage;

// v3

"use client";

import { useEffect, useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSectionHomePage = () => {
	const [showVideo, setShowVideo] = useState(false);
	const [showText, setShowText] = useState(false);
	const [revealPage, setRevealPage] = useState(false);

	useEffect(() => {
		// Start animation sequence after component mounts
		const videoTimer = setTimeout(() => {
			setShowVideo(true);
		}, 0); // Show video immediately

		return () => {
			clearTimeout(videoTimer);
			// clearTimeout(pageTimer);
		};
	}, []);

	// Kiedy wideo się załaduje, uruchamiamy timer do wyświetlenia tekstu
	const handleVideoLoaded = () => {
		setTimeout(() => {
			setShowText(true);
		}, 500); // Pokaż tekst 0.5s po załadowaniu wideo
		setTimeout(() => {
			setRevealPage(true);
		}, 6000); // Reveal page after 4 seconds
	};

	const overlayStyle: React.CSSProperties = {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: "black",
		zIndex: 100,
		opacity: revealPage ? 0 : 1,
		transition: "opacity 0.8s ease-in-out",
		pointerEvents: revealPage ? "none" : "auto",
	};

	return (
		<>
			{/* Full-screen overlay (will fade out to reveal the page) */}
			{/* <div style={overlayStyle} /> */}
			<div style={overlayStyle} className="flex items-center justify-center text-white">
				<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
					<div className="relative z-[200] flex w-full flex-1 flex-col items-center justify-center">
						{showText && (
							<div
								className="animate-fadeIn opacity-0"
								style={{
									animationFillMode: "forwards",
									animationDelay: "0.3s",
									animationDuration: "1s",
								}}
							>
								<TextGenerateEffect
									bigWords={"Zbuduj wizerunek marki"}
									classNameOne="text-6xl lg:text-[6.438rem]"
								/>
							</div>
						)}
					</div>

					<div className="absolute left-1/2 top-1/2 z-[120] -translate-x-1/2 -translate-y-1/2 max-md:w-full">
						{showVideo && (
							<video
								src="/hero-video-min.mp4"
								className="animate-fadeIn h-fit opacity-0 max-md:w-full"
								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
								autoPlay
								loop
								muted
								playsInline
								poster="/hero-poster.png"
								onLoadedData={handleVideoLoaded} // <- Reaguje na załadowanie wideo
							/>
						)}
					</div>
				</div>
			</div>

			<section className="bg-basicDark text-white">
				<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
					<div className="relative z-[20] flex w-full flex-1 flex-col items-center justify-center">
						{showText && (
							<div
								className="animate-fadeIn opacity-0"
								style={{
									animationFillMode: "forwards",
									animationDelay: "0.3s",
									animationDuration: "1s",
								}}
							>
								<TextGenerateEffect
									bigWords={"Zbuduj wizerunek marki"}
									classNameOne="text-6xl lg:text-[6.438rem]"
								/>
							</div>
						)}
					</div>

					<div className="absolute left-1/2 top-1/2 z-[10] -translate-x-1/2 -translate-y-1/2 max-md:w-full">
						{showVideo && (
							<video
								src="/hero-video-min.mp4"
								className="animate-fadeIn h-fit opacity-0 max-md:w-full"
								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
								autoPlay
								loop
								muted
								playsInline
								poster="/hero-poster.png"
								onLoadedData={handleVideoLoaded} // <- Reaguje na załadowanie wideo
							/>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSectionHomePage;
