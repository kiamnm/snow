import React from "react";
import "./Box_items_list.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box_item from "../box_item/Box_item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Box_items_list({ data, type,path }) {
  return (
    <div className="carousel-container  ">
      <Swiper
        spaceBetween={20} 
        slidesPerView={4} 
        loop={true} 
        autoplay={{
          delay: 2500, 
          disableOnInteraction: true, 
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          
          640: {
            slidesPerView: 2,
          },
          
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        pagination={false} 
        navigation={false} 
        modules={[Autoplay]}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={item.id}>
              <Box_item
                type={type}
                id={item.id}
                spots={item.spots}
                flag={item.flag}
                unit={item.unit}
                name={item.name}
                trend={"red"}
                difference={item.buy_price.difference}
                price={item.buy_price.price}
                path={path}
              ></Box_item>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
