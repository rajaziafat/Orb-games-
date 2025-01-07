import NavBar from "../../Components/NavBar/NavBar";
import Helmet from "../../Components/Helmet/Helmet";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";
const Hero = () => {
  return (
    <div className="bg-heroBg home  bg-cover bg-no-repeat  h-[1277px] bg-center sm:h-[1300px]  md:h-[1500px]">
      <NavBar />
      <div className="pt-24 sm:pt-14">
        <Helmet>
          <motion.h3
            {...fadeInFromLeft(0.4)}
            className="text-white text-xl w-8/12 sm:w-full  font-neuro grid grid-flow-col items-center sm:text-sm"
          >
            {/* A gaming ecosystem built for players, with immersive gameplay and
            asset values directly tied to the in-game economy. */}
            An immersive gaming ecosystem where asset values are tied to the
            in-game economy
          </motion.h3>
          <motion.h1
            {...fadeInFromLeft(0.6)}
            className="text-7xl text-white my-7  font-neuro sm:text-center sm:text-5xl sm:leading-[70px] xsm:text-4xl xsm:leading-[60px]"
          >
            The Game Economy, Reinvented
            {/* Play, <br className="sm:hidden" /> Prosper, Build */}
          </motion.h1>
          <a href="https://epoch-games.gitbook.io/epoch-games" target="_blank">
            <motion.button
              {...fadeInFromLeft(0.8)}
              className="btn-bg w-[209px] mt-4 h-14 rounded-md  font-popins sm:block sm:mx-auto"
            >
              <span className="relative  z-10">Read Whitepaper</span>
            </motion.button>
          </a>
        </Helmet>
      </div>
    </div>
  );
};

export default Hero;
