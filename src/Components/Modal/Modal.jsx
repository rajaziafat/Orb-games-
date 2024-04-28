import {
  MdDownload,
  MdFullscreen,
  MdOutlineClose,
  MdPause,
  MdPlayArrow,
} from "react-icons/md";
import { IoIosArrowRoundForward, IoMdHeartEmpty } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
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
                  <div className="bg-red-300 py-10 flex justify-center flex-col">
                    <div className="flex gap-x-5 mb-4 z-10">
                      <button className="text-white border px-2 py-2 swiper-prev">
                        Prev
                      </button>
                      <button className="text-white border px-2 py-2 swiper-next">
                        Next
                      </button>
                    </div>
                    <Swiper
                      slidesPerView={4}
                      navigation={{
                        prevEl: ".swiper-prev",
                        nextEl: ".swiper-next",
                      }}
                      rewind={true}
                      className="mySwiper w-full py-8"
                      modules={[Navigation]}
                    >
                      <SwiperSlide>
                        <img src={`/Images/Modal1.png`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`/Images/Modal1.png`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`/Images/Modal1.png`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`/Images/Modal1.png`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`/Images/Modal2.png`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`/Images/Modal1.png`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`/Images/Modal1.png`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={`/Images/Modal1.png`} alt="" />
                      </SwiperSlide>
                    </Swiper>
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

export default Modal;
