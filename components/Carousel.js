import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";
function Carousel() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1050px)` });

  const changeSlidePerView = () => {
    let slide = 3;
    if (isMobile) {
      slide = 1;
    } else if (isTablet) {
      slide = 2;
    }
    return slide;
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={70}
      slidesPerView={changeSlidePerView()}
      navigation={isMobile ? false : true}
      pagination={{ clickable: true }}
      style={{
        padding: isMobile ? "30px" : isTablet ? "30px" : "60px 60px 0px 60px",
        height: "500px",
      }}
      autoHeight={true}
      setWrapperSize={true}
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
