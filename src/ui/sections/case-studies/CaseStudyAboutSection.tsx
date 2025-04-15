"use client";
import React from "react";
import { CTAButton } from "../../molecules/CTAButton";
import WhiteBox from "@/ui/organisms/WhiteBox";
import { links } from "@/constants";
import { MediaItem, Video, CombinedMediaItem, isImage } from "@/API/models/caseStudies";
import Image from "next/image";

interface CaseStudyAboutSectionProps {
	leftDescription: string;
	rightDescription?: string;
	rightDescription2?: string;
	// You can accept either separate arrays or a combined media array
	media?: CombinedMediaItem[];
	// Or keep supporting the old interface for backward compatibility
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
	const allMedia: CombinedMediaItem[] = media.length > 0 
		? media 
		: [
			...photos.map(photo => ({ ...photo, type: photo.type || "image" })),
			...videos.map(video => ({ ...video, type: video.type || "video" })),
		];

	const isDoubleImageSection = (index: number) => {
		return doubleImageSectionsIndexes.includes(index);
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

						return (
							<div key={`double-${index}`} className="md:mb-4">
								{currentMedia.description && (
									<div className="my-16 text-lg md:pr-2 md:max-w-[50%] mx-4">{currentMedia.description}</div>
								)}

								<div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0">
									<div className="md:w-1/2">
										{isImage(currentMedia) ? (
											<Image
												src={currentMedia.url}
												alt={currentMedia.alt || "Case study image"}
												width={currentMedia.width || undefined}
												height={currentMedia.height || undefined}
												className="h-full w-full object-cover"
											/>
										) : (
											<video 
												className="w-full" 
												title={currentMedia.title}
												controls={!currentMedia.noControls}
												muted={currentMedia.muted}
												loop={currentMedia.loop}
												autoPlay={currentMedia.autoplay}
												playsInline={currentMedia.playsInline}
											>
												<source src={currentMedia.url} type={currentMedia.mime} />
												Your browser does not support the video tag.
											</video>
										)}
									</div>

									<div className="md:w-1/2">
										{isImage(nextMedia) ? (
											<Image
												src={nextMedia.url}
												alt={nextMedia.alt || "Case study image"}
												className="w-full object-cover"
												width={nextMedia.width || undefined}
												height={nextMedia.height || undefined}
											/>
										) : (
											<video 
												className="w-full" 
												title={nextMedia.title}
												controls={!nextMedia.noControls}
												muted={nextMedia.muted}
												loop={nextMedia.loop}
												autoPlay={nextMedia.autoplay}
												playsInline={nextMedia.playsInline}
											>
												<source src={nextMedia.url} type={nextMedia.mime} />
												Your browser does not support the video tag.
											</video>
										)}
									</div>
								</div>
							</div>
						);
					} else {
						displayedIndices.add(index);

						return (
							<div key={`single-${index}`} className="w-full last:mb-0">
								{media.description && (
									<div className="my-16 text-lg md:max-w-[50%] mx-4">{media.description}</div>
								)}

								{isImage(media) ? (
									<img
										src={media.url}
										alt={media.alt || "Case study image"}
										className="max-h-[800px] w-full object-cover"
									/>
								) : (
									<video 
										className="w-full" 
										title={media.title}
										controls={!media.noControls}
										muted={media.muted}
										loop={media.loop}
										autoPlay={media.autoplay}
										playsInline={media.playsInline}
									>
										<source src={media.url} type={media.mime} />
										Your browser does not support the video tag.
									</video>
								)}
							</div>
						);
					}
				})}
			</div>
		);
	};

	return (
		<WhiteBox className="my-8 [&>div]:md:p-16">
			<div className="container flex flex-col justify-between max-lg:space-y-4 lg:flex-row lg:space-x-10">
				<div className="flex max-w-[28rem] flex-col justify-between">
					<p className="text-[1.313rem]">{leftDescription}</p>
					<span className="hidden md:block">
						<CTAButton variant="primaryv2" href={links.contactPage}>
							Zrealizuj projekt z nami
						</CTAButton>
					</span>
				</div>
				<div className="max-w-[40rem] max-md:mt-20">
					{rightDescription ? (
						<div
							className="[&>p:not(:last-child)]:mb-12"
							dangerouslySetInnerHTML={{ __html: rightDescription }}
						></div>
					) : null}
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