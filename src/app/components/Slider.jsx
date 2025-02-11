"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { SLIDER } from "../../../constants";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? SLIDER.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === SLIDER.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-xs overflow-hidden rounded-2xl">
      <div
        className="flex transition-transform duration-300 w-full ease-out "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDER.map((slides) => (
          <img
            src={slides.url}
            alt=""
            className="object-cover"
            key={slides.key}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full bg-white/80 shadow text-gray-800 hover:bg-white"
          onClick={prev}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          className="p-1 rounded-full bg-white/80 shadow text-gray-800 hover:bg-white"
          onClick={next}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
