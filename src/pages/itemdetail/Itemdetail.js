import React, { useContext, useState, useEffect } from "react";
import "./Itemdetail.css";
import Menu from "../../components/menu/Menu";
import Submenu from "../../components/submenu/Submenu";
import Listitem from "../../components/listitem/Listitem";
import Mainchart from "../../components/mainchart/Mainchart";
import Filterbtn from "../../components/filterbtn/Filterbtn";
import { Itemscontext } from "../../context/Itemscontext";
import { useParams } from "react-router-dom";
import Pricelog from "../../components/pricelog/Pricelog";
import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import formatnumber from "../../utils/formatnumber";
import Footer from "../../components/footer/Footer";
export default function Itemdetail() {
  const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  const [filtertype, setfiltertype] = useState(1);
  const { type, id } = useParams();
  const [spots, setspots] = useState(null);
  const [maxvalue, setmaxvalue] = useState(null);
  const [minvalue, setminvalue] = useState(null);
  const [allprice, setallprice] = useState(null);
  const [link, setlink] = useState(null);
  const [buttontxt, setbuttontxt] = useState(null);
  const [itembox, setitembox] = useState(null);
  const [parseresponse, setparseresponse] = useState(null);
  const [spotspending,setspotspending]=useState(false)
  useEffect(() => {
    
    
   
    const getdetailpagedata = async (type, id, filtertype) => {
      setspotspending(true)
      setspots(null);
      try{
        const response = await fetch(
        
          `https://api1.arzparz.com/api/currency/detail/${filtertype}/${id}`
        );
        if(!response){
          setspotspending(false)
          return false
        }else{
          setspotspending(false)
          const parseresponse = await response.json();
          
      setparseresponse(parseresponse);
      setspots(parseresponse.data.currency[0].spots.data);
      setmaxvalue(parseresponse.data.currency[0].spots.max_y);
      setminvalue(parseresponse.data.currency[0].spots.min_y);
      setallprice(parseresponse.data.all_prices);
      setlink(parseresponse.data.info.link);
      setbuttontxt(parseresponse.data.info.text);
      setitembox(parseresponse.data.currency[0]);
        }
        

      }catch(err){
        console.log(err);
      }
      
      

      
      
    };
    getdetailpagedata(type, id, filtertype);
  }, [filtertype, type, id]);
  return (
    <div className="itemdetail-page-container bg_color_dark2">
      <div className="header-container">
        <Menu></Menu>
        <Submenu page={"home"}></Submenu>
      </div>
      {itembox && (
        <div className="layout pt-5 bg_color_dark2 pb-5">
          <Listitem data={itembox} trend="no-trend"></Listitem>
        </div>
      )}
      {spotspending &&(
        <div className="w-100 d-flex justify-content-center mb-5">
        <div className="spinner-border text-light" role="status">
             <span className="sr-only"></span>
        </div>
      </div>
      )}
      {spots && (
        <div className="layout bg_color_dark2 pb-4 ">
          <Mainchart
            spots={spots}
            minvalue={minvalue}
            maxvalue={maxvalue}
          ></Mainchart>
        </div>
      )}

      <Filterbtn
        filtertype={filtertype}
        setfiltertype={setfiltertype}
        
      ></Filterbtn>
      <div className="layout bg_color_dark2 pt-3 mt-4">
        <a href={link}>
          <button className="buy-btn  ff_medium py-2 ">
            {buttontxt?buttontxt:"Buy"}
          </button>
        </a>
      </div>
      <div className="layout bg_color_dark2 mt-4 mt-sm-5">
              <Banner></Banner>
            </div>
      <div className="layout bg_color_dark2 pt-4 pb-5 d-flex align-items-center ">
        <div className="py-2  ps-3 w-50 highest d-flex">
          
          <img className="increasee pe-2  d-none d-sm-block" src="/images/increase-icon.svg" alt="" />
          <div>
            <p className="fs_12 ff_medium p-0 m-0 color_white">Maximum Price</p>
          <p className=" mt-2 fs_12 ff_medium p-0 m-0 color_white">
            {maxvalue && formatnumber(maxvalue)}
          </p>
          </div>
          
        </div>
        <div className="py-2  ps-3 w-50 lowest d-flex align-items-center">
          <img className="decreasee pe-2 d-none d-sm-block" src="/images/decrease-icon.svg"  />
          <div>
            <p className="fs_12 ff_medium p-0 m-0 color_white">Minimum Price</p>
          <p className=" mt-2 fs_12 ff_medium p-0 m-0 color_white">
          {minvalue && formatnumber(minvalue)}
            
          </p>
          </div>
          
        </div>
      </div>
      
      <div className="log-price bg_color_dark2  pb_200">
        <Pricelog allprice={allprice} minvalue={minvalue} maxvalue={maxvalue}></Pricelog>
      </div>

      <div className="pt_200 bg_color_dark2">
      <Footer></Footer>
            </div>
    </div>
  );
}
