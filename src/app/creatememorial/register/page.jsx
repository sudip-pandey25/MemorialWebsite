"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.confirmPassword)
      errors.confirmPassword = "Confirm password is required";
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      router.push(`/creatememorial/details`);
      console.log("Form is valid, proceed!");
    }
  };

  return (
    <div className="h-fit px-4 md:px-6 lg:px-8 xl:px-12 py-4 font-lato">
      <p className="py-2 text-2xl font-medium text-primary md:text-3xl">
        Your Details
      </p>
      <p className="text-xs md:text-base text-gray-600 italic">
        Already have an account?{" "}
        <span className="text-primary underline not-italic ">Sign in</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="py-2 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
      >
        <div>
          <label
            htmlFor="name"
            className="text-xs md:text-base mb-2 text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-3 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg placeholder:italic placeholder:text-xs"
          />
          {formErrors.name && (
            <p className="text-red-500 text-xs">{formErrors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xs md:text-base pb-2 text-gray-600"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-3 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg placeholder:italic placeholder:text-xs"
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs">{formErrors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-xs md:text-base pb-2 text-gray-600"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-3 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg placeholder:italic placeholder:text-xs"
          />
          {formErrors.password && (
            <p className="text-red-500 text-xs">{formErrors.password}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="text-xs pb-2 text-gray-600 md:text-base"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Retype your password"
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-3 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg placeholder:italic placeholder:text-xs"
          />
          {formErrors.confirmPassword && (
            <p className="text-red-500 text-xs">{formErrors.confirmPassword}</p>
          )}
        </div>
        <div></div>
        <div className="flex flex-row justify-end">
          <button
            type="submit"
            className="bg-foreground px-3 py-2 rounded-full hover:px-4  transition-all duration-300 ease-in-out hover:shadow-sm text-white"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
