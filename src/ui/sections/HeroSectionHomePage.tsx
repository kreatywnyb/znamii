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
// 		}, 0); // Show video immediately

// 		return () => {
// 			clearTimeout(videoTimer);
// 			// clearTimeout(pageTimer);
// 		};
// 	}, []);

// 	// Kiedy wideo się załaduje, uruchamiamy timer do wyświetlenia tekstu
// 	const handleVideoLoaded = () => {
// 		setTimeout(() => {
// 			setShowText(true);
// 		}, 500); // Pokaż tekst 0.5s po załadowaniu wideo
// 		setTimeout(() => {
// 			setRevealPage(true);
// 		}, 6000); // Reveal page after 4 seconds
// 	};

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
// 			<div style={overlayStyle} className="flex items-center justify-center text-white">
// 				<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
// 					<div className="relative z-[200] flex w-full flex-1 flex-col items-center justify-center">
// 						{showText && (
// 							<div>
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
// 								className="h-fit animate-fadeIn opacity-0 max-md:w-full"
// 								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
// 								autoPlay
// 								loop
// 								muted
// 								playsInline
// 								poster="/hero-poster.png"
// 								onLoadedData={handleVideoLoaded} // <- Reaguje na załadowanie wideo
// 							/>
// 						)}
// 					</div>
// 				</div>
// 			</div>

// 			<section className="bg-basicDark text-white">
// 				<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
// 					<div className="relative z-[20] flex w-full flex-1 flex-col items-center justify-center">
// 						{showText && (
// 							<div>
// 								<TextGenerateEffect
// 									bigWords={"Zbuduj wizerunek marki"}
// 									classNameOne="text-6xl lg:text-[6.438rem]"
// 								/>
// 							</div>
// 						)}
// 					</div>

// 					<div className="absolute left-1/2 top-1/2 z-[10] -translate-x-1/2 -translate-y-1/2 max-md:w-full">
// 						{showVideo && (
// 							<video
// 								src="/hero-video-min.mp4"
// 								className="h-fit animate-fadeIn opacity-0 max-md:w-full"
// 								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
// 								autoPlay
// 								loop
// 								muted
// 								playsInline
// 								poster="/hero-poster.png"
// 								onPlay={handleVideoLoaded} // <- Reaguje na załadowanie wideo
// 							/>
// 						)}
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default HeroSectionHomePage;

"use client";

import { useEffect, useState, useRef } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSectionHomePage = () => {
	const [showVideo, setShowVideo] = useState(false);
	const [showText, setShowText] = useState(false);
	const [revealPage, setRevealPage] = useState(false);
	// const [useImageFallback, setUseImageFallback] = useState(false);
	const videoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const hasAnimationPlayed = sessionStorage.getItem("heroAnimationPlayed");

	useEffect(() => {
		// Check if animation has already played in this session

		if (hasAnimationPlayed) {
			// Skip animation if it has already played
			setShowVideo(true);
			setShowText(true);
			setRevealPage(true);
		} else {
			// Start animation sequence after component mounts
			setTimeout(() => {
				setShowVideo(true);
			}, 0); // Show video immediately

			// Set a 3-second timeout for video loading
			videoTimeoutRef.current = setTimeout(() => {
				// If this timeout fires, video didn't load in time
				// setUseImageFallback(true);
				setShowText(true);

				// Still need to reveal page after some time
				setTimeout(() => {
					setRevealPage(true);
					// Mark animation as played
					sessionStorage.setItem("heroAnimationPlayed", "true");
				}, 4000);
			}, 3000);
		}

		return () => {
			if (videoTimeoutRef.current) {
				clearTimeout(videoTimeoutRef.current);
			}
		};
	}, [hasAnimationPlayed]);

	// When video loads successfully
	const handleVideoLoaded = () => {
		// Clear the 3-second timeout since video loaded successfully
		if (videoTimeoutRef.current) {
			clearTimeout(videoTimeoutRef.current);
		}

		// Only proceed with animation if it hasn't already played
		if (!sessionStorage.getItem("heroAnimationPlayed")) {
			setTimeout(() => {
				setShowText(true);
			}, 500); // Show text 0.5s after video loads

			setTimeout(() => {
				setRevealPage(true);
				// Mark animation as played
				sessionStorage.setItem("heroAnimationPlayed", "true");
			}, 6000); // Reveal page after 6 seconds
		}
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
			<div style={overlayStyle} className="flex items-center justify-center text-white">
				<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
					<div className="relative z-[200] flex w-full flex-1 flex-col items-center justify-center">
						{showText && !hasAnimationPlayed && (
							<div>
								<TextGenerateEffect
									bigWords={"Zbuduj wizerunek marki"}
									classNameOne="text-6xl lg:text-[6.438rem]"
								/>
							</div>
						)}
					</div>

					<div className="absolute left-1/2 top-1/2 z-[120] -translate-x-1/2 -translate-y-1/2 max-md:w-full">
						{showVideo && !hasAnimationPlayed && (
							<video
								src="/hero-video-min.mp4"
								className="h-fit animate-fadeIn opacity-0 max-md:w-full"
								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
								autoPlay
								loop
								muted
								playsInline
								poster="/hero-poster.png"
								onLoadedData={handleVideoLoaded}
							/>
						)}
						{/* {useImageFallback && (
							<img
								src="/hero-poster.png"
								alt="Hero Background"
								className="h-fit animate-fadeIn opacity-0 max-md:w-full"
								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
							/>
						)} */}
					</div>
				</div>
			</div>

			<section className="bg-basicDark text-white">
				<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
					<div className="relative z-[20] flex w-full flex-1 flex-col items-center justify-center">
						{showText && (
							<div>
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
								className="h-fit animate-fadeIn opacity-0 max-md:w-full"
								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
								autoPlay
								loop
								muted
								playsInline
								poster="/hero-poster.png"
								onLoadedData={handleVideoLoaded} // Changed from onPlay to be consistent
							/>
						)}
						{/* {useImageFallback && (
							<img
								src="/hero-poster.png"
								alt="Hero Background"
								className="h-fit animate-fadeIn opacity-0 max-md:w-full"
								style={{ animationFillMode: "forwards", animationDuration: "1s" }}
							/>
						)} */}
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSectionHomePage;
