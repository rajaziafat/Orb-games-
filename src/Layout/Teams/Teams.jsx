import Helmet from "../../Components/Helmet/Helmet";
import TeamsCard from "../../Components/TeamsCard/TeamsCard";
import {
  TeamLeftGradient,
  TeamSmallGradientCircle,
} from "../../utils/constants/Icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
const Teams = () => {
  return (
    <div className="bg-[#0E101C] py-8 pt-20   relative">
      <div className="absolute top-0 right-[5%]">
        <TeamSmallGradientCircle />
      </div>
      <div className="absolute top-0 left-0">
        <TeamLeftGradient />
      </div>
      <Helmet>
        <h2 className="text-center relative z-10 text-5xl my-12 font-neuro leading-[59px] text-white sm:text-4xl xsm:text-3xl xsm:leading-10">
          Meet the Team
        </h2>
        <div className="mt-14 relative z-10 flex justify-center gap-16 slg:flex-wrap sm:hidden ">
          <TeamsCard
            className=""
            parentTilt="rotate-[4deg]"
            imgTilt="-rotate-[2deg]"
            img="Images/team1.png"
            title="Alex Nguyen - CTO"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team2.png"
            title="Sarah Chen - CEO"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team3.png"
            title="Michael DOE - CFO"
          />
        </div>
        <div className="mt-5 relative z-10 flex justify-center  gap-16 slg:flex-wrap sm:hidden">
          <TeamsCard
            className=""
            parentTilt="rotate-[4deg]"
            imgTilt="-rotate-[2deg]"
            img="Images/team1.png"
            title="Alex Nguyen - CTO"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team2.png"
            title="Sarah Chen - CEO"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team3.png"
            title="Michael DOE - CFO"
          />
        </div>
        <div className=" hidden sm:block">
          <Swiper
            pagination={{
              el: ".swiper-custom-pagination",
              clickable: true,
            }}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide className="flex justify-center items-center text-center">
              <div className="mt-5 relative z-10 flex justify-center  gap-16 slg:flex-wrap ">
                <TeamsCard
                  className=""
                  parentTilt="rotate-[4deg]"
                  imgTilt="-rotate-[2deg]"
                  img="Images/team1.png"
                  title="Alex Nguyen - CTO"
                />
                <TeamsCard
                  className=""
                  parentTilt="-rotate-[4deg]"
                  imgTilt="rotate-[2deg]"
                  img="Images/team2.png"
                  title="Sarah Chen - CEO"
                />
                <TeamsCard
                  className=""
                  parentTilt="-rotate-[4deg]"
                  imgTilt="rotate-[2deg]"
                  img="Images/team3.png"
                  title="Michael DOE - CFO"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center text-center">
              {" "}
              <div className="mt-5 relative z-10 flex justify-center  gap-16 slg:flex-wrap ">
                <TeamsCard
                  className=""
                  parentTilt="rotate-[4deg]"
                  imgTilt="-rotate-[2deg]"
                  img="Images/team1.png"
                  title="Alex Nguyen - CTO"
                />
                <TeamsCard
                  className=""
                  parentTilt="-rotate-[4deg]"
                  imgTilt="rotate-[2deg]"
                  img="Images/team2.png"
                  title="Sarah Chen - CEO"
                />
                <TeamsCard
                  className=""
                  parentTilt="-rotate-[4deg]"
                  imgTilt="rotate-[2deg]"
                  img="Images/team3.png"
                  title="Michael DOE - CFO"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center text-center">
              {" "}
              <div className="mt-5 relative z-10 flex justify-center  gap-16 slg:flex-wrap ">
                <TeamsCard
                  className=""
                  parentTilt="rotate-[4deg]"
                  imgTilt="-rotate-[2deg]"
                  img="Images/team1.png"
                  title="Alex Nguyen - CTO"
                />
                <TeamsCard
                  className=""
                  parentTilt="-rotate-[4deg]"
                  imgTilt="rotate-[2deg]"
                  img="Images/team2.png"
                  title="Sarah Chen - CEO"
                />
                <TeamsCard
                  className=""
                  parentTilt="-rotate-[4deg]"
                  imgTilt="rotate-[2deg]"
                  img="Images/team3.png"
                  title="Michael DOE - CFO"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-custom-pagination  flex justify-center mt-10"></div>
        </div>
      </Helmet>
    </div>
  );
};

export default Teams;
