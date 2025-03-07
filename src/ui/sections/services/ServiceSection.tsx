import { links } from "@/constants";
import { CTAButton } from "@/ui/molecules/CTAButton";
import Image, { StaticImageData } from "next/image";
import WhiteBox from "@/ui/organisms/WhiteBox";
import React from "react";
import StarIcon from "@/ui/icons/StarIcon";
import GoogleIcon from "@/ui/icons/GoogleIcon";

export type ServiceSectionProps = {
	name: string;
	headingTwo: string;
	paragraph: string;
	opinion: {
		authorImg: StaticImageData;
		company: string;
		author: string;
		text: string;
	};
};

const ServiceSection = ({ opinion, headingTwo, name, paragraph }: ServiceSectionProps) => {
	return (
		<section>
			<WhiteBox className="relative z-10 [&>div]:-mt-64">
				<div className="container flex flex-col justify-between lg:flex-row">
					<div className="max-w-[780px] flex-1">
						<h1>{name}</h1>
						<h2 className="mt-5 text-[1.313rem]">{headingTwo}</h2>
						<p className="mt-8 text-[1.063rem] tracking-[0.02em] text-darkGrey">{paragraph}</p>
						<div className="mt-11 flex space-x-16">
							<CTAButton href={links.contactPage}>Zrealizuj projekt z nami</CTAButton>
							<div className="order-2 flex h-fit w-fit items-center justify-center gap-4 border border-[#EBEBEB] bg-white p-4">
								<GoogleIcon />
								<div className="flex gap-0.5">
									<StarIcon />
									<StarIcon />
									<StarIcon />
									<StarIcon />
									<StarIcon />
								</div>
								<div className="font-geist font-medium">5.0</div>
							</div>
						</div>
					</div>
					<div className="max-w-[23.75rem] flex-1">
						<div className="relative h-full min-h-[24rem] flex-1 border border-basicDark text-white">
							<div className="h-full">
								<div className="absolute flex h-full flex-col justify-between p-8 text-basicDark transition-all duration-500 group-hover:bg-opacity-0">
									<p className={`text-[1.313rem] font-medium text-basicDark`}>{opinion.text}</p>

									<div className="flex items-end gap-4 max-md:mt-4">
										<div className="relative h-[60px] w-[60px] bg-primary">
											<Image src={opinion.authorImg} className="h-full" alt="author" />
											<div className="absolute -left-4 h-4 w-4 bg-primary font-medium"></div>
										</div>
										<div className={`text-basicDark`}>
											<p className="text-[1.313rem] font-medium">{opinion.author}</p>
											<p className="font-geist text-[0.75rem] font-medium uppercase">
												{opinion.company}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</WhiteBox>
		</section>
	);
};

export default ServiceSection;
