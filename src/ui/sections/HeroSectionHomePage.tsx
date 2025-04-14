"use client";

import { useEffect, useState, useRef } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSectionHomePage = () => {
	const [showVideo, setShowVideo] = useState(false);
	const [showText, setShowText] = useState(false);
	const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);
	const videoTimeoutRef = useRef(null);

	useEffect(() => {
		// Check if animation has already played in this session (safely)
		const animationPlayed =
			typeof window !== "undefined" ? window.sessionStorage?.getItem("heroAnimationPlayed") : null;

		setHasAnimationPlayed(!!animationPlayed);

		let videoTimeout = null;

		if (animationPlayed) {
			// Skip animation if it has already played
			setShowVideo(true);
			setShowText(true);
		} else {
			// Start animation sequence after component mounts
			setTimeout(() => {
				setShowVideo(true);
			}, 0); // Show video immediately

			// Set a 3-second timeout for video loading
			videoTimeout = setTimeout(() => {
				// If this timeout fires, video didn't load in time
				setShowText(true);

				// We're no longer setting revealPage on timeout here
				// Instead, it will be set when TerminalText animation completes
			}, 3000);
		}

		return () => {
			if (videoTimeout) {
				clearTimeout(videoTimeout);
			}
		};
	}, []); // empty dependency array

	// When video loads successfully
	const handleVideoLoaded = () => {
		// Clear the 3-second timeout since video loaded successfully
		if (videoTimeoutRef.current) {
			clearTimeout(videoTimeoutRef.current);
		}

		// Only proceed with animation if it hasn't already played
		if (!hasAnimationPlayed) {
			setTimeout(() => {
				setShowText(true);
			}, 500); // Show text 0.5s after video loads

			// We're no longer setting revealPage on timeout here
			// Instead, it will be set when TerminalText animation completes
		}
	};

	// Handle terminal text animation completion
	const handleTerminalTextComplete = () => {
		// Set reveal page when terminal text animation completes

		// Mark animation as played (safely)
		if (typeof window !== "undefined") {
			window.sessionStorage?.setItem("heroAnimationPlayed", "true");
		}
	};

	return (
		<>
			<section className="bg-basicDark text-white">
				<div className="container relative flex h-full min-h-[720px] w-full xxl:min-h-[920px]">
					<div className="relative z-[20] flex w-full flex-1 flex-col items-center justify-center">
						{showText && (
							<div>
								<TextGenerateEffect
									bigWords={"Zbuduj wizerunek marki"}
									classNameOne="text-6xl lg:text-[6.438rem]"
									onTerminalTextComplete={handleTerminalTextComplete}
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
								onLoadedData={handleVideoLoaded}
							/>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSectionHomePage;
