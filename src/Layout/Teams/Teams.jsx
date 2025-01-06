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
      className: "md:mb-10",
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
          className="mt-14 relative z-10 flex flex-wrap justify-center gap-16 gap-y-16 sm:hidden   "
        >
          {teamMembers.map((member, index) => (
            <TeamsCard
              key={index}
              parentTilt={member.parentTilt}
              imgTilt={member.imgTilt}
              img={member.img}
              className={member.className}
              title={`${member.name} - ${member.title}`}
            />
          ))}
        </motion.div>
        <div className=" hidden sm:block">
          <Swiper
            pagination={{
              el: ".swiper-custom-pagination",
              clickable: true,
            }}
            autoplay={true}
            speed={1400}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full h-full"
          >
            {/* {teamMembers
              .reduce((groups, member, index) => {
                const groupIndex = Math.floor(index / 3); // Grouping every 3 items
                if (!groups[groupIndex]) {
                  groups[groupIndex] = [];
                }
                groups[groupIndex].push(member);
                return groups;
              }, [])
              .map((group, groupIndex) => (
                <SwiperSlide
                  key={groupIndex}
                  className="flex justify-center items-center text-center"
                >
                  <div className="mt-5 relative z-10 flex justify-center gap-16 slg:flex-wrap">
                    {group.map((member, index) => (
                      <TeamsCard
                        key={index}
                        parentTilt={member.parentTilt}
                        imgTilt={member.imgTilt}
                        img={member.img}
                        title={`${member.name} - ${member.title}`}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ))} */}
            {teamMembers
              .reduce((groups, member, index) => {
                const groupIndex = Math.floor(index / 3); // Grouping every 3 items
                if (!groups[groupIndex]) {
                  groups[groupIndex] = [];
                }
                groups[groupIndex].push(member);
                return groups;
              }, [])
              .map((group, groupIndex, allGroups) => {
                // If it's the last group and has less than 3 members
                if (groupIndex === allGroups.length - 1 && group.length < 3) {
                  const itemsToAdd = 3 - group.length; // Calculate how many items to add
                  group.push(...teamMembers.slice(0, itemsToAdd)); // Add the first 'itemsToAdd' members
                }
                return (
                  <SwiperSlide
                    key={groupIndex}
                    className="flex justify-center items-center text-center"
                  >
                    <div className="mt-5 relative z-10 flex justify-center gap-16 slg:flex-wrap">
                      {group.map((member, index) => (
                        <TeamsCard
                          key={index}
                          parentTilt={member.parentTilt}
                          imgTilt={member.imgTilt}
                          img={member.img}
                          title={`${member.name} - ${member.title}`}
                        />
                      ))}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className="swiper-custom-pagination  flex justify-center mt-10"></div>
        </div>
      </Helmet>
    </div>
  );
};

export default Teams;
