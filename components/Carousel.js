import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";
function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={60}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      style={{ padding: "60px 60px 0px 60px", height: "500px" }}
      autoHeight={true}
      setWrapperSize={true}
      // breakpoints={{
      //   576: {
      //     width: 576,
      //     slidesPerView: 1,
      //   },
      //   1024: {
      //     width: 768,
      //     slidesPerView: 2,
      //   },
      // }}
    >
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
  );
}

export default Carousel;
