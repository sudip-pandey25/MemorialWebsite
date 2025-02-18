"use client";
import React, { useState } from "react";
import { Menu } from "react-feather";

import Link from "next/link";
import clsx from "clsx"; // Optional for cleaner class toggling (npm install clsx)
import { TEMP_NAV } from "../../../../constants";

const MenuBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center text-gray transition-all duration-300 ease-in-out">
      <Menu
        size={30}
        onClick={() => setOpen((prev) => !prev)}
        className="text-white"
      />
      <div
        className={clsx(
          "absolute bg-gradient-to-br from-amber-50 to-blue-50 w-1/2 h-[calc(100vh-80px)] left-0 top-14 text-foreground flex flex-col items-start justify-start gap-8 font-poppins text-lg transform transition-all duration-500 ease-in-out p-8",
          {
            "opacity-100 translate-x-0 visible": open,
            "opacity-0 -translate-x-24 invisible": !open,
          }
        )}
      >
        {TEMP_NAV.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
