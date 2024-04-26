import { Link } from "react-scroll";
import Helmet from "../Helmet/Helmet";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0E101C] py-10 ">
        <div className="border-y border-y-[#2E2E31]  flex">
          <Helmet style="flex md:flex-col">
            <div className="border-r border-r-[#2E2E31] py-10 w-1/2 md:w-full md:border-r-0 md:flex md:flex-col md:items-center ">
              <img src="Images/Logo.svg" alt="" />
              <p className="text-[#A1A1A1] font-popins text-lg mt-8  w-10/12 md:text-center sm:w-full">
                Fair Web3 gaming, earn through skill, and leverage our framework
                that rewards every play and innovation
              </p>
              <h2 className="font-semibold text-white mt-14 font-popins uppercase ">
                Quick Links
              </h2>
              <ul className="text-[#A1A1A1] text-lg flex items-center gap-5 mt-7 flex-wrap pr-4 md:text-base md:justify-center">
                <li>
                  <Link
                    smooth={true}
                    to="home"
                    className="cursor-pointer duration-500 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    smooth={true}
                    to="games"
                    className="cursor-pointer duration-500 hover:text-white"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    smooth={true}
                    to="about"
                    className="cursor-pointer duration-500 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    smooth={true}
                    to="team"
                    className="cursor-pointer duration-500 hover:text-white"
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    smooth={true}
                    to=""
                    className="cursor-pointer duration-500 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="py-10 w-1/2 pl-20 flex flex-col gap-y-5 md:w-full  md:pl-0 md:items-center md:text-center">
              <h3 className="text-white font-popins font-semibold text-2xl">
                Join the Play-to-Earn Revolution with Us
              </h3>
              <p className="text-[#A1A1A1] font-popins text-lg mt-8  w-10/12">
                Embrace the future of gaming with us and experience the
                Play-to-Earn revolution firsthand. Join our community today and
                start earning rewards through skillful play
              </p>
              <button className="btn-bg  w-[299px] sm:w-full sm:px-3 mt-4 h-14 rounded-md  text-white font-popins sm:block sm:mx-auto font-medium">
                <span className="relative z-10">Join the Orbit Games</span>
              </button>
            </div>
          </Helmet>
        </div>
        <Helmet>
          <p className="text-[#A1A1A1]  text-xl mt-10 md:text-lg md:text-center">
            © {new Date().getFullYear()} Orbit Games. All rights reserved.
          </p>
        </Helmet>
      </footer>
    </>
  );
};

export default Footer;
