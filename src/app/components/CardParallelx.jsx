"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { DUMMY_DATA } from "../../../constants";
import Image from "next/image";

const CardParallelx = ({ reason, url, name, color }) => {
  return (
    <div className="container flex flex-row items-center justify-center ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[70%] "
      >
        {DUMMY_DATA.map((data, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] w-full flex flex-row items-center justify-between gap-4 md:px-20 lg:px-32 rounded-2xl "
              style={{ backgroundColor: `${data.color}` }}
            >
              {/* Left Side */}
              <div className="text-white w-1/2 text-2xl font-medium font-oswald">
                <p>
                  Name: <span className="font-normal">{data.name}</span>
                </p>
                <p>
                  Reason of demise:{" "}
                  <span className="font-normal">{data.reason}</span>
                </p>
              </div>
              {/* Right side */}
              <div className=" relative w-1/2 h-3/4">
                <Image
                  src={data.url}
                  alt=""
                  fill
                  className="object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardParallelx;
