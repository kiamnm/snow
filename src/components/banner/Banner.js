import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    // <div className="layout bg_color_dark2 banner-component-container">
    //     <img className="banner" src="./images/banner.png" alt="" />
    //   </div>
    <div className="banner-component-container "
    
    
    >
        <Swiper
        modules={[Autoplay]}
        
      autoplay={{
        delay: 2500, // مدت زمان مکث بین اسلایدها (به میلی‌ثانیه)
        disableOnInteraction: false, // ادامه اسلاید خودکار حتی بعد از تعامل کاربر
        pauseOnMouseEnter: true,
      }}
       // فاصله بین اسلایدها
      slidesPerView={1} // تعداد اسلایدهای قابل نمایش
      loop={true} // فعال کردن لوپ
    >
      {/* اسلاید اول */}
      <SwiperSlide>
        <img className='banner'
          src="/images/banner.png"
          alt="Slide 1"
          
        />
      </SwiperSlide>

      {/* اسلاید دوم */}
      <SwiperSlide>
        <img className='banner'
          src="/images/banner2.jpg"
          alt="Slide 2"
          
        />
      </SwiperSlide>
    </Swiper>
    </div>
      
  )
}
