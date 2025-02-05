import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="bg-[url('/background.jpg')] h-[70vh] md:h-[75vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center rounded-3xl shadow-lg ">
      {/* title Section */}
      <div className="">
        <div className="flex flex-col items-center justify-center h-full w-full gap-5">
          <div className="text-3xl md:text-6xl text-white font-lato font-[600] text-center ">
            <p>
              Create a Memorial site <br />{" "}
              <span className="font-playwrite font-[200] text-xl md:text-4xl">
                for your loved ones
              </span>
            </p>
          </div>
          <button className="relative text-white text-sm md:text-base font-poppins border-none outline-none bg-background px-2 py-1 md:px-6 md:py-3 rounded-3xl shadow-md overflow-hidden hover:px-7 transition-all duration-300 ease-in hover:border-none">
            <h4 className="button-text">
              <a href="" className="decoration-none">
                Take me
              </a>
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
