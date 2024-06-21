import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import signupbg from "/src/assets/signupbg.png";

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
      <div className="relative">
        <img src={signupbg} alt="" />
      </div>
    </>
  );
}

export default Signup;
