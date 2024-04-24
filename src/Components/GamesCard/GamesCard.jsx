import { MdArrowOutward } from "react-icons/md";
import { IoPlay } from "react-icons/io5";
const GamesCard = (props) => {
  return (
    <div className={`bg-[#1A1B22] h-[513px] p-5 rounded-xl ${props.className}`}>
      <div className="relative h-[295px]">
        <img
          src={`/Images/game${props.index}.png`}
          className="w-full h-full"
          loading="lazy"
          alt=""
        />
        <button className="w-10 h-10 rounded-md absolute bottom-4 right-4 flex justify-center items-center text-white text-2xl orange-gradient ">
          <IoPlay />
        </button>
      </div>
      <h3 className="text-white font-semibold font-popins text-2xl mt-3">
        GAME # {props.index}
      </h3>
      <p className="text-[#A1A1A1] font-popins text-lg mt-3 mb-5">
        {props.description}
      </p>
      <button className="text-white font-popins text-lg font-semibold flex justify-center gap-x-2 items-center">
        <MdArrowOutward /> Read More
      </button>
    </div>
  );
};

export default GamesCard;
