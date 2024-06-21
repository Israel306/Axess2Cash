import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [scrolling, setScrolling] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolling(window.scrollY === 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleIconWithDelay = () => {
    setOpen(!open);

    setTimeout(() => {
      setOpen(!open);
    }, 300);
  };

  return (
    <div
      className="sticky top-0 bg-white z-50"
      style={{
        boxShadow: scrolling ? "0px 3px 4px rgba(54, 102, 70, 0.24)" : "none",
      }}
    >
      <div className="bg-black px-[20px] md:px-[50px] py-5 border-b-[1px] border-[#ff790c67]">
        <div className="flex items-center justify-between container-w m-auto">
          <Link to="/">
            <div className="flex items-center justify-center gap-2">
              <img src={logo} alt="Logo" className="h-[50px]" />
              <h1 className="text-[#FF790C]">Axess2Cash</h1>
            </div>
          </Link>
          <button
            className="p-0 border-none outline-none focus:outline-none lg:hidden"
            onClick={toggleIconWithDelay}
          >
            {open ? (
              <IoMdClose size={25} />
            ) : (
              <RxHamburgerMenu size={25} color="#FF790C" />
            )}
          </button>
          <nav
            className={`lg:flex items-center gap-5 bg-black ${
              open
                ? "absolute top-0 left-0 px-10 opacity-100 h-screen w-full overflow-y-auto"
                : "hidden lg:flex opacity-0 lg:opacity-100 h-auto"
            } `}
          >
            <button
              className="p-0 border-none outline-none focus:outline-none lg:hidden flex items-end justify-end w-full mt-7 mb-10"
              onClick={() => setOpen(!open)}
            >
              <IoMdClose color="#FF790C" size={25} />
            </button>
            <ul className="flex flex-col lg:flex-row lg:flex-1 lg:justify-end gap-5 lg:items-center">
              {data.map((link) => {
                const isActive = location.pathname === link.link;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.link}
                      className={`font-bold lg:font-semibold text-[20px] md:text-[30px] lg:text-[12px] xl:text-[14px] lg:uppercase ${
                        isActive ? "text-[#FF790C]" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="relative lg:flex items-center">
              <Link className="font-semibold text-[14px] lg:text-[11px] xl:text-[14px] uppercase bg-[#FF790C] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                Join Axess2Cash
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

const data = [
  {
    name: "Personal",
    link: "/",
  },
  {
    name: "About Us",
    link: "/aboutus",
  },
  {
    name: "Help",
    link: "/help",
  },
  {
    name: "Sign In",
    link: "/signin",
  },
];
