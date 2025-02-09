import React, { useState, useEffect } from "react";
import getallcurrency from "./utils/getallitemadmin";
import Itemsdatagrid from "../../components/adminpanel/itemsdatagrid/Itemsdatagrid";
import Toptitle from "../../components/adminpanel/toptitle/Toptitle";
import { CiBoxList } from "react-icons/ci";

export default function Items() {
  const [allcurrency, setallcurrency] = useState(null);
  const [isgetallpending, setisgetallpending] = useState(false);
  useEffect(() => {
    getallcurrency(setallcurrency, setisgetallpending);
  }, []);
 
  return (
    <div>
     <Toptitle
             icon={<CiBoxList size={22} />}
             top_title={"Items"}
             main_title={"Items"}
             text={"Here you can edit or delete Items"}
           ></Toptitle>
     <Itemsdatagrid></Itemsdatagrid>


    </div>
  );
}
