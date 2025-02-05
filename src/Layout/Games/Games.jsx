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
              title="Epoch Defense"
              className="w-[488px] md:w-[488px] sm:w-full lg:w-[349px]"
              description="Defend your world in Epoch Defense, a fast-paced strategy game where powerful energy pylons fuel your fight against relentless enemies and shape the tide of battle."
              status="Pre Alpha"
              btnTitle="Sign up to Whitelist"
              tags={["Action", "FPS", "Tactical"]}
              images={[
                "/Images/g1_1.png",
                "/Images/g1_2.png",
                "/Images/g1_3.png",
                "/Images/g1_4.png",
                "/Images/g1_5.png",
                "/Images/g1_6.png",
              ]}
              btnLink="https://docs.google.com/forms/d/e/1FAIpQLSdCurl1SLnIrE8XDZfR1iymz8SLA1x8uwGEHbGKLGoLsLC2Dw/viewform?usp=sharing"
            />
            <GamesCard
              index={2}
              title="True Fathom"
              className="w-[349px] md:w-[488px] sm:w-full"
              description="True Fathom is a thrilling one-on-one strategy game where cards, dice, and quick thinking collide. Outsmart opponents and strike at the perfect moment to claim victory.
"
              status="Alpha"
              btnTitle="Sign up to Whitelist"
              tags={["Card Games", "Strategy"]}
              images={["/Videos/g2.mp4"]}
              isVideo={true}
              btnLink="https://docs.google.com/forms/d/e/1FAIpQLSeaw0S6Xd7wkA7-C-AR52RqSzBl990iBy7Bxsx72iWo6FF_Pg/viewform?usp=sharing
"
            />
            <GamesCard
              index={3}
              title="Epoch Nexus"
              className="w-[349px] md:w-[488px] sm:w-full"
              description="Epoch Nexus is your hub for managing land, boosting gameplay, and connecting all Epoch Games. Build facilities to unlock unique rewards, resources, and advantages across the ecosystem."
              status="Launched"
              btnTitle="Play Game"
              tags={[" Land Management", "Economy", "Utility"]}
              images={["/Images/g3.png"]}
              // images={["/Videos/3.mp4"]}
              // isVideo={true}
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
