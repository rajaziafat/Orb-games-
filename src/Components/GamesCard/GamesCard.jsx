import { MdArrowOutward } from "react-icons/md";
import { IoPlay } from "react-icons/io5";
import { useState } from "react";
import Modal from "../Modal/Modal";
const GamesCard = (props) => {
  const [open, setOpen] = useState(false);
  const OpenModal = () => {
    setOpen(true);
  };
  const CloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className={`bg-[#1A1B22] h-[513px]  sm:h-max p-5 rounded-xl ${props.className}`}
      >
        <div className="relative h-[295px]">
          <img
            src={`/Images/game${props.index}.png`}
            className="w-full h-full sm:object-cover"
            loading="lazy"
            alt=""
          />
          <button
            className="w-10 h-10 rounded-md absolute bottom-4 right-4 flex justify-center items-center text-white text-2xl orange-gradient "
            onClick={OpenModal}
          >
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
      </div>
      <Modal show={open} closeModal={CloseModal} />
    </>
  );
};

export default GamesCard;
