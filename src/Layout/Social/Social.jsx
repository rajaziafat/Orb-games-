import { motion } from "framer-motion";
import Helmet from "../../Components/Helmet/Helmet";
import { BsTelegram, BsMedium } from "react-icons/bs";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";

const Social = () => {
  return (
    <>
      <div className="bg-[#0E101C] sm:hidden py-8 pt-20   relative bg-scoailBg bg-cover h-[400px] flex justify-center items-center ">
        <Helmet style="">
          <div className="w-10/12 md:w-full absolute bottom-[6rem] left-1/2 -translate-x-1/2 flex justify-end items-center md:bottom-[2rem]">
            <div className="flex items-center justify-between w-10/12  gap-10 md:w-6/12">
              <h3 className="text-white font-neuro text-3xl sm:text-4xl">
                ORB Games
              </h3>
              <div className="flex gap-5 flex-wrap justify-end pr-5">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500"
                >
                  <BsTelegram />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500"
                >
                  <BsMedium />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500 group"
                >
                  {/* <SiGitbook /> */}
                  <svg
                    width="25"
                    height="19"
                    viewBox="0 0 25 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2519 15.0187C11.348 15.0188 11.4432 15.0379 11.532 15.0748C11.6208 15.1117 11.7015 15.1658 11.7694 15.2339C11.8373 15.302 11.8911 15.3828 11.9278 15.4717C11.9645 15.5606 11.9833 15.6558 11.9831 15.752C11.983 15.8482 11.9639 15.9434 11.927 16.0322C11.8901 16.121 11.836 16.2016 11.7679 16.2695C11.6998 16.3374 11.619 16.3913 11.5301 16.4279C11.4412 16.4646 11.3459 16.4834 11.2498 16.4833C11.0556 16.483 10.8694 16.4056 10.7323 16.2681C10.5951 16.1305 10.5182 15.9442 10.5185 15.7499C10.5188 15.5557 10.5962 15.3696 10.7337 15.2324C10.8713 15.0953 11.0576 15.0184 11.2519 15.0187ZM22.7354 10.4905C22.6392 10.4904 22.544 10.4714 22.4552 10.4345C22.3664 10.3977 22.2857 10.3437 22.2177 10.2756C22.1498 10.2076 22.0959 10.1268 22.0591 10.0379C22.0224 9.94906 22.0035 9.85382 22.0036 9.75765C22.0037 9.66148 22.0227 9.56627 22.0595 9.47745C22.0964 9.38863 22.1504 9.30794 22.2185 9.23998C22.2865 9.17203 22.3673 9.11815 22.4561 9.08141C22.545 9.04467 22.6403 9.0258 22.7364 9.02587C22.9306 9.026 23.1169 9.10329 23.2541 9.24072C23.3913 9.37815 23.4683 9.56447 23.4682 9.75869C23.4681 9.95291 23.3908 10.1391 23.2534 10.2764C23.1159 10.4136 22.9296 10.4906 22.7354 10.4905ZM22.7354 7.49459C22.1349 7.49514 21.5592 7.73391 21.1347 8.15849C20.7101 8.58307 20.4713 9.15877 20.4708 9.75921C20.4708 10.0019 20.5114 10.2436 20.5906 10.479L13.1102 14.4614C12.9028 14.1602 12.6253 13.914 12.3015 13.744C11.9778 13.5739 11.6175 13.4852 11.2519 13.4853C10.3883 13.4853 9.60184 13.9801 9.22058 14.752L2.50068 11.2082C1.79025 10.8353 1.25899 9.6665 1.31525 8.6019C1.34441 8.04668 1.53608 7.61543 1.8288 7.44876C2.01422 7.34459 2.23714 7.35292 2.47464 7.47688L2.51839 7.50084C4.29967 8.43836 10.1268 11.5082 10.3727 11.6217C10.7508 11.7978 10.9612 11.8686 11.6071 11.5624L23.6531 5.29768C23.8302 5.23101 24.0364 5.06122 24.0364 4.80392C24.0364 4.44767 23.6677 4.30704 23.6666 4.30704C22.9812 3.97891 21.9281 3.48619 20.901 3.00494C18.7051 1.97679 16.2165 0.812192 15.1238 0.239266C14.18 -0.254492 13.4206 0.162181 13.2852 0.245516L13.0227 0.375726C8.1039 2.80806 1.52046 6.06853 1.14545 6.29666C0.475649 6.705 0.060017 7.51855 0.00584948 8.52794C-0.0774852 10.129 0.738153 11.7988 1.90588 12.4103L9.01225 16.0749C9.09053 16.6133 9.35988 17.1054 9.77108 17.4616C10.1823 17.8177 10.7079 18.014 11.2519 18.0146C11.846 18.0135 12.4159 17.7794 12.8392 17.3626C13.2625 16.9457 13.5053 16.3794 13.5154 15.7853L21.3427 11.5426C21.7385 11.853 22.2312 12.0228 22.7354 12.0228C23.3358 12.0222 23.9115 11.7835 24.3361 11.3589C24.7607 10.9343 24.9994 10.3586 25 9.75817C24.9994 9.15772 24.7607 8.58203 24.3361 8.15745C23.9115 7.73287 23.3358 7.4941 22.7354 7.49355"
                      className="group-hover:fill-[#191E29] duration-500 fill-white"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>
        </Helmet>
      </div>

      {/* Section for Mobile */}
      <div className="bg-[#0E101C] pt-10 relative  hidden sm:block ">
        <div className="bg-scoailMobileBg min-h-[900px] sm:min-h-[680px] bg-cover relative pt-[12rem] ">
          <div className="flex items-center justify-between w-full flex-col gap-y-8">
            <motion.h3
              {...fadeInFromLeft(0.2)}
              className="text-white font-neuro text-3xl sm:text-4xl"
            >
              ORB Games
            </motion.h3>
            <div className="flex gap-5 flex-wrap justify-end pr-5 sm:justify-center sm:pr-0">
              <motion.a
                {...fadeInFromLeft(0.3)}
                href="#"
                className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500"
              >
                <BsTelegram />
              </motion.a>
              <motion.a
                {...fadeInFromLeft(0.4)}
                href="#"
                className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500"
              >
                <FaXTwitter />
              </motion.a>
              <motion.a
                {...fadeInFromLeft(0.5)}
                href="#"
                className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500"
              >
                <BsMedium />
              </motion.a>
              <motion.a
                {...fadeInFromLeft(0.6)}
                href="#"
                className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500 group"
              >
                {/* <SiGitbook /> */}
                <svg
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2519 15.0187C11.348 15.0188 11.4432 15.0379 11.532 15.0748C11.6208 15.1117 11.7015 15.1658 11.7694 15.2339C11.8373 15.302 11.8911 15.3828 11.9278 15.4717C11.9645 15.5606 11.9833 15.6558 11.9831 15.752C11.983 15.8482 11.9639 15.9434 11.927 16.0322C11.8901 16.121 11.836 16.2016 11.7679 16.2695C11.6998 16.3374 11.619 16.3913 11.5301 16.4279C11.4412 16.4646 11.3459 16.4834 11.2498 16.4833C11.0556 16.483 10.8694 16.4056 10.7323 16.2681C10.5951 16.1305 10.5182 15.9442 10.5185 15.7499C10.5188 15.5557 10.5962 15.3696 10.7337 15.2324C10.8713 15.0953 11.0576 15.0184 11.2519 15.0187ZM22.7354 10.4905C22.6392 10.4904 22.544 10.4714 22.4552 10.4345C22.3664 10.3977 22.2857 10.3437 22.2177 10.2756C22.1498 10.2076 22.0959 10.1268 22.0591 10.0379C22.0224 9.94906 22.0035 9.85382 22.0036 9.75765C22.0037 9.66148 22.0227 9.56627 22.0595 9.47745C22.0964 9.38863 22.1504 9.30794 22.2185 9.23998C22.2865 9.17203 22.3673 9.11815 22.4561 9.08141C22.545 9.04467 22.6403 9.0258 22.7364 9.02587C22.9306 9.026 23.1169 9.10329 23.2541 9.24072C23.3913 9.37815 23.4683 9.56447 23.4682 9.75869C23.4681 9.95291 23.3908 10.1391 23.2534 10.2764C23.1159 10.4136 22.9296 10.4906 22.7354 10.4905ZM22.7354 7.49459C22.1349 7.49514 21.5592 7.73391 21.1347 8.15849C20.7101 8.58307 20.4713 9.15877 20.4708 9.75921C20.4708 10.0019 20.5114 10.2436 20.5906 10.479L13.1102 14.4614C12.9028 14.1602 12.6253 13.914 12.3015 13.744C11.9778 13.5739 11.6175 13.4852 11.2519 13.4853C10.3883 13.4853 9.60184 13.9801 9.22058 14.752L2.50068 11.2082C1.79025 10.8353 1.25899 9.6665 1.31525 8.6019C1.34441 8.04668 1.53608 7.61543 1.8288 7.44876C2.01422 7.34459 2.23714 7.35292 2.47464 7.47688L2.51839 7.50084C4.29967 8.43836 10.1268 11.5082 10.3727 11.6217C10.7508 11.7978 10.9612 11.8686 11.6071 11.5624L23.6531 5.29768C23.8302 5.23101 24.0364 5.06122 24.0364 4.80392C24.0364 4.44767 23.6677 4.30704 23.6666 4.30704C22.9812 3.97891 21.9281 3.48619 20.901 3.00494C18.7051 1.97679 16.2165 0.812192 15.1238 0.239266C14.18 -0.254492 13.4206 0.162181 13.2852 0.245516L13.0227 0.375726C8.1039 2.80806 1.52046 6.06853 1.14545 6.29666C0.475649 6.705 0.060017 7.51855 0.00584948 8.52794C-0.0774852 10.129 0.738153 11.7988 1.90588 12.4103L9.01225 16.0749C9.09053 16.6133 9.35988 17.1054 9.77108 17.4616C10.1823 17.8177 10.7079 18.014 11.2519 18.0146C11.846 18.0135 12.4159 17.7794 12.8392 17.3626C13.2625 16.9457 13.5053 16.3794 13.5154 15.7853L21.3427 11.5426C21.7385 11.853 22.2312 12.0228 22.7354 12.0228C23.3358 12.0222 23.9115 11.7835 24.3361 11.3589C24.7607 10.9343 24.9994 10.3586 25 9.75817C24.9994 9.15772 24.7607 8.58203 24.3361 8.15745C23.9115 7.73287 23.3358 7.4941 22.7354 7.49355"
                    className="group-hover:fill-[#191E29] duration-500 fill-white"
                  />
                </svg>
              </motion.a>
              <motion.a
                {...fadeInFromLeft(0.7)}
                href="#"
                className="w-12 h-12 rounded-xl bg-[#191E29] grid place-items-center text-2xl text-white hover:bg-white hover:text-[#191e29] duration-500"
              >
                <FaDiscord />
              </motion.a>
            </div>
          </div>
          <motion.img
            src="Images/girl.png"
            className="absolute bottom-0 left-0 w-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Social;
