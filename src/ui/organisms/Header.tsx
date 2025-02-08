import LogoIcon from "@/ui/icons/LogoIcon";
import React from "react";
import { CTAButton } from "../molecules/CTAButton";
import { links } from "@/constants";

const Header = () => {
  return (
    <header className="bg-basicDark py-5 relative z-20">
      <div className="container flex justify-between items-center">
        <LogoIcon />
        <CTAButton href={links.contactPage}>Zralizuj projekt</CTAButton>
      </div>
    </header>
  );
};

export default Header;
