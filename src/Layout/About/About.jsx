import AboutCards from "../../Components/AboutCards/AboutCards";
import Helmet from "../../Components/Helmet/Helmet";
import { Dev, Game, Hand } from "../../utils/constants/Icons";

const About = () => {
  return (
    <div className="bg-[#0E101C] py-8 pt-12 relative">
      <img
        src="/Images/radial.svg"
        className="absolute top-0 left-0 w-full h-full z-10"
        alt=""
      />
      <Helmet>
        <h2 className="text-center text-5xl my-12 font-neuro leading-[59px] text-white sm:text-4xl xsm:text-3xl xsm:leading-10">
          Web3 Gaming Unleashed <span className="block"></span> on Orb Games
        </h2>
        <div className="mt-24 flex gap-24 flex-wrap relative z-30 sm:gap-20 sm:mt-20">
          <AboutCards
            direction="flex-row-reverse"
            icon={<Hand />}
            title="Innovative Play-to-Earn Model"
            description="Orbit Games implements a fair, sustainable, and accessible play-to-earn model,
ensuring every player has the opportunity to earn rewards through skillful play. "
            gradientBg="blue-gradient"
            index={1}
          />
          <AboutCards
            icon={<Game />}
            direction="flex-row"
            title="Expansive Game Selection  "
            description="Orbit Games offers a wide range of games across genres. Dive into action, strategy, puzzles, and more, each with unique earning opportunities  "
            index={2}
            gradientBg="orange-gradient"
          />
          <AboutCards
            direction="flex-row-reverse"
            icon={<Dev />}
            title="Developer Empowerment  "
            description="Offering compelling incentives, enabling developers and studios to easily monetize their creations and thrive in our ecosystem.  "
            index={3}
            gradientBg="purple-gradient"
          />
        </div>
      </Helmet>
    </div>
  );
};

export default About;
