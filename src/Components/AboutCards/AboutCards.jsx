import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";

const AboutCards = (props) => {
  return (
    <div
      className={`flex text-white gap-10 relative justify-center ${props.direction} md:flex-col-reverse md:items-center`}
    >
      <motion.div
        {...fadeInFromLeft(0.2 * props.index + 0.2)}
        className={`w-[382px] h-[350px] sticky top-10 left-0 sm:h-max sm:w-full ${props.gradientBg} rounded-2xl flex flex-col gap-y-5 px-7 py-9`}
      >
        <div className="w-20 h-20  flex justify-center items-center about-card-icon-bg rounded-xl">
          {props.icon}
        </div>
        <h3 className=" font-popins font-semibold text-2xl">{props.title}</h3>
        <p className="text-base font-popins">{props.description}</p>
      </motion.div>
      <motion.div
        {...fadeInFromLeft(0.2 * props.index + 0.1)}
        className=" w-6/12 xl:w-7/12 slg:w-8/12 md:w-full relative"
      >
        <div className=" w-full h-[500px] sm:h-[340px] relative bg-red-200 rounded-2xl overflow-hidden">
          {/* <ReactPlayer url={`/Videos/${props.index}.mp4`} autoPlay /> */}

          {props?.isVideo ? (
            <video
              src={props?.src}
              className="w-full h-full object-cover absolute  top-0 left-0"
              controlsList="nodownload"
              autoPlay
              muted
              loop
              type="video/mp4"
              playsInline
            ></video>
          ) : (
            <img
              src={props?.src}
              alt=""
              className="absolute top-0 left-0 object-cover size-full"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCards;
