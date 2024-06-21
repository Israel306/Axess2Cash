import React from "react";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import aboutimg from "/src/assets/aboutimg.png";
import phone from "/src/assets/phone.png";
import world from "/src/assets/world.png";
import accessibilityimg from "/src/assets/accessibilityimg.png";
import security from "/src/assets/security.png";
import convenience from "/src/assets/convenience.png";
import innovation from "/src/assets/innovation.png";
import business from "/src/assets/business.png";
import gradient from "/src/assets/gradient.png";
import gradient2 from "/src/assets/gradient2.png";
import coin from "/src/assets/coin.png";

function About() {
  return (
    <>
      <NavBar />
      <div className="bg-[#161518]">
        <div className="relative bg-[#0F0E0D]   text-white flex flex-col justify-center">
          <img src={gradient2} alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="mb-3 text-center"> About Us</h1>
            <p className=" text-center text-[grey]">
              We are a catalyst for financial empowerment and inclusion.
            </p>
          </div>
        </div>
        <div className="container-w"></div>
        <div className="flex  md:mt-[170px] mt-[70px] md:px-20 px-5">
          <div className="flex flex-col  md:flex-row  bg-[#282828] rounded-[50px]  p-5 ">
            <div className="mt-[20px] md:ml-3 ml-0">
              <h1 className="mb-3 mt-9 text-white">Who We Are</h1>
              <p className=" leading-10 text-[grey]">
                We are a leading provider of innovative financial services,
                dedicated to empowering individuals worldwide with convenient,
                secure, and inclusive access to cash.
              </p>
            </div>

            <div className="">
              <img src={aboutimg} className=" md:mt-[-100px] rounded-2xl"></img>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20 md:px-20 px-5">
          <h1 className="text-center text-[#FF790C] mb-2">Our Mission</h1>
          <p className="text-[grey] text-center">
            “We aim to bridge the gap between traditional banking and financial
            inclusivity, ensuring that everyone, regardless of their location or
            banking status, can access cash when they need it most”
          </p>
        </div>

        <div className="mt-20">
          <h1 className="text-[#FF790C] text-center mb-[20px]">
            Why choose us?
          </h1>
        </div>

        <div className=" md:px-20 px-5">
          <div className="flex flex-col  md:flex-row  bg-[#282828] rounded-[50px] p-5 items-center ">
            <div className="mt-[20px] md:ml-3 ml-0">
              <h1 className="mb-3 mt-5 text-[#FF790C]">Accesibility</h1>
              <p className=" leading-10 text-white">
                We are a leading provider of innovative financial services,
                dedicated to empowering individuals worldwide with convenient,
                secure, and inclusive access to cash.
              </p>
            </div>

            <div className="">
              <img src={accessibilityimg}></img>
            </div>
          </div>
        </div>

        <div className="mt-[30px] flex flex-col md:flex-row justify-between md:px-20 px-5 gap-4">
          <div className=" bg-[#282828] flex flex-col justify-center items-center text-center rounded-[30px] p-10">
            <h1 className="text-[#FF790C]  mb-5">Security</h1>
            <p className="text-white mb-5">
              We prioritize your security by utilizing advanced encryption,
              multi-factor authentication, and biometric verification to protect
              your personal information and transactions.
            </p>
            <img src={security} className="w-[200px] h-[240px]"></img>
          </div>

          <div className=" bg-[#282828] flex flex-col  items-center text-center rounded-[30px] p-10">
            <h1 className="text-[#FF790C] mb-5">Convenience</h1>
            <p className="text-white mb-5">
              Our user-friendly app and A2C Store Value Card simplifies the
              process of withdrawing and depositing cash, providing a seamless
              and hassle-free experience for our users.
            </p>
            <img src={convenience} className="w-[200px] h-[240px]"></img>
          </div>
        </div>

        <div className=" md:px-20 px-5 mt-[20px]">
          <div className="flex flex-col  md:flex-row items-center  bg-[#282828] rounded-[50px] p-5 ">
            <div className="mt-[20px] md:ml-3 ml-0">
              <h1 className="mb-3 mt-5 text-[#FF790C]">Innovation</h1>
              <p className=" leading-10 text-white">
                Our team leverages blockchain technology to enhance the
                security, transparency, and efficiency of transactions, ensuring
                that we remain at the forefront of technological advancements in
                the financial services industry.
              </p>
            </div>

            <div className="">
              <img src={innovation}></img>
            </div>
          </div>
        </div>

        <div className="relative md:px-20 px-5 mt-[23px]">
          <div className="">
            <img src={business} className="object-cover h-[500px]"></img>
          </div>
          <div className="flex flex-col md:flex-row items-center absolute inset-0 md:px-20 px-5">
            <div className="md:px-20 px-5 md:py-20 w-full">
              <h1 className="mb-3 mt-5 text-white  ">Axess2cash Business</h1>
              <p className="leading-10 text-white ">
                Receive payments from your employers via Axess2cash
              </p>

              <button className="bg-black text-white  text-xl border p-2 rounded-2xl mt-[50px]">
                Coming soon
              </button>
            </div>
            <div className="w-full">
              <img src={coin}></img>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
