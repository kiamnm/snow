import React, { useState } from "react";
import "./Listitem.css";
import Chart from "./../chart/Chart";
import formatnumber from "../../utils/formatnumber";
import { Link } from "react-router-dom";

export default function Listitem({ data, trend, id, path }) {
  const [isImgLoading, setIsImgLoading] = useState(true);

  return (
    <Link to={`/${path}/${id}`} className="delete_link_defult">
      <div className="list-item-container d-flex justify-content-between bg_color_dark1 py-3 ps-3 pe-0 px-sm-3 mb-4">
        <div className="left d-flex align-items-center">
          {/* شایمر برای تصویر */}
          {isImgLoading && <div className="shimmer-placeholder-list"></div>}
          <img
            className={`logo ${isImgLoading ? "hidden-img" : ""}`}
            src={data.flag}
            alt=""
            onLoad={() => setIsImgLoading(false)} // تغییر وضعیت بارگذاری
          />
          <div className="right ps-2 ps-sm-3 d-flex flex-column justify-content-center">
            <p className="color_white fs_12 ff_medium pb-1 p-0 m-0">
              {data.unit}
            </p>
            <p className="fs_12 ff_regular color_dim pt-0 pt-sm-1 p-0 m-0 subname">
              {data.name}
            </p>
          </div>
        </div>
        {trend !== "no-trend" && (
          
          <div className="middle chesm d-flex justify-content-center align-items-center">
           
            <Chart trend={data.sell_price.differense} spots={data.spots}></Chart>
          </div>
        )}
        <div className="right price d-flex flex-column justify-content-center price-sell-container align-items-start">
          <p className="fs_14 color_white p-0 pb-1 m-0 price align-self-center align-self-sm-start">
            {formatnumber(data.buy_price.price)}
          </p>
          <p className="color_dim fs_10 p-0 m-0 pt-1 sell">
            Sell: {formatnumber(data.sell_price.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
