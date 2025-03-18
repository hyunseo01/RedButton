"use client";
import "swiper/swiper-bundle.css";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Motion from "../sliderMotion/motion";

const SubImageSlider: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      spaceBetween={0}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
    >
      <SwiperSlide
        style={{
          backgroundColor: "#2e2d35",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1200px",
            position: "relative",
          }}
        >
          <Motion />
          <img
            style={{ height: "500px", width: "1200px" }}
            src="https://redbutton.co.kr/wp-content/uploads/2024/10/1%EB%9D%BC%EC%9D%B4%ED%97%8C%ED%8A%B8.png"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundColor: "#2e2d35",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1200px",
            position: "relative",
          }}
        >
          <Motion />
          <img
            style={{ height: "500px", width: "1200px" }}
            src="https://redbutton.co.kr/wp-content/uploads/2024/10/2%ED%8B%B0%ED%82%A4%ED%86%A0%ED%94%8C.png"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          backgroundColor: "#2e2d35",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1200px",
            position: "relative",
          }}
        >
          <Motion />
          <img
            style={{ height: "500px", width: "1200px" }}
            src="https://redbutton.co.kr/wp-content/uploads/2024/10/3%ED%8F%AC%EC%9D%B8%ED%8A%B8%EC%83%90%EB%9F%AC%EB%93%9C.png"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SubImageSlider;
