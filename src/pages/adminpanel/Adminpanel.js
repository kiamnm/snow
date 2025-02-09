import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import "./Adminpanel.css"
import Sidebar from '../../components/adminpanel/sidebar/Sidebar'
export default function Adminpanel() {
  const navigate=useNavigate()
  useEffect(()=>{
          navigate("/adminpanel/items")
        },[])
  return (
    <div className='admin-panel-component-container  '>
      <Sidebar></Sidebar>


   
      <div className="content-right bg-white">
        <Outlet></Outlet>
        
      </div>
    </div>
    
  )
}
