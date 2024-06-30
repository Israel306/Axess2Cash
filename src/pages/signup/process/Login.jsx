import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import globe from "/src/assets/globe.png";

function Login() {
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
          <h1 className="text-[#FF790C]">Welcome back</h1>
          <form action="" className="mt-5 text-[gray]">
            <div className="flex flex-col mb-5">
              <label className="text-white" htmlFor="">
                Email Address
              </label>
              <input
                className="mt-2 rounded-[15px] bg-transparent border-[0.75px] border-gray p-3"
                type="email"
                name=""
                id=""
                placeholder="Enter your email address"
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
              <p className="text-[007BFF]">forgot password?</p>

              <div className="mt-10">
                <Link to="/https://axesswebanking.vercel.app/">
                  <button className="flex flex-row w-full justify-center items-center gap-2 rounded-md p-2 px-4 md:py-2 md:px-7 transition duration-300 ease-in-out transform hover:opacity-75 hover:scale-105 bg-[#FF790C]">
                    <p className="text-white">Next</p>
                  </button>
                </Link>
              </div>

              <p className="text-white mt-10 text-center">
                Are you a new user?{" "}
                <Link to="/signup">
                  <span className="text-[#005BFE]">Create your account</span>{" "}
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

export default Login;
