import React from "react";

const ServicesSection = () => {
  return (
    <section className="bg-basicDark text-white relative z-10 py-20">
      <div className="container flex justify-around flex-col md:flex-row ">
        <div className="">
          <h2 className="text-[40px] leading-[50px] mb-10">Branding</h2>
          <ul className="uppercase text-lightGrey text-xs space-y-3 font-normal">
            <li>Logo</li>
            <li>identyfikacje wizualne</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-[40px] leading-[50px] mb-10">Video</h2>
          <ul className="uppercase text-lightGrey text-xs space-y-3 font-normal">
            <li>Logo</li>
            <li>identyfikacje wizualne</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-[40px] leading-[50px] mb-10">Zdjęcia</h2>
          <ul className="uppercase text-lightGrey text-xs space-y-3 font-normal">
            <li>Logo</li>
            <li>identyfikacje wizualne</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
