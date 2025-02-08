import React from "react";
import ButtonSecondary from "../molecules/ButtonSecondary";
import { links } from "@/constants";
import PrecisionIcon from "../icons/PrecisionIcon";
import EmpathyIcon from "../icons/EmpathyIcon";
import OpennessIcon from "../icons/OpennessIcon";

const ServicesSection = () => {
  return (
    <section className="bg-basicDark text-white relative z-10 py-24">
      <div className="container flex flex-col">
        <div className="flex justify-between max-md:space-y-14 flex-col md:flex-row ">
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
        <div className="mt-36 flex flex-col max-lg:space-y-20 lg:flex-row">
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-[40px] leading-[50px] font-medium max-w-[600px] mb-12">
              Wierzymy, że najlepsze pomysły rodzą się w atmosferze swobody.
              Dlatego działamy luźno, a tworzymy sztywniutko.
            </p>
            <ButtonSecondary href={links.contactPage}>
              poznaj się z nami
            </ButtonSecondary>
          </div>
          <div className="flex-1 grid grid-cols-3 grid-rows-2 ">
            <div className="order-1 border border-darkGrey rounded-sm p-5 flex flex-col justify-between">
              <PrecisionIcon className=" self-end" />
              <span className="font-medium text-[21px] leading-[33px]">
                Precyzja
              </span>
            </div>
            <div className="order-3 border-darkGrey border rounded-sm p-5 flex flex-col justify-between">
              <EmpathyIcon className=" self-end" />
              <span className="font-medium text-[21px] leading-[33px]">
                Empatia
              </span>
            </div>
            <div className="order-5 border-darkGrey border rounded-sm p-5 aspect-square flex flex-col justify-between">
              <OpennessIcon className=" self-end" />
              <span className="font-medium text-[21px] leading-[33px]">
                Otwartość
              </span>
            </div>
            <div className="order-2" />
            <div className="order-4" />
            <div className="order-6" />
          </div>
        </div>
        <div className="mt-10">slider</div>
      </div>
    </section>
  );
};

export default ServicesSection;
