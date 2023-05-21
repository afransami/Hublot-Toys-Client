import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

const TrendingToys = () => {
  return (
    <div className="my-10 rounded-lg">
      <h1 className="text-3xl text-center font-bold bg-gradient-to-r from-indigo-200 from-10% via-sky-500 via-30% to-emerald-200 to-90% py-4 rounded-2xl">
        Trending Transformer
      </h1>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
            src="https://i.ibb.co/rmg74hj/transformers-thumbnail-1654818516621.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
            src="https://i.ibb.co/xYBVj0h/Prime-autobots-s01e01-1.webp"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
            src="https://i.ibb.co/Px0Y653/mo-jiaming-e-Wll-D4-Htb0w-unsplash.jpg"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrendingToys;
