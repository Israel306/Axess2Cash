import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import scampic from "../assets/scampic.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkdln from "../assets/linkdln.svg";
import twitter from "../assets/twitter.svg";
import gradient2 from "/src/assets/gradient2.png";

function Awareness() {
  return (
    <>
      <NavBar />
      <div className="relative bg-[#0F0E0D]  text-white flex flex-col justify-center">
        <img src={gradient2} alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="mb-3 text-center"> Scam Awareness</h1>
          <p className=" text-center text-[grey]">
            Stay Secure, Stay Safe always
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center  bg-[#080707] p-5 md:p-20 ">
        <h1 className="text-[#FF790C] text-center">
          Identify common scams happening around us{" "}
        </h1>
        <div className="flex flex-col md:flex-row mt-5 md:mt-10 items-center">
          <div>
            <div className="flex flex-col mt-10">
              <h1 className="text-white">Phishing Scams:</h1>
              <p className="mt-5">
                <ul className="text-[gray] ">
                  <li>
                    <p>
                      {" "}
                      -We would never send you unsolicited emails or texts
                      asking for personal information.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      -Our only website is “Axess2cash.com”, beware of scams{" "}
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-col mt-10">
              <h1 className="text-white">Vishing (Voice Phishing) Scams:</h1>
              <p className="mt-5">
                <ul className="text-[gray] ">
                  <li>
                    <p>
                      {" "}
                      -Whenever you get unsolicited phone calls claiming to be
                      from your bank or a government agency ignore and report to
                      us immediately.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      -Avoid callers pressuring you to provide personal
                      information or make immediate payments.
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-col mt-10">
              <h1 className="text-white">SMiShing (SMS Phishing) Scams:</h1>
              <p className="mt-5">
                <ul className="text-[gray] ">
                  <li>
                    <p>
                      {" "}
                      -Don’t respond to text messages claiming to be from our
                      bank with urgent requests for personal information.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      -Look out for messages containing suspicious links or
                      phone numbers.
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-col mt-10">
              <h1 className="text-white">Protect Your Personal Information:</h1>
              <p className="mt-5">
                <ul className="text-[gray] ">
                  <li>
                    <p>
                      {" "}
                      -Never share your PIN, passwords, or account details with
                      anyone.
                    </p>
                  </li>
                  <li>
                    <p> -Avoid using public Wi-Fi for banking transactions.</p>
                  </li>
                  <li>
                    <p> -Never give out any of your personal information.</p>
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div>
            <img src={scampic} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-[#FF790C] text-center">
            Our Social Media Handles
          </h1>
          <p className="text-[gray] mt-10">
            These are our only official social media accounts:
          </p>
          <div>
            <div className="flex flex-row gap-5 items-center mt-10">
              <img className=" h-6" src={facebook} alt="" />
              <p className="text-[gray]">@Axess2cash, @Axess2cashcustcare</p>
            </div>
            <div className="flex flex-row gap-5 items-center mt-10">
              <img className=" h-6" src={instagram} alt="" />
              <p className="text-[gray]">@Axess2cash</p>
            </div>
            <div className="flex flex-row gap-5 items-center mt-10">
              <img className=" h-6" src={linkdln} alt="" />
              <p className="text-[gray]">@Axess2cash</p>
            </div>
            <div className="flex flex-row gap-5 items-center mt-10">
              <img className=" h-6" src={twitter} alt="" />
              <p className="text-[gray]">@Axess2cash</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Awareness;
