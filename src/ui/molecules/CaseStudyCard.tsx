import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ExpandingLabel from "@/ui/molecules/ExpandingLabel";
import { links } from "@/constants";
import { CaseStudyResponse } from "@/API/models/caseStudies";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CaseStudyCardProps {
	caseStudy: CaseStudyResponse;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	const cardVariants = {
		hidden: {
			opacity: 0,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={cardVariants}
			className="h-full w-full"
		>
			<Link
				href={`${links.portfolio}/${caseStudy.slug}`}
				className="group relative flex h-full min-h-[23.75rem] w-full items-center justify-center overflow-hidden font-medium text-white transition-all"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="absolute inset-0 h-full w-full overflow-hidden">
					<Image
						src={caseStudy.mainPhoto.url}
						alt={caseStudy.title}
						fill
						unoptimized
						className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
						priority={false}
					/>
				</div>
				<ExpandingLabel text={caseStudy.title} isHovered={isHovered} parentInView={inView} />
			</Link>
		</motion.div>
	);
};

export default CaseStudyCard;
