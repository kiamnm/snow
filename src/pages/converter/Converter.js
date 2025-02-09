import React,{useContext,useState,useEffect} from 'react'
import Menu from '../../components/menu/Menu'
import Submenu from '../../components/submenu/Submenu'
import Converterbox from '../../components/converter/Converterbox'
import Listitem from '../../components/listitem/Listitem'
import { Itemscontext } from "../../context/Itemscontext";
import "./Converter.css"
import Listexchange from '../../components/listexchange/Listexchange'
import { useLocation } from "react-router-dom";
import Footer from "./../../components/footer/Footer"
export default function Converter() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const {cryptodata } = useContext(Itemscontext);
  const [allprice,setallprice]=useState(null)
  return (
    
    <div className='converter-page-container bg_color_dark2 d-flex w-100 flex-column justify-content-between'>
      <div>
        <div className="header-container bg_color_dark1  ">
               <Menu></Menu>
               <Submenu imgsrc={"/images/convert-white-icon.svg"} title={"Converter"}  visibility={"notvisible"}></Submenu>
             </div>
             

<div className='bg_color_dark2'>
<div className='handleposition layout2'>
    <Converterbox  setallprice={setallprice}></Converterbox>
    </div>

</div>
    
    <div className="layout2 converter-list-container  bg_color_dark2 pb-5">
                  {/* {cryptodata && cryptodata.map((item,index)=>{
                   return (
                   <Listitem trend={"no-trend"} data={item}></Listitem>
                   )
                  })
                } */}
                {allprice && allprice.map((item)=>{
                 
                   return <Listexchange data={item}></Listexchange>
                })}
                  
                  

                  </div>
      </div>
   
                  
              <div className="pt_200 fix_position">
                    <Footer></Footer>
                          </div>
             </div>
  )
}
