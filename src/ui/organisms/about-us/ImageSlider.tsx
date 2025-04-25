"use client";
import React, { useEffect, useState } from "react";
import photo1 from "@public/case-1.webp";
import photo2 from "@public/case-2.webp";
import photo3 from "@public/case-3.webp";
import AnimatedImage from "@/ui/molecules/AnimatedImage";
import Image from "next/image";

const photos = [photo1, photo2, photo3];

const ImageSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % photos.length);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<AnimatedImage
				showOverlay={false}
				className="aspect-video !w-full object-cover object-center"
			>
				<Image src={photos[activeIndex]} alt="About us image" className="w-full"></Image>
			</AnimatedImage>
		</div>
	);
};

export default ImageSlider;
