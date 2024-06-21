import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import scam from "../assets/scam.png";
import faq from "../assets/faq.png";
import gradient2 from "/src/assets/gradient2.png";

function Help() {
  return (
    <>
      <NavBar />
      <div className="relative bg-[#0F0E0D]  text-white flex flex-col justify-center">
        <img src={gradient2} alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="mb-3 text-center"> Help</h1>
          <p className=" text-center text-[grey]">
            We are always here to assist you 24/7
          </p>
        </div>
      </div>
      <div className="px-5 py-5 md:py-0 md:px-20 bg-[#1E1F1D] flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-20">
        <div className="flex flex-col">
          <h1 className="text-[#FF790C]">Scam Awareness</h1>
          <p className="text-[gray] mt-5">
            Protect yourself from common financial scams, be cautious of
            unsolicited requests for personal information, urgent messages etc.
            Here are some common scams happening around us{" "}
            <Link to="/awareness">
              {" "}
              <u className="text-[#FF790C]">Learn More</u>
            </Link>
          </p>
        </div>
        <div>
          <img src={scam} alt="" />
        </div>
      </div>
      <div className="px-5 py-5 md:py-0 md:px-20 bg-black flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-20">
        <div>
          <img src={faq} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#FF790C]">General FAQs</h1>
          <p className="text-[gray] mt-5">
            Here are some common questions about Axess2Cash. Click here to know
            more about us{" "}
            <Link to="/faq">
              {" "}
              <u className="text-[#FF790C]">Click here</u>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Help;
