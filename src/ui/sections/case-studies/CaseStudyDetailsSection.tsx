"use client"
import WhiteBox from "@/ui/organisms/WhiteBox";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CaseStudyDetailsSectionProps {
	industry: string[];
	workScope?: string[];
	year?: string;
}

const CaseStudyDetailsSection: React.FC<CaseStudyDetailsSectionProps> = ({
	industry,
	workScope,
	year,
}) => {
	const industryRef = useRef(null);
	const workScopeRef = useRef(null);
	const yearRef = useRef(null);
	
	const isIndustryInView = useInView(industryRef, { once: true, amount: 1 });
	const isWorkScopeInView = useInView(workScopeRef, { once: true, amount: 1 });
	const isYearInView = useInView(yearRef, { once: true, amount: 1 });

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { 
			opacity: 1, 
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		}
	};

	return (
		<WhiteBox className="">
			<div className="container flex flex-col">
				<motion.div 
					ref={industryRef}
					initial="hidden"
					animate={isIndustryInView ? "visible" : "hidden"}
					variants={itemVariants}
					className="flex flex-col justify-between border-b border-[#e3e3e3] py-8 max-md:space-y-4 md:flex-row"
				>
					<p className="text-[1.313rem] font-medium">Branża</p>
					<p className="font-geist text-[0.75rem] uppercase">{industry?.join(" ⬝ ")}</p>
				</motion.div>
				
				<motion.div 
					ref={workScopeRef}
					initial="hidden"
					animate={isWorkScopeInView ? "visible" : "hidden"}
					variants={itemVariants}
					className="flex flex-col justify-between border-b border-[#e3e3e3] py-8 max-md:space-y-4 md:flex-row"
				>
					<p className="text-[1.313rem] font-medium">Zakres wykonanych prac</p>
					<p className="font-geist text-[0.75rem] uppercase">{workScope?.join(" ⬝ ")}</p>
				</motion.div>
				
				<motion.div 
					ref={yearRef}
					initial="hidden"
					animate={isYearInView ? "visible" : "hidden"}
					variants={itemVariants}
					className="flex flex-col justify-between border-[#e3e3e3] py-8 max-md:space-y-4 md:flex-row"
				>
					<p className="text-[1.313rem] font-medium">Rok realizacji</p>
					<p className="font-geist text-[0.75rem] uppercase">{year}</p>
				</motion.div>
			</div>
		</WhiteBox>
	);
};

export default CaseStudyDetailsSection;