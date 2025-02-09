import React, { useState } from "react";
import "./Filterbtn.css";

export default function Filterbtn({setfiltertype,filtertype}) {
  
  return (
    <div className="layout bg_color_dark2 filter-btn-container d-flex justify-content-sm-end justify-content-around ">
      <button
        onClick={() => setfiltertype(1)}
        className={`filter-btn py-2 px-2 color_white  ff_medium bg_color_dark1 cursor_pointer ${
          filtertype === 1 ? "active" : "notactive"
        }`}
      >
        Daily
      </button>
      <button
        onClick={() => setfiltertype(2)}
        className={`filter-btn py-2 px-2 color_white  ff_medium bg_color_dark1 cursor_pointer ${
          filtertype === 2 ? "active" : "notactive"
        }`}
      >
        Weekly
      </button>
      <button
        onClick={() => setfiltertype(3)}
        className={`filter-btn py-2 px-2 color_white  ff_medium bg_color_dark1 cursor_pointer ${
          filtertype === 3 ? "active" : "notactive"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setfiltertype(4)}
        className={`filter-btn py-2 px-2 color_white  ff_medium bg_color_dark1 cursor_pointer ${
          filtertype === 4 ? "active" : "notactive"
        }`}
      >
        Yearly
      </button>
    </div>
  );
}
