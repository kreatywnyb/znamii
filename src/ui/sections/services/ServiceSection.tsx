import { links } from "@/constants";
import GoogleIcon from "@/ui/icons/GoogleIcon";
import StarIcon from "@/ui/icons/StarIcon";
import { CTAButton } from "@/ui/molecules/CTAButton";
import { FlipWords } from "@/ui/molecules/FlipWords";
import ServiceCTA from "@/ui/organisms/ServiceCTA";
import SubServices, { ScrollableSectionInterface } from "@/ui/organisms/SubServices";
import WhiteBox from "@/ui/organisms/WhiteBox";
import Image from "next/image";

export type ServiceSectionProps = {
	name: string;
	headingTwo: string;
	paragraph: string;
	opinion: {
		authorImg: string;
		company: string;
		author: string;
		text: string;
	};
	sections: ScrollableSectionInterface[];
	ctaVideo: string;
};

const ServiceSection = ({
	opinion,
	headingTwo,
	name,
	paragraph,
	sections,
	ctaVideo,
}: ServiceSectionProps) => {
	return (
		<section className="">
			<WhiteBox className="relative z-10 md:[&>div]:-mt-[12%]">
				<div className="container flex flex-col justify-between lg:flex-row">
					<div className="max-w-[50rem] flex-1">
						<FlipWords word={name} as="h1"></FlipWords>
						<h2 className="mt-5 text-[1.313rem]">{headingTwo}</h2>
						<p className="mt-8 text-[1.063rem] tracking-[0.02em] text-darkGrey">{paragraph}</p>
						<div className="mt-11 flex flex-col md:flex-row md:space-x-16">
							<CTAButton
								variant="primaryv2"
								className="max-md:mb-6"
								href={links.contactPage}
								id="cta-btn-service-section"
							>
								Zrealizuj projekt z nami
							</CTAButton>
							<div className="order-2 flex h-fit w-fit items-center justify-center gap-4 border border-[#EBEBEB] bg-white px-[1.375rem] py-[0.875rem]">
								<GoogleIcon className="h-[1.125rem] w-[1.125rem]" />
								<div className="flex gap-0.5">
									<StarIcon />
									<StarIcon />
									<StarIcon />
									<StarIcon />
									<StarIcon />
								</div>
								<div className="font-geist text-sm font-medium">5.0</div>
							</div>
						</div>
					</div>
					<div className="max-w-[23.75rem] flex-1 max-md:mt-10">
						<div className="relative h-full min-h-[24rem] flex-1 border border-basicDark text-white">
							<div className="h-full">
								<div className="absolute flex h-full flex-col justify-between p-8 text-basicDark transition-all duration-500 group-hover:bg-opacity-0">
									<p className={`text-[1.313rem] font-medium text-basicDark`}>{opinion.text}</p>

									<div className="flex items-end gap-4 max-md:mt-4">
										<div className="relative h-[60px] w-[60px] bg-primary">
											<Image
												src={opinion.authorImg}
												className="h-full"
												alt="author"
												width={500}
												height={500}
											/>
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
				<div className="container -mb-10 mt-20 text-5xl md:hidden">
					<FlipWords word={"Nasze usługi"} as="h2"></FlipWords>
				</div>
				<SubServices sections={sections} />
				<ServiceCTA videoSrc={ctaVideo} />
			</WhiteBox>
		</section>
	);
};

export default ServiceSection;
