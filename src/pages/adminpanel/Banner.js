import React, { useState, useEffect } from "react";
import "./Banner.css";
import Toptitle from "../../components/adminpanel/toptitle/Toptitle";
import { PiFlagBannerBold } from "react-icons/pi";
import getallbaners from "./utils/getallbanners";
import Tooltip from "@mui/material/Tooltip";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import Modalcomponent from "../../components/adminpanel/modal/Modal";
import { Link } from "react-router-dom";
import editbanner from "./utils/editbanner";
import deletebanner from "./utils/deletebanner"
import { ToastContainer, toast } from "react-toastify";


export default function Banner() {
  const [id,setid]=useState(null)
  const [editingindex, seteditingindex] = useState(null);
  const [allbanners, setallbanners] = useState(null);
  const [editedbanner, seteditedbanner] = useState(null);
  const [editedtitle, seteditedtitle] = useState(null);
  const [editedtext, seteditedtext] = useState(null);
  const [editedemail, seteditedemail] = useState(null);
  const [editedwebsite, seteditedwebsite] = useState(null);
  const [editedmobile, seteditedmobile] = useState(null);
  const [editedaddress, seteditedaddress] = useState(null);
  const [editedcount, seteditedcount] = useState(null);
  const [editedcount_fake, seteditedcount_fake] = useState(null);
  const [editedtype, seteditedtype] = useState(null);
  const [showsavemodal,setshowsavemodal]=useState(false);
  const [showdeletemodal,setshowdeletemodal]=useState(false)
  const [getbannerpending,setgetbannerpending]=useState(false)
  const [yeseditpending,setyeseditpending]=useState(false)
  const [yesdeletepending,setyesdeletepending]=useState(false)


  const handleclickedit=(index)=>{
    setid(allbanners[index].id)
    seteditingindex(index)
    seteditedtitle(allbanners[index].title)
    seteditedemail(allbanners[index].email)
    seteditedmobile(allbanners[index].mobile)
    seteditedcount(allbanners[index].count)
    seteditedcount_fake(allbanners[index].count_fake)
    seteditedbanner(allbanners[index].banner)
    seteditedaddress(allbanners[index].address)
    seteditedwebsite(allbanners[index].website)
    seteditedtext(allbanners[index].text)
    seteditedtype(allbanners[index].type)
  }
const notifysuccess=(msg)=>{
      toast.success(msg)
     }
     const notifyfailed=(msg)=>{
      toast.error(msg)
     }
  const handleclosesavemodal=()=>{setshowsavemodal(false)}
  const handleclosedeletemodal=()=>{
    if(!yeseditpending){
      setshowsavemodal(false)
    }
    setshowdeletemodal(false)
  }
  const handleclickoksavemodal=async()=>{
    const result=await editbanner(editedtitle,editedemail,editedmobile,editedtype,editedbanner,editedaddress,editedwebsite,editedtext,editedcount,editedcount_fake,setyeseditpending,id)
    
    if(!result){
notifyfailed("Banner does not edited successfully")
    }else{
      
      notifysuccess("Banner edited successfully")
      setallbanners(prev=> 
        prev.map(item => 
          item.id === id ? { id:id,banner:editedbanner,title:editedtitle,text:editedtext,email:editedemail,website:editedwebsite,mobile:editedmobile,address:editedaddress,count:editedcount,count_fake:editedcount_fake,type:editedtype } : item
        )
      );
      seteditingindex(null)
    }
    
  }
  const handleclickokdeletemodal=async()=>{
    let result=await deletebanner(id,setyesdeletepending);
    if(!result){
      notifyfailed("Banner does not deleted successfully")
    }else{
      notifysuccess("Banner deleted successfully");
      setallbanners(prev => prev.filter(item => item.id !== id));
    }
    
  }

  useEffect(() => {
    getallbaners(setallbanners,setgetbannerpending);
  }, []);
  return (
    <div className="banner-tab-container">
      <ToastContainer />
      <Modalcomponent modaltitle={"Accept edit ? "} modalbody={"Are you sure you want edit banner?"} show={showsavemodal} handleclose={handleclosesavemodal} onokclick={handleclickoksavemodal} yespending={yeseditpending}></Modalcomponent>
      <Modalcomponent modaltitle={"Accept Delete ?"} modalbody={"Are you sure you want delete banner?"} show={showdeletemodal} handleclose={handleclosedeletemodal} onokclick={handleclickokdeletemodal} yespending={yesdeletepending}></Modalcomponent>
      <Toptitle
        icon={<PiFlagBannerBold size={22} />}
        top_title={"Banners"}
        main_title={"Banners"}
        text={"Here you can edit or delete Banners"}
      ></Toptitle>
      <div className="w-100 d-felx justify-content-center text-end mb-4"><Link to={"/adminpanel/banner/add"}><button type="button" class="btn btn-primary">Add new banner</button></Link></div>

      {getbannerpending && (
        <div className="text-center">
          <div class="spinner-border text-center" role="status">
  <span class="sr-only"></span>
</div>
        </div>
      )}
      {((allbanners && !getbannerpending) && 
        allbanners.map((item,index)=>{
          
         return  editingindex===index ? (<div key={index} className="each-banner-item-container px-3 mb-5">
          <div className="top-row">
          <div className="title d-flex justify-content-between px-4 pt-3">
            <p className="col-1 text-center ff_bold ">Id</p>
            <p className="col-2 text-center ff_bold ">Title</p>
            <p className="col-2 text-center ff_bold">Email</p>

            <p className="col-1 text-center ff_bold">Mobile</p>
            <p className="col-1 text-center ff_bold">Count</p>
            <p className="col-1 text-center ff_bold">Count_fake</p>
            <p className="col-1 text-center ff_bold">Type</p>
            <div className="col-2 text-center ff_bold">Edit</div>
          </div>
          <div className="info d-flex justify-content-between px-4 pt-3">
            <p className="col-1 text-center ff_regular  ">{item.id}</p>
           <input className="col-2 text-center edit-banner-input" type="text" name="title" value={editedtitle} onChange={(e)=>seteditedtitle(e.currentTarget.value)} />
           <input className="col-2 text-center edit-banner-input"
           onChange={(e)=>seteditedemail(e.currentTarget.value)} type="text" name="email" value={editedemail} />

           <input onChange={(e)=>seteditedmobile(e.currentTarget.value)} className="col-1 text-center edit-banner-input" type="text" name="mobile" value={editedmobile} />
           <input onChange={(e)=>seteditedcount(e.currentTarget.value)} className="col-1 text-center edit-banner-input" type="text" name="count" value={editedcount} />
           <input onChange={(e)=>seteditedcount_fake(e.currentTarget.value)} className="col-1 text-center edit-banner-input" type="text" name="fake_count" value={editedcount_fake} />
           <select
                      className="col-1 text-center cursor_pointer edit-banner-input"
                      name="type"
                      value={editedtype}
                      onChange={(e)=>{seteditedtype(e.currentTarget.value)}}
                      
                    >
                      <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          
                    </select>
            <div className="col-2 text-center d-flex justify-content-center edit-banner-btn-container">
              <button onClick={()=>setshowsavemodal(true)} className="btn btn-primary me-2 py-1 px-2 edit-banner-btn">Save</button>
              <button className="btn btn-secondary py-1  px-2 edit-banner-btn" onClick={()=>{seteditingindex(null)}}>Cansel</button>

            </div>
          </div>
          
        </div>
        <div className="banner! d-flex align-items-center border_bottom  py-3">
            <p className="ff_bold pe-2 p-0 m-0">Banner :</p>
            <input onChange={(e)=>{seteditedbanner(e.currentTarget.value)}} value={editedbanner} className="text-center edit-banner-input minw_50" name="banner"/>
          </div>
          <div className="address d-flex align-items-center border_bottom py-3">
            <p className="ff_bold pe-2 p-0 m-0">Address :</p>
            <input value={editedaddress} onChange={(e)=>seteditedaddress(e.currentTarget.value)} className="text-center edit-banner-input minw_50" name="address" type="text" />
          </div>
          <div className="website d-flex align-items-center border_bottom py-3">
            <p className="ff_bold pe-2 p-0 m-0">Website :</p>
            <input value={editedwebsite} onChange={(e)=>{seteditedwebsite(e.currentTarget.value)}} className="text-center edit-banner-input minw_50" name="website" type="text" />
          </div>
          <div className="text d-flex align-items-center  py-3">
            <p className="ff_bold pe-2 p-0 m-0">Text:</p>
            <textarea value={editedtext} onChange={(e)=>{seteditedtext(e.currentTarget.value)}}  name="text" className="w-100 text-center edit-banner-textarea" id=""></textarea>
          </div>
        </div>) :(<div className="each-banner-item-container px-3 mb-5">
                   <div className="top-row">
                     <div className="title d-flex justify-content-between px-4 pt-3">
                       <p className="col-1 text-center ff_bold">Id</p>
                       <p className="col-2 text-center ff_bold">Title</p>
                       <p className="col-2 text-center ff_bold">Email</p>
          
                       <p className="col-1 text-center ff_bold">Mobile</p>
                       <p className="col-1 text-center ff_bold">Count</p>
                       <p className="col-1 text-center ff_bold">Count_fake</p>
                       <p className="col-1 text-center ff_bold">Type</p>
                       <div className="col-2 text-center ff_bold">Edit</div>
                     </div>
                     <div className="info d-flex justify-content-between px-4 pt-3">
                       <p className="col-1 text-center ff_regular ">{item.id}</p>
                       <p className="col-2 text-center ff_regular ">
                         {item.title}
                       </p>
                       <p className="col-2 text-center ff_regular ">
                        {item.email}
                       </p>
          
                       <p className="col-1 text-center ff_regular ">{item.mobile}</p>
                       <p className="col-1 text-center ff_regular ">{item.count}</p>
                       <p className="col-1 text-center ff_regular ">{item.count_fake}</p>
                       <p className="col-1 text-center ff_regular ">1</p>
                       <div className="col-2 text-center d-flex justify-content-center ">
                         <Tooltip title="Edit" >
                         <span className="pe-2 h_30">
                           <MdOutlineModeEdit onClick={()=>{handleclickedit(index)}} className="action-icon-edit " fontSize={"24px"}></MdOutlineModeEdit>
                         </span>
                        
                         </Tooltip>
                         <Tooltip title="Delete">
                           <span className="ps-2 h_30">
                             <RiDeleteBinLine onClick={()=>{
                              setshowdeletemodal(true)
                              setid(item.id)
                              }} className="action-icon-delete" fontSize={"24px"}></RiDeleteBinLine>
                           </span>
                        
                         </Tooltip>
          
                       </div>
                     </div>
                    
                   </div>
                   <div className="banner! d-flex align-items-center border_bottom  py-3">
                       <p className="ff_bold pe-2 p-0 m-0">Banner :</p>
                       <p className="p-0 m-0">{item.banner}</p>
                     </div>
                     <div className="address d-flex align-items-center border_bottom py-3">
                       <p className="ff_bold pe-2 p-0 m-0">Address :</p>
                       <p className="p-0 m-0">{item.address}</p>
                     </div>
                     <div className="website d-flex align-items-center border_bottom py-3">
                       <p className="ff_bold pe-2 p-0 m-0">Website :</p>
                       <p className="p-0 m-0">{item.website}</p>
                     </div>
                     <div className="text d-flex align-items-center  py-3">
                       <p className="ff_bold pe-2 p-0 m-0">Text:</p>
                       <p className="p-0 m-0 text">
                        
                        {item.text}
                       </p>
                     </div>
                 </div>)
        })
      )}














    </div>
  )
}










