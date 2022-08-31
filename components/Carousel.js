import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";
import _ from "lodash";
import Link from "next/link";
function Carousel({ data }) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1050px)` });
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

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
    <>
      {domLoaded && (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={70}
          slidesPerView={changeSlidePerView()}
          navigation={isTablet ? false : true}
          pagination={{ clickable: true }}
          style={{
            padding: isMobile
              ? "30px"
              : isTablet
              ? "30px"
              : "60px 60px 0px 60px",
            height: "500px",
            "--swiper-pagination-bullet-inactive-color": "#fff",
          }}
          autoHeight={true}
          setWrapperSize={true}
        >
          {_.defaultTo(data, []).map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                title={item.title}
                desc={item.desc}
                link={item.link}
                type={item.type}
                img={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default Carousel;
