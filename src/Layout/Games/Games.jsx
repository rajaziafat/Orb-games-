import { motion } from "framer-motion";
import GamesCard from "../../Components/GamesCard/GamesCard";
import Helmet from "../../Components/Helmet/Helmet";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";

const Games = () => {
  return (
    <>
      <div className="pt-16 pb-10 bg-[#0E101C]  -translate-y-1 relative games sm:pt-12">
        <Helmet>
          <div className="border border-[#2E2E31] rounded-2xl flex justify-between items-center px-4 py-4 sm:justify-center">
            <motion.h3
              {...fadeInFromLeft(0.3)}
              className="text-white font-neuro text-3xl sm:text-4xl"
            >
              Games
            </motion.h3>
            <motion.button
              {...fadeInFromLeft(0.4)}
              className="bg-[#212229] shadow-xl h-12 w-[143px] hover:bg-white duration-500 hover:text-black text-white rounded-md font-semibold sm:hidden"
            >
              View More
            </motion.button>
          </div>
          <div className="flex mt-9 gap-8 xl:gap-10 sm:gap-7 flex-wrap justify-center w-full">
            <GamesCard
              index={1}
              className="w-[488px] sm:w-full lg:w-[349px]"
              description="Fair Web3 gaming, earn through skill, and leverage our framework that rewards every play and innovation..."
            />
            <GamesCard
              index={2}
              className="w-[349px] md:w-[488px] sm:w-full"
              description="Fair Web3 gaming, earn through skill, and leverage our framework that..."
            />
            <GamesCard
              index={3}
              className="w-[349px] md:w-[488px] sm:w-full"
              description="Fair Web3 gaming, earn through skill, and leverage our framework that..."
            />
          </div>
          <button className="bg-[#212229] shadow-xl h-12 w-[143px] hover:bg-white duration-500 hover:text-black text-white rounded-md font-semibold hidden sm:flex mx-auto justify-center items-center mt-9">
            View More
          </button>
        </Helmet>
        <div className="absolute bottom-0 left-0 bg-[#0E101C]  w-full h-2 translate-y-1"></div>
      </div>
    </>
  );
};

export default Games;
