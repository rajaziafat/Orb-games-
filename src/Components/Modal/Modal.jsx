import {
  MdDownload,
  MdFullscreen,
  MdOutlineClose,
  MdPause,
  MdPlayArrow,
} from "react-icons/md";
import { IoIosArrowRoundForward, IoMdHeartEmpty } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import ReactPlayer from "react-player";
import { useRef } from "react";
const Modal = ({ show, closeModal, videoUrl }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [playvideo, setPalyVideo] = useState(videoUrl || `/Videos/1.mp4`);
  const playerRef = useRef();

  const togglePlay = () => setPlaying(!playing);
  const handleProgress = (progress) => setPlayed(progress.played);
  const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current.wrapper.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  //Slecting the Video
  const selectVideo = (id) => {
    setPalyVideo(`/Videos/${id}.mp4`);
  };
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  transform overflow-hidden rounded-2xl  p-6 sm:p-2 text-left align-middle shadow-xl transition-all">
                  <div className="bg-[#1A1B22] relative rounded-lg px-4 py-5 sm:py-9 sm:px-2">
                    <span
                      className="absolute top-3 right-3 text-white text-2xl cursor-pointer sm:top-1 sm:right-1"
                      onClick={closeModal}
                    >
                      <MdOutlineClose />
                    </span>
                    <div className="flex slg:flex-col gap-y-4">
                      <div className="w-7/12 slg:w-full sm:rounded-lg overflow-hidden">
                        <ReactPlayer
                          // url="https://www.youtube.com/watch?v=yUTvaWgK2QU"
                          url={playvideo}
                          controls={true}
                          className="!w-11/12 !h-[350px] slg:!w-full "
                        />
                        {/* <div className="controls">
                          <button onClick={togglePlay}>
                            {playing ? <MdPause /> : <MdPlayArrow />}
                          </button>
                          <input
                            type="range"
                            min={0}
                            max={1}
                            step="any"
                            value={played}
                            onChange={(e) =>
                              playerRef.current.seekTo(
                                parseFloat(e.target.value)
                              )
                            }
                          />
                          <button onClick={toggleFullScreen}>
                            <MdFullscreen />
                          </button>
                          <input
                            type="range"
                            min={0}
                            max={1}
                            step="0.05"
                            value={volume}
                            onChange={handleVolumeChange}
                          />
                          <a href="a.mp4" download>
                            <button>
                              <MdDownload />
                            </button>
                          </a>
                        </div> */}

                        <div className="mt-9 relative w-[90%] mx-auto  sm:mx-auto sm:mt-1">
                          <button className="w-5 h-5 swiper-prev-btn rounded-full text-xl bg-white absolute top-1/2 translate-y-1/2 -left-3 z-10">
                            <IoIosArrowRoundBack />
                          </button>
                          <button className="w-5 h-5 swiper-next-btn rounded-full text-xl bg-white absolute top-1/2 translate-y-1/2 right-0 z-10 sm:-right-3">
                            <IoIosArrowRoundForward />
                          </button>
                          <button></button>
                          <Swiper
                            pagination={{
                              el: ".swiper-custom-pagination",
                              clickable: true,
                            }}
                            // autoplay={true}
                            slidesPerView={4}
                            allowSlideNext={true}
                            allowSlidePrev={true}
                            loop={true}
                            navigation={{
                              nextEl: ".swiper-next-btn",
                              prevEl: ".swiper-prev-btn",
                            }}
                            spaceBetween={30}
                            modules={[Pagination, Autoplay, Navigation]}
                            className="mySwiper w-full h-full"
                            breakpoints={{
                              0: { slidesPerView: "auto" },
                              300: { slidesPerView: 2 },
                              600: { slidesPerView: 4 },
                            }}
                          >
                            <SwiperSlide onClick={() => selectVideo(3)}>
                              <ModalVideoCard img={3} />
                            </SwiperSlide>
                            <SwiperSlide onClick={() => selectVideo(2)}>
                              <ModalVideoCard img={2} />
                            </SwiperSlide>
                            <SwiperSlide onClick={() => selectVideo(1)}>
                              <ModalVideoCard img={1} />
                            </SwiperSlide>
                            <SwiperSlide onClick={() => selectVideo(3)}>
                              <ModalVideoCard img={3} />
                            </SwiperSlide>
                            <SwiperSlide onClick={() => selectVideo(2)}>
                              <ModalVideoCard img={2} />
                            </SwiperSlide>
                            <SwiperSlide onClick={() => selectVideo(1)}>
                              <ModalVideoCard img={1} />
                            </SwiperSlide>
                            <SwiperSlide onClick={() => selectVideo(3)}>
                              <ModalVideoCard img={3} />
                            </SwiperSlide>
                            <SwiperSlide onClick={() => selectVideo(2)}>
                              <ModalVideoCard img={2} />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div className="py-2 text-white w-5/12 pr-5 slg:w-full sm:mt-2 sm:text-center  sm:pr-0">
                        <div className="flex gap-x-3 sm:justify-center">
                          <button className=" bg-[#0E101C] rounded-md p-1 px-2">
                            ACTION
                          </button>
                          <button className=" bg-[#0E101C] rounded-md p-1 px-2">
                            FPS
                          </button>
                          <button className=" bg-[#0E101C] rounded-md p-1 px-2">
                            TACTICAL
                          </button>
                        </div>
                        <h1 className="font-neuro  text-6xl mt-4 md:text-5xl sm:text-4xl">
                          Valorant
                        </h1>
                        <p className="font-popins text-[#A1A1A1] text-lg my-8">
                          Valorant is a fast-paced, tactical first-person
                          shooter where players engage in strategic team-based
                          combat using a diverse cast of heroes and their unique
                          abilities.
                        </p>
                        <div className="flex gap-x-7 items-center my-5 sm:justify-center">
                          <h3 className="font-medium font-popins text-xl ">
                            Developer:
                          </h3>
                          <div className="orange-gradient rounded-md px-2 w-max text-sm py-1">
                            Roit Games
                          </div>
                        </div>
                        <div className="flex gap-x-7 items-center sm:justify-center">
                          <h3 className="font-medium font-popins text-xl ">
                            Status:
                          </h3>
                          <div className="bg-[#0E101C] rounded-md px-2 w-max text-sm py-1">
                            Launched
                          </div>
                        </div>
                        <div className="flex gap-x-4 mt-8  gap-y-4 w-full sm:gap-x-2">
                          <button className="h-14 orange-gradient rounded-md w-full">
                            Play Game
                          </button>
                          <span className="text-white bg-[#0E101C] w-16 rounded-md grid place-items-center text-4xl">
                            <IoMdHeartEmpty />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const ModalVideoCard = (props) => {
  return (
    <div className="w-[160px] h-[81px] relative cursor-pointer">
      <video
        src={`/Videos/${props.img}.mp4`}
        disablePictureInPicture="true"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
        playsInline
        controlsList="nodownload"
      ></video>
      {/* <img src={`/Images/Modal${props.img}.png`} alt="" /> */}
    </div>
  );
};

export default Modal;
