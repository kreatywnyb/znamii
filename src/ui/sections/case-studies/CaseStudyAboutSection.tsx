"use client";
import React, { useRef, useEffect, useState } from "react";
import { CTAButton } from "../../molecules/CTAButton";
import WhiteBox from "@/ui/organisms/WhiteBox";
import { links } from "@/constants";
import { MediaItem, Video, CombinedMediaItem, isImage, isVideo } from "@/API/models/caseStudies";
import Image from "next/image";
import AnimatedMedia from "@/ui/molecules/AnimatedImage";

interface LazyVideoProps {
	mediaItem: Video;
	className?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ mediaItem, className = "" }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [shouldLoad, setShouldLoad] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);

	// Prioritize autoplay videos - they load earlier and unload later
	const isAutoplay = mediaItem.autoplay;
	const loadMargin = isAutoplay ? "800px" : "300px"; // Autoplay videos load earlier
	const unloadMultiplier = isAutoplay ? 3 : 1.5; // Autoplay videos stay loaded longer

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const isIntersecting = entry.isIntersecting;
					const rect = entry.boundingClientRect;
					const viewportHeight = window.innerHeight;

					if (isIntersecting && !shouldLoad) {
						// Load video when approaching viewport
						setShouldLoad(true);
					} else if (!isIntersecting && shouldLoad) {
						// Only unload if video is far from viewport
						const isFarFromViewport =
							rect.bottom < -viewportHeight * unloadMultiplier ||
							rect.top > viewportHeight * (unloadMultiplier + 1);

						if (isFarFromViewport && hasLoaded) {
							// Unload video to save resources
							setShouldLoad(false);
							setHasLoaded(false);

							const video = videoRef.current;
							if (video) {
								video.pause();
								video.currentTime = 0;
								// For non-autoplay videos, we can be more aggressive
								if (!isAutoplay) {
									video.src = "";
									video.load();
								}
							}
						}
					}

					// Track visibility for autoplay control
					setIsVisible(isIntersecting);
				});
			},
			{
				threshold: 0,
				// Autoplay videos get larger rootMargin for earlier loading
				rootMargin: `${loadMargin} 0px ${loadMargin} 0px`,
			},
		);

		observer.observe(container);
		return () => observer.unobserve(container);
	}, [shouldLoad, hasLoaded, isAutoplay, loadMargin, unloadMultiplier]);

	// Handle autoplay when visible
	useEffect(() => {
		const video = videoRef.current;
		if (!video || !hasLoaded) return;

		if (isVisible && mediaItem.autoplay) {
			// For autoplay videos, ensure smooth playback
			video.play().catch((error) => {
				// Silently handle autoplay failures
				console.log("Autoplay prevented:", error);
			});
		} else if (!isVisible && mediaItem.autoplay) {
			// Only pause autoplay videos when not visible
			video.pause();
		}
	}, [isVisible, hasLoaded, mediaItem.autoplay]);

	const handleVideoLoaded = () => {
		setHasLoaded(true);
		if (mediaItem.autoplay && isVisible && videoRef.current) {
			videoRef.current.play().catch(() => {});
		}
	};
	// const getPreloadStrategy = () => {
	// 	if (mediaItem.autoplay) {
	// 		return "auto";
	// 	}
	// 	return "metadata";
	// };

	return (
		<div ref={containerRef} className={`relative h-full w-full ${className}`}>
			{shouldLoad ? (
				<video
					ref={videoRef}
					className="h-full w-full object-cover"
					title={mediaItem.title}
					controls={!mediaItem.noControls}
					muted={mediaItem.muted || mediaItem.autoplay}
					loop={mediaItem.loop}
					autoPlay={false}
					playsInline
					preload="auto"
					onLoadedData={handleVideoLoaded}
				>
					<source src={mediaItem.url} type={mediaItem.mime} />
					Your browser does not support the video tag.
				</video>
			) : (
				// Lightweight placeholder
				<div
					className="flex h-full w-full items-center justify-center bg-gray-100"
					style={{ aspectRatio: `${mediaItem.width || 16}/${mediaItem.height || 9}` }}
				>
				</div>
			)}
		</div>
	);
};

interface CaseStudyAboutSectionProps {
	leftDescription: string;
	rightDescription?: string;
	rightDescription2?: string;
	media?: CombinedMediaItem[];
	photos?: MediaItem[];
	videos?: Video[];
	doubleImageSectionsIndexes?: number[];
}

const CaseStudyAboutSection: React.FC<CaseStudyAboutSectionProps> = ({
	leftDescription,
	rightDescription,
	rightDescription2,
	media = [],
	photos = [],
	videos = [],
	doubleImageSectionsIndexes = [],
}) => {
	// Combine media items if separate arrays are provided
	const allMedia: CombinedMediaItem[] =
		media.length > 0
			? media
			: [
					...photos.map((photo) => ({ ...photo, type: photo.type || "image" })),
					...videos.map((video) => ({ ...video, type: video.type || "video" })),
				];

	const isDoubleImageSection = (index: number) => {
		return doubleImageSectionsIndexes.includes(index);
	};

	const renderMediaItem = (mediaItem: CombinedMediaItem, className: string = "") => {
		if (isImage(mediaItem)) {
			return (
				<AnimatedMedia
					animateDesktop={mediaItem.animateDesktop ?? true}
					animateMobile={mediaItem.animateMobile ?? false}
					maxZoom={1.1}
					showOverlay={true}
				>
					<Image
						loading="lazy"
						src={mediaItem.url}
						alt={mediaItem.alt || "Case study image"}
						width={mediaItem.width || 800}
						height={mediaItem.height || 600}
						className={`h-full w-full object-cover ${className}`}
					/>
				</AnimatedMedia>
			);
		} else if (isVideo(mediaItem)) {
			return (
				<AnimatedMedia
					animateDesktop={mediaItem.animateDesktop ?? true}
					animateMobile={mediaItem.animateMobile ?? false}
					maxZoom={1.1}
					showOverlay={true}
				>
					<LazyVideo mediaItem={mediaItem} className={className} />
				</AnimatedMedia>
			);
		}
		return null;
	};

	const calculateAspectRatio = (mediaItem: CombinedMediaItem): number => {
		const width = mediaItem.width || 800;
		const height = mediaItem.height || 600;
		return width / height;
	};

	const renderMedia = () => {
		const displayedIndices = new Set<number>();

		return (
			<div className="mt-16">
				{allMedia.map((media, index) => {
					if (displayedIndices.has(index)) return null;

					if (isDoubleImageSection(index) && index + 1 < allMedia.length) {
						displayedIndices.add(index);
						displayedIndices.add(index + 1);

						const currentMedia = media;
						const nextMedia = allMedia[index + 1];

						// Calculate aspect ratios
						const currentAspectRatio = calculateAspectRatio(currentMedia);
						const nextAspectRatio = calculateAspectRatio(nextMedia);

						return (
							<div key={`double-${index}`}>
								{currentMedia.description && (
									<div className="mx-4 my-16 text-lg md:max-w-[50%] md:pr-2">
										{currentMedia.description}
									</div>
								)}

								<div className="mb-4 flex flex-col gap-4 md:flex-row">
									<div className="min-w-0 flex-1" style={{ flex: `${currentAspectRatio} 1 0%` }}>
										<div className="w-full" style={{ aspectRatio: currentAspectRatio.toString() }}>
											{renderMediaItem(currentMedia, "h-full object-cover")}
										</div>
									</div>
									<div className="min-w-0 flex-1" style={{ flex: `${nextAspectRatio} 1 0%` }}>
										<div className="w-full" style={{ aspectRatio: nextAspectRatio.toString() }}>
											{renderMediaItem(nextMedia, "h-full object-cover")}
										</div>
									</div>
								</div>
							</div>
						);
					} else {
						displayedIndices.add(index);

						return (
							<div key={`single-${index}`} className="mb-4 w-full last:mb-0">
								{media.description && (
									<div className="mx-4 my-16 text-lg md:max-w-[50%]">{media.description}</div>
								)}

								<div className="w-full">{renderMediaItem(media)}</div>
							</div>
						);
					}
				})}
			</div>
		);
	};

	return (
		<WhiteBox className="my-8 [&>div]:md:p-16">
			<div className="container flex min-h-32 flex-col justify-between max-lg:space-y-4 lg:flex-row lg:space-x-10">
				<div className="flex max-w-[28rem] flex-col justify-between">
					<p className="text-[1.313rem]">
						{" "}
						{leftDescription?.split(/\r\n|\r|\n/).map((line, index, array) => (
							<React.Fragment key={index}>
								{line}
								{index < array.length - 1 && <br />}
							</React.Fragment>
						))}
					</p>
					<span className="hidden md:block">
						<CTAButton variant="primaryv2" href={links.contactPage} id="cta-btn-case-study-section">
							Zrealizuj projekt z nami
						</CTAButton>
					</span>
				</div>
				<div className="max-w-[40rem] max-md:mt-20">
					<div className="[&>p:not(:last-child)]:mb-12">
						{rightDescription?.split(/\r\n|\r|\n/).map((line, index, array) => (
							<React.Fragment key={index}>
								{line}
								{index < array.length - 1 && <br />}
							</React.Fragment>
						))}
					</div>
					{rightDescription2 && <p>{rightDescription2}</p>}
					<span className="mt-10 block md:hidden">
						<CTAButton
							variant="primaryv2"
							href={links.contactPage}
							id="cta-btn-case-study-section-2"
						>
							Zrealizuj projekt z nami
						</CTAButton>
					</span>
				</div>
			</div>
			{renderMedia()}
		</WhiteBox>
	);
};

export default CaseStudyAboutSection;
