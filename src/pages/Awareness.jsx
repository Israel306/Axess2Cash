import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";

function Awareness() {
  return (
    <>
      <NavBar />
      <div className="bg-black flex flex-col items-center justify-center  h-80">
        <h1 className="text-white">Scam Awareness</h1>
        <p className="mt-4 text-[gray]">Stay Secure, Stay Safe always</p>
      </div>
      <div className="flex flex-col justify-center  bg-[#080707] px-5 md:px-20">
        <h1 className="text-[#FF790C] text-center">
          Identify common scams happening around us{" "}
        </h1>
        <div className="flex flex-row mmt-5">
          <div className="flex flex-col">
            <h1 className="text-white">Phishing Scams:</h1>
            <p className="mt-2">
              <ul className="text-[gray]">
                <li>
                  <p>
                    {" "}
                    -We would never send you unsolicited emails or texts asking
                    for personal information.
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
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Awareness;
