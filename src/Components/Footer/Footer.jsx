import { Link } from "react-scroll";
import Helmet from "../Helmet/Helmet";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0E101C] py-10 ">
        <div className="border-y border-y-[#2E2E31]  flex">
          <Helmet style="flex md:flex-col">
            <div className="border-r border-r-[#2E2E31] md:border-b md:border-b-[#2e2e31] py-10 w-1/2 md:w-full md:border-r-0 md:flex md:flex-col md:items-center ">
              <motion.img
                {...fadeInFromLeft(0.3)}
                src="Images/logo-footer.png"
                alt=""
                className="w-52"
              />
              <motion.p
                {...fadeInFromLeft(0.4)}
                className="text-[#A1A1A1] font-popins text-lg mt-8  w-10/12 md:text-center sm:w-full"
              >
                Immersive gameplay meets sustainable economies, with asset
                values seamlessly tied to in-game progression and player-driven
                experiences.
              </motion.p>
              <motion.h2
                {...fadeInFromLeft(0.5)}
                className="font-semibold text-white mt-14 font-popins uppercase sm:mt-8"
              >
                Quick Links
              </motion.h2>
              <motion.ul
                {...fadeInFromLeft(0.7)}
                className="text-[#A1A1A1] text-lg flex items-center gap-5 mt-7 flex-wrap pr-4 md:text-base md:justify-center"
              >
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
                    Team
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
              </motion.ul>
            </div>
            <div className="py-10 w-1/2 pl-20 flex flex-col gap-y-5 md:w-full   md:pl-0 md:items-center md:text-center">
              <motion.h3
                {...fadeInFromLeft(0.8)}
                className="text-white font-popins font-semibold text-2xl"
              >
                Own the Game, Own the Value
              </motion.h3>
              <motion.p
                {...fadeInFromLeft(0.9)}
                className="text-[#A1A1A1] font-popins text-lg mt-8  w-10/12 sm:mt-3 sm:w-full"
              >
                Step into a new era of gaming where your skills and assets
                matter. Play, earn, and thrive in a sustainable economy built
                for gamers.
              </motion.p>
              <motion.button
                {...fadeInFromLeft(1)}
                className="btn-bg  w-[299px] sm:w-full sm:px-3 mt-4 h-14 rounded-md  text-white font-popins sm:block sm:mx-auto font-medium"
              >
                <span className="relative z-10">Join Epoch Games</span>
              </motion.button>
            </div>
          </Helmet>
        </div>
        <Helmet>
          <motion.p
            {...fadeInFromLeft(1.1)}
            className="text-[#A1A1A1]  text-xl mt-10 md:text-lg md:text-center sm:text-base"
          >
            © {new Date().getFullYear()} Epoch Games. All rights reserved.
          </motion.p>
        </Helmet>
      </footer>
    </>
  );
};

export default Footer;
