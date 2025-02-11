import Link from "next/link";
import React from "react";

const Aboutuslink = () => {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 my-12 items-center">
      <div className="w-full h-[1px] bg-gray-300"></div>
      <Link
        href="/"
        className="text-center bg-primary shadow-lg hover:shadow-xl hover:font-medium border-0 py-3 rounded-full font-poppins transition-all duration-300 ease-in-out text-white  "
      >
        About online Memorials{" "}
      </Link>
      <div className="w-full h-[1px] bg-gray-300"></div>
    </div>
  );
};

export default Aboutuslink;
