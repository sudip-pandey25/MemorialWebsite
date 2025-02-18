"use client";
import Image from "next/image";
import react, { useState } from "react";
import { team } from "../../../../constants";
import CountUp from "react-countup";

const page = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-6 md:gap-2 w-full items-end">
      {/* Description */}
      <div className="px-4 text-center md:text-justify md:px-6 lg:px-8 xl:px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  items-end font-lato pt-12 md:p-14 ">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-[600] text-gray-900">
            We build a <br />
            mourning platform <br />
            <span className="font-playwrite leading-normal text-gray-500">
              for your loved ones
            </span>
          </h1>

          <h1 className="font-medium text-gray-500 text-justify">
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
            <p className="text-center md:text-justify text-2xl md:text-4xl lg:text-4xl text-gray-950 ">
              "Our mission is to help you honor your loved ones with dignity and
              love, ensuring their memories live on forever."
            </p>
            <p className="text-gray-500 text-center md:text-justify">
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
            <p className="text-gray-900 text-center md:text-justify">
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

      {/* works */}
      <div className="flex flex-col gap-8 items-center justify-center px-4 md:px-6 lg:px-8 xl:px-12 py-4">
        <div className=" h-[1px] bg-gray-600 w-4/5 text-center mt-5"></div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-4/5">
          <div className="flex flex-col gap-3">
            <h1 className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptates est aliquam eius inventore cumque
              reiciendis voluptas dolore. Hic fugiat nam architecto facilis
              distinctio. Dicta eveniet laborum eius sunt ratione.
            </h1>
            <span className="text-gray-900 text-3xl md:text-5xl font-semibold">
              <CountUp start={1} end={3000} />+
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptates est aliquam eius inventore cumque
              reiciendis voluptas dolore. Hic fugiat nam architecto facilis
              distinctio. Dicta eveniet laborum eius sunt ratione.
            </h1>
            <span className="text-gray-900 text-3xl md:text-5xl font-semibold">
              <CountUp start={1} end={12} />+
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptates est aliquam eius inventore cumque
              reiciendis voluptas dolore. Hic fugiat nam architecto facilis
              distinctio. Dicta eveniet laborum eius sunt ratione.
            </h1>
            <span className="text-gray-900 text-3xl md:text-5xl font-semibold">
              <CountUp start={1} end={200000} />+
            </span>
          </div>
        </div>
      </div>

      {/* have a question */}
      <div className="w-full h-[70vh] pt-24 relative ">
        <div className="custom-shape-divider-bottom-1739433392 absolute top-[1rem] left-0 w-full overflow-hidden rotate-180 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[83px]"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill fill-primary"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill fill-primary"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill fill-primary "
            ></path>
          </svg>
        </div>
        <div className="bg-primary h-full relative flex items-center justify-center">
          <div className="grid grid-cols-1 w-4/5 md:grid-cols-2 gap-12 px-4 md:px-6 lg:px-8 xl:px-12 py-4">
            {/* right side */}
            <div className="flex flex-col gap-4 justify-start">
              <h1 className="text-white text-5xl font-lato font-semibold text-justify">
                Have a question? <br /> Our team is happy <br />
                to assist you
              </h1>
              <p className="text-gray-300 font-lato text-justify">
                Ask about Memorability, pricing, implementation <br /> or
                anything else. Our highly trained reps are standing by, ready to
                help
              </p>
              <div className="h-[1px] bg-white mt-4"></div>
              <div className="flex gap-5 justify-between items-center">
                <button className="bg-white px-6 py-2 font-semibold rounded-lg">
                  Contact us
                </button>
                <p className="text-white ">or</p>
                <p className="text-white underline cursor-pointer">
                  call +9700000000
                </p>
              </div>
            </div>
            {/* left side */}
            <div className="relative h-auto w-auto">
              <Image
                src="/backpicture.png"
                alt=""
                fill
                className="object-cover rounded-xl z-20 hidden md:block"
              />
              <div className="h-full z-10 w-full absolute bg-gray-300 top-2 left-2 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
