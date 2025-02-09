import React from "react";
import "./Pricelog.css";
import formatnumber from '../../utils/formatnumber'

export default function Pricelog({ allprice, minvalue, maxvalue }) {
    function formatDateToCustomString(dateString) {
        const date = new Date(dateString);
      
        // گزینه‌های فرمت برای نمایش روز، ماه، تاریخ، سال و زمان
        const options = {
          weekday: 'long', // Saturday
          year: 'numeric', // 2025
          month: 'long', // January
          day: 'numeric', // 11
          hour: 'numeric', // 9
          minute: 'numeric', // 30
          hour12: true, // 12 ساعته (AM/PM)
        };
      
        // فرمت کردن تاریخ
        return new Intl.DateTimeFormat('en-US', options).format(date);
      }
  return (
    <div className="price-log-container layout2  py-3">
      {/* <div className="min-max d-flex justify-content-between">
            <div className="max-container d-flex align-items-center">
                <img src="/images/increase-icon.svg" alt="" />
                <p className='p-0 m-0 title ff_regular fs_12 ps-2'>Maximum price </p>
                <p className='p-0 m-0 color_white fs_20 ps-4'>{maxvalue}</p>
            </div>
            <div className="min-container d-flex align-items-center">
            <img src="/images/decrease-icon.svg" alt="" />
                <p className='p-0 m-0 title ff_regular fs_12 ps-2'>Minimum price </p>
                <p className='p-0 m-0 color_white fs_20 ps-4'>{minvalue}</p>
            </div>
        </div> */}
      {allprice &&
        allprice.map((item,index) => {
          return (
            <div key={index} className="each-log-container d-flex justify-content-between mb-3 bg_color_dark1 align-items-center p-2 p-sm-3">
               <p className="left color_white align-self-center m-0 ff_medium fs_12">{formatDateToCustomString(item.period)}</p>
                <div className="d-flex ">
                
                <p className="right color_white m-0 ff_regular fs_12">{formatnumber(Number(item.price))}</p>
                <div className="right ms-2"></div>
                
              </div>
             
              
            </div>
          );
        })}
    </div>
  );
}
