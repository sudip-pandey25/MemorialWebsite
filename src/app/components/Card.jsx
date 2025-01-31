import React from "react";
import CardParallelx from "./CardParallelx.jsx";

const Card = () => {
  return (
    <div className="mt-12 ">
      <p className="hidden md:block text-center font-Crimson font-bold text-primary md:text-4xl pb-8 ">
        Recent Online Memorials
      </p>
      {/* Card Slider */}
      <CardParallelx />
    </div>
  );
};

export default Card;
