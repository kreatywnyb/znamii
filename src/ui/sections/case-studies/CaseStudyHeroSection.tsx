"use client";
import { FlipWords } from "@/ui/molecules/FlipWords";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

interface CaseStudyHeroSectionProps {
	title: string;
	video?: string;
	image?: string;
}

const CaseStudyHeroSection: React.FC<CaseStudyHeroSectionProps> = ({ title, video, image }) => {
	const mediaRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [mediaHeight, setMediaHeight] = useState(0);
	const [titleHeight, setTitleHeight] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

	useEffect(() => {
		// Check if mobile on mount and resize
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	useEffect(() => {
		const updateDimensions = () => {
			// Measure title height
			if (titleRef.current) {
				setTitleHeight(titleRef.current.offsetHeight);
			}

			// Measure media height
			if (mediaRef.current) {
				const height = mediaRef.current.offsetHeight + (isMobile ? 25 : 50);
				setMediaHeight(height);
			}
		};

		// Initial measurement
		updateDimensions();

		// Update on resize
		window.addEventListener("resize", updateDimensions);

		// For images, update when loaded
		if (image && mediaRef.current) {
			const imgElement = mediaRef.current.querySelector("img");
			if (imgElement) {
				imgElement.addEventListener("load", updateDimensions);
			}
		}

		// For videos, update when loaded
		if (video && videoRef.current) {
			videoRef.current.addEventListener("loadedmetadata", updateDimensions);
		}

		return () => {
			window.removeEventListener("resize", updateDimensions);
			if (video && videoRef.current) {
				videoRef.current.removeEventListener("loadedmetadata", updateDimensions);
			}
		};
	}, [image, video, isMobile, title]);

	// Intersection Observer for video loading and play/pause
	useEffect(() => {
		if (!video || !mediaRef.current) return;

		const mediaElement = mediaRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Video container is approaching viewport - load video
						setShouldLoadVideo(true);

						// Play video if it's already loaded
						if (videoRef.current && videoRef.current.readyState >= 2) {
							videoRef.current.play().catch((error) => {
								console.log("Autoplay prevented:", error);
							});
						}
					} else {
						// Video is out of view
						const rect = entry.boundingClientRect;
						const viewportHeight = window.innerHeight;

						// Always pause when out of view
						if (videoRef.current) {
							videoRef.current.pause();
						}

						// Unload video if it's far from viewport
						if (
							(rect.bottom < -viewportHeight * 1.5 || rect.top > viewportHeight * 2.5) &&
							shouldLoadVideo
						) {
							setShouldLoadVideo(false);

							// Clean up video element
							if (videoRef.current) {
								videoRef.current.pause();
								videoRef.current.src = "";
								videoRef.current.load();
							}
						}
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "300px 0px", // Start loading 300px before entering viewport
			},
		);

		observer.observe(mediaElement);

		return () => {
			observer.disconnect();
		};
	}, [video, shouldLoadVideo]);

	// Auto-play when video loads
	const handleVideoLoaded = () => {
		// Check if video container is in viewport
		if (mediaRef.current) {
			const rect = mediaRef.current.getBoundingClientRect();
			const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

			if (isInViewport && videoRef.current) {
				videoRef.current.play().catch((error) => {
					console.log("Autoplay prevented:", error);
				});
			}
		}
	};

	// Calculate safe padding
	const basePadding = isMobile ? 40 : 80;
	const titleContainerHeight = titleHeight;
	const minPaddingBottom = titleContainerHeight + basePadding;

	// Use a default height estimate if media isn't loaded yet
	const estimatedMediaHeight =
		video && !shouldLoadVideo
			? ((window.innerWidth - 32) * 9) / 16 + (isMobile ? 25 : 50) // 16:9 video estimate
			: mediaHeight;

	const dynamicPaddingBottom = Math.max(estimatedMediaHeight / 2, minPaddingBottom);

	return (
		<section className="relative mb-16 md:mb-32">
			{/* Black background section with dynamic height */}
			<div className="relative bg-basicDark" style={{ paddingBottom: `${dynamicPaddingBottom}px` }}>
				<div className="container pt-12 md:pt-20">
					<div ref={titleRef}>
						<FlipWords
							word={title}
							as="h1"
							className="mb-8 h-auto text-4xl leading-tight text-white md:mb-16 lg:text-[3.625rem]"
						/>
					</div>
				</div>
			</div>

			{/* Media container */}
			<div className="container relative">
				<div
					ref={mediaRef}
					className="relative"
					style={{
						marginTop: `-${estimatedMediaHeight / 2 - (isMobile ? 25 : 50)}px`,
					}}
				>
					{video && shouldLoadVideo ? (
						<video
							ref={videoRef}
							muted
							playsInline
							webkit-playsinline="true"
							loop
							autoPlay
							className="w-full"
							src={video}
							controls
							preload="auto"
							onLoadedData={handleVideoLoaded}
						/>
					) : image ? (
						<Image
							src={image}
							alt={title}
							width={1920}
							height={1080}
							unoptimized
							className="w-full object-cover"
							quality={95}
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, (max-width: 1920px) 100vw, 1920px"
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					) : null}
				</div>
			</div>
		</section>
	);
};

export default CaseStudyHeroSection;
