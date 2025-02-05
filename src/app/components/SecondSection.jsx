import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <div className="flex gap-12 items-center justify-center">
      {/* image part */}
      <div className="hidden md:block relative h-[60vh] w-2/6 ">
        <Image
          src="https://images.pexels.com/photos/11613540/pexels-photo-11613540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          sizes="100%"
          className="object-cover rounded-md z-10 "
          alt=""
        />
        <div className="bg-primary h-full w-full absolute -left-3 -bottom-3 rounded-md"></div>
      </div>
      <div className="flex flex-col gap-10 w-full md:w-3/6 text-center md:text-left ">
        <h2 className=" text-5xl md:text-6xl font-lato text-primary font-[600]">
          Why create a{" "}
          <span class="relative inline-block before:absolute before:inset-0 before:-bottom-2 before:block before:-skew-y-3 before:bg-primary">
            <span class="relative text-white">Memorial</span>
          </span>{" "}
          online?
        </h2>
        <p className="text-gray-900 font-[400] text-lg md:text-xl font-Roboto">
          To preserve memories, share tributes, and allow loved ones to connect
          and remember from anywhere, anytime. <br />
          It ensures lasting remembrance, easy updates, and a digital space for
          collective mourning and celebration of life.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
