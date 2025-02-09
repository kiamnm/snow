import React, { useState, useRef, useEffect } from "react";
import "./Converterbox.css";
import calcconverter from "./../../utils/calcconverter";


export default function Converterbox({setallprice}) {
  const [leftValue, setLeftValue] = useState(""); // مقدار input سمت چپ
  const [rightvalue, setrightvalue] = useState(""); // مقدار input سمت راست
  const leftinputref = useRef(null); // مرجع به input سمت چپ
  const rightinputref = useRef(null); // مرجع به input سمت راست
  const [currencylist, setcurrencylist] = useState(null);
  const [isleftdropdownopen, setisleftdropdownopen] = useState(false);
  const [isrightdropdownopen, setisrightdropdownopen] = useState(false);
  const [pending, setpending] = useState(false);
  
  const [leftitem, setleftitem] = useState({
    id: 1,
    name: "Us dollar",
    imgsrc: "/images/dollar-logo.svg",
    unit: "USD",
  });
  const [rightitem, setrightitem] = useState({
    id: 2,
    name: "Euro",
    imgsrc: "images/currency2.svg",
    unit: "EUR",
  });
  const changeleftright=()=>{
    setLeftValue("")
    setrightvalue("")
    
    let pastleftitem=leftitem;
    let pastrightitem=rightitem;
    setrightitem(pastleftitem);
    setleftitem(pastrightitem)
    
  }
  const onclickleftitem = (e) => {
    setallprice(null)
    setLeftValue("")
    setrightvalue("")
    
    setisleftdropdownopen(false);
    const datavalue = JSON.parse(e.currentTarget.getAttribute("data-all"));
    console.log(datavalue);
    setleftitem({
      id: datavalue.id,
      name: datavalue.name,
      imgsrc: datavalue.logo,
      unit: datavalue.unit,
    });
  };
  const onclickrightitem = (e) => {
    setallprice(null)
    setLeftValue("")
    setrightvalue("")
    setisrightdropdownopen(false);
    const datavalue = JSON.parse(e.currentTarget.getAttribute("data-all"));
    setrightitem({
      id: datavalue.id,
      name: datavalue.name,
      imgsrc: datavalue.logo,
      unit: datavalue.unit,
    });
  };
  
  const handleleftchange = (e) => {
    let rawvalue = e.target.value.replace(/[^0-9.]/g, ""); // فقط اعداد و نقطه

    // فقط یک نقطه مجاز است
    if ((rawvalue.match(/\./g) || []).length > 1) {
      rawvalue = rawvalue.slice(0, -1); // حذف نقطه اضافی
    }

    setLeftValue(rawvalue);
    if(rawvalue!=""){
      calcconverter(
        leftitem.unit,
        rightitem.unit,
        Number(rawvalue),
        setpending,
        setrightvalue,
        setallprice,
      );
    }
    

    // مکان نشانگر را بعد از عدد و قبل از USD قرار می‌دهیم
    setTimeout(() => {
      const input = leftinputref.current;
      const cursorposition = rawvalue.length; // بعد از عدد
      input.setSelectionRange(cursorposition, cursorposition); // مکان‌نمای موس
    }, 0);
  };

  const handlerightchange = (e) => {
    let rawvalue = e.target.value.replace(/[^0-9.]/g, ""); // فقط اعداد و نقطه

    // فقط یک نقطه مجاز است
    if ((rawvalue.match(/\./g) || []).length > 1) {
      rawvalue = rawvalue.slice(0, -1); // حذف نقطه اضافی
    }

    setrightvalue(rawvalue);

    // مکان نشانگر را بعد از عدد و قبل از USD قرار می‌دهیم
    setTimeout(() => {
      const input = rightinputref.current;
      const cursorposition = rawvalue.length; // بعد از عدد
      input.setSelectionRange(cursorposition, cursorposition); // مکان‌نمای موس
    }, 0);
  };
  
  useEffect(() => {
    const getcurrencylist = async () => {
      let response = await fetch("https://api1.arzparz.com/api/currency/list");
      let parseresponse = await response.json();

      setcurrencylist(parseresponse.data);
    };
    getcurrencylist();
  }, []);
  const scrollbarRef = useRef(null);
  return (
    <div className="convert-component-container d-flex flex-column">
      <div className="header-container d-flex pb-3 ">
        <div className="w-50 ">
          <div
            className="left d-flex align-items-center  cursor_pointer  "
            onClick={() => {
              setisleftdropdownopen((prev) => !prev);
            }}
          >
            <img className="me-2 " src={leftitem.imgsrc} alt="" />
            <p className="m-0 p-0 color_white fs_12 ff_medium">
              {leftitem.name}
            </p>
          </div>

          <div
            className={`dropdown-container  pt-3 ${
              isleftdropdownopen ? "d-block" : "d-none"
            }`}
          >
            {currencylist &&
              currencylist.map((item) => {
                return (
                  <div key={item.id}
                    className="d-flex align-items-center py-2 cursor_pointer dropdown-item"
                    data-all={JSON.stringify(item)}
                    onClick={onclickleftitem}
                  >
                    <img src={item.logo} alt="" />
                    <p className="p-0 m-0 ps-2 color_white fs_12 ff_medium">
                      {item.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="w-50  ps-relative">
          <div
            className="right  d-flex align-items-center   cursor_pointer"
            onClick={() => {
              setisrightdropdownopen((prev) => !prev);
            }}
          >
            <img className="me-2" src={rightitem.imgsrc} alt="" />
            <p className="m-0 p-0 color_white fs_14 ff_medium">
              {rightitem.name}
            </p>
          </div>
          <div
            className={`dropdown-container  pt-3 ${
              isrightdropdownopen ? "d-block" : "d-none"
            }`}
          >
            {currencylist &&
              currencylist.map((item) => {
                return (
                  <div
                  key={item.id}
                    className="d-flex align-items-center py-2 ps-3 cursor_pointer dropdown-item"
                    data-all={JSON.stringify(item)}
                    onClick={onclickrightitem}
                  >
                    <img src={item.logo} alt="" />
                    <p className="p-0 m-0 ps-2 color_white fs_12 ff_medium">
                      {item.name}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        
      </div>

      <div className="converter-box-container">
       
        <input
          type="text"
          className="input left-input fs_14 ff_medium"
          placeholder={leftitem.unit}
          value={leftValue ? `${( (leftValue))} ${leftitem.unit}` : ""} // افزودن "USD" در نمایش
          onChange={handleleftchange}
          ref={leftinputref} // مرجع به input
        />
        
        {!pending?(<img
        onClick={changeleftright}
          src="/images/convert-action.svg"
          alt="Divider"
          className="divider"
        />):(<div className="spinner-border text-light" role="status">
          <span className="sr-only"></span>
        </div>)}
        

        
        <input
          type="text"
          className="input right-input fs_14 ff_medium ps-3"
          placeholder={rightitem.unit}
          value={
            rightvalue ? `${((rightvalue))} ${rightitem.unit} ` : ""
          } // افزودن "USD" در نمایش
          onChange={handlerightchange}
          ref={rightinputref} // مرجع به input
        />
      </div>
    </div>
  );
}
