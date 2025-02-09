import React,{useContext,useEffect} from "react";
import "./Currency.css"
import { useLocation } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import Listitem from "../../components/listitem/Listitem";
import Submenu from "../../components/submenu/Submenu";
import Listtitle from "../../components/listtitle/Listtitle";
import { Itemscontext } from "../../context/Itemscontext";
import Footer from "./../../components/footer/Footer"

 


export default function Currency() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const {currencydata } = useContext(Itemscontext);

  return (
    <div className="currency-page-container bg_color_dark2">
      <div className="header-container">
        <Menu></Menu>
        <Submenu
          imgsrc={"./images/currency-white-icon.svg"}
          title={"Currency"}
        ></Submenu>
      </div>

      
      
        <div className=" pt-5  d-none d-sm-block bg layout">
          <Listtitle
            imgsrc={"./images/currency-white-icon.svg"}
            title={"Currency"}
            path={"#"}
          ></Listtitle>
        </div>
        
        <div className="layout  pt-5 ">
       {currencydata && (
         <div className="  ">
         {currencydata.map((item,index) => {
          
           return (
             <Listitem
             key={item.id}
              data={currencydata[index]}
              id={item.id}
            path={"currency"}
               
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
