import { Link } from "react-scroll";
import { Close, Hamburger } from "../../utils/constants/Icons";
import { useState } from "react";
const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <>
      <nav className="bg-transparent w-full h-32 flex justify-center items-center">
        <div className="w-10/12 max-w-[1400px] flex justify-between items-center gap-5 xl:w-[95%]">
          <div className="">
            <img
              loading="lazy"
              src="/Images/Logo.svg"
              alt=""
              className="sm:w-32"
            />
          </div>
          <div className="nav-links-bg rounded-xl py-4 px-3 shadow-md slg:hidden">
            <ul className="flex items-center gap-x-4">
              <li>
                <Link className="cursor-pointer bg-white w-[129px] h-12 flex justify-center items-center font-popins rounded-md font-medium text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer hover:text-black hover:bg-white duration-500 text-white w-[129px] h-12 flex justify-center items-center font-popins rounded-md  ">
                  Games
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer hover:text-black hover:bg-white duration-500 text-white w-[129px] h-12 flex justify-center items-center font-popins rounded-md  ">
                  About
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer hover:text-black hover:bg-white duration-500 text-white w-[129px] h-12 flex justify-center items-center font-popins rounded-md  ">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="slg:hidden flex">
            <button className="bg-[#212229] shadow-xl h-12 w-[143px] hover:bg-white duration-500 hover:text-black text-white rounded-md font-semibold">
              Contact Us
            </button>
          </div>
          <div className="hidden slg:block">
            <button className="" onClick={() => setShowNavBar((show) => !show)}>
              <Hamburger />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={` shadow-md fixed  left-0 bg-[#0F101B]  w-full slg:flex hidden  items-center top-0 duration-500 overflow-hidden h-full flex-col justify-between ${
              showNavBar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between px-5 py-4 pt-12 items-center w-full">
              <div className="">
                <img loading="lazy" src="/Images/Logo.svg" alt="" />
              </div>
              <div className="">
                <button
                  className="text-white"
                  onClick={() => setShowNavBar((show) => !show)}
                >
                  <Close />
                </button>
              </div>
            </div>
            <ul className="flex items-center gap-x-4 flex-col h-4/5 justify-center gap-y-9">
              <li>
                <Link
                  onClick={() => setShowNavBar(false)}
                  className="cursor-pointer bg-white w-[129px] h-12 flex justify-center items-center font-popins rounded-md font-medium text-black"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowNavBar(false)}
                  className="cursor-pointer hover:text-black hover:bg-white duration-500 text-white w-[129px] h-12 flex justify-center items-center font-popins rounded-md  "
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowNavBar(false)}
                  className="cursor-pointer hover:text-black hover:bg-white duration-500 text-white w-[129px] h-12 flex justify-center items-center font-popins rounded-md  "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowNavBar(false)}
                  className="cursor-pointer hover:text-black hover:bg-white duration-500 text-white w-[129px] h-12 flex justify-center items-center font-popins rounded-md  "
                >
                  Team
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowNavBar(false)}
                  className="bg-[#212229] shadow-xl h-12 w-[143px] hover:bg-white duration-500 hover:text-black text-white rounded-md font-semibold"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
