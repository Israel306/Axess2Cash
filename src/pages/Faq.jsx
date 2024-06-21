import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import gradient2 from "/src/assets/gradient2.png";
import { IoIosSearch } from "react-icons/io";
import DropdownItem from "../components/DropdownItem";
import Dropdown from "../components/Dropdown";
import faqellipse from "/src/assets/faqellipse.png";
import faqbg from "/src/assets/faqbg.png";
import questionbg from "/src/assets/questionbg.png";

function Faq() {
  return (
    <>
      <NavBar />
      <div className="bg-[#0F0E0D]">
        <div className="relative bg-[#0F0E0D] mb-7">
          <div className="">
            <img src={gradient2} className="w-full" alt="" />
          </div>
          <div className=" absolute inset-0 flex flex-col md:flex-row gap-5 md:gap-10 text-white items-center md:p-20 p-5">
            <div>
              <h1 className="mb-5">Top questions about Axess2cash</h1>
              <div className="flex items-center border w-[300px] rounded-2xl gap-3 px-5 py-2 border-[#FF790C]">
                <IoIosSearch />
                <p className="text-base text-[grey]">Search</p>
              </div>
            </div>
            <div className="text-[grey]">
              <p>
                Need something cleared up? Here are our most frequently asked
                questions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#161518]">
          <div className=" flex flex-col md:flex-row md:px-20 px-5 md:py-[100px] py-5 gap-10 md:gap-20 w-full">
            <div className=""></div>
            <div className="w-full">
              <h1 className="text-[#FF790C] mb-[10px]">General FAQs</h1>
              <p className=" text-[grey]">
                Everything you need to know about axees2cash and how we operate.
                Can’t find an answer? then reach out to us{" "}
              </p>
            </div>
            <div className="w-full">
              <Dropdown />
            </div>
          </div>
        </div>
        <div className="bg-[#161518]">
          <div className="relative  md:px-20 px-5 p mb-10">
            <img src={questionbg}></img>
            <div className="absolute  inset-0 justify-center items-center flex flex-col md:p-20 p-5 text-center ">
              <h1 className="text-inter font-bold text-white md:text-5xl text-xl mb-3">
                Still have questions?
              </h1>
              <p className="grey mb-3 ">
                Join over 4000+ users already investing in axess2cash
              </p>
              <button className="border border-[#FF790C] text-white px-10 py-2 rounded-2xl">
                Get Started
              </button>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Faq;
