"use client";
import { EyeClosed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Eye } from "react-feather";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      email: email,
      password: password,
    });

    console.log(user);
  };
  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4">
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4 h-[85vh] w-full grid grid-cols-1 md:grid-cols-2 ">
        {/* left Section */}
        <div className="relative shadow-lg hidden md:block ">
          <Image
            src="/login.jpg"
            alt=""
            fill
            className="object-cover rounded-l-lg"
          />
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 justify-center bg-white rounded-r-lg shadow-lg">
          <div className="logo font-playwrite text-center pt-4 md:pt-8 h-2/3">
            <p className="font-[600] text-xl md:text-2xl text-primary">
              Memorability
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center ">
            {/* Logo section */}
            <p className=" text-2xl md:text-4xl font-[500] text-center font-josefin text-gray-900">
              Hi! Welcome back to <br />
              <span className="text-primary">Memorability</span>
            </p>

            {/* Forms Section */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-2 px-12 py-2 w-full"
            >
              <div className="w-full email">
                <label
                  htmlFor="email"
                  className="text-gray-900 font-poppins font-semibold ml-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="border border-gray-300  rounded-2xl outline-none text-base font-poppins px-4 py-3  focus:border-primary transition-all duration-300 ease-in-out w-full  focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic placeholder:text-sm"
                />
              </div>
              <div className="w-full password">
                <label
                  htmlFor="password"
                  className="text-gray-900 font-poppins font-semibold ml-2"
                >
                  Password:
                </label>
                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border border-gray-300 rounded-2xl outline-none text-base font-poppins px-4 py-3  focus:border-primary transition-all duration-300 ease-in-out w-full group focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic placeholder:text-sm"
                  />
                  <div
                    className={` group-focus-within:text-white absolute right-2 top-4 group cursor-pointer`}
                  >
                    {showPassword ? (
                      <Eye
                        onClick={() => {
                          setShowPassword((prev) => !prev);
                        }}
                      />
                    ) : (
                      <EyeClosed
                        onClick={() => {
                          setShowPassword((prev) => !prev);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-foreground px-3 py-2 rounded-full hover:px-4  transition-all duration-300 ease-in-out hover:shadow-sm text-white mt-1"
              >
                Sign In
              </button>
              <p className="text-center text-sm text-gray-700 mt-2">
                Do not have a account?{" "}
                <Link href="/auth/singup" className="underline text-primary">
                  {" "}
                  Sign Up
                </Link>
                <br />
                or with email
              </p>
              <div className="flex flex-col md:flex-row gap-2 items-center justify-center mt-5">
                <span className="px-4 flex items-center gap-2  bg-gray-200 rounded-3xl cursor-pointer text-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    className="w-5"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Sign in with Google
                </span>
                <span className="px-4  flex items-center gap-2 bg-gray-200 rounded-3xl cursor-pointer text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    className="w-5"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    ></path>
                  </svg>
                  Sign in with Facebook
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
