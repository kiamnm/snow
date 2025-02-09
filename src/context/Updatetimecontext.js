import { createContext, useState,useEffect, useContext } from "react";
import { Itemscontext } from "./Itemscontext";
import api_constant from "./../utils/api_constant"


export const Updatetimecontext=createContext();


const Updatetimeprovider=({children})=>{
    const {isautorefreshon,autorefreshinterval}=useContext(Itemscontext)
const [count,setcout]=useState(0)
useEffect(() => {
    console.log(isautorefreshon, "checkautorefresh");
    setcout(0); // بازنشانی مقدار شمارشگر
    let interval;

    if (!isautorefreshon) {
        interval = setInterval(() => {
            setcout((prev) => prev + 1);
        }, 60000);
    }

    // پاک کردن تایمر هنگام تغییر مقادیر وابسته
    return () => {
        if (interval) clearInterval(interval);
    };
}, [isautorefreshon, autorefreshinterval]);
   


const test="in test context"
    // const {allproducts,isloadingallproducts,errgetallproducts}=Usegetallproducts()
    //   const Productcontextvalue={allproducts,isloadingallproducts,errgetallproducts}
    //   console.log(allproducts,"context");
    return(
        <Updatetimecontext.Provider value={count}>

        {children}
        </Updatetimecontext.Provider>
    )

}   
export default Updatetimeprovider