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
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/helpers/Animation/FadeFromLeftAnimation";
const Teams = () => {
  const teamMembers = [
    {
      name: "Kai Hatherley",
      title: "COO",
      img: "Images/team1.png",
      parentTilt: "rotate-[4deg]",
      imgTilt: "-rotate-[2deg]",
    },
    {
      name: "Daniel Jensen",
      title: "CEO",
      img: "Images/team2.png",
      parentTilt: "-rotate-[4deg]",
      imgTilt: "rotate-[2deg]",
    },
    {
      name: "Christopher (Lav) Taylor",
      title: "Head of Game Development",
      img: "Images/team3.png",
      parentTilt: "-rotate-[4deg]",
      imgTilt: "rotate-[2deg]",
    },
    {
      name: "Artem Zaitsev",
      title: "CTO",
      img: "Images/team1.png",
      parentTilt: "rotate-[4deg]",
      imgTilt: "-rotate-[2deg]",
    },
    {
      name: "Marek Benda",
      title: "Community Manager",
      img: "Images/team2.png",
      parentTilt: "-rotate-[4deg]",
      imgTilt: "rotate-[2deg]",
    },
    {
      name: "Jung Woong Park",
      title: "Strategic Advisor",
      img: "Images/team3.png",
      parentTilt: "rotate-[4deg]",
      imgTilt: "-rotate-[2deg]",
    },
    {
      name: "Ivan Tomic",
      title: "Advisor",
      img: "Images/team1.png",
      parentTilt: "-rotate-[4deg]",
      imgTilt: "rotate-[2deg]",
    },
  ];

  return (
    <div className="bg-[#0E101C] py-8 pt-20   relative team overflow-hidden sm:pt-0">
      <div className="absolute top-0 right-[5%] sm:hidden">
        <TeamSmallGradientCircle />
      </div>
      <div className="absolute top-0 left-0 sm:hidden">
        <TeamLeftGradient />
      </div>
      <Helmet>
        <motion.h2
          {...fadeInFromLeft(0.2)}
          className="text-center relative z-10 text-5xl my-12 font-neuro leading-[59px] text-white sm:text-3xl xsm:text-[27px] xsm:mt-5 xsm:leading-10"
        >
          Meet the Team
        </motion.h2>
        <motion.div
          {...fadeInFromLeft(0.4)}
          className="mt-14 relative z-10 flex flex-wrap justify-center gap-16 gap-y-20  sm:hidden "
        >
          {teamMembers.map((member, index) => (
            <TeamsCard
              key={index}
              className=""
              parentTilt={member.parentTilt}
              imgTilt={member.imgTilt}
              img={member.img}
              title={`${member.name} - ${member.title}`}
            />
          ))}
          {/* <TeamsCard
            className=""
            parentTilt="rotate-[4deg]"
            imgTilt="-rotate-[2deg]"
            img="Images/team1.png"
            title="Kai Hatherley - COO
"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team2.png"
            title="Daniel Jensen - CEO"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team3.png"
            title="Christopher (Lav) Taylor  Head of Game Development"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team3.png"
            title="Artem Zaitsev CTO"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team3.png"
            title="Marek Benda - CMO"
          />
          <TeamsCard
            className=""
            parentTilt="-rotate-[4deg]"
            imgTilt="rotate-[2deg]"
            img="Images/team3.png"
            title="Jung Woong Park Strategic Advisor"
          /> */}
        </motion.div>
        {/* <motion.div
          {...fadeInFromLeft(0.6)}
          className="mt-5 relative z-10 flex justify-center  gap-16 slg:flex-wrap sm:hidden"
        >
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
        </motion.div> */}
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
            {/* <SwiperSlide className="flex justify-center items-center text-center">
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
            </SwiperSlide> */}
          </Swiper>
          <div className="swiper-custom-pagination  flex justify-center mt-10"></div>
        </div>
      </Helmet>
    </div>
  );
};

export default Teams;
