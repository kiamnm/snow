import React, { useState, useEffect } from "react";
import "./Menu.css";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const [activeitem, setactiveitem] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const pathname=location.pathname;
    
    console.log(pathname.includes("currency"),"kian");
    if(pathname==="/"){
      setactiveitem("Home");
    }else if(pathname==="/converter"){
      setactiveitem("Converter");
    }else if(pathname.includes("currency")){
      setactiveitem("Currency");
    }else if(pathname.includes("crypto")){
      setactiveitem("Crypto");
    }else if(pathname.includes("gold")){
      setactiveitem("Gold");
    }
    
  }, [location.pathname]);
  return (
    <div
      className={`menu-component-container layout pt-3  pb-3 pt-sm-5 bg_color_dark1  `}
    >
      <div className="menu-container d-flex justify-content-between justify-content-sm-start ">
        <Link className="delete_link_defult" to="/">
          <div className="item-container cursor_pointer d-flex flex-column justify-content-center flex-sm-row align-items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
                stroke={`${activeitem === "Home" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 17.99V14.99"
                stroke={`${activeitem === "Home" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p
              className={`${
                activeitem === "Home" ? "color_white" : "color_desable_menuitem"
              } ms-0 ms-sm-2 fs_12 ff_regular_w600 pt-1 pt-sm-0 mb-0`}
            >
              Home
            </p>
          </div>
        </Link>

        <Link className="delete_link_defult" to="/currency">
          <div className="item-container cursor_pointer d-flex flex-column justify-content-center flex-sm-row align-items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8 7.91998V13.07C19.8 16.15 18.04 17.47 15.4 17.47H6.60995C6.15995 17.47 5.72996 17.43 5.32996 17.34C5.07996 17.3 4.83996 17.23 4.61996 17.15C3.11996 16.59 2.20996 15.29 2.20996 13.07V7.91998C2.20996 4.83998 3.96995 3.52002 6.60995 3.52002H15.4C17.64 3.52002 19.25 4.47001 19.68 6.64001C19.75 7.04001 19.8 7.44998 19.8 7.91998Z"
                stroke={`${activeitem === "Currency" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.8011 10.9201V16.0701C22.8011 19.1501 21.0411 20.4701 18.4011 20.4701H9.61105C8.87105 20.4701 8.20106 20.3701 7.62106 20.1501C6.43106 19.7101 5.62105 18.8001 5.33105 17.3401C5.73105 17.4301 6.16105 17.4701 6.61105 17.4701H15.4011C18.0411 17.4701 19.8011 16.1501 19.8011 13.0701V7.9201C19.8011 7.4501 19.7611 7.03014 19.6811 6.64014C21.5811 7.04014 22.8011 8.38011 22.8011 10.9201Z"
                stroke={`${activeitem === "Currency" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9984 13.1399C12.4564 13.1399 13.6384 11.9579 13.6384 10.4999C13.6384 9.04185 12.4564 7.85986 10.9984 7.85986C9.54038 7.85986 8.3584 9.04185 8.3584 10.4999C8.3584 11.9579 9.54038 13.1399 10.9984 13.1399Z"
                stroke={`${activeitem === "Currency" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.27997 8.30005V12.7001"
                stroke={`${activeitem === "Currency" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.7217 8.30029V12.7003"
                stroke={`${activeitem === "Currency" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p
              className={`${
                activeitem === "Currency"
                  ? "color_white"
                  : "color_desable_menuitem"
              } ms-0 ms-sm-2 fs_12 ff_regular_w600 mb-0 pt-1 pt-sm-0`}
            >
              Currency
            </p>
          </div>
        </Link>

        <Link className="delete_link_defult" to="/crypto">
          <div className="item-container cursor_pointer d-flex flex-column justify-content-center flex-sm-row align-items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 8.38074H13.6846C14.7231 8.38074 15.5654 9.31535 15.5654 10.2615C15.5654 11.3 14.7231 12.1423 13.6846 12.1423H9V8.38074Z"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12.1307H14.3539C15.5423 12.1307 16.5 12.973 16.5 14.0115C16.5 15.05 15.5423 15.8923 14.3539 15.8923H9V12.1307Z"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.277 15.8809V17.7616"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.93457 15.8809V17.7616"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.277 6.5V8.38077"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.93457 6.5V8.38077"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7769 8.38074H7.5"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7769 15.8809H7.5"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke={`${activeitem === "Crypto" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>

            <p
              className={`${
                activeitem === "Crypto"
                  ? "color_white"
                  : "color_desable_menuitem"
              } ms-0 ms-sm-2 fs_12 ff_regular_w600 mb-0 pt-1 pt-sm-0`}
            >
              Crypto
            </p>
          </div>
        </Link>

        <Link className="delete_link_defult" to="/gold">
          <div className="item-container cursor_pointer d-flex flex-column justify-content-center flex-sm-row align-items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 12.65V16.35C18.5 19.47 15.59 22 12 22C8.41 22 5.5 19.47 5.5 16.35V12.65C5.5 15.77 8.41 18 12 18C15.59 18 18.5 15.77 18.5 12.65Z"
                stroke={`${activeitem === "Gold" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
                stroke={`${activeitem === "Gold" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
                stroke={`${activeitem === "Gold" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p
              className={`${
                activeitem === "Gold" ? "color_white" : "color_desable_menuitem"
              } ms-0 ms-sm-2 fs_12 ff_regular_w600 mb-0 pt-1 pt-sm-0`}
            >
              Gold
            </p>
          </div>
        </Link>

        <Link className="delete_link_defult" to="/converter">
          <div className="item-container cursor_pointer d-flex flex-column justify-content-center flex-sm-row align-items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
                stroke={`${activeitem === "Converter" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.65 13.8199L14.61 16.8599"
                stroke={`${activeitem === "Converter" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.34998 13.8199H17.65"
                stroke={`${activeitem === "Converter" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.34998 10.18L10.39 7.14001"
                stroke={`${activeitem === "Converter" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.65 10.1801H7.34998"
                stroke={`${activeitem === "Converter" ? "#FFFFFF" : "#575757"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p
              className={`${
                activeitem === "Converter"
                  ? "color_white ff_medium"
                  : "color_desable_menuitem"
              } ms-0 ms-sm-2 fs_12 ff_regular_w600 mb-0 pt-1 pt-sm-0`}
            >
              Converter
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
