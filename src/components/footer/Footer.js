import React from 'react'
import { LiaPhoneSolid } from "react-icons/lia";
import { GoArrowUp } from "react-icons/go";

import "./Footer.css"

export default function Footer() {
    const handlescroll=()=>{
        window.scrollTo(0,0)
    }
    const currentYear = new Date().getFullYear();
  return (
    <div className='footer-container layout bg_color_dark1 pt-5 pb-5 d-none d-sm-block'>
        {/* <div className="main d-flex justify-content-between ">
            <div className="left d-flex ">
                <div className='d-flex align-items-center '>
                    <span className='line me-3'></span>
                    <p className='p-0 m-0 fs_14 ff_medium color_white cursor_pointer'>Home</p>
                </div>
                <div className='d-flex align-items-center'>
                    <span></span>
                    <p className='p-0 m-0 fs_14 ff_regular color_dim cursor_pointer'>Service</p>
                </div>
                <div className='d-flex align-items-center'>
                    <span></span>
                    <p className='p-0 m-0 fs_14 ff_regular color_dim cursor_pointer'>Service</p>
                </div>
                <div className='d-flex align-items-center'>
                    <span></span>
                    <p className='p-0 m-0 fs_14 ff_regular color_dim cursor_pointer'>About us</p>
                </div>
            </div>
            <div className="right d-flex align-items-center">
            <LiaPhoneSolid color='white' fontSize={"24px"} />
            <p className="fs_14 color_white p-0 ps-2 m-0">Contact us</p>
            </div>
        </div> */}
        
        <div className="end pt-3 d-flex justify-content-between align-items-center">
            <p className="left p-0 m-0 color_dim ff_regular fs_14 ">Copyright <span className='fs_16 '>© ArzParz</span>  {currentYear}  All Rights Reserved</p>
            <div onClick={handlescroll} className="right scroll-up d-flex justify-content-center align-items-center cursor_pointer">
            <GoArrowUp color='white' fontSize={"28px"} />
            </div>
        </div>
    </div>  
  )
}
