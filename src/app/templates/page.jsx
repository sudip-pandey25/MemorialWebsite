"use client";
import React from "react";

const page = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4">
      <div className="bg-white shadow-lg">
        <div className="p-8">
          <h1 className="font-lato text-3xl text-gray-800 pb-10">
            Please select your{" "}
            <span className="font-playwrite font-[600] text-gray-500">
              template
            </span>
          </h1>
          <div className="templates grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="first-template bg-foreground h-[400px] w-[300px] rounded-xl shadow-2xl">
              <iframe
                src="/templates/template-01"
                className="h-full w-full p-2 rounded-xl"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="first-template bg-foreground h-[400px] w-[300px] rounded-xl shadow-2xl">
              <iframe
                src="/templates/template-02"
                className="h-full w-full p-2 rounded-xl"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="first-template bg-foreground h-[400px] w-[300px] rounded-xl shadow-2xl">
              <iframe
                src="/templates/template-03"
                className="h-full w-full p-2 rounded-xl"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
