import { ChevronRight } from "react-feather";
import Aboutuslink from "./components/Aboutuslink";
import Card from "./components/Card";
import Collection from "./components/Collection";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import SecondSection from "./components/SecondSection";
import Forms from "./components/Forms";

export default function Home() {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4">
        <Hero />
      </div>
      <div className="px-2 md:px-60 ">
        <Aboutuslink />
      </div>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-12 md:py-24">
        <SecondSection />
      </div>
      <div className=" flex items-center justify-between px-12  ">
        <div className="h-[1px] bg-gray-600 w-[30%]"></div>
        <p className="font-semibold text-lg text-center text-primary font-playwrite">
          Trusted by over 250,000 families worldwide
        </p>
        <div className="h-[1px] bg-gray-600 w-[30%]"></div>
      </div>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-20 md:py-12 md:pt-36 md:pb-20 ">
        <Forms />
      </div>

      <div className="px-4 py-10 flex items-center justify-center md:hidden ">
        <Slider />
      </div>
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-12 md:py-20 hidden  md:flex items-center justify-center ">
        <Card />
      </div>

      <div className=" relative px-4 md:px-6 lg:px-8 xl:px-12 py-12 bg-teal-800 flex flex-col h-[90vh] gap-4 ">
        <div className="text-4xl z-20 font-semibold font-Crimson text-white text-center ">
          Memorial Gallaries
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
