import { SwiperSlide, Swiper } from "swiper/react";
import Footer from "../Components/Footer/Footer";
import About from "../Layout/About/About";
import Games from "../Layout/Games/Games";
import Hero from "../Layout/Hero/Hero";
import Social from "../Layout/Social/Social";
import Teams from "../Layout/Teams/Teams";
import { Navigation } from "swiper/modules";
const Home = () => {
  return (
    <>
      <Hero />
      <Games />
      <About />
      <Teams />
      <Social />
      <Footer />
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
    </>
  );
};

export default Home;
