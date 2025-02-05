"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { testimonials } from "../../../constants";
import Image from "next/image";
import StarRating from "./StarRating";

const Testimonails = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
      <p className="text-center font-[600] font-lato text-4xl text-primary">
        Testimonials
      </p>
      <div className="container flex flex-row items-center justify-center">
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
          className="max-w-[70%]"
        >
          {testimonials.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="flex flex-col gap-2 justify-center items-center h-[350px] md:h-[300px]">
                <div className="relative h-20 w-20 rounded-full">
                  <Image
                    src={data.imageUrl}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-cover rounded-full"
                  />
                </div>
                <p className="font-lato font-[600] text-xl">{data.name}</p>
                <p className="text-center">{data.description}</p>
                <StarRating rating={data.ratings} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonails;
