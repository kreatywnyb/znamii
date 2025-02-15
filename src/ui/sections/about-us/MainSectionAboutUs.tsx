import React from "react";

const MainSectionAboutUs = () => {
	return (
		<section className="flex justify-center px-4">
			<div className="-mt-64 mb-40 w-full max-w-[1700px] bg-white py-40">
				<div className="container">
					<div className="flex flex-col justify-between gap-4 lg:flex-row">
						<div className="flex-1">
							<h2 className="text-[40px] font-medium leading-[50px]">
								Jak do tego doszło, <br /> nie wiem?
							</h2>
						</div>
						<div className="flex-1">
							<p className="max-w-[320px] text-[17px] font-medium leading-[27px]">
								Tutaj jakaś ckliwa historia jak pomogliśmy innym markom przekształcić ich pomysły w
								rzeczywistość prawdź jak pomogliśmy innym markom przekształcić ich itede ite
							</p>
						</div>
						<div className="flex-1">
							<p className="max-w-[320px] text-[17px] font-medium leading-[27px]">
								Sprawdź jak pomogliśmy innym markom przekształc pomysły w rzeczywistość prawdź jak
								pomogliśmy innym markom przekształcić ich pomysły.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainSectionAboutUs;
