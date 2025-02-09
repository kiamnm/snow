import React from 'react'
import { useState,useEffect } from 'react';
import Adminlogin_form from '../../components/adminloginform/Adminlogin_form';
import "./Login.css"

export default function Login() {
    const [width, setWidth] = useState(window.innerWidth);
    const [iswidthless,setiswidthless]=useState(false)
  
    useEffect(() => {
      // تابع برای به‌روزرسانی عرض
      const handleResize = () => {
        setWidth(window.innerWidth);
        
      };
  
      // اضافه کردن لیسنر برای رویداد resize
      window.addEventListener('resize', handleResize);
      if(width<800){
        setiswidthless(true)
      }else{
        setiswidthless(false)
      }
      // پاک‌سازی لیسنر هنگام unmount شدن کامپوننت
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // اجرای فقط یک بار هنگام mount شدن
  return (
    
        (iswidthless?<div className="admin-login-page-small"><p className="fs_16 ff_regular">Please use a device with a larger screen.</p> </div>:<div className="adminlogin-page-container">
      
      <div className="right-left-container d-flex ">
        <div className="left-container ">
          <Adminlogin_form></Adminlogin_form>
          
        </div>
        <div className="right-container">
          <img src="./images/57840.jpg" alt="Admin Login Page" />
        </div>
      </div>
    </div>)
    
  )
}
