import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import globe from "/src/assets/globe.png";

function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (element, index) => {
    if (/^[0-9]$/.test(element.value)) {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Focus on the next input box if it exists
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    } else if (element.value === "") {
      // Allow deletion
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

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
      <div className="bg-black py-20 px-5 flex flex-row items-center md:items-start h-screen md:h-full w-full">
        <div className="container-w bg-[#1F1F1F] border-[1px] border-[transparent] border-r-[#ff790c68] border-b-[#ff790c68] rounded-[30px] p-5 md:p-10 ">
          <h1 className=" text-[#FF790C]">Verify your phone number</h1>
          <p className="text-white mt-2">
            Please enter OTP sent to your phone number
          </p>
          <form action="" className="mt-10">
            {/* otp box */}
            <div className="flex justify-center gap-4 mt-10">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className="md:w-12 w-8 md:h-12 h-8 text-center text-xl bg-transparent border-[0.5px] border-[white] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF790C]"
                />
              ))}
            </div>
            <div className="mt-20">
              <button className="flex flex-row w-full justify-center items-center gap-2 rounded-md p-2 px-4 md:py-2 md:px-7 transition duration-300 ease-in-out transform hover:opacity-75 hover:scale-105 bg-[#FF790C]">
                <p className="text-white">Next</p>
              </button>
            </div>
            <div className="mt-4">
              <button className="flex flex-row w-full justify-center items-center gap-2 rounded-md p-2 px-4 md:py-2 md:px-7 transition duration-300 ease-in-out transform hover:opacity-75 hover:scale-105 bg-[white] border-[1px] border-[#FF790C]">
                <p className="text-[#FF790C]">Resend Code</p>
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:flex">
          <img className="h-screen" src={globe} alt="Globe" />
        </div>
      </div>
    </>
  );
}

export default Otp;
