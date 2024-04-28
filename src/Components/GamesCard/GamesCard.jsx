import { MdArrowOutward } from "react-icons/md";
import { IoPlay } from "react-icons/io5";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";

const GamesCard = (props) => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(`/Videos/1.mp4`);
  const OpenModal = () => {
    setOpen(true);
    setVideoUrl(`/Videos/${props.index}.mp4`);
  };
  const CloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <motion.div
        {...fadeInFromLeft(0.3 * props.index + 0.1)}
        className={`bg-[#1A1B22] cursor-pointer h-[513px]  sm:h-max p-5 rounded-xl ${props.className}`}
        onClick={OpenModal}
      >
        <div className="relative h-[295px]">
          <video
            disablePictureInPicture="true"
            src={`/Videos/${props.index}.mp4`}
            muted
            autoPlay
            playsInline
            controlsList="nodownload"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl "
          ></video>
          {/* <img
            src={`/Video/${props.index}.mp4`}
            className="w-full h-full sm:object-cover"
            loading="lazy"
            alt=""
          /> */}
          <button className="w-10 h-10 rounded-md absolute bottom-4 right-4 flex justify-center items-center text-white text-2xl orange-gradient ">
            <IoPlay />
          </button>
        </div>
        <h3 className="text-white font-semibold font-popins text-xl mt-3 sm:text-xl">
          GAME # {props.index}
        </h3>
        <p className="text-[#A1A1A1] sm:text-base font-popins text-lg mt-3 mb-5">
          {props.description}
        </p>
        <button className="text-white font-popins text-lg font-semibold flex justify-center gap-x-2 items-center">
          <MdArrowOutward /> Read More
        </button>
      </motion.div>
      <Modal show={open} closeModal={CloseModal} videoUrl={videoUrl} />
    </>
  );
};

export default GamesCard;
