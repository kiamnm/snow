import React, { useState, useEffect} from "react";

import "./Addbanner.css"
import Toptitle from "../../components/adminpanel/toptitle/Toptitle";
import Tooltip from "@mui/material/Tooltip";
import Modalcomponent from "../../components/adminpanel/modal/Modal";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import addbanner from "./utils/addbanner";
import { ToastContainer, toast } from "react-toastify";


export default function Addbanner() {
    const [title,settitle]=useState("");
    const [email,setemail]=useState("");
    const [mobile,setmobile]=useState("")
    
    
    const [type,settype]=useState(3)
    const [banner,setbanner]=useState("")
    const [address,setaddress]=useState("")
    const [website,setwebsite]=useState("")
    const [text,settext]=useState("")
     const [showaddmodal,setshowaddmodal]=useState(false);
     const [yespending,setyespending]=useState(false)
     
     const notifysuccess=()=>{
      toast.success("Banner added successfully")
     }
     const notifyfailed=()=>{
      toast.error("Banner does not added successfully")
     }
     const handlecloseaddmodal=()=>{
      if(!yespending){
        setshowaddmodal(false)
      }
      
    };
     const handleclickokaddmodal=async()=>{
      const result=await addbanner(title,email,mobile,type,banner,address,website,text,setyespending)
      result?notifysuccess():notifyfailed();
      
      }


      
  return (
    <div className="add-banner-page-container">
      <ToastContainer />
        <Toptitle
                icon={<HiOutlineDocumentAdd  size={22} />}
                top_title={"Add banner"}
                main_title={"Add banner"}
                text={"Here you can add Banner"}
              ></Toptitle>
              <Modalcomponent modaltitle={"Add banner"} modalbody={"Are you sure you want add this banner?"} show={showaddmodal} handleclose={handlecloseaddmodal} onokclick={handleclickokaddmodal} yespending={yespending}></Modalcomponent>







<div  className="each-banner-item-container px-3 mb-5">
          <div className="top-row">
          <div className="title d-flex justify-content-between px-4 pt-3">
            
            <p className="col-2 col-xl-3 text-center ff_bold ">Title</p>
            <p className="col-2 col-xl-3 text-center  ff_bold">Email</p>

            <p className="col-2 col-xl-2 text-center   ff_bold">Mobile</p>
           
            <p className="col-2 col-xl-1 text-center ff_bold">Type</p>
            
          </div>
          <div className="info d-flex justify-content-between px-4 pt-3">
            
           <input className="col-2 col-xl-3 text-center edit-banner-input" type="text" name="title" value={title} onChange={(e)=>settitle(e.currentTarget.value)} />
           <input className="col-2 col-xl-3 text-center edit-banner-input"
           onChange={(e)=>setemail(e.currentTarget.value)} type="text" name="email" value={email} />

           <input onChange={(e)=>setmobile(e.currentTarget.value)} className="col-2 col-xl-2  text-center edit-banner-input" type="text" name="mobile" value={mobile} />
           
           <select
                      className="col-2 col-xl-1 text-center cursor_pointer edit-banner-input"
                      name="type"
                      value={type}
                      onChange={(e)=>{settype(e.currentTarget.value)}}
                      
                    >
                      <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          
                    </select>
            
          </div>
          
        </div>
        <div className="banner! d-flex align-items-center border_bottom  py-3">
            <p className="ff_bold pe-2 p-0 m-0">Banner :</p>
            <input onChange={(e)=>{setbanner(e.currentTarget.value)}} value={banner} className="text-center edit-banner-input minw_50" name="banner"/>
          </div>
          <div className="address d-flex align-items-center border_bottom py-3">
            <p className="ff_bold pe-2 p-0 m-0">Address :</p>
            <input value={address} onChange={(e)=>setaddress(e.currentTarget.value)} className="text-center edit-banner-input minw_50" name="address" type="text" />
          </div>
          <div className="website d-flex align-items-center border_bottom py-3">
            <p className="ff_bold pe-2 p-0 m-0">Website :</p>
            <input value={website} onChange={(e)=>{setwebsite(e.currentTarget.value)}} className="text-center edit-banner-input minw_50" name="website" type="text" />
          </div>
          <div className="text d-flex align-items-center  py-3">
            <p className="ff_bold pe-2 p-0 m-0">Text:</p>
            <textarea value={text} onChange={(e)=>{settext(e.currentTarget.value)}}  name="text" className="w-100 text-center edit-banner-textarea" id=""></textarea>
          </div>





          </div>
          <div><button onClick={()=>setshowaddmodal(true)} type="button" className="btn btn-success">Add banner</button></div>

              </div>

               
  )
}
