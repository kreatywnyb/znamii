"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import photo1 from "@public/case-1.webp";
import photo2 from "@public/case-2.webp";
import photo3 from "@public/case-3.webp";

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
			<Image
				src={photos[activeIndex]}
				alt=""
				className="aspect-video w-full object-cover object-center"
			/>
		</div>
	);
};

export default ImageSlider;
