// import { links } from "@/constants";
// import NavItem from "../atoms/NavItem";
// import NavItemExpanded from "../atoms/NavItemExpanded";

// const Navigation = () => {
// 	return (
// 		<nav className="hidden w-full lg:block">
// 			<ul className="flex justify-between font-geist text-xs uppercase text-white">
// 				<li>
// 					<NavItem href={links.aboutUs}>Studio znami</NavItem>
// 				</li>
// 				<li>
// 					<NavItemExpanded
// 						main={{ text: "Usługi" }}
// 						// subMenu={[
// 						// 	{ href: "/uslugi/video", text: "Video" },
// 						// 	{ href: "/uslugi/zdjecia", text: "Zdjęcia" },
// 						// 	{ href: "/uslugi/branding", text: "Branding" },
// 						// ]}
// 						subMenu={[
// 							{ href: `${links.services.main}/${links.services.branding}`, text: "Branding" },
// 							{ href: `${links.services.main}/${links.services.video}`, text: "Video" },
// 							{ href: `${links.services.main}/${links.services.photo}`, text: "Zdjęcia" },
// 						]}
// 					/>
// 				</li>
// 				<li className="transition-colors hover:text-primary">
// 					<NavItem href={links.portfolio}>Realizacje</NavItem>
// 				</li>
// 				<li className="transition-colors hover:text-primary">
// 					<NavItem href={links.contactPage}>Kontakt</NavItem>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// };

// export default Navigation;

"use client";
import { links } from "@/constants";
import NavItem from "../atoms/NavItem";
import NavItemExpanded from "../atoms/NavItemExpanded";

const Navigation = ({ isVertical = false }) => {
	return (
		<nav className={`w-full ${isVertical ? "block" : "hidden lg:block"}`}>
			<ul
				className={`${isVertical ? "flex flex-col space-y-6" : "flex justify-between"} font-geist text-xs uppercase text-white`}
			>
				<li>
					<NavItem href={links.aboutUs}>Studio znami</NavItem>
				</li>
				<li>
					<NavItemExpanded
						main={{ text: "Usługi" }}
						subMenu={[
							{ href: `${links.services.main}/${links.services.branding}`, text: "Branding" },
							{ href: `${links.services.main}/${links.services.video}`, text: "Video" },
							{ href: `${links.services.main}/${links.services.photo}`, text: "Zdjęcia" },
						]}
					/>
				</li>
				<li className="transition-colors hover:text-primary">
					<NavItem href={links.portfolio}>Realizacje</NavItem>
				</li>
				<li className="transition-colors hover:text-primary">
					<NavItem href={links.contactPage}>Kontakt</NavItem>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
