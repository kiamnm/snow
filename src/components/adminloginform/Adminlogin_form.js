import React, { useState,useEffect,useContext } from "react";
import { Authcontext } from "../../context/Authcontext";
import "./Adminlogin_form.css";
import adminloginformvalidation from "../../validation/adminloginvalidation";




import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import api_constant from "../../utils/api_constant";
import fetchlogin from "../../utils/fetchlogin";
export default function Adminlogin_form() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [checkbox, setcheckbox] = useState(false);
  const [usernameerr, setusernameerr] = useState({ show: 0, message: "" });
  const [passworderr, setpassworderr] = useState({ show: 0, message: "" });
  const navigate = useNavigate();
  const [pending,setpending]=useState(false)
  const {login,islogin}=useContext(Authcontext);
  
  useEffect(()=>{
    if(islogin){
      navigate("/adminpanel/items")
    }

  },[islogin])



  const notifyerror = (message) => toast.error(message);
  
  const sendform=async()=>{
    setpending(true)
    if(checkbox){
      localStorage.setItem("username",username);
      localStorage.setItem("password",password)
    }else{
      localStorage.removeItem("username");
      localStorage.removeItem("password")
    }
    let isformok=adminloginformvalidation(  username,
      password,
      setusernameerr,
      setpassworderr)
      if(isformok){
        
        let result=await fetchlogin(username,password)
        if(result.ok===true){
          setpending(false)
        login(result.accesstoken)
        }else{
          setpending(false)
          notifyerror(result.message)
        }
        
      }else{
        console.log("validate nist");
      }


  }



useEffect(()=>{

const savedusername=localStorage.getItem("username");
const savedpassword=localStorage.getItem("password");
if(savedusername && savedpassword){
  
  setusername(savedusername)
  setpassword(savedpassword)
}

},[])


  return (
    <div className="Adminlogin-form-container d-flex flex-column justify-content-center align-items-center">
      
      <img  src="./images/logo.jpg" alt="logo" className="logo login" />
      <p className="ff_regular fs_20 mt-3 mb-3">
        Welcome to ARZPARZ admin panel
      </p>
      <div className="label-container mt-0 w-100">
        
        <label htmlFor="username" className="fs_16 ff_regular mb-2" >
          Username
        </label>
        <span className="star ms-1">*</span>
      </div>
<div className=" w-100 mb-3">
<input
        onChange={(e)=>{setusername(e.target.value);}}
        
        id="username"
        className="px-2 w-100 userpass py-1 "
        type="text"
        value={username}
      />
      <p className={`error w-100  mt-1 ff_light fs_14 mb-0 ${usernameerr.show===0? "d-none" : "d-block"}`}>* {usernameerr.message}</p>
      
</div>
<div className="label-container w-100 ">
        <label htmlFor="password" className="fs_16 ff_regular mb-2 " >
          Password
        </label>
        <span className="star ms-1">*</span>
      </div>
     <div className="w-100 mb-4 ">
     <input
        onChange={(e)=>{setpassword(e.target.value)}}
        
        id="password"
        className="px-2 w-100 userpass py-1 "
        type="password"
        value={password}
      />
      <p className={`error w-100 mb-0 mt-1 ff_light fs_14 ${passworderr.show===0? "d-none" : "d-block"}`}>* {passworderr.message}</p>
     </div>
      <div className="remindme-container d-flex align-items-baseline w-100 mb-3">
        <input
          checked={checkbox}
          onChange={(e)=>{setcheckbox(e.target.checked);}}
          id="remember"
          className="checkbox"
          type="checkbox"
        />
        {/* <p  className='ps-2'>Remember me</p> */}
        <label className="ps-2 remember" htmlFor="remember" >
          Remember me
        </label>
      </div>
      <button disabled={pending} onClick={sendform} className={`login fs_16 ff_regular  py-2 color_white ${pending?"disable bg_color_disable_blue":"enable bg_color_blue"}`}>
      {pending===true ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              waiting...
            </>
          ) : (
            "Login"
          )}
        
      </button>
      <ToastContainer
      
       />
    </div>
  );
}






