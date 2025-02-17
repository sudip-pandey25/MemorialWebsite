import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-fit px-4 md:px-6 lg:px-8 xl:px-12 py-4 w-full text-justify">
      <h1 className="text-3xl md:text-4xl py-4 md:py-8 text-gray-900 font-lato font-medium">
        Privacy Options
      </h1>
      {/* Second part */}

      <div className="grid grid-cols-1 gap-4 ">
        <h1 className="text-gray-900 font-lato text-xl md:text-2xl">
          Would you like to share your memorial with others or keep it private?
          <br />
          <span className="text-base md:text-lg text-gray-700">
            (This can be changed later)
          </span>
        </h1>
        <form className="grid grid-cols-1 gap-4 md:gap-8 text-base md:text-lg font-Roboto">
          <div className="options flex flex-col items-start gap-2">
            <div className="flex flex-row gap-2 items-baseline">
              <input
                type="radio"
                value="private"
                name="privacy"
                className="accent-foreground cursor-pointer"
              />
              <label htmlFor="private" className="text-gray-900 font-medium">
                All visitors can view and contribute. <br />
                <span className="text-gray-500 font-normal">
                  This option allows easy access to the website and facilitates
                  collaboration. Recommended for most memorials.
                </span>
              </label>
            </div>

            <div className="flex flex-row gap-2 items-baseline">
              <input
                type="radio"
                value="public"
                name="privacy"
                className="accent-foreground cursor-pointer"
              />
              <label htmlFor="public" className="text-gray-900 font-medium">
                Visible only to me. <br />{" "}
                <span className="text-gray-500 font-normal">
                  Choose this option if you do not want the memorial to be
                  visible to others at this time.
                </span>
              </label>
            </div>
          </div>
          <div className="buttons flex flex-col md:flex-row gap-4 md:items-center md:justify-end">
            <div className="flex gap-2 items-baseline w-full md:justify-end md:flex-1">
              <input
                type="checkbox"
                value="AgreeTerms"
                name="agreeTerms"
                className="accent-foreground cursor-pointer"
              />
              <label htmlFor="agreeTerms" className="text-gray-900 font-medium">
                I agree to{" "}
                <span className="text-foreground underline cursor-pointer">
                  Terms of Use
                </span>
              </label>
            </div>
            <Link href="/templates" className="flex md:justify-end ">
              <button className="px-3 py-2 bg-foreground text-white rounded-3xl hover:px-4 transition-all duration-300 ease-in-out">
                Continue to memorial
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
