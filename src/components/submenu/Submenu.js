import React,{useState,useEffect,useContext} from 'react'
import "./Submenu.css"
import Tooltip from "@mui/material/Tooltip";
import { Link } from 'react-router-dom';
import currentday from '../../utils/getdate';
import { Updatetimecontext } from "./../../context/Updatetimecontext"
import { useLocation } from 'react-router-dom';
import Autorefresh from '../autorefrresh/Autorefresh';
import { Itemscontext } from '../../context/Itemscontext';


export default function Submenu({page,imgsrc,title,visibility}) {
  
  const [dayofweek,setdayofweek]=useState(null);
  const [day,setday]=useState(null);
  const [month,setmonth]=useState(null);
  const location=useLocation()
  const ishome=location.pathname === "/";
  
  const updateminute=useContext(Updatetimecontext)
  const {isautorefreshon}=useContext(Itemscontext)
  useEffect(()=>{
    
    setdayofweek(currentday().dayofweek)
    setday(currentday().day)
    setmonth(currentday().month)
  },[isautorefreshon])
  const clickrefrech=()=>{
    window.location.reload();
  }

  
  return (
    <div className={`submenucontainer d-flex flex-column-reverse flex-sm-row  justify-content-between layout pt-4 pt-sm-5 align-items-center bg_color_dark1  ${ishome?"submenu-home":"pb-4 pb-sm-5"} w-100`}> 
    
    <div className={`left-container m-0 d-flex flex-column mt-4 mt-sm-0 ${visibility==="notvisible"?"invisible":""}`}>
    <div className="top-container m-0 d-flex align-items-center">
    <img src="/images/calendar.svg" alt="" />
    <p className='color_white m-0 ms-2 fs_21 ff_regular'>ToDay</p>
    </div>
    <div className="bottom-container d-flex m-0 mt-2">
        <p className='color_white m-0 fs_14 ff_regular pe-1'>{`${dayofweek}, ${day} ${month}. `}</p>
        <p className='color_desable_menuitem m-0 fs_14 ff_regular'>last Update {`${updateminute<1?"just now":updateminute+" minutes ago"}`} </p>
    </div>
    </div>
    {page==="home"?(
      <div className="right-container m-0  d-flex justify-content-between ">
        <Link to="/chat">
        <Tooltip title={"Chat"}>
          <img className='me-0 me-sm-4 cursor_pointer'  src="/images/messages.svg" alt="" />
        </Tooltip>
        </Link>
        
      <Tooltip title={"Refresh"}>
        <img className='cursor_pointer' onClick={clickrefrech} src="/images/refresh.svg" alt="" />
      </Tooltip>
      <Autorefresh></Autorefresh>
  </div>
    ):(
      <div>
         <div className=" d-none  right-container m-0  d-sm-flex justify-content-between align-items-center">
        <Link to="/chat">
        <Tooltip className='message' title={"Chat"}>
          <img className='me-0 me-sm-4 cursor_pointer'  src="/images/messages.svg" alt="" />
        </Tooltip>
        </Link>
        
      <Tooltip className='refresh' title={"Refresh"}>
        <img className='cursor_pointer' onClick={clickrefrech} src="/images/refresh.svg" alt="" />
      </Tooltip>

      <Autorefresh></Autorefresh>
      


  </div>
        <div className={`other-page-menu-title-container d-flex d-sm-none align-items-center ${visibility}`}>
      <img src={imgsrc} alt="" />
      <p className='color_white p-0 m-0 fs_16 ff_medium ms-2'>{title}</p>
    </div>
      </div>
     

    
    
    )}
    
    </div>
    
  )
}
