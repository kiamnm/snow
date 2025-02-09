import React from "react";
import "./Rectangle_items_list.css";
import Rectangle_item from "../rectangle_item/Rectangle_item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Rectangle_items_list({ data, type,path }) {
  return (
    <div className="w-100 d-flex justify-content-between rectangle_items_list">
     
      {/* <Rectangle_item
        imgsrc={data[0].flag}
        title={data[0].unit}
        subtitle={data[0].name}
        trend={"red"}
        changeprice={data[0].buy_price.difference}
        price={data[0].buy_price.price}
        type={type}
        id={data[0].id}
      ></Rectangle_item>

      <Rectangle_item
        imgsrc={data[1].flag}
        title={data[1].unit}
        subtitle={data[1].name}
        trend={"red"}
        changeprice={data[1].buy_price.difference}
        price={data[1].buy_price.price}
        type={type}
        id={data[1].id}
      ></Rectangle_item>
      <Rectangle_item
        imgsrc={data[2].flag}
        title={data[2].unit}
        subtitle={data[2].name}
        trend={"red"}
        changeprice={data[2].buy_price.difference}
        price={data[2].buy_price.price}
        type={type}
        id={data[2].id}
      ></Rectangle_item> */}



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
            slidesPerView: 1.3,
          },
          
          640: {
            slidesPerView: 1.3,
          },
          
          768: {
            slidesPerView: 2,
          },
          992: {
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
              <Rectangle_item
        imgsrc={item.flag}
        title={item.unit}
        subtitle={item.name}
        trend={"red"}
        changeprice={item.buy_price.difference}
        price={item.buy_price.price}
        type={type}
        id={item.id}
        path={path}
      ></Rectangle_item>
            </SwiperSlide>
          );
        })}
      </Swiper>




      
    </div>
  );
}
