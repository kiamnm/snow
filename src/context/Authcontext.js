import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import api_constant from "../utils/api_constant";

export const Authcontext = createContext()

const Authprovider = ({ children }) => {
    const [islogin,setislogin]=useState(false);
    const [token,settoken]=useState(null)
    const [accesslevel,setaccesslevel]=useState(null)
    
    const navigate=useNavigate()

    const login=(token)=>{
        settoken(token);
        setislogin(true);
        
        localStorage.setItem("accesstoken",token)
    }


    const logout=()=>{
        settoken(null);
        setislogin(false);
        setaccesslevel(null)
        localStorage.removeItem("accesstoken")
        navigate("/login")
    }
    useEffect(()=>{
        const isvalidtoken=async(token)=>{
            try{
                const response=await fetch(`${api_constant}me`,{
                    method:"GET",
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                const result=await response.json();
                
                if(result.ok){
                    if(result.data.role==="ADMIN"){
                        setislogin(true);
                        setaccesslevel(result.data.accesslevel)
                    }else{
                        setislogin(false);
                        setaccesslevel(null)
                    }
                    
                }else{
                    return false
                }
            }catch(e){
                console.error("Error validating token:", e);
                return false;
            }
        }
        if(!islogin){
            const token=localStorage.getItem("accesstoken")
            if(token){
                
                settoken(token)
                isvalidtoken(token)

            }
        }
    },[login])
  return <Authcontext.Provider value={{islogin,token,setislogin,settoken,login,logout}}>{children}</Authcontext.Provider>;
}
export default Authprovider
