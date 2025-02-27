import React from "react";
import Image from "next/image";
import sharing1Img from "@public/sharing-1.webp";
import sharing2Img from "@public/sharing-2.webp";
import sharing3Img from "@public/sharing-3.webp";
import wsizImg from "@public/WSIZ-logo.webp";

const KnowledgeSharing = () => {
	return (
		<section className="py-20 lg:py-40">
			<div className="container flex flex-col max-lg:space-y-16 lg:flex-row">
				<div className="flex max-w-[28.75rem] flex-col justify-between">
					<div className="flex-1">
						<h2 className="mb-12 text-[2.5rem] leading-[3.125rem]">
							Dzielimy się wiedzą, bo sharing is caring
						</h2>

						<p className="text-[1.313rem]">
							Prowadzimy prelekcje i szkolenia dla uczelni oraz firm, łącząc nasze doświadczenie z
							pasją do przekazywania wiedzy.{" "}
							<a href="mailto:kontakt@znami.co" className="text-primary underline">
								Napisz do nas
							</a>{" "}
							jeśli chcesz żebyśmy pojawili się także u Ciebie.
						</p>
					</div>
					<div className="max-md:mt-8">
						<span className="mb-10 inline-block font-geist text-[0.75rem] uppercase">
							Jesteśmy partnerem:
						</span>
						<Image alt="WSIZ Logo" src={wsizImg} width={800} height={800} className="h-20 w-auto" />
					</div>
				</div>
				<div className="flex flex-1 flex-col">
					<div>
						<Image alt="" src={sharing3Img} className="ml-auto md:max-w-[455px]" />
					</div>
					<div className="mt-8 flex flex-col justify-end max-lg:space-y-8 md:mt-[62px] md:flex-row lg:space-x-16">
						<Image
							alt=""
							src={sharing1Img}
							width={800}
							height={800}
							className="h-fit flex-1 md:max-w-[291px]"
						/>
						<Image
							alt=""
							src={sharing2Img}
							width={800}
							height={800}
							className="h-fit flex-1 md:max-w-[291px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default KnowledgeSharing;
