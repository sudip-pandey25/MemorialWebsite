"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Forms = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const isLoggedIn = true;

  const queryParams = new URLSearchParams({
    firstName: firstName,
    lastName: lastName,
  }).toString();

  return (
    <div className="flex gap-12 items-center justify-center group">
      {/* forms section */}
      <div className="h-[60vh] w-full md:w-2/4 flex flex-col gap-4">
        <h2 className="text-5xl md:text-6xl text-center md:text-left font-lato text-foreground font-[600]">
          Create a Memorial{" "}
          <span className="relative inline-block before:absolute before:inset-0 before:-bottom-2 before:block before:skew-y-2 before:bg-foreground">
            <span className="relative text-white">Website</span>
          </span>{" "}
          now
        </h2>
        <div className="m-auto w-full ">
          <div className="rounded-xl border bg-white  px-10 shadow-lg">
            <div className="mt-8 font-Roboto font-medium text-base">
              I want to share memories of
            </div>
            <form className="flex flex-col gap-8 py-10">
              <div className="flex flex-col gap-4 ">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  className="border-b border-gray-400 outline-none text-base font-poppins px-2 py-3  focus:border-b focus:border-foreground transition-all duration-300 ease-in-out w-full focus:h-full focus:bg-foreground focus:text-white focus:rounded-lg placeholder:italic"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  className="border-b border-gray-400 outline-none text-base font-poppins px-2 py-3  focus:border-b focus:border-foreground transition-all duration-300 ease-in-out w-full ocus:h-full focus:bg-foreground focus:text-white focus:rounded-lg placeholder:italic"
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
      </div>
      {/* image part */}
      <div className="hidden md:block relative h-[60vh] w-2/6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-out ">
        <Image
          src="https://images.pexels.com/photos/4210811/pexels-photo-4210811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          sizes="100%"
          className="object-cover rounded-md z-10 "
          alt=""
        />
        <div className="bg-foreground h-full w-full absolute -right-3 -bottom-3 rounded-md group-hover:-right-4 group-hover:-bottom-4 transition-all duration-300 ease-out"></div>
      </div>
      {/* Description Part */}
    </div>
  );
};

export default Forms;
