import React from "react";
import interiorImage from "@public/interior.webp";
import WhiteBox from "@/ui/organisms/WhiteBox";
import AnimatedImage from "@/ui/molecules/AnimatedImage";
import TerminalText from '@/ui/atoms/TerminalText';
import { FlipWords } from "@/ui/molecules/FlipWords";
import Image from 'next/image';

const AddressSection: React.FC = () => {
	return (
		<WhiteBox className="z-20 [&>div]:-mt-32 ">
			<div className="container py-6">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<FlipWords as='h2' word="Wpadnij na kawkę ☕" className="mb-4 text-left text-4xl font-medium text-basicDark"></FlipWords>
					<div>
						<p className="mb-4 text-[1.063rem] tracking-[0.02em]">
							Jak dojechać? No nie ma łatwo, bo kilka budynków w okolicy ma przypisany ten sam numer.
							Nasze biuro mieści się przy głównej ulicy,na prawo od Unimetu. Można je poznać np. po...
							dużym szyldzie Znami.
						</p>
						<TerminalText text="ul. okulickiego 18, 35-202 rzeszów" styles="py-6" animateWhenInView>

						</TerminalText>
					</div>
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1811.4219241672174!2d21.988519674899656!3d50.05374940467292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8497be5bfbe8aa75%3A0x780dbac21d8da188!2sZnami%20Studio!5e0!3m2!1spl!2spl!4v1739825481936!5m2!1spl!2spl"
							width="100%"
							height="100%"
							loading="lazy"
						></iframe>
					</div>
					{/* Using the new AnimatedImage component */}
					<AnimatedImage  
						animateDesktop
						animateMobile 
					>
						<Image src={interiorImage} alt="Biuro znami"></Image>

					</AnimatedImage>
				</div>
			</div>
		</WhiteBox>
	);
};

export default AddressSection;