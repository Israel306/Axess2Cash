import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkdln from "../assets/linkdln.svg";
import twitter from "../assets/twitter.svg";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-[#1E1F1D] pt-[4rem] px-[20px] md:px-[50px] text-white w-full">
        <div className="container-w m-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-7 pb-8">
            <div className="md:col-span-2 pr-[10%]">
              <div className="flex items-center justify-start gap-2 mb-2">
                <img src={logo} alt="" className="h-[50px]" />
                <h1 className="text-[#FF790C]">Axess2Cash</h1>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Link>1, brixton str, atlanta</Link>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Link>Tel: +12 (0 203 333 2222)</Link>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Link>Reach our customer care at axesscustcare@gmail.com</Link>
              </div>
            </div>
            <div className="">
              <p className="mb-5 font-bold text-[#73685F]">Personal</p>
              <ul>
                <li className="mb-2">
                  <Link>Transfer Money</Link>
                </li>
                <li className="mb-2">
                  <Link>Swap</Link>
                </li>
                <li className="mb-2">
                  <Link>Withdraw</Link>
                </li>
                <li className="mb-2">
                  <Link>Request</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="mb-5 font-bold text-[#73685F]">About Us</p>
              <ul>
                <li className="mb-2">
                  <Link>News</Link>
                </li>
                <li className="mb-2">
                  <Link>Career</Link>
                </li>
                <li className="mb-2">
                  <Link>Community</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="mb-5 font-bold text-[#73685F]">Help</p>
              <ul>
                <li className="mb-2">
                  <Link>FAQs</Link>
                </li>
                <li className="mb-2">
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="mb-5 font-bold text-[#73685F]">Our Company</p>
              <ul>
                <li className="mb-2">
                  <Link>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 pb-5 items-center justify-start">
          <div className="flex flex-row gap-2 md:gap-10 ">
            <img className=" h-14" src={appstore} alt="" />
            <img className=" h-14" src={playstore} alt="" />
          </div>

          <div className="flex flex-row gap-10 ">
            <img className=" h-8" src={facebook} alt="" />
            <img className=" h-8" src={instagram} alt="" />
            <img className=" h-8" src={linkdln} alt="" />
            <img className=" h-8" src={twitter} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
