import React,{useState,useContext,useEffect} from 'react'
import "./Autorefresh.css"
import { Dropdown } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';
import { SlArrowDown } from "react-icons/sl";
import { Itemscontext } from '../../context/Itemscontext';

export default function Autorefresh() {
    const [isactiveswitch, setisactiveswitch] = useState(false);
    const [isdropdown, setisdropdown] = useState(false); // برای کنترل وضعیت باز یا بسته بودن dropdown
     const{setisautorefreshon,setautorefreshinterval}=useContext(Itemscontext)
      const toggleswitch = () => {
        setisactiveswitch(!isactiveswitch); // تغییر وضعیت فعال/غیرفعال
        setisautorefreshon(!isactiveswitch);
        console.log("toggle rokhdad");
      }
    
    
    
    
     
      const [selectedvalue, setselectedvalue] = useState("10s"); // مقدار انتخاب شده
    
      const toggledropdown = () => {
        setisdropdown(!isdropdown); // تغییر وضعیت باز و بسته شدن dropdown
      };
    
      const handleoptionclick = (value) => {
        setselectedvalue(value); // تغییر مقدار انتخاب شده
        if(value==="10s"){
            setautorefreshinterval(10000)
        }else if(value==="20s"){
            setautorefreshinterval(20000)
        }else if(value==="30s"){
            setautorefreshinterval(30000)
        }else if(value==="60s"){
            setautorefreshinterval(60000)
        }
        setisdropdown(false); // بسته شدن dropdown بعد از انتخاب
      };
      useEffect(()=>{
        setisautorefreshon(false);
        setautorefreshinterval(10000)
      },[])
  return (
    <div className='autorefresh-container d-flex align-items-center '>
         <div
              className={`toggle-switch-container me-3 ms-3  ${isactiveswitch ? "active" : ""}`}
              onClick={toggleswitch}
            >
            
              <div className="toggle-switch-circle"></div>
            </div>
        
            {isactiveswitch && (<div className="custom-select ff_regular">
      <div className="custom-select-toggle" onClick={toggledropdown}>
        <span id="selected-value">{selectedvalue}</span>
        <SlArrowDown />
      </div>
      {isdropdown && (
        <div className="dropdown-options py-2">
             <div className="dropdown-option" onClick={() => handleoptionclick("10s")}>10s</div>
          <div className="dropdown-option" onClick={() => handleoptionclick("20s")}>20s</div>
          <div className="dropdown-option" onClick={() => handleoptionclick("30s")}>30s</div>
          <div className="dropdown-option" onClick={() => handleoptionclick("60s")}>60s</div>
        </div>
      )}
    </div>)}
            
    </div>
  )
}
