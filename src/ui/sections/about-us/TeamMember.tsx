"use client";
import React, { useState, useRef, JSX } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useInView } from "framer-motion";

const TeamMember = ({
	item,
	idx,
}: {
	item: {
		img: StaticImageData;
		roles: string[];
		name: string;
		socials: { link: string; icon: (props?: React.SVGProps<SVGSVGElement>) => JSX.Element };
		description: {
			title: string;
			desc: string;
			hobbies: string[];
		};
	};
	idx: number;
}) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const memberRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(memberRef, { once: true, amount: 0.3 });

	// Handle mouse movement
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		if (memberRef.current) {
			const rect = memberRef.current.getBoundingClientRect();

			setMousePosition({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		}
	};

	// Animation variants
	const slideInVariants = {
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
				delay: idx * 0.1, // Stagger effect based on index
			},
		},
	};

	return (
		<motion.div
			className="group flex flex-col justify-between border-b border-lightGrey py-20 max-md:space-y-10 lg:flex-row"
			key={`${item.name}-${idx}`}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={slideInVariants}
		>
			<div
				className="relative flex flex-col md:w-[40rem] md:flex-row md:items-center md:space-x-6"
				ref={memberRef}
				onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleMouseMove(e)}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
			>
				<Image alt={item.name} src={item.img} />
				<div className="flex h-full items-center whitespace-nowrap text-[1.313rem] leading-[33px] max-md:mt-2">
					<span className="text-[1.313rem]">{item.name}</span>
					<div
						className="absolute z-30 hidden flex-col rounded-[0.188rem] border border-basicDark bg-white p-[3.125rem] md:group-hover:flex"
						style={{
							left: `${mousePosition.x + 16}px`,
							top: `${mousePosition.y + 16}px`,
							width: "45rem",
							display: isHovering ? "flex" : "none",
						}}
					>
						<span className="absolute -left-4 -top-4 h-4 w-4 bg-primary" />
						<span className="text-[1.313rem]">{item.description.title}</span>
						<p className="overflow-wrap-normal mb-[1.875rem] mt-[0.938rem] whitespace-normal break-words text-[1.063rem] leading-[160%] text-darkGrey">
							{item.description.desc}
						</p>
						<span>Miłośnik tego i owego</span>
						<div className="mt-4 flex flex-wrap gap-4">
							{item.description.hobbies.map((item, idx) => (
								<div key={idx} className="bg-background p-4 font-geist text-sm uppercase">
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row md:items-center">
				<div className="flex flex-col font-geist text-xs max-md:space-y-4 md:flex-row">
					{item.roles.map((role, idx) => (
						<span
							className={twMerge(
								"relative inline-block whitespace-nowrap uppercase",
								item.roles.length !== idx + 1 &&
									"mr-4 pr-4 after:absolute after:right-0 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:bg-basicDark max-md:after:hidden",
							)}
							key={`${role}-${idx}`}
						>
							{role}
						</span>
					))}
				</div>
				<a
					href={item.socials.link}
					target="_blank"
					className={twMerge(
						"inline-block w-fit p-2 max-md:mt-10 md:ml-[8.375rem]",
						idx !== 2 && "rounded-[0.125rem] border border-lightGrey",
					)}
				>
					{item.socials.icon()}
				</a>
			</div>
		</motion.div>
	);
};

export default TeamMember;
