import { createContext, useState,useEffect } from "react";
import api_constant from "./../utils/api_constant"


export const Itemscontext=createContext();

const Itemsprovider=({children})=>{
const [cryptodata,setcryptodata]=useState(null)
const [golddata,setgolddata]=useState(null)
const [currencydata,setcurrencydata]=useState(null)
const [cryptopending,setcryptopending]=useState(false)
const [goldpending,setgoldpending]=useState(false)
const [currencypending,setcurrencypending]=useState(false)
const [isautorefreshon,setisautorefreshon]=useState(false)
const [autorefreshinterval,setautorefreshinterval]=useState(10000)

const getallcurrencyitems=async()=>{
    try{
        console.log("anjam shod");
        setcurrencypending(true)
        const response=await fetch(`https://api1.arzparz.com/api/currency`,{
            method:"POST"
        })
        if(response.ok===true){
            setcurrencypending(false)
            const rawdata=await response.json();
            const data=rawdata.data.list
            setcurrencydata(data)
            
        }else{
            setcurrencypending(false)
            console.log("err");
        }
    }catch(err){
        setcurrencypending(false)
        console.log(err);
    }
    }
    const getallgolditems=async()=>{
        
        try{
            setgoldpending(true)
            const response=await fetch(`https://api1.arzparz.com/api/gold`,{
                method:"POST"
            })
            if(response.ok===true){
                setgoldpending(false)
                const rawdata=await response.json();
                const data=rawdata.data.list
                setgolddata(data)
                
            }else{
                setgoldpending(false)
                console.log("err");
            }
        }catch(err){
            console.log(err);
        }
        }
        const getallcryptoitems=async()=>{
            
            try{
                setcryptopending(true)
                const response=await fetch(`https://api1.arzparz.com/api/digital`,{
                    method:"POST"
                })
                if(response.ok===true){
                    setcryptopending(false)
                    const rawdata=await response.json();
                    const data=rawdata.data.list
                    
                    setcryptodata(data)
                    
                }else{
                    setcryptopending(false)
                    console.log("err");
                }
            }catch(err){
                console.log(err);
            }
            }
   useEffect(()=>{
    let interval
    if(isautorefreshon){
         interval=setInterval(() => {
            getallcurrencyitems();
    getallcryptoitems();
    getallgolditems();
        }, autorefreshinterval);
    }else{
        getallcurrencyitems();
        getallcryptoitems();
        getallgolditems();
    }
    return () => {
        if (interval) clearInterval(interval);
    };
   },[isautorefreshon,autorefreshinterval])


const test="in test context"
    
    return(
        <Itemscontext.Provider value={{golddata,cryptodata,currencydata,goldpending,cryptopending,currencypending,setisautorefreshon,setautorefreshinterval,isautorefreshon}}>

        {children}
        </Itemscontext.Provider>
    )

}   
export default Itemsprovider