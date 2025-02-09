import React,{useContext,useEffect} from "react";
import { useLocation } from "react-router-dom";
import Menu from "../../components/menu/Menu";

import Submenu from "../../components/submenu/Submenu";
import Listtitle from "../../components/listtitle/Listtitle";
import Listitem from "../../components/listitem/Listitem";

import { Itemscontext } from "../../context/Itemscontext";
import { Link } from "react-router-dom";
import Footer from "./../../components/footer/Footer"


export default function Gold() {
  const { golddata } = useContext(Itemscontext);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="gold-page-container bg_color_dark2">
      <div className="header-container">
        <Menu></Menu>
        <Submenu
          imgsrc={"./images/gold-white-icon.svg"}
          title={"Gold"}
        ></Submenu>
      </div>

      <div className="pt-5  d-none d-sm-block bg layout">
        <Listtitle
          imgsrc={"./images/gold-white-icon.svg"}
          title={"Gold"}
          path={"#"}
        ></Listtitle>
      </div>

      <div className="layout  pt-5  ">
        {golddata && (
          <div className=" ">
            {golddata.map((item, index) => {
              return (
                <Listitem
                key={item.id}
                id={item.id}
                  data={golddata[index]}
                  path={"gold"}
                ></Listitem>
              );
            })}
          </div>
        )}
        
      </div>

      <div className="pt_200 ">
            <Footer></Footer>
                  </div>
    </div>
  );
}
