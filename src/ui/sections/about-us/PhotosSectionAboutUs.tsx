"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import photo1 from "@public/about-1.webp";
import photo2 from "@public/about-2.webp";
import photo3 from "@public/about-3.webp";
import { cn } from "@/lib/utils";

const ScrollParallaxImages = () => {
	const [offsetY, setOffsetY] = useState(0);
	const [isDesktop, setIsDesktop] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	// Sprawdzenie, czy ekran jest większy niż 768px (desktop)
	useEffect(() => {
		const checkScreenSize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				setOffsetY(rect.top);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section ref={sectionRef} className="relative overflow-hidden lg:py-20">
			<div className="container relative grid grid-cols-1 gap-20 pb-20 pt-20 md:grid-cols-3 md:pb-40">
				{[
					{ speed: 0.4, img: photo1 },
					{ speed: 0.2, img: photo2 },
					{ speed: 0.6, img: photo3 },
				].map((item, index) => (
					<div
						key={index}
						className={cn(
							"relative flex-1 overflow-hidden",
							index === 1 && "lg:mt-20",
							index === 0 && "lg:-mt-40",
							index === 2 && "lg:mt-20",
						)}
						style={{
							transform: isDesktop
								? `translateY(${Math.max(offsetY * item.speed, -200)}px)` // Paralaksa na desktopie
								: ``, // Powiększanie na mobile
							transition: "transform 0.2s linear, opacity 0.2s ease-in-out",
						}}
					>
						<Image src={item.img} alt="" width={1000} height={1000} className="block" />
					</div>
				))}
			</div>
		</section>
	);
};

export default ScrollParallaxImages;
