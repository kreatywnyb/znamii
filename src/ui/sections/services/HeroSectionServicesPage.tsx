"use client";
import ReactPlayer from "react-player";

export interface HeroSectionServicesPageProps {
	video: string;
}

const HeroSectionServicesPage = ({ video }: HeroSectionServicesPageProps) => {
	return (
		<section className="aspect-[4/5] w-full overflow-hidden md:aspect-[16/9] lg:aspect-[16/9]">
			{/* <video
				src={video}
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
				className="h-full w-full object-cover"
			/> */}
			<ReactPlayer
				url={video}
				width="100%"
				height="100%"
				loop
				muted
				playing
				playsinline
				className="h-full w-full object-cover"
			/>
		</section>
	);
};

export default HeroSectionServicesPage;
