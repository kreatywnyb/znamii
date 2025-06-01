"use client"
import { useEffect, useRef } from "react";

export interface HeroSectionServicesPageProps {
	video: string;
	video2?: string;
}

const HeroSectionServicesPage = ({ video, video2 }: HeroSectionServicesPageProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.load();
		}
	}, []);

	return (
		<section className="aspect-[4/5] w-full overflow-hidden md:aspect-[16/9] lg:aspect-[16/9]">
			<video 
				ref={videoRef}
				autoPlay 
				loop 
				muted 
				playsInline 
				preload="auto"
				className="h-full w-full object-cover"
			>
				<source src={video} type="video/mp4" />
				{video2 && <source src={video2} type="video/webm" />}
			</video>
		</section>
	);
};

export default HeroSectionServicesPage;