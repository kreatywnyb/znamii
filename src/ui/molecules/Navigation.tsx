import { links } from "@/constants";
import NavItem from "../atoms/NavItem";
import NavItemExpanded from "../atoms/NavItemExpanded";

const Navigation = () => {
	return (
		<nav className="hidden w-full lg:block">
			<ul className="flex justify-between font-geist text-xs uppercase text-white">
				<li>
					<NavItem href={links.homePage}>Studio znami</NavItem>
				</li>
				<li>
					<NavItemExpanded
						main={{ text: "Usługi", href: "uslugi" }}
						// subMenu={[
						// 	{ href: "/uslugi/video", text: "Video" },
						// 	{ href: "/uslugi/zdjecia", text: "Zdjęcia" },
						// 	{ href: "/uslugi/branding", text: "Branding" },
						// ]}
						subMenu={[
							{ href: "/", text: "Video" },
							{ href: "/", text: "Zdjęcia" },
							{ href: "/", text: "Branding" },
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
