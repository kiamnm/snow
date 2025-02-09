import React,{useState,useRef,useEffect} from 'react'
import "./Chat.css"
import { Link } from 'react-router-dom'
import Tooltip from "@mui/material/Tooltip";
import gettime from '../../utils/gettime';
import { Scrollbar } from 'react-scrollbars-custom';
import { useLocation } from "react-router-dom";

export default function Chat() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [msgvalue,setmsgvalue]=useState("")
  const [allmsg,setallmsg]=useState([
    {action:"client",text:"Hi ! i have question!",time:"12:11 AM"},
    {action:"server",text:"Hi whats your question ?",time:"6:10 PM"},
    {action:"client",text:"what is ramzparz",time:"7:45 AM"},
    {action:"client",text:"what is the gold price today ?",time:"7:45 AM"},
    {action:"client",text:"Can i buy some crypto from your website ?",time:"7:45 AM"},
    
  ])
  const scrollbarRef = useRef(null);
  const handleclickenter=(event)=>{
    if(event.key==="Enter" && msgvalue!==""){
      sendmsg()
    }
  }
  



  const sendmsg = () => {
    if (msgvalue !== "") {
      setallmsg((prev) => [
        ...prev,
        { action: "client", text: msgvalue, time: gettime() }
      ]);
      setmsgvalue(""); // ریست کردن مقدار پیام
    }
  };
  useEffect(()=>{
    
    
  
      if (scrollbarRef.current) {
        scrollbarRef.current.scrollToBottom(); // اسکرول به انتهای کانتینر
      }
    ;
    
  },[allmsg])
  return (
    <div className='chat-page-container bg_color_dark2 layout  ' onKeyDown={handleclickenter}>
      <div className="img-container d-flex align-items-center">
        <Link to="/">
        <Tooltip title={"back"}>
        <img className='me-4 back-icon' src="./images/back-icon.svg" alt="" />
        </Tooltip>
        </Link>
        
        <img className='me-3 profile' src="./images/profile.svg" alt="" />
        <p className='p-0 m-0 color_white global ff_medium'>Global Chat</p>
      </div>
      <div className='gradiant-line mt-4 mt-sm-5 mb-4'></div>
      <Scrollbar ref={scrollbarRef}  permanentTrackX={false} > 
      <div   className=" chat-texts-container  bg_color_dark2 d-flex flex-column pe-4">
        {allmsg.length>0 && allmsg.map((item,index)=>{
          return (
            <div key={index} className={`d-flex  flex-column  ${item.action}`}>
          <span className='color_dim mb-2 time ff_medium'>{item.time}</span>
        <p className={`fs_16 color_white ff_regular  py-2 px-3 ${item.action}`}>{item.text}</p>
        </div>
          )
        })}
        
      </div>
      </Scrollbar> 
      
      <div className="chat-input-container bg_color_dark1 mt-5 mb-0 mb-sm-5 ">
        <div className='d-flex handle-input align-items-center mt-1 mt-sm-0'>
          <Tooltip title="Send">
          <img onClick={sendmsg} className='send cursor_pointer' src="./images/send-msg-icon.svg" alt="" />
          </Tooltip>
        
        <input value={msgvalue} onChange={(e)=>{setmsgvalue(e.target.value)}} className='send-chat w-100 bg_color_dark1 ps-3 color_white d-flex align-items-center pt-sm-0 fs_12' placeholder='Write new message' type="text" />
        
        </div>
          
      </div>
      <div className="last-handler bg_color_dark2 ">

      </div>
      
    </div>
  )
}
