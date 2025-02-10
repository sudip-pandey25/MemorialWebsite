import React from "react";
import { motion } from "framer-motion";

const Heading = ({ active }) => {
  const activeClassName = "text-foreground border-foreground font-semibold";
  const activeSpan =
    "border bg-primary rounded-full text-white w-5 h-5 lg:w-8 lg:h-8";

  const headingVariants = {
    initial: { opacity: 0.5, scale: 0.9 },
    active: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex gap-12 justify-center items-center text-center my-10 w-full text-xs lg:text-base font-poppins text-gray-700 transition-all duration-300 ease-in-out">
      {[
        "Account Details",
        "About Loved Ones",
        "Pricing",
        "Privacy Settings",
      ].map((title, index) => {
        const isActive = active === index + 1;

        return (
          <motion.div
            key={index}
            variants={headingVariants}
            initial="initial"
            animate={isActive ? "active" : "initial"}
            className={`heading-1 flex flex-col items-center justify-center pb-2 border-b-2 flex-1 ${
              isActive ? `${activeClassName}` : ""
            }`}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className={`flex items-center justify-center ${
                isActive ? `${activeSpan}` : ""
              }`}
            >
              {index + 1}
            </motion.span>
            <h1>{title}</h1>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Heading;
