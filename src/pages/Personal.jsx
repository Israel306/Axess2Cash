import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import Button from "../components/Button";
import hsection1 from "../assets/hsection1.png";
import hsection2 from "../assets/hsection2.png";
import hsection3 from "../assets/hsection3.png";
import hsection4 from "../assets/hsection4.png";
import hsection5 from "../assets/hsection5.png";
import hsection4bg from "../assets/hsection4bg.png";
import bgsection2 from "../assets/bgsection2.png";
import gatm from "../assets/gatm.svg";
import security from "../assets/security.svg";
import a2card from "../assets/a2card.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Personal() {
  return (
    <>
      <NavBar />
      <div className=" md:pt-20 p-5 md:p-20 bg-black flex flex-col md:flex-row items-center w-full  gap-10">
        <div className="flex flex-col">
          <h1 className="mb-5 text-white md:w-[70%] leading-relaxed">
            Revolutionizing{" "}
            <span className="text-[#FF780E]">Access to Cash</span> Globally
          </h1>
          <p className="mb-5 text-[gray] md:w-[90%]">
            Invest in Axess2cash today and be part of our mission to empower
            individuals worldwide with convenient, secure and inclusive access
            to cash.
          </p>
          <Button
            text="Invest In Axess2Cash"
            textcolor="#ffff"
            bgcolor="#FF780E"
          />
        </div>
        <div className="">
          <img src={hsection1} alt="" />
        </div>
      </div>

      <div className="relative">
        <img className="w-full h-80 md:h-48" src={bgsection2} alt="" />
        <div className="p-5 absolute inset-0 flex flex-col md:flex-row items-center justify-start md:justify-center gap-5 md:gap-10">
          <div className="flex flex-row items-center gap-5">
            <img className="h-16 w-16" src={gatm} alt="" />
            <p className="text-white">
              Global ATMs and A2C Points for Accessible Financial Services.
            </p>
          </div>
          <div className="border-white border-[0.7px] w-full md:w-0 md:h-20"></div>
          <div className="flex flex-row items-center gap-5">
            <img className="h-16 w-16" src={security} alt="" />
            <p className="text-white">
              Top security with encryption, multi-factor authentication, and
              biometrics.
            </p>
          </div>
          <div className="border-white border-[0.7px] w-full md:w-0 md:h-20"></div>
          <div className="flex flex-row items-center gap-5">
            <img className="h-16 w-16" src={a2card} alt="" />
            <p className="text-white">
              Axess2Cash.com simplifies money management with an easy app and
              A2C Card.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1E1F1D] p-5 md:p-20 flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-20">
        <div>
          <img className="" src={hsection2} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5 text-white  leading-relaxed">
            Bridging traditional banking and financial inclusivity!
          </h1>
          <p className="mb-5 text-[gray] ">
            We ensure everyone, regardless of their location or banking status,
            can access cash when they need it most.
          </p>
          <Button
            text="Open an account in seconds"
            textcolor="#ffff"
            bgcolor="#FF780E"
            icon={<FaArrowRightLong />}
          />
        </div>
      </div>

      <div className="bg-[#161518] p-5 md:p-20 flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-20">
        <div>
          <img className="" src={hsection3} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5 text-[#FF780E] leading-relaxed">
            Integrating Blockchain Technology
          </h1>
          <p className="mb-5 text-[gray] ">
            We integrate blockchain technology and cryptocurrencies like Bitcoin
            into our platform to enhance transaction security, transparency, and
            efficiency, thereby boosting user confidence and trust in our
            services.
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="h-[700px]" src={hsection4bg} alt="" />
        <div className="absolute inset-0 flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center px-5 md:px-20">
          <div className="flex flex-col">
            <h1 className="mb-5 text-black leading-relaxed">
              Send money instantly via bank transfers or in-app usernames
            </h1>
            <p className="mb-5 text-[gray] ">
              Experience seamless transactions with just a tap! Your money, your
              way, anytime
            </p>
            <Link to={""}>
              <button className="flex flex-row items-center gap-2 border-[1px] text-[#FF780E] hover:text-white border-[#FF780E] bg-transparent hover:bg-[#FF780E] rounded-md p-2 px-4 md:py-2 md:px-7 transition duration-300 ease-in-out transform hover:opacity-75 hover:scale-105">
                <p className=" "> Download the app here </p>
                <FaArrowRightLong className="" />
              </button>
            </Link>
          </div>
          <div>
            <img className="" src={hsection4} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#161518] p-5 md:p-20 flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-20">
        <div>
          <img className="" src={hsection5} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5 text-[#FF780E] leading-relaxed">A2C Point</h1>
          <p className="mb-5 text-[white] ">
            Deposit and withdraw cash from any location using your A2C Store
            Value card. <u className="text-[#FF780E]">Learn more</u>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Personal;
