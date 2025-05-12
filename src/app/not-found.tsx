import { links } from "@/constants";
import { CTAButton } from "@/ui/molecules/CTAButton";

export default function NotFound() {
	return (
		<main className="mb-[30rem] flex flex-col items-center justify-center bg-black text-white">
			<div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
				<div className="relative w-full md:w-[38rem]">
					<video className="h-fit w-full" src="/404-vid.mp4" autoPlay muted loop></video>
					<h1 className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-white lg:text-[7.5rem]">
						Zabłądzonko?
					</h1>
				</div>
				<CTAButton href={links.homePage} variant="tertiary" className="mt-10">
					Wróć na stronę główną
				</CTAButton>
			</div>
		</main>
	);
}
