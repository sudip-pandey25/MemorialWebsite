import React from "react";

const Heading = () => {
  return (
    <div className="flex gap-12 justify-center items-center text-center my-10 w-full text-xs lg:text-base font-poppins text-gray-700 ">
      <div className="heading-1 flex flex-col items-center justify-center pb-2 border-b-2 text-foreground border-foreground font-semibold flex-1">
        <span className="flex items-center justify-center border bg-primary rounded-full text-white w-5 h-5 lg:w-8 lg:h-8">
          1
        </span>
        <h1>Account Details</h1>
      </div>
      <div className="heading-1 flex flex-col items-center justify-center flex-1">
        <span>2</span>
        <h1>About Loved Ones</h1>
      </div>
      <div className="heading-1 flex flex-col items-center justify-center flex-1">
        <span>3</span>
        <h1>Choose Plans</h1>
      </div>
      <div className="heading-1 flex flex-col items-center justify-center flex-1">
        <span>4</span>
        <h1>Privacy options</h1>
      </div>
    </div>
  );
};

export default Heading;
