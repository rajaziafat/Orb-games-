import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";

const AboutCards = (props) => {
  return (
    <div
      className={`flex text-white gap-10 justify-center ${props.direction} md:flex-col-reverse md:items-center`}
    >
      <motion.div
        {...fadeInFromLeft(0.2 * props.index + 0.2)}
        className={`w-[382px] h-[350px] sm:h-max sm:w-full ${props.gradientBg} rounded-2xl flex flex-col gap-y-5 px-7 py-9`}
      >
        <div className="w-20 h-20  flex justify-center items-center about-card-icon-bg rounded-xl">
          {props.icon}
        </div>
        <h3 className=" font-popins font-semibold text-2xl">{props.title}</h3>
        <p className="text-base font-popins">{props.description}</p>
      </motion.div>
      <motion.div
        {...fadeInFromLeft(0.2 * props.index + 0.1)}
        className=" w-6/12 xl:w-7/12 slg:w-8/12 md:w-full"
      >
        {/* <div className=" w-9/12 h-[500px]"> */}
        <img
          loading="lazy"
          className="w-full h-full object-contain"
          src={`/Images/about${props.index}.webp`}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default AboutCards;
