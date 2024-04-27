import NavBar from "../../Components/NavBar/NavBar";
import Helmet from "../../Components/Helmet/Helmet";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";
const Hero = () => {
  return (
    <div className="bg-heroBg home sm:bg-heromobileBg bg-cover bg-no-repeat min-h-screen h-[1277px] bg-center sm:h-[860px]">
      <NavBar />
      <div className="pt-24 sm:pt-14">
        <Helmet>
          <motion.h3
            {...fadeInFromLeft(0.4)}
            className="text-white text-xl w-max sm:w-full  font-neuro grid grid-flow-col items-center sm:text-sm"
          >
            Web3 Gaming in Orbit
            <span className="orange-gradient w-14 h-14 sm:w-10 sm:h-10 sm:text-base sm:text-center flex justify-center items-center rounded-full mx-2 sm:-mx-5">
              ON
            </span>
            Orb
          </motion.h3>
          <motion.h1
            {...fadeInFromLeft(0.6)}
            className="text-7xl text-white my-7 font-neuro sm:text-center sm:text-6xl sm:leading-[100px] xsm:text-5xl xsm:leading-[60px]"
          >
            Play, <br className="sm:hidden" /> Prosper, Build
          </motion.h1>
          <motion.button
            {...fadeInFromLeft(0.8)}
            className="btn-bg w-[209px] mt-4 h-14 rounded-md  font-popins sm:block sm:mx-auto"
          >
            <span className="relative  z-10">Read Whitepaper</span>
          </motion.button>
        </Helmet>
      </div>
    </div>
  );
};

export default Hero;
