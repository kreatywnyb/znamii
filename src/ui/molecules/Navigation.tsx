import { links } from "@/constants";
import NavItem from "../atoms/NavItem";
import NavItemExpanded from "../atoms/NavItemExpanded";

const Navigation = () => {
	return (
		<nav className="hidden w-full lg:block">
			<ul className="flex justify-between font-geist text-xs uppercase text-white">
				<li>
					<NavItem href={links.aboutUs}>Studio znami</NavItem>
				</li>
				<li>
					<NavItemExpanded
						main={{ text: "Usługi", href: "uslugi" }}
						subMenu={[
							{ href: "/uslugi/video", text: "Video" },
							{ href: "/uslugi/zdjecia", text: "Zdjęcia" },
							{ href: "/uslugi/branding", text: "Branding" },
						]}
					/>
				</li>
				<li className="transition-colors hover:text-primary">
					<NavItem href={links.homePage}>Realizacje</NavItem>
				</li>
				<li className="transition-colors hover:text-primary">
					<NavItem href={links.homePage}>Kontakt</NavItem>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
