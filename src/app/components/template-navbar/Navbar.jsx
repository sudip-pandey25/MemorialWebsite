"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TEMP_NAV } from "../../../../constants";
import MenuBar from "../template-navbar/MenuBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLoggedIn = true;
  return (
    <header
      className={`sticky top-0 z-50 h-14 md:h-16 transition-all duration-300 ease-in-out 
        ${
          isScrolled
            ? "bg-[#4f000b]/100 shadow-md"
            : "bg-[#4f000b]/30 backdrop-blur-md"
        } `}
    >
      <nav className="relative  shadow-sm flex items-center justify-between max-container w-full  px-4 md:px-6 lg:px-8 xl:px-12 h-full">
        {/* Desktop Navigation */}
        <Link href="/">
          <h1 className="font-playwrite text-xl md:text-2xl text-white font-extrabold">
            Memorability
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center regular-16 font-poppins gap-10 h-full">
          {TEMP_NAV.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-white  font-medium hover:underline cursor-pointer transition-all duration-300 ease-in-out"
            >
              {" "}
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex items-center font-poppins">
          {isLoggedIn ? (
            <button className="bg-white px-3 py-2 rounded-full hover:px-4  transition-all duration-300 ease-in-out hover:shadow-sm text-[#800e13]">
              Profile
            </button>
          ) : (
            <Link href="/login">
              <button className="bg-white px-3 py-2 rounded-full hover:px-4  transition-all duration-300 ease-in-out hover:shadow-sm text-[#800e13]">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        <MenuBar />
      </nav>
    </header>
  );
};

export default Navbar;
