"use client";
import { EyeClosed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Eye } from "react-feather";
import { useForm } from "react-hook-form";

const page = () => {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const [formErros, setFormErrors] = useState({});
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const Customerrors = {};

  const onSubmit = (data) => {
    if (data.confirmpassword !== data.password) {
      Customerrors.passwordmismatch = "Passwords donot match";
      setFormErrors(Customerrors);
    } else {
      setFormErrors();
      setUser(data);
      reset();
    }
  };

  console.log(user);

  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-12 2xl:p-28 py-4 h-[1000px]">
      <div className="px-4 md:px-6 lg:px-8 xl:px-12 py-4 max-h-[700px] w-full grid grid-cols-1 md:grid-cols-2 ">
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
        <div className="grid grid-cols-1 justify-center bg-white rounded-r-lg shadow-lg p-5 md:p-7">
          <div className="flex flex-col gap-2 items-center ">
            {/* Logo section */}
            <p className=" text-2xl md:text-3xl font-[500] text-center font-josefin text-gray-900">
              Hi! Welcome to <br />
              <span className="logo font-playwrite text-center font-[600] text-xl md:text-2xl text-primary">
                Memorability
              </span>
            </p>

            {/* Forms Section */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-2 px-12 py-2 w-full"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full firstname">
                  <label
                    htmlFor="firstname"
                    className="text-gray-900 font-poppins font-semibold ml-2"
                  >
                    First Name:
                  </label>
                  <input
                    type="firstname"
                    id="firstname"
                    required
                    {...register("firstname", {
                      required: {
                        value: true,
                        message: "First name is required",
                      },
                    })}
                    placeholder="First Name"
                    className="border border-gray-300  rounded-2xl outline-none text-base font-poppins px-4 py-3  focus:border-primary transition-all duration-300 ease-in-out w-full  focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic placeholder:text-sm"
                  />
                  <p className="text-red-600 text-xs pl-2 pt-1">
                    {errors.firstname?.message}
                  </p>
                </div>
                <div className="w-full lastname">
                  <label
                    htmlFor="lastname"
                    className="text-gray-900 font-poppins font-semibold ml-2"
                  >
                    Last Name:
                  </label>
                  <input
                    type="lastname"
                    id="lastname"
                    {...register("lastname", {
                      required: {
                        value: true,
                        message: "Last Name is required",
                      },
                    })}
                    required
                    placeholder="Last Name"
                    className="border border-gray-300  rounded-2xl outline-none text-base font-poppins px-4 py-3  focus:border-primary transition-all duration-300 ease-in-out w-full  focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic placeholder:text-sm"
                  />
                  <p className="text-red-600 text-xs pl-2 pt-1">
                    {errors.lastname?.message}
                  </p>
                </div>
              </div>
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
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  placeholder="email"
                  className="border border-gray-300  rounded-2xl outline-none text-base font-poppins px-4 py-3  focus:border-primary transition-all duration-300 ease-in-out w-full  focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic placeholder:text-sm"
                />
                <p className="text-red-600 text-xs pl-2 pt-1">
                  {errors.email?.message}
                </p>
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
                    name="password"
                    required
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
                    placeholder="Password"
                    className="border border-gray-300 rounded-2xl outline-none text-base font-poppins px-4 py-3  focus:border-primary transition-all duration-300 ease-in-out w-full group focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic placeholder:text-sm"
                  />
                  <p className="text-red-600 text-xs pl-2 pt-1">
                    {errors.password?.message}
                  </p>
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
              <div className="w-full confirmpassword">
                <label
                  htmlFor="confirmpassword"
                  className="text-gray-900 font-poppins font-semibold ml-2"
                >
                  Confirm Password:
                </label>
                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmpassword"
                    required
                    {...register("confirmpassword", {
                      required: {
                        value: true,
                        message: "Field is required",
                      },
                    })}
                    placeholder="Confirm password"
                    className="border border-gray-300 rounded-2xl outline-none text-base font-poppins px-4 py-3  focus:border-primary transition-all duration-300 ease-in-out w-full group focus:bg-primary focus:text-white focus:rounded-lg placeholder:italic placeholder:text-sm"
                  />
                  <p className="text-red-600 text-xs pl-2 pt-1">
                    {errors.confirmpassword?.message}
                  </p>
                  <p className="text-red-600 text-xs pl-2 pt-1">
                    {formErros?.passwordmismatch}
                  </p>
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
                Sign Up
              </button>
              <p className="text-center text-sm text-gray-700 mt-2">
                Already have an account?{" "}
                <Link href="/login" className="underline text-primary">
                  {" "}
                  Sign in
                </Link>
                <br />
                Or register with email
              </p>
              <div className="flex flex-col xl:flex-row gap-2 items-center justify-center mt-5">
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
                  Google
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
                  Facebook
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
