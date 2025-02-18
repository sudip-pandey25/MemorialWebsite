"use client";

import { usePathname } from "next/navigation.js";
import Heading from "../../components/creatememorial/Heading.jsx";
import { useEffect, useState } from "react";

const layout = ({ children }) => {
  const [active, setActive] = useState();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/creatememorial/details")) {
      setActive(2);
    } else if (pathname.includes("/creatememorial/register")) {
      setActive(1);
    } else if (pathname.includes("/creatememorial/pricing")) {
      setActive(3);
    } else if (pathname.includes("/creatememorial/privacy")) {
      setActive(4);
    } else {
      setActive(0); // Default value for non-matching routes
    }
  }, [pathname]);

  console.log(active);

  return (
    <div className="lg:px-32 md:px-10 px-5 py-14 bg-gradient-to-br from-amber-50 to-blue-50 min-h-[100vh]">
      <div className="text-center font-[600] text-foreground font-lato text-4xl p-[20px]">
        <h1>Create a Memorial Website</h1>
      </div>
      <div className="p-[20px] rounded-lg shadow-md">
        <Heading active={active} />
        {children}
      </div>
    </div>
  );
};

export default layout;
