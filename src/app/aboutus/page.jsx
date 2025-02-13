import Image from "next/image";
import react from "react";
import { team } from "../../../constants";

const page = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:gap-2 w-full">
      {/* Description */}
      <div className="px-4 text-center md:text-left md:px-6 lg:px-8 xl:px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  items-end font-lato pt-12 md:p-14 ">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-[600] text-gray-900">
            We build a <br />
            mourning platform <br />
            <span className="font-playwrite leading-normal text-gray-500">
              for your loved ones
            </span>
          </h1>

          <h1 className="font-medium text-gray-500">
            We understand that remembering and honoring loved ones is an
            important part of healing. Our platform provides a dedicated space
            where family and friends can come together to celebrate memories,
            share heartfelt messages, and keep the legacy of their loved ones
            alive
          </h1>
        </div>
      </div>

      {/* LargePhoto */}
      <div className="relative w-full h-[50vh] py-4">
        <Image
          src="/backpicture.png"
          alt=""
          className="object-cover object-top"
          fill
          sizes="100%"
        />
      </div>

      {/* From team */}
      <div className=" flex flex-col items-center gap-12 md:gap-4 justify-center px-4 md:px-6 lg:px-8 xl:px-12 py-4">
        <div className=" h-[1px] bg-gray-600 w-4/5 text-center mt-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start font-lato pt-12 md:p-14">
          <h1 className="text-3xl text-center md:text-left md:text-4xl lg:text-5xl">
            Together we are <br />
            <span className="text-gray-500 font-playwrite leading-normal">
              strong
            </span>
          </h1>

          <div className="grid grid-cols-1 gap-4 items-start">
            <p className="text-center md:text-left text-2xl md:text-4xl lg:text-4xl text-gray-950 ">
              "Our mission is to help you honor your loved ones with dignity and
              love, ensuring their memories live on forever."
            </p>
            <p className="text-gray-500 text-center md:text-left">
              Our team is a group of compassionate individuals dedicated to
              creating a meaningful space for remembrance. With expertise in
              technology, design, and support, we work together to provide a
              seamless and heartfelt experience.
            </p>
          </div>
        </div>

        {/* Some saying */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  justify-center items-center md:items-start md:p-14">
          {/* CEO part */}
          {team.slice(0, 1).map((team, index) => (
            <div
              className="flex gap-1 justify-center md:justify-start"
              key={index}
            >
              <div className="relative w-16 h-16 rounded-full">
                <Image
                  src={team.photo}
                  alt=""
                  fill
                  sizes="100%"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center ">
                <p className="text-gray-900 font-medium">{team.name}</p>
                <p>{team.role}</p>
              </div>
            </div>
          ))}

          <div className="saying ">
            <p className="text-gray-900 text-center md:text-left">
              "As the Founder & CEO, I am committed to providing a compassionate
              space where families can honor and celebrate the memories of their
              loved ones. Our platform is designed to offer comfort and
              connection during times of loss, ensuring every legacy is
              remembered with love and respect. Together with my dedicated team,
              we strive to create an intuitive, secure, and meaningful
              experience for all who seek to preserve their cherished memories."
            </p>
          </div>
        </div>
        <div className=" h-[1px] bg-gray-600 w-4/5 text-center mb-5"></div>
      </div>

      {/*Teams info*/}
      <div className="team-info m-auto max-w-full py-5 relative">
        <div className="absolute left-0 top-0 z-10 h-full w-64 bg-gradient-to-r from-primary-gradient to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-64 bg-gradient-to-l from-primary-gradient to-transparent"></div>

        <h1 className="text-center text-2xl md:text-5xl mb-6 text-gray-800 ">
          Meet our <span className="font-playwrite text-gray-600">team</span>
        </h1>
        <div className=" grid grid-flow-col gap-4 overflow-hidden whitespace-nowrap mb-6 ">
          <div className="w-full grid grid-flow-col gap-4 items-center animate-translate-x-reverse">
            {team.map((member, index) => (
              <div
                className="flex flex-col justify-center items-start bg-gray-100"
                key={index}
              >
                <div className="relative h-48 w-44">
                  <Image
                    src={member.photo}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="font-lato font-semibold text-lg text-gray-800">
                  {member.name}
                </p>
                <p className="text-gray-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-flow-col gap-4 items-center animate-translate-x-reverse">
            {team.map((member, index) => (
              <div
                className="flex flex-col justify-center items-start bg-gray-100"
                key={index}
              >
                <div className="relative h-48 w-44">
                  <Image
                    src={member.photo}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="font-lato font-semibold text-lg text-gray-800">
                  {member.name}
                </p>
                <p className="text-gray-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" grid grid-flow-col gap-4 overflow-hidden whitespace-nowrap mb-6 ">
          <div className="w-full flex gap-4 items-center animate-translate-x-reverseSlowed">
            {team.map((member, index) => (
              <div
                className="flex flex-col justify-center items-start bg-gray-100"
                key={index}
              >
                <div className="relative h-48 w-44">
                  <Image
                    src={member.photo}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="font-lato font-semibold text-lg text-gray-800">
                  {member.name}
                </p>
                <p className="text-gray-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex gap-4 items-center animate-translate-x-reverseSlowed">
            {team.map((member, index) => (
              <div
                className="flex flex-col justify-center items-start bg-gray-100"
                key={index}
              >
                <div className="relative h-48 w-44">
                  <Image
                    src={member.photo}
                    alt=""
                    fill
                    sizes="100%"
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="font-lato font-semibold text-lg text-gray-800">
                  {member.name}
                </p>
                <p className="text-gray-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
