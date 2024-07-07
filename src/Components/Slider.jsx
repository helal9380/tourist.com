/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper">
      <SwiperSlide>
        <div className="h-[80vh] relative">
          <img
            src="https://i.ibb.co/Mg262Js/expressive-capture-TM-W3s-VKZh8-unsplash.jpg"
            alt=""
            className="object-cover rounded-lg w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black rounded-lg bg-opacity-50">
            <div className="text-center text-white p-5 max-w-2xl">
              <h2 className="text-6xl font-semibold mb-4">
                Discover the Beauty of Bangladesh
              </h2>
              <p className="mb-4">
                Explore the stunning landscapes, rich culture, and historic
                sites of Bangladesh. From the world is longest beach to ancient
                ruins, find your next adventure here.
              </p>
              <button className="bg-[#007E8F] text-white font-semibold hover:bg-[#089eb1] py-2 px-4 rounded">
                Explore
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
