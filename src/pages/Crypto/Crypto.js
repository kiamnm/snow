import React,{useContext,useEffect} from "react";
import Menu from "../../components/menu/Menu";
import { useLocation } from "react-router-dom";
import Submenu from "../../components/submenu/Submenu";
import Listtitle from "../../components/listtitle/Listtitle";
import Listitem from "../../components/listitem/Listitem";
import { Itemscontext } from "../../context/Itemscontext";
import Footer from "./../../components/footer/Footer"

export default function Crypto() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const {cryptodata } = useContext(Itemscontext);
  return (
    <div className="crypto-page-container bg_color_dark2">
      <div className="header-container">
        <Menu></Menu>
        <Submenu
          imgsrc={"./images/btc-white-icon.svg"}
          title={"Crypto Currency"}
        ></Submenu>
      </div>


      
<div className=" pt-5  d-none d-sm-block bg layout">
        <Listtitle
          imgsrc={"./images/btc-white-icon.svg"}
          title={"Crypto"}
          path={"#"}
        ></Listtitle>
      </div>
      
      <div className="layout  pt-5  ">
        {cryptodata && (
               <div className="  ">
               {cryptodata.map((item,index) => {
                 return (
                  
                   <Listitem
                   key={item.id}
                    data={item}
                    id={item.id}
                     path={"crypto"}
                   ></Listitem>
                 );
               })}
             </div>
             )}
      </div>
      
      
      

      <div className="pt_200">
            <Footer></Footer>
                  </div>
    </div>
  );
}
