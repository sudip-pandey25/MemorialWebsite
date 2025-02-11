"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { designations, relationships } from "../../../../constants";
import { ArrowDownIcon } from "lucide-react";

const DetailsFormPage = () => {
  const searchParams = useSearchParams();
  const [firstName, setFirstName] = useState(searchParams?.get("firstName"));
  const [lastName, setLastName] = useState(searchParams?.get("lastName"));
  const [middlename, setMiddleName] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [BornDate, setBornDate] = useState({
    day: "",
    month: "",
    year: "",
    city: "",
    country: "",
    state: "",
  });
  const [demiseDate, setDemiseDate] = useState({
    Dday: "",
    Dmonth: "",
    Dyear: "",
    Dcity: "",
    Dcountry: "",
    Dstate: "",
  });

  const handleRelationshipChange = (e) => {
    setSelectedRelationship(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setSelectedDesignation(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBornDate({ ...BornDate, [id]: value });
  };

  const handleDChange = (e) => {
    const { id, value } = e.target;
    setDemiseDate({ ...demiseDate, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !selectedRelationship ||
      !selectedDesignation
    ) {
      setError("Please fill out all required fields.");
    } else {
      const formData = {
        firstname: firstName,
        middlename: middlename,
        lastname: lastName,
        gender: gender,
        relationship: selectedRelationship,
        designation: selectedDesignation,
        BornDate,
        demiseDate,
      };
      router.push(`/creatememorial/pricing`);
      console.log(formData);
      setError("");
    }
  };

  return (
    <div className="h-fit px-4 md:px-6 lg:px-8 xl:px-12 py-4 w-full">
      <p className="font-semibold font-lato text-xl md:text-3xl text-primary">
        This Memorial is Dedicated to:
      </p>

      {/* Show error message if validation fails */}
      {error && <p className="text-red-500">{error}</p>}

      <form
        className="grid grid-cols-1 md:grid-cols-2 py-2 md:py-8 gap-2 md:gap-6 w-full"
        onSubmit={handleSubmit}
      >
        {/* Required Info */}

        <div className="name col-span-1">
          <label
            htmlFor="name"
            className="text-xs md:text-base mb-2 text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            placeholder="Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-2 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg placeholder:italic placeholder:text-xs"
          />
        </div>

        <div className="middle-name col-span-1">
          <label
            htmlFor="middle-name"
            className="text-xs md:text-base mb-2 text-gray-600"
          >
            Middle Name (Optional):
          </label>
          <input
            type="text"
            value={middlename}
            onChange={(e) => setMiddleName(e.target.value)}
            placeholder="Middle Name"
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-2 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg placeholder:italic placeholder:text-xs"
          />
        </div>

        <div className="last-name col-span-1">
          <label
            htmlFor="last-name"
            className="text-xs md:text-base mb-2 text-gray-600"
          >
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-2 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg placeholder:italic placeholder:text-xs"
          />
        </div>

        <div className="gender flex flex-row gap-2 items-center md:col-span-2">
          <p className="text-base">Gender:</p>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
            required
          />
          <label htmlFor="male" className="text-base text-gray-600">
            Male
          </label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          <label htmlFor="female" className="text-base text-gray-600">
            Female
          </label>
        </div>

        <div className="relationship col-span-1">
          <label
            htmlFor="relationship"
            className="text-xs md:text-base mb-2 text-gray-600"
          >
            Relationship:
          </label>
          <select
            id="relationship"
            value={selectedRelationship}
            onChange={handleRelationshipChange}
            required
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-2 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg"
          >
            <option value="" disabled>
              Select a relationship
            </option>
            {relationships.map((relationship, index) => (
              <option key={index} value={relationship}>
                {relationship}
              </option>
            ))}
          </select>
        </div>

        <div className="designation col-span-1">
          <label
            htmlFor="designation"
            className="text-xs md:text-base mb-2 text-gray-600"
          >
            Designation:
          </label>
          <select
            id="designation"
            value={selectedDesignation}
            onChange={handleDesignationChange}
            required
            className="border border-gray-400 outline-none text-base font-poppins px-2 py-2 focus:border-b focus:border-primary transition-all duration-300 ease-in-out w-full focus:bg-primary focus:text-white rounded-lg"
          >
            <option value="" disabled>
              Select a Designation
            </option>
            {designations.map((designation, index) => (
              <option key={index} value={designation}>
                {designation}
              </option>
            ))}
          </select>
        </div>

        <div className=" More-details md:col-span-2 flex items-center w-full justify-center py-4">
          <div className="w-1/2 relative">
            <input
              type="text"
              placeholder=""
              readOnly
              defaultValue="More Details"
              required
              className="border  outline-none text-base font-poppins px-2 py-2 focus:border-b border-foreground transition-all duration-300 ease-in-out w-full bg-foreground text-white rounded-lg placeholder:italic placeholder:text-xs cursor-pointer "
            />
            {isClicked ? (
              <ArrowDownIcon
                className="absolute text-white right-2 top-3 transition-transform duration-300 ease-in-out rotate-180 cursor-pointer "
                size={18}
                onClick={() => setIsClicked((prev) => !prev)}
              />
            ) : (
              <ArrowDownIcon
                className="absolute text-white right-2 top-3 transition-transform duration-300 ease-in-out rotate-0 cursor-pointer "
                size={18}
                onClick={() => setIsClicked((prev) => !prev)}
              />
            )}
          </div>
        </div>

        {/* Additional Info */}

        <div
          className={`${
            isClicked
              ? "opacity-100 translate-y-0 block"
              : "opacity-0 -translate-y-4  hidden"
          } transition-all duration-300 ease-in-out transform md:col-span-2 additional-info bg-foreground rounded-lg text-white w-full`}
        >
          <div className="px-4 py-4 grid grid-cols-1  font-lato w-full gap-2 md:gap-4">
            <p className=" text-base md:text-xl md:col-span-2 pb-3">
              This Information can also be updated at a later time:
            </p>
            {/* Born Info */}
            <div className=" md:col-span-2 md:w-3/4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <label htmlFor="birthDay" className="font-semibold text-base">
                Born Info:
              </label>
              {/* Day Select */}
              <select
                id="day"
                name="day"
                value={BornDate.day}
                onChange={handleChange}
                className="px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  DD
                </option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day < 10 ? `0${day}` : day}
                  </option>
                ))}
              </select>

              {/* Month Select */}
              <select
                id="month"
                name="month"
                value={BornDate.month}
                onChange={handleChange}
                className=" px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  MM
                </option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month < 10 ? `0${month}` : month}
                  </option>
                ))}
              </select>

              {/* Year Select */}
              <select
                id="year"
                name="year"
                value={BornDate.year}
                onChange={handleChange}
                className=" px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  YYYY
                </option>
                {Array.from({ length: 101 }, (_, i) => 1923 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <div></div>
              <input
                id="city"
                type="text"
                value={BornDate.city}
                onChange={handleChange}
                placeholder="City or Town"
                className="px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                id="country"
                type="text"
                value={BornDate.country}
                onChange={handleChange}
                placeholder="Country"
                className="px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                id="state"
                value={BornDate.state}
                onChange={handleChange}
                placeholder="State or Area"
                className="px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Demise info */}
            <div className=" md:col-span-2 md:w-3/4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <label htmlFor="birthDay" className="font-semibold text-base">
                Demise Info:
              </label>
              {/* Day Select */}
              <select
                id="Dday"
                value={demiseDate.Dday}
                onChange={handleDChange}
                name="day"
                className="px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  DD
                </option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day < 10 ? `0${day}` : day}
                  </option>
                ))}
              </select>

              {/* Month Select */}
              <select
                id="Dmonth"
                name="month"
                value={demiseDate.Dmonth}
                onChange={handleDChange}
                className=" px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  MM
                </option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month}>
                    {month < 10 ? `0${month}` : month}
                  </option>
                ))}
              </select>

              {/* Year Select */}
              <select
                id="Dyear"
                name="year"
                value={demiseDate.Dyear}
                onChange={handleDChange}
                className=" px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  YYYY
                </option>
                {Array.from({ length: 101 }, (_, i) => 1923 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <div></div>
              <input
                type="text"
                id="Dcity"
                value={demiseDate.Dcity}
                onChange={handleDChange}
                placeholder="City or Town"
                className="px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                id="Dcountry"
                value={demiseDate.Dcountry}
                onChange={handleDChange}
                placeholder="Country"
                className="px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                id="Dstate"
                value={demiseDate.Dstate}
                onChange={handleDChange}
                placeholder="State or Area"
                className="px-2 py-1 border border-gray-300 rounded-md text-base text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-end py-2">
          <button
            type="submit"
            className="bg-foreground px-3 py-2 rounded-full hover:px-4 transition-all duration-300 ease-in-out hover:shadow-sm text-white"
          >
            Choose Pricing
          </button>
        </div>
      </form>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading form details...</div>}>
      <DetailsFormPage />
    </Suspense>
  );
};

export default Page;
