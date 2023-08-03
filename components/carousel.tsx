"use client";
import { Content } from "next/font/google";
import Card from "./card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Carousel() {
  //   const scrollLeft = () => {
  //     document.getElementById("content")as HTMLDivElement | null;console.log(Content?.innerHTML);
  //   };
  //   const scrollRight = () => {
  //     document.getElementById("content")as HTMLDivElement | null.scrollLeft += 800;
  //   };

  return (
    <section className="relative ">
      <Swiper spaceBetween={150} slidesPerView={3} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      {/* <div className="absolute left-[200px]">
        <button onClick={scrollLeft} className="p-2 m-2 border-2 border-black rounded-full">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 border-2 border-black rounded-full">
          <FiChevronRight />
        </button>
      </div>
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scrollbar-hide">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div> */}
    </section>
  );
}