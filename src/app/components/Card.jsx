import React from "react";
import CardParallelx from "./CardParallelx.jsx";

const Card = () => {
  return (
    <div className="mt-12 ">
      <p className="hidden md:block text-center  text-foreground md:text-4xl pb-8 font-lato font-[600] ">
        Recent Online Memorials
      </p>
      {/* Card Slider */}
      <CardParallelx />
    </div>
  );
};

export default Card;
