"use client";
import React, { useState } from "react";
import { Menu } from "react-feather";
import { NAV_LINKS } from "../../../constants";
import Link from "next/link";

const MenuBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex lg:hidden items-center text-gray  ">
      <Menu size={30} onClick={() => setOpen((prev) => !prev)} />
      {open && (
        <div className="absolute bg-gradient-to-br from-amber-50 to-blue-50 w-full h-[calc(100vh-80px)] left-0 top-16 text-primary flex flex-col items-center justify-center gap-8 font-poppins text-lg">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuBar;
