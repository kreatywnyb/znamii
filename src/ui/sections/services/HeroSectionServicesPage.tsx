// const HeroSectionServicesPage = () => {
// 	return (
// 		<section className="relative h-[100svh] w-full overflow-hidden md:h-[70vh]">
// 			<video
// 				src="/header-video.webm"
// 				autoPlay
// 				loop
// 				muted
// 				playsInline
// 				className="absolute inset-0 h-full w-full object-cover"
// 			/>
// 		</section>
// 	);
// };

// export default HeroSectionServicesPage;

const HeroSectionServicesPage = () => {
	return (
		<section className="aspect-[4/5] w-full overflow-hidden md:aspect-[16/9] lg:aspect-[16/7]">
			<video
				src="/header-video.webm"
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
