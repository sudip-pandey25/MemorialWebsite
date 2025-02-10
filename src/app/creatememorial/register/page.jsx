"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-[70vh] px-4 md:px-6 lg:px-8 xl:px-12 py-4">
      <input
        type="text"
        // onChange={(e) => setFirstName(e.target.value)}
        className="border border-purple-200"
        placeholder="First Name"
      />

      <input
        type="text"
        // onChange={(e) => setLastName(e.target.value)}
        className="border border-purple-200"
        placeholder="Last Name"
      />

      <Link
        href={{
          pathname: "/creatememorial/details",
        }}
      >
        <button>Continue</button>
      </Link>
    </div>
  );
};

export default page;
