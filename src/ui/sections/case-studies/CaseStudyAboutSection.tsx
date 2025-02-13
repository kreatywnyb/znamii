import React from "react";
import { CTAButton } from "../../molecules/CTAButton";

interface CaseStudyAboutSectionProps {
	leftDescription: string;
	rightDescription?: string;
	year?: string;
}

const CaseStudyDetailsSection: React.FC<CaseStudyAboutSectionProps> = ({
	industry,
	workScope,
	year,
}) => {
	return (
		<section className="container my-8 bg-white p-16">
			<div className="flex justify-between">
				<div className="flex justify-between">
					<p>
						Lorem ipsum dolor sit amet consectetur. Nibh nullam sit laoreet est quisque cursus
						posuere nunc
					</p>
					<CTAButton href="">Zrealizuj projekt z nami</CTAButton>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur. Nibh nullam sit laoreet est quisque cursus posuere
					nunc a. Vitae scelerisque commodo adipiscing est feugiat neque lobortis. Pretium in luctus
					augue cursus vehicula dapibus. Ultrices sed mauris mattis id erat sed eget amet commodo. <br /><br />
					Quam mauris tempor sit aliquet. Vitae tortor orci natoque egestas amet feugiat tortor
					bibendum. Venenatis cum velit sapien justo purus placerat fermentum. Id dictumst dolor
					ante amet montes volutpat sed. Magna senectus massa ridiculus facilisis tristique non
					aliquam sed etiam.
				</p>
			</div>
		</section>
	);
};

export default CaseStudyDetailsSection;
