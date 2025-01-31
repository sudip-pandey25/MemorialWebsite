import React from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/wallpaper.png')] opacity-50 object-center"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-320 p-8 flex flex-row justify-between">
        <p className="font-poppins text-center">@ Memorability, 2024</p>
        <div className="flex items-center justify-between gap-8 cursor-pointer">
          <Facebook />
          <Twitter />
          <Linkedin />
        </div>
        <p className="font-poppins text-center">Designed By ....</p>
      </div>
    </footer>
  );
};

export default Footer;
