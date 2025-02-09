import React,{useState} from "react";

const adminloginformvalidation = (
  username,
  password,
  setusernameerr,
  setpassworderr
) => {
    
  let isok = true;
setusernameerr({show:0,message:""})
setpassworderr({show:0,message:""})
  if (username.length === 0) {
    setusernameerr({ show: 1, message: "Please enter a username" });
    isok = false;
  } else if (username.length > 30) {
    setusernameerr({ show: 1, message: "Please enter a valid username" });
    isok = false;
  }

  if (password.length === 0) {
    setpassworderr({ show: 1, message: "Please enter a password" });
    isok = false;
  } else if (password.length > 30) {
    setpassworderr({ show: 1, message: "Please enter a valid password" });
    isok = false;
  }


  return isok
};


export default adminloginformvalidation