"use client";

import React from "react";
import { pricing } from "../../../constants";

const Pricing = () => {
  return (
    <div className="h-fit px-4 md:px-6 lg:px-8 xl:px-12 py-4 w-full">
      <p className="text-3xl text-foreground font-lato font-semibold mb-6">
        Choose your plan:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
        {pricing.map((data, index) => (
          <div
            className={`flex flex-col gap-5 justify-between items-start bg-gradient-to-br from-primary to-foreground text-white px-4 py-5 rounded-lg shadow-lg hover:shadow-2xl  transition-all duration-300 ease-in-out font-poppins lg:h-[32rem]  `}
            key={index}
          >
            <div className="flex flex-col gap-5">
              <span className="bg-white px-6 py-2 text-foreground rounded-full text-xl font-semibold w-1/2 flex items-center justify-center">
                <p>{data.type}</p>
              </span>
              <p className="text-sm text-left lg:w-60 xl:w-full">
                {data.description}
              </p>
              <span className="text-3xl font-semibold">{data.price}</span>
              <ul className="space-y-1 text-sm">
                {data.plans.map((plan, index) => (
                  <li
                    className=" ml-3 flex items-center justify-start gap-2"
                    key={index}
                  >
                    <span className="text-white text-xl ">✓</span>
                    {plan.plan}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full flex items-center justify-center bg-white text-foreground py-2 border rounded-lg font-medium hover:border-white hover:text-white hover:bg-transparent transition-all duration-300 ease-in-out">
              {data.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
