import React, { useContext, useEffect } from "react";
import "./Home.css";
import { useLocation } from "react-router-dom";
import Categorytitle from "../../components/categorytitle/Categorytitle";
import Menu from "../../components/menu/Menu";
import Submenu from "../../components/submenu/Submenu";
import Rectangle_items_list from "../../components/rectangle_items_list/Rectangle_items_list";
import Box_items_list from "../../components/box_items_list/Box_items_list";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import { Itemscontext } from "../../context/Itemscontext";

export default function Home() {
  const { golddata, cryptodata, currencydata,goldpending,currencypending,cryptopending } = useContext(Itemscontext);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="home-page-container  bg_color_dark2 mb-0">
      <div className="header-container">
        <Menu></Menu>
        <Submenu page={"home"}></Submenu>
      </div>
      
      

      <div className="layout bg_color_dark2 aftermenu ">
        <div className="banner-container ">
        <Banner></Banner>
        </div>
      
        {golddata && (
          <div className="">
            <div className="">
              <Categorytitle
                type={"gold"}
                title={"Coins"}
                route={"./gold"}
                paddingtop={"no"}
              ></Categorytitle>
            </div>
            
            {goldpending && (<div className="w-100 d-flex justify-content-center mb-5">
              <div className="spinner-border text-light" role="status">
                   <span className="sr-only"></span>
              </div>
            </div>)}
            {!goldpending &&(
              <div>
              <Rectangle_items_list path={"gold"} data={golddata}></Rectangle_items_list>
            </div>
            )}
            
          </div>
        )}
{currencypending && (<div className="w-100 d-flex justify-content-center mb-5">
              <div class="spinner-border text-light" role="status">
                   <span class="sr-only"></span>
              </div>
            </div>)}
        {currencydata && (
          <div>
            <div>
              <Categorytitle
                title={"Currency"}
                route={"./Currency"}
              ></Categorytitle>
            </div>
            <div>
              <Box_items_list
              path={"currency"}
                type={"currency"}
                data={currencydata}
              ></Box_items_list>
             
            </div>
          </div>
        )}
{cryptopending && (<div className="w-100 d-flex justify-content-center mb-5">
              <div class="spinner-border text-light" role="status">
                   <span class="sr-only"></span>
              </div>
            </div>)}
        {cryptodata && (
          <div>
            <div>
              <Categorytitle
                title={"Crypto"}
                route={"./Crypto"}
              ></Categorytitle>
            </div>
            <div>
              <Rectangle_items_list
              path={"crypto"}
                type={"digital"}
                data={cryptodata}
              ></Rectangle_items_list>
            </div>
          </div>
        )}
{goldpending && (<div className="w-100 d-flex justify-content-center">
              <div class="spinner-border text-light" role="status">
                   <span class="sr-only"></span>
              </div>
            </div>)}
        {golddata && (
          <div>
            <div>
              <Categorytitle title={"Gold"} route={"./Gold"}></Categorytitle>
            </div>
            <div>
              <Box_items_list path={"gold"} data={golddata}></Box_items_list>
            </div>
          </div>
        )}
      </div>
      <div className="pt_200">
<Footer></Footer>
      </div>
      
    </div>
  );
}
