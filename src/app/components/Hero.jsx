import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:gap-4 bg-gradient-to-bl from-sky-50 to-teal-50 border rounded-md bg-cover bg-center py-10">
      {/* title Section */}

      <div className="flex flex-col gap-2 py-7 items-center justify-center">
        <div className="text-4xl md:text-5xl text-center font-Crimson font-bold text-primary ">
          Create A Memorial Website
        </div>
        <p className="text-sm md:text-xl uppercase text-gray-700 text-center font-Roboto ">
          Preserve and share memories of your loved one{" "}
        </p>
      </div>

      {/* Form section */}
      <div className=" w-5/6 lg:w-1/2 lg:mb-12 mb-10 m-auto">
        <div className="rounded-xl border bg-white  px-10 shadow-lg">
          <div className="mt-8 font-Roboto font-medium text-base">
            I want to share memories of
          </div>
          <form className="flex flex-col gap-8 py-10">
            <div className="flex flex-col gap-4 ">
              <input
                type="text"
                placeholder="First Name"
                className="border-b border-gray-400 outline-none text-base font-poppins px-2 py-3  focus:border-b focus:border-amber-500 transition-all duration-300 ease-in-out w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b border-gray-400 outline-none text-base font-poppins px-2 py-3  focus:border-b focus:border-amber-500 transition-all duration-300 ease-in-out w-full"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-[#9e896a] shadow-2xl px-3 py-2 rounded-full hover:px-4  transition-all duration-300 ease-in-out hover:shadow-sm text-white">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
