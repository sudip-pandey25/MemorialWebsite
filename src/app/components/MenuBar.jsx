"use client";
import React, { useState } from "react";
import { Menu } from "react-feather";
import { NAV_LINKS } from "../../../constants";
import Link from "next/link";
import clsx from "clsx"; // Optional for cleaner class toggling (npm install clsx)

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center text-gray transition-all duration-300 ease-in-out">
      <Menu size={30} onClick={() => setOpen((prev) => !prev)} />
      <div
        className={clsx(
          "absolute bg-gradient-to-br from-amber-50 to-blue-50 w-full h-[calc(100vh-80px)] left-0 top-16 text-foreground flex flex-col items-center justify-center gap-8 font-poppins text-lg transform transition-all duration-500 ease-in-out",
          {
            "opacity-100 translate-y-0 visible": open,
            "opacity-0 -translate-y-1 invisible": !open,
          }
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
