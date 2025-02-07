"use client";
import React from "react";
import scure from "./lottie/scure.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Secure = () => {
  return (
    <>
      <div className="flex gap-12 items-center justify-center group">
        {/* image part */}
        <Lottie
          animationData={scure}
          loop={true}
          className="relative hidden md:block w-[650px]"
        ></Lottie>

        <div className="flex flex-col gap-10 w-full md:w-3/6 text-center md:text-left ">
          <h2 className=" text-5xl md:text-6xl font-lato text-primary font-[600]">
            We Keep your data
            <span className="relative inline-block before:absolute before:inset-0 before:-bottom-2 before:block before:-skew-y-3 before:bg-primary">
              <span className="relative text-white">Secure</span>
            </span>{" "}
          </h2>
          <p className="text-gray-900 font-[400] text-lg md:text-xl font-Roboto">
            "Your memories are precious, and we treat them that way. Our
            platform ensures your data remains private, protected, and secure at
            all times. <br />
            With advanced security measures, you can trust us to safeguard your
            cherished moments while keeping them accessible whenever you need
            them."
          </p>
        </div>
      </div>
    </>
  );
};

export default Secure;
