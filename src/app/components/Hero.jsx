"use client";
import React, { useState } from "react";
import "./hero.css";
import Link from "next/link";

const Hero = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const isLoggedIn = true;

  const queryParams = new URLSearchParams({
    firstName: firstName,
    lastName: lastName,
  }).toString();

  return (
    <>
      <div className="relative z-20  h-auto flex flex-col md:flex-row items-center justify-evenly p-10 gap-4 md:gap-0">
        {/* title Section */}
        <div className="">
          <div className="flex flex-col items-center justify-center h-full w-full gap-5">
            <div className="text-3xl md:text-5xl text-gray-800 font-lato font-[600] text-center md:text-left leading-normal">
              <p className="leading-tight">
                Create a <br /> Memorial site <br />{" "}
                <span className="font-playwrite text-gray-500 font-[600] text-xl md:text-5xl">
                  for your loved ones
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="form bg-white rounded-md shadow-md">
          <h1 className="px-10 pt-8 text-gray-800 font-poppins">
            I want to share memories of
          </h1>
          <form className="flex flex-col gap-8 px-10 py-5">
            <div className="flex flex-col gap-4 ">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                className="border-b border-gray-400 outline-none text-base font-poppins px-2 py-3  focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:h-full focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                className="border-b border-gray-400 outline-none text-base font-poppins px-2 py-3  focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full ocus:h-full focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic"
              />
            </div>
            <div className="flex justify-end">
              <Link
                href={`${
                  isLoggedIn
                    ? `/creatememorial/details/?${queryParams}`
                    : `/creatememorial/register`
                }`}
              >
                <button className="bg-foreground shadow-2xl px-3 py-2 rounded-full hover:px-4  transition-all duration-300 ease-in-out hover:shadow-sm text-white">
                  Get Started
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
