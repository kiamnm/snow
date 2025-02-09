import React, { useState, useEffect } from "react";
import "./Report.css";
import Toptitle from "../../components/adminpanel/toptitle/Toptitle";
import { TbReportSearch } from "react-icons/tb";
import getuserinstall from "./utils/getuserinstalls";
import getuserviews from "./utils/getuserviews";
import Installchart from "../../components/adminpanel/installchart/Installchart";
import Installtable from "../../components/adminpanel/installtable/Installtable";
import Userviewchart from "../../components/adminpanel/userviewchart/Userviewchart";
import Userviewtable from "../../components/adminpanel/userviewtable/Userviewtable";



export default function Report() {
  const [userinstall, setuserinstall] = useState(null);
  const [userviews, setuserviews] = useState(null);
  const [userinstallpending, setuserinstallpending] = useState(false);
  const [userviewspending, setuserviewspending] = useState(false);
  useEffect(() => {
    getuserinstall(setuserinstall, setuserinstallpending);
    getuserviews(setuserviews, setuserviewspending)
  }, []);
  return (
    <div className="report-page-container">
      
      <Toptitle
        icon={<TbReportSearch size={22} />}
        top_title={"Report"}
        main_title={"Report"}
        text={"You can view the user statistics of the website here."}
      ></Toptitle>
      
      {!userinstallpending && !userinstall && (
        <div className="text-center">No data founded</div>
      )}
      {userinstallpending && (
        <div className="text-center">
          <div class="spinner-border " role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )}
      {(userinstall && !userinstallpending) && (
        
        <div className="installation-statics-section">
          <h2 className="ff_bold fs_20">Installation statistics</h2>
          <div className="chart">
          <div className="total-installationstatic d-flex align-items-center justify-content-between flex-wrap mt-4 ">
            <div className="d-flex flex-column  align-items-center">
              <p className="ff_medium bg-info py-2 px-2 px-xl-4 static-title">Total </p>
              <p>{userinstall.all}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="ff_medium bg-info py-2 px-2 px-xl-4 static-title">Apple </p>
              <p>{userinstall.apple}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="ff_medium bg-info py-2 px-2 px-xl-4 static-title">Ipad </p>
              <p>{userinstall.ipad}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="ff_medium bg-info py-2 px-2 px-xl-4 static-title">Android </p>
              <p>{userinstall.android}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="ff_medium bg-info py-2 px-2 px-xl-4 static-title">Min</p>
              <p>{userinstall.min}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="ff_medium bg-info py-2 px-2 px-xl-4 static-title">Max </p>
              <p>{userinstall.max}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="ff_medium bg-info py-2 px-2 px-xl-4 static-title">past hour </p>
              <p>{userinstall.countOneHour}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="ff_medium bg-info py-2 px-2 px-xl-4 static-title"> past two hours</p>
              <p>{userinstall.countTwoHour}</p>
            </div>
          </div>
         <div className="installchart-container mt-5 d-flex flex-column align-items-center  justify-content-center ">
          <div className=" w-100">
          
            <Installchart  userinstall={userinstall.dataDay}></Installchart>
          </div>
         
         <p className="installchart-title ff_medium fs_18 mt-3">
         App Installation Statistics by Device
         </p>
         </div>
          </div>
          
          <div className="table bg-danger ">
          <Installtable  userinstall={userinstall.dataDay}></Installtable>
          </div>
         

        </div>
      )}



{(userviews && !userviewspending) && (
        <div className="">
         <h2 className="ff_bold fs_20 pb-4">Page View Statistics</h2>
          <Userviewchart userviews={userviews} ></Userviewchart>
          <p className="installchart-title ff_medium fs_18 mt-3 text-center">
         Pages View  Statistics by Day
         </p>
         <Userviewtable userviews={userviews} ></Userviewtable>
        </div>
      )}












      
    </div>
  );
}
