import React, { useState } from "react";
import "./Rectangle_item.css";
import { Link } from "react-router-dom";
import formatnumber from "../../utils/formatnumber";

export default function Rectangle_item({
  imgsrc,
  title,
  subtitle,
  changeprice,
  price,
  id,
  path
}) {
  const [isImgLoading, setIsImgLoading] = useState(true);

  return (
    <Link
      to={`/${path}/${id}`}
      className="delete_link_defult color_white rectangle_item_container d-flex justify-content-between align-items-center bg_color_dark1 p-3"
    >
      <div className="left-container d-flex align-items-center ">
        {/* شایمر برای تصویر */}
        {isImgLoading && <div className="shimmer-placeholder-rectangle"></div>}
        <img
          className={`logo ${isImgLoading ? "hidden-img" : ""}`}
          src={imgsrc}
          alt=""
          onLoad={() => setIsImgLoading(false)} // تغییر وضعیت بارگذاری
        />
        <div className="title-container ms-3 ms-md-4">
          <p className="fs_14_res ff_medium color_white m-0 mb-1 p-0">
            {title}
          </p>
          <p className="fs_12 color_dim m-0 p-0">{subtitle}</p>
        </div>
      </div>
      <div className="right-container  d-flex  flex-column  align-items-start justify-content-center ">
        <p className="ff_regular fs_16_res p-0 m-0 mb-1">
          {formatnumber(price)}
        </p>
        <div className="changes d-flex align-items-center ">
          <p className={`color_green m-0 p-0 fs_12 ff_medium me-1 ${changeprice<0?"color_green":"color_red"}`}>
            {formatnumber(changeprice)}
          </p>
          <img className="trend " src={`${changeprice<0?"./images/decrease-icon.svg":"./images/increase-icon.svg"}`} alt="" />
        </div>
      </div>
    </Link>
  );
}
