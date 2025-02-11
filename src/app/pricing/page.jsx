import React from "react";
import Pricing from "../components/Pricing";

const page = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4">
      <div className="bg-white rounded-lg lg:px-20 py-4 mb-2 shadow-lg">
        <Pricing />
        <div className="lg:max-w-full max-w-4xl mx-auto overflow-x-auto mt-10">
          <table className="lg:w-full w-[700px] table-auto border-collapse border border-dashed font-poppins">
            <thead>
              <tr className="text-center">
                <th className="p-4 border-r border-dashed"></th>
                <th className="p-4 text-gray-400">BASIC</th>
                <th className="p-4 text-foreground">PREMIUM</th>
                <th className="p-4 text-primary">ENTERPRISE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-dashed">
                <td className="p-4 font-semibold text-gray-700 border-r border-dashed">
                  No ads. Ever
                </td>
                <td className="p-4 text-center text-base">✔️</td>
                <td className="p-4 text-center text-base">✔️</td>
                <td className="p-4 text-center text-base">✔️</td>
              </tr>
              <tr className="border border-dashed">
                <td className="p-4 font-semibold text-gray-700 border-r border-dashed">
                  Selection of beautiful themes <br />
                  <p className="text-sm text-gray-500">
                    Customize your website with one of many available themes
                  </p>
                </td>
                <td className="p-4 text-center text-base">✔️</td>
                <td className="p-4 text-center text-base">✔️</td>
                <td className="p-4 text-center text-base">✔️</td>
              </tr>
              <tr className="border border-dashed">
                <td className="p-4 font-semibold text-gray-700 border-r border-dashed">
                  Photo gallery <br />
                  <p className="text-sm text-gray-500">
                    Import and share photos of your loved one from your PC,
                    mobile device, or Facebook page. Collaborators may also
                    share photos.
                  </p>
                </td>
                <td className="p-4 text-center text-base">
                  5 <br /> Photos
                </td>
                <td className="p-4 text-center text-base">UNLIMITED</td>
                <td className="p-4 text-center text-base">UNLIMITED</td>
              </tr>
              <tr className="border border-dashed">
                <td className="p-4 font-semibold text-gray-700 border-r border-dashed">
                  Share your memories <br />
                  <p className="text-sm text-gray-500">
                    Create biography, share stories, light virtual candles,
                    leave other tributes celebrating the life of a family member
                    or friend who passed away.
                  </p>
                </td>
                <td className="p-4 text-center text-base">✔️</td>
                <td className="p-4 text-center text-base">✔️</td>
                <td className="p-4 text-center text-base">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
