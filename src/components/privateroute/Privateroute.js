import React,{useState,useContext,useEffect} from 'react'
import { Authcontext } from "./../../context/Authcontext"
import { useNavigate } from 'react-router-dom';
import api_constant from '../../utils/api_constant';
import "./Privateroute.css"

export default function Privateroute({children}) {
    const {login,islogin}=useContext(Authcontext);
    const [pending,setpending]=useState(true)
    const navigate=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem("accesstoken");
        if(!token){
navigate("/login")
        }else{
            fetch(`${api_constant}me`,{
                method:"GET",
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
            })
                    .then((res)=>{
                    return res.json();
                     })
                     .then((response)=>{
                        if(response.data.role==="ADMIN"){
                            setpending(false)
                        }else{
                            navigate("/login")
                        }
                     })
            
        }
    },[])
  return (

    <div className='private-route-pending-container'>
        
        {pending ?(
            <div className="spiner-container">
<div class="spinner-border text-dark" role="status">
</div>
<p className='ff_bold waiting'>Waiting . . .</p>
            </div>
            
        ):(children)}
        
    </div>
  )
}
