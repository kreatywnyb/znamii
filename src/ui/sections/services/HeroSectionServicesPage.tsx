export interface HeroSectionServicesPageProps {
	video: string;
}

const HeroSectionServicesPage = ({ video }: HeroSectionServicesPageProps) => {
	return (
		<section className="aspect-[4/5] w-full overflow-hidden md:aspect-[16/9] lg:aspect-[16/9]">
			<video
				// src="https://api.znami.usermd.net/wp-content/uploads/2025/04/header-video.webm"
				src={video}
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
				className="h-full w-full object-cover"
			/>
		</section>
	);
};

export default HeroSectionServicesPage;
