"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4">
      {/* Container */}
      <div className="bg-white shadow-lg">
        <div className="p-8">
          <h1 className="font-lato text-3xl text-gray-800 pb-10">
            Please select your{" "}
            <span className="font-playwrite font-[600] text-gray-500">
              template
            </span>
          </h1>
          <div className="templates grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center text-center">
            {/* templates grid */}
            <div className="first-template bg-foreground h-[400px] w-[300px] rounded-xl shadow-2xl flex flex-col items-center gap-2 ">
              <iframe
                src="/templates/template-01"
                className="h-full w-full p-2 rounded-xl "
                frameBorder="0"
              ></iframe>
              <Link
                href="/templates/template-01"
                className="cursor-pointer w-full h-full"
              >
                <button className="bg-white px-2 py-2 cursor-pointer rounded-lg hover:px-3 transition-all duration-300 ease-in-out text-foreground font-semibold">
                  {" "}
                  Set this template{" "}
                </button>
              </Link>
            </div>
            <div className="second-template bg-foreground h-[400px] w-[300px] rounded-xl shadow-2xl  flex flex-col items-center gap-2 ">
              <iframe
                src="/templates/template-02"
                className="h-full w-full p-2 rounded-xl"
                frameBorder="0"
              ></iframe>
              <Link
                href="/templates/template-01"
                className="cursor-pointer w-full h-full"
              >
                <button className="bg-white px-2 py-2 cursor-pointer rounded-lg hover:px-3 transition-all duration-300 ease-in-out text-foreground font-semibold">
                  {" "}
                  Set this template{" "}
                </button>
              </Link>
            </div>
            <div className="third-template bg-foreground h-[400px] w-[300px] rounded-xl shadow-2xl  flex flex-col items-center gap-2 ">
              <iframe
                src="/templates/template-03"
                className="h-full w-full p-2 rounded-xl"
                frameBorder="0"
              ></iframe>
              <Link
                href="/templates/template-01"
                className="cursor-pointer w-full h-full"
              >
                <button className="bg-white px-2 py-2 cursor-pointer rounded-lg hover:px-3 transition-all duration-300 ease-in-out text-foreground font-semibold">
                  {" "}
                  Set this template{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
