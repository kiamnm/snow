import React, { useState } from "react";
import "./Box_item.css";
import { Link } from "react-router-dom";
import Chart from "./../chart/Chart";
import formatnumber from "../../utils/formatnumber";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Box_item({
  spots,
  flag,
  unit,
  name,
  price,
  difference,
  trend,
  type,
  id,
  path
}) {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const maindata=spots.data
  const min=spots.min_y;
  const max=spots.max_y

        
  return (
    // <Link
    //   to={`/currency/${id}`}
    //   className="box_item_container bg_color_dark1 delete_link_defult px-3 py-3"
    // >
    //   <div className="top-container d-flex align-self-start ">
    //     <div className="left-container">
    //       {/* حالت شایمر */}
    //       {isImgLoading && <div className="shimmer-placeholder"></div>}
    //       <img
    //         className={`dollar-logo ${isImgLoading ? "hidden-img" : ""}`}
    //         src={flag}
    //         alt=""
    //         onLoad={() => setIsImgLoading(false)} // تغییر وضعیت به هنگام بارگذاری کامل
    //       />
    //     </div>
    //     <div className="right-container ps-3 d-flex flex-column justify-content-between">
    //       <p className="fs_16 ff_medium color_white m-0 p-0 ">{unit}</p>
    //       <p className="fs_14 color_dim m-0 p-0">{name}</p>
    //     </div>
    //   </div>
    //   <div className="middle-container color_white  ">
    //     <Chart className="rest" spots={spots} trend={difference}></Chart>
    //   </div>
    //   <div className="bottom-container">
    //     <div className="top d-flex align-items-center">
    //       <p
    //         className={`${
    //           difference <0 ? "color_red" : "color_green"
    //         } m-0 p-0 fs_14 me-2`}
    //       >
    //         {formatnumber(difference)}
    //       </p>
    //       <img
    //         className="trend"
    //         src={
    //           difference <0
    //             ? "./images/decrease-icon.svg"
    //             : "./images/increase-icon.svg"
    //         }
    //         alt=""
    //       />
    //     </div>
    //     <p className="fs_20 ff_medium color_white m-0 pt-1">
    //       {formatnumber(price)}
    //     </p>
    //   </div>
    // </Link>




    
    <Link to={`/${path}/${id}`}  className="box_item_container bg_color_dark1 delete_link_defult px-3 py-3 ">
      <div className="total-container w-100 h-100 d-flex flex-column flex-sm-row justify-content-between " style={{zIndex: "2"}}>
      <div className="top-container d-flex align-self-start ">
        <div className="left-container">
          {/* حالت شایمر */}
          {isImgLoading && <div className="shimmer-placeholder"></div>}
          <img
            className={`dollar-logo ${isImgLoading ? "hidden-img" : ""}`}
            src={flag}
            alt=""
            onLoad={() => setIsImgLoading(false)} // تغییر وضعیت به هنگام بارگذاری کامل
          />
        </div>
        <div className="right-container ps-3 d-flex flex-column justify-content-between">
          <p className="fs_16 ff_medium color_white m-0 p-0 ">{unit}</p>
          <p className="fs_14 color_dim m-0 p-0">{name}</p>
        </div>
      </div>


      <div className="price-container">
      
        <div className="top d-flex align-items-center">
          <p
            className={`${
              difference <0 ? "color_red" : "color_green"
            } m-0 p-0 fs_14 me-2`}
          >
            {formatnumber(difference)}
          </p>
          <img
            className="trend"
            src={
              difference <0
                ? "./images/decrease-icon.svg"
                : "./images/increase-icon.svg"
            }
            alt=""
          />
        </div>
        <p className="fs_20 ff_medium color_white m-0 pt-1">
          {formatnumber(price)}
        </p>
      </div>
     
      </div>




      <div 
                style={{
                  width:"100%",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "60%",
                  zIndex: "1",
                  overflow:"hidden",
                  borderRadius: "12px",
                }}
              >
                <ResponsiveContainer width="130%" height="110%"  >
                
                  <AreaChart data={maindata} >
                   <defs>
      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F1AB2063" stopOpacity={1} />
        <stop offset="100%" stopColor="#8B631200" stopOpacity={1} />
      </linearGradient>
    </defs>
                    {console.log(maindata,"maiin")}
                    <Area
                      type="monotone"
                      dataKey="y"
                      stroke="#8B631200"
                      fill="url(#colorGradient)"
                    />
                    <XAxis dataKey="x" hide />
                    <YAxis  hide domain={[min, max]} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
    </Link>
  );
}



