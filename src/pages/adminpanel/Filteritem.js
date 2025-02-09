import React from 'react'
import "./Filteritem.css"
import { HiOutlineDocumentAdd } from "react-icons/hi";
import Toptitle from "../../components/adminpanel/toptitle/Toptitle";

export default function Filteritem() {
  return (
    <div className='filter-item-page-container'>
        <Toptitle
                        icon={<HiOutlineDocumentAdd  size={22} />}
                        top_title={"Set filter"}
                        main_title={"Set filter"}
                        text={"Here you can set filter"}
                      ></Toptitle>
    </div>
  )
}
