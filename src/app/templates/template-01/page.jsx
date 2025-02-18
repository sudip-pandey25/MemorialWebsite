import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="hero-section relative">
        {/* Hero Section */}
        <div className="relative w-full h-[40vh] ">
          <Image src="/template01.jpg" fill className="object-cover" alt="" />
        </div>
        {/* Descriptions of the demised */}

        {/* Desktop view */}
        <div className="z-10 hidden  absolute w-full md:flex flex-row items-center justify-evenly h-auto bottom-[20%] rounded-t-2xl">
          {/* left-side */}
          <div className="right side flex gap-4">
            <button className="bg-white">Change theme</button>
            <h1 className="text-white">Victim's Name</h1>
          </div>

          {/* right-side */}
          <div className="left side">
            <div className="border border-gray-800 rounded-3xl h-[210px] w-[210px]"></div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="z-10 md:hidden absolute bg-white w-full flex flex-col items-center justify-center h-auto bottom-0 rounded-t-2xl">
          <h1 className="text-3xl font-lato text-center p-3 font-[600] text-gray-800">
            Name of victim
          </h1>
          <button className="w-3/4 py-2 border-2 bg-[#4f000b] rounded-2xl text-white">
            Invite victim families
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
