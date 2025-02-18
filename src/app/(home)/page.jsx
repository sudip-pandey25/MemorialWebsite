import { ChevronRight } from "react-feather";
import Aboutuslink from "../components/Aboutuslink";
import Card from "../components/Card";
import Collection from "../components/Collection";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import SecondSection from "../components/SecondSection";
import Forms from "../components/Forms";
import Testimonails from "../components/Testimonails";
import Secure from "../components/Secure";

export default function Home() {
  return (
    <>
      <div className="relative px-4 md:px-6 lg:px-8 xl:px-12 py-4">
        <Hero />
      </div>
      <div className="px-2 md:px-60 ">
        <Aboutuslink />
      </div>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-16 md:py-24">
        <SecondSection />
      </div>
      <div className=" flex items-center justify-between px-12  ">
        <div className="h-[1px] bg-gray-600 w-[30%]"></div>
        <p className="font-semibold text-lg text-center text-primary font-playwrite">
          Place your memorial today and share with world
        </p>
        <div className="h-[1px] bg-gray-600 w-[30%]"></div>
      </div>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-20 md:py-16  ">
        <Secure />
      </div>
      <div className=" flex items-center justify-between px-12 pb-12 ">
        <div className="h-[1px] bg-gray-600 w-[30%]"></div>
        <p className="font-semibold text-lg text-center text-primary font-playwrite">
          Trusted by over 250,000 families worldwide
        </p>
        <div className="h-[1px] bg-gray-600 w-[30%]"></div>
      </div>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-20 md:py-20 ">
        <Forms />
      </div>

      <div className="px-4 py-10 flex items-center justify-center md:hidden ">
        <Slider />
      </div>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-16 md:py-20 hidden  md:flex items-center justify-center ">
        <Card />
      </div>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-16 md:py-20">
        <Testimonails />
      </div>

      <div className="relative w-full">
        <div className="custom-shape-divider-bottom-1738910365 absolute bottom-0 left-0 w-[100%] overflow-hidden rotate-180">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(155%+1.3px)] h-[83px]"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill fill-[#27445d]"
            ></path>
          </svg>
        </div>
      </div>
      <div className=" relative px-4 md:px-6 lg:px-8 xl:px-12 py-12 bg-background flex flex-col h-[3000px] md:h-[110vh] gap-11 ">
        <div className="text-4xl z-20 font-semibold font-lato text-white text-center ">
          <span className="relative inline-block before:absolute before:-inset-1 before:-bottom-2 before:block before:-skew-y-1 before:bg-foreground">
            <span className="relative text-white">Memorial</span>
          </span>{" "}
          Gallaries
        </div>
        <Collection />
        <div className="flex z-20 justify-end items-center px-3 cursor-pointer group">
          <p className="text-white underline font-Roboto group hover:translate-x-1 ransition-all duration-300 ease-out">
            Show more{" "}
          </p>
          <ChevronRight className="text-white group-hover:translate-x-1 transition-all duration-300 ease-out" />
        </div>
      </div>
    </>
  );
}
