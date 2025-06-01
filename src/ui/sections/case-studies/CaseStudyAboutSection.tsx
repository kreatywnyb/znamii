"use client";
import React from "react";
import { CTAButton } from "../../molecules/CTAButton";
import WhiteBox from "@/ui/organisms/WhiteBox";
import { links } from "@/constants";
import { MediaItem, Video, CombinedMediaItem, isImage } from "@/API/models/caseStudies";
import Image from "next/image";
import AnimatedMedia from "@/ui/molecules/AnimatedImage";

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

	const renderMediaItem = (mediaItem: CombinedMediaItem, className: string = "") => (
		<AnimatedMedia
			animateDesktop={mediaItem.animateDesktop ?? true}
			animateMobile={mediaItem.animateMobile ?? false}
			maxZoom={1.1}
			showOverlay={true}
		>
			{isImage(mediaItem) ? (
				<Image
					src={mediaItem.url}
					alt={mediaItem.alt || "Case study image"}
					width={mediaItem.width || 800}
					height={mediaItem.height || 600}
					className={`h-full w-full object-cover ${className}`}
				/>
			) : (
				<video
					className={`h-full w-full object-cover ${className}`}
					title={mediaItem.title}
					controls={!mediaItem.noControls}
					muted={mediaItem.muted}
					loop={mediaItem.loop}
					autoPlay={mediaItem.autoplay}
					playsInline
				>
					<source src={mediaItem.url} type={mediaItem.mime} />
					Your browser does not support the video tag.
				</video>
			)}
		</AnimatedMedia>
	);

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

								<div
									className="w-full"
								>
									{renderMediaItem(media)}
								</div>
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
						<CTAButton variant="primaryv2" href={links.contactPage}>
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
						<CTAButton variant="primaryv2" href={links.contactPage}>
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
