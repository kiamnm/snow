import React, { useState,useContext } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

import Tooltip from '@mui/material/Tooltip';
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CiLogout } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Authcontext } from '../../../context/Authcontext';
import { HiMiniCurrencyDollar } from "react-icons/hi2";

import { TbReportSearch } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import { PiFlagBannerBold } from "react-icons/pi";
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
const path=useLocation().pathname;
const navigate=useNavigate();
const {logout}=useContext(Authcontext)
useEffect(()=>{
path.includes("product") && setActiveTab(0)

path.includes("message") && setActiveTab(2)
path.includes("article") && setActiveTab(3)
path.includes("report") && setActiveTab(4)


},[path])
  const tabs = [
    { title: 'Items', icon: <CiBoxList size={22} />, to:"/adminpanel/items" },
    { title: 'Banner ', icon: <PiFlagBannerBold size={22} />, to:"/adminpanel/banner" },
    { title: 'Filter ', icon: <IoFilter size={22} />, to:"/adminpanel/Filter" },
    
    { title: 'Report', icon:<TbReportSearch size={22} /> , to:"/adminpanel/report" },
  ];
  const handlelogout=()=>{
    localStorage.removeItem("accesstoken");
    navigate("/adminlogin")
  }

  return (
    <div className={`sidebar bg_color_lightshell no_select ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`sidebar-toggle align-self-end py-3 ${isCollapsed?"align-self-center pe-0":"pe-3 "}`} onClick={() => setIsCollapsed(!isCollapsed)}>
      <Tooltip title={`${isCollapsed ? 'Maximize' : 'Minimize'}`}>
        {/* <img className={`arrow-right-toggle ${isCollapsed ? 'rotatet-180' : ''}`} 
        
        src="/images/arrow-right.svg" alt="Toggle Sidebar" /> */}
        <span>
        <MdKeyboardArrowRight className={`arrow-right-toggle ${isCollapsed ? '' : 'rotatet-180'}`}  fontSize={"22px"}/>
        </span>
        
        </Tooltip>
      </div>
      
      <div className="sidebar-logo align-self-center pb-3">
      <Tooltip placement="right-start" title="Home">
        <Link to="/">
        <img src="/images/dollar-logo.svg" alt="Logo" />
        </Link>
        </Tooltip>
        
      </div>
      
      
      <ul className="sidebar-tabs ">
        {tabs.map((tab, index) => (
            <Link key={index} to={tab.to} className='delete_link_defult color_black_text fs_16 ff_regular '>
            <li
            key={index}
            className={`${isCollapsed ? 'text-center' : 'ps-3 '} fs_16 ff_regular tab mt-3 py-1 ${activeTab === index ? 'active  ' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon}
            {!isCollapsed && <span className='ps-2'>{tab.title}</span>}
          </li></Link>
          
        ))}
      </ul>
      <Tooltip title="Logout">
      <div onClick={()=>{logout()}} className="sidebar-logout align-self-center mb-3" >
        <CiLogout cursor={"pointer"} fontSize={"22px"} />
        
        
      </div>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
