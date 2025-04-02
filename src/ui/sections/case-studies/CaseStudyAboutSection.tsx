import React from "react";
import { CTAButton } from "../../molecules/CTAButton";
import WhiteBox from "@/ui/organisms/WhiteBox";
import { links } from "@/constants";
import { MediaItem, Video } from "@/API/models/caseStudies";

interface CaseStudyAboutSectionProps {
	leftDescription: string;
	rightDescription?: string;
	rightDescription2?: string;
	photos?: MediaItem[];
	videos?: Video[];
}

const CaseStudyAboutSection: React.FC<CaseStudyAboutSectionProps> = ({
	leftDescription,
	rightDescription,
	rightDescription2,
	photos = [],
	videos = [],
}) => {
	return (
		<WhiteBox className="my-8 [&>div]:md:p-16">
			<div className="container flex flex-col justify-between max-lg:space-y-4 lg:flex-row lg:space-x-10">
				<div className="flex max-w-[28rem] flex-col justify-between">
					<p className="text-[1.313rem]">{leftDescription}</p>
					<span className="hidden md:block">
						<CTAButton href={links.contactPage}>Zrealizuj projekt z nami</CTAButton>
					</span>
				</div>
				<div className="max-w-[40rem] max-md:mt-20">
					{rightDescription ? (
						<div
							className="[&>p:not(:last-child)]:mb-12"
							dangerouslySetInnerHTML={{ __html: rightDescription }}
						></div>
					) : null}
					<p>{rightDescription2}</p>
					<span className="mt-10 block md:hidden">
						<CTAButton href={links.contactPage}>Zrealizuj projekt z nami</CTAButton>
					</span>
				</div>
			</div>

			<div className="mt-16">
				{photos && photos.length > 0 && (
					<div>
						{photos.map((photo) => (
							<div key={photo.id} className="w-full">
								<img
									src={photo.url}
									alt={photo.alt || "Case study image"}
									className="max-h-[800px] w-full object-cover"
								/>
							</div>
						))}
					</div>
				)}

				{videos && videos.length > 0 && (
					<div>
						{videos.map((video) => (
							<div key={video.id} className="w-full">
								<video controls className="w-full" title={video.title}>
									<source src={video.url} type={video.mime} />
									Your browser does not support the video tag.
								</video>
							</div>
						))}
					</div>
				)}
			</div>
		</WhiteBox>
	);
};

export default CaseStudyAboutSection;
