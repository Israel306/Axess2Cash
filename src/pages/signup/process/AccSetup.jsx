import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import globe from "/src/assets/globe.png";

function AccSetup() {
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
    // Add more countries as needed
  ];

  const genders = ["Male", "Female", "Others"];
  return (
    <>
      <div className="bg-black flex p-5 border-b-[1px] border-[#ff790c67]">
        <Link to="/">
          <div className="flex items-center justify-center gap-2 ">
            <img src={logo} alt="Logo" className="h-[50px]" />
            <h1 className="text-[#FF790C]">Axess2Cash</h1>
          </div>
        </Link>
      </div>
      <div className="bg-black py-20  flex flex-row items-start md:pl-40">
        <div className="bg-[#1F1F1F] border-[1px] border-[transparent] border-r-[#ff790c68] border-b-[#ff790c68] rounded-[30px] p-10 ">
          <Link to="/pin">
            <p className="text-white mb-2 text-right">Skip</p>
          </Link>
          <h1 className="text-[#FF790C]">Finish your account setup</h1>
          <p className="text-[gray] mt-2">
            Complete your account setup to enable you perform transactions on
            Axess2cash
          </p>
          <form action="" className="mt-5 text-[gray]">
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Select Country
              </label>
              <select
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3 text-white"
                id="country-select"
                name="country"
              >
                <option value="" disabled selected>
                  Select country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Home Address
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="text"
                name=""
                id=""
                placeholder="Enter home address"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                State
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="text"
                name=""
                id=""
                placeholder="Enter your state"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                City
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="text"
                name=""
                id=""
                placeholder="Enter your city"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Zip Code
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="tel"
                name=""
                id=""
                placeholder="Enter zip code"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Upload ID (.pdf, .png, .jpg, .jpeg)
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="file"
                name=""
                id=""
              />
            </div>
            <div className="mb-5 max-w-max rounded-full text-center bg-[#A4D3FF] p-2 ">
              <p className="text-black">
                {" "}
                Passport, National ID, Driver’s license or Voter’s Card
              </p>
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Upload Utility Bill (.pdf, .png, .jpg, .jpeg)
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="file"
                name=""
                id=""
              />
            </div>
            <div className="mb-2 max-w-max  rounded-full text-center bg-[#A4D3FF] p-2 ">
              <p className="text-black">
                {" "}
                Kindly provide a utility bill that is within the past three
                months
              </p>
            </div>
            <div className="mb-5 max-w-max rounded-full text-center bg-[#FFE39A] p-1 ">
              <p className="text-black"> Max size for upload is 3MB</p>
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Date of Birth
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="date"
                name=""
                id=""
                placeholder="Enter zip code"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Select Gender
              </label>
              <select
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3 text-white"
                id="gennder-select"
                name="gender"
              >
                <option value="" disabled selected>
                  Select gender
                </option>
                {genders.map((gender, index) => (
                  <option key={index} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Occupation
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="text"
                name=""
                id=""
                placeholder="Enter your occupation"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Purpose for signing up with Axess2cash
              </label>
              <select
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3 text-white"
                id="gennder-select"
                name="gender"
              >
                <option value="" disabled selected>
                  Select reason
                </option>
                {genders.map((gender, index) => (
                  <option key={index} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="mt-10">
                <Link to="/createpin">
                  <button className="flex flex-row w-full justify-center items-center gap-2 rounded-md p-2 px-4 md:py-2 md:px-7 transition duration-300 ease-in-out transform hover:opacity-75 hover:scale-105 bg-[#FF790C]">
                    <p className="text-white">Next</p>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden md:flex ">
          <img src={globe} alt="" />
        </div>
      </div>
    </>
  );
}

export default AccSetup;
