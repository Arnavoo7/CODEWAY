import "./Projects.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import cls from "../../assets/cls.webm";
import lp from "../../assets/lpage.webm";
import calc from "../../assets/calc.webm";
import port from "../../assets/port.webm";


const Projects = () => {
  return (
    <div id="projects">
      <div id="projects-title">
        <hr className="hr-style" />
        <h1>Projects</h1>
      </div>

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video src={cls} autoPlay controls></video>
        </SwiperSlide>
        <SwiperSlide>
          <video src={lp} autoPlay controls></video>
        </SwiperSlide>
        <SwiperSlide>
          <video src={calc} autoPlay controls></video>
        </SwiperSlide>
        <SwiperSlide>
          <video src={port} autoPlay controls></video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};



export default Projects;
