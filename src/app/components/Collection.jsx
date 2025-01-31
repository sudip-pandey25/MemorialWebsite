import React from "react";
import { Collections } from "../../../constants";
import Image from "next/image";

const Collection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full w-full items-center gap-4">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/wallpaper-2.png')] opacity-50 object-center"></div>
      <div className="absolute inset-0 bg-teal/40"></div>
      {Collections.map((image, index) => (
        <div className="relative w-full h-full " key={index}>
          <Image
            src={image.url}
            fill
            className="object-cover w-full h-full rounded-3xl shadow-xl hover:scale-105 hover:brightness-75 transition-all duration-300 ease-out"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Collection;
