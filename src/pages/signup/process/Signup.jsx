import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import globe from "/src/assets/globe.png";

function Signup() {
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
      <div className="bg-black py-20 px-5  flex flex-row  items-start w-full">
        <div className="container-w bg-[#1F1F1F] border-[1px] border-[transparent] border-r-[#ff790c68] border-b-[#ff790c68] rounded-[30px] p-10 ">
          <h1 className="text-[#FF790C]">Let's get Started</h1>
          <form action="" className="mt-5 text-[gray]">
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                First Name
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="text"
                name=""
                id=""
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Middle Name(Optional)
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="text"
                name=""
                id=""
                placeholder="Enter middle name"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Last Name
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="text"
                name=""
                id=""
                placeholder="Enter last name"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Phone Number
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="tel"
                name=""
                id=""
                placeholder="00 0000 0000"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Password
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
              />
            </div>
            <div>
              <p className="text-white">At least:</p>
              <div className="mt-5 flex flex-row gap-2 md:gap-4 w-full text-center">
                <div className=" rounded-full bg-[#A4D3FF] p-1 md:p-3 ">
                  <p className="text-[10px] "> 8 characters</p>
                </div>
                <div className="rounded-full bg-[#A4D3FF] p-1 md:p-3">
                  <p className="text-[10px]"> An uppercase letter </p>
                </div>
                <div className="rounded-full bg-[#A4D3FF] p-1 md:p-3">
                  <p className="text-[10px]"> A lowercase letter </p>
                </div>
              </div>
              <div className="mt-4 flex flex-row gap-2 md:gap-4 text-center">
                <div className="rounded-full bg-[#A4D3FF] p-1 md:p-3">
                  <p className="text-[10px]"> A special character </p>
                </div>
                <div className="rounded-full bg-[#A4D3FF] p-1  md:p-3">
                  <p className="text-[10px]"> A number </p>
                </div>
              </div>

              <div className="mt-10 flex flex-row items-start md:items-center gap-2">
                <input
                  className="h-4 w-4 rounded-full"
                  type="checkbox"
                  name=""
                  id=""
                />
                <p className="text-white text-center text-[10px]">
                  I agree to the{" "}
                  <span className="text-[#005BFE]">Terms of Service</span> and{" "}
                  <span className="text-[#005BFE]">Privacy Policy</span>
                </p>
              </div>

              <div className="mt-10">
                <Link to="/otp">
                  <button className="flex flex-row w-full justify-center items-center gap-2 rounded-md p-2 px-4 md:py-2 md:px-7 transition duration-300 ease-in-out transform hover:opacity-75 hover:scale-105 bg-[#FF790C]">
                    <p className="text-white">Next</p>
                  </button>
                </Link>
              </div>
              <p className="text-white mt-10 text-center">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-[#005BFE]">Log in</span>{" "}
                </Link>
              </p>
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

export default Signup;
