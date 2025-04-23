const HeroSectionServicesPage = () => {
	return (
		<section className="aspect-[4/5] w-full overflow-hidden md:aspect-[16/9] lg:aspect-[16/7]">
			<video
				// src="https://api.znami.usermd.net/wp-content/uploads/2025/04/header-video.webm"
				src="https://api.znami.usermd.net/wp-content/uploads/2025/04/Znami-Studio-Header-video.mp4"
				autoPlay
				loop
				muted
				playsInline
				className="h-full w-full object-cover"
			/>
		</section>
	);
};

export default HeroSectionServicesPage;
