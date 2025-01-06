import { motion } from "framer-motion";
import AboutCards from "../../Components/AboutCards/AboutCards";
import Helmet from "../../Components/Helmet/Helmet";
import { Dev, Game, Hand } from "../../utils/constants/Icons";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";

const About = () => {
  return (
    <div className="bg-[#0E101C] py-8 pt-12 relative about md:overflow-hidden sm:pt-0">
      <svg
        viewBox="0 0 386 600"
        className="absolute top-0 left-0 w-[386px] h-[600px] sm:w-[100px] sm:h-[200px] sm:top-[20%] "
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3216_4)">
          <circle cx="86" cy="300" r="148" fill="url(#paint0_linear_3216_4)" />
        </g>
        <defs>
          <filter
            id="filter0_f_3216_4"
            x="-213.899"
            y="0.101273"
            width="599.797"
            height="599.797"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75.9494"
              result="effect1_foregroundBlur_3216_4"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3216_4"
            x1="86"
            y1="152"
            x2="86"
            y2="448"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4B4B50" />
            <stop offset="1" stopColor="#24252D" />
          </linearGradient>
        </defs>
      </svg>

      <img
        src="/Images/radial.svg"
        className="absolute top-0 left-0 w-full h-full z-10"
        alt=""
      />
      <Helmet>
        <motion.h2
          {...fadeInFromLeft(0.2)}
          className="text-center text-5xl z-20 relative my-12 font-neuro leading-[59px] text-white sm:text-4xl xsm:text-3xl xsm:leading-10"
        >
          Web3 Gaming Unleashed <span className="block"></span> on Epoch Games
        </motion.h2>
        <div className="mt-24 flex gap-24 flex-wrap relative z-30 sm:gap-9 sm:mt-9 flex-col ">
          <AboutCards
            direction="flex-row-reverse"
            icon={<Hand />}
            title="Stable Value, Sustainable Gameplay
"
            description="Playable assets are directly anchored within the in-game economy, adding base stability and contributing to the overall health of the ecosystem.
 "
            gradientBg="blue-gradient"
            index={1}
            src="/about-1.png"
          />
          <AboutCards
            icon={<Game />}
            direction="flex-row"
            title="Earn Through Engagement"
            description="Epoch Games puts players first by tying rewards to skill, performance, and participation, creating a fair and thriving community.
"
            index={2}
            gradientBg="orange-gradient"
            src="/about-2.mp4"
            isVideo={true}
          />
          <AboutCards
            direction="flex-row-reverse"
            icon={<Dev />}
            title="Masters of the Craft  "
            description="With experience on legendary titles like Diablo, Gears of War, and Warcraft, our team combines AAA expertise with cutting-edge innovation."
            index={3}
            gradientBg="purple-gradient"
            src="/about-3.png"
          />
        </div>
      </Helmet>
    </div>
  );
};

export default About;
