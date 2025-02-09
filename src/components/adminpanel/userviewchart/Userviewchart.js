import React,{useEffect,useState} from 'react'
import "./Userviewchart.css"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend,ResponsiveContainer, } from "recharts"

export default function Userviewchart({userviews}) {
  const [data,setdata]=useState([])
  useEffect(()=>{
    const transformdata = Object.keys(userviews).map((key,index) => {
      const item = { date: key }; // قرار دادن نام بازه زمانی (today, yesterday, twoDayAgo)
    
      // اضافه کردن کلیدهای صفحات (home, convert, etc.) به آبجکت
      Object.keys(userviews[key]).forEach((page) => {
        item[page] = userviews[key][page];
      });
    
      return item;
    });
    setdata(transformdata)
  },[])
  return (
    <div >
      
      <ResponsiveContainer  width="100%" height={400}>
         <BarChart  data={data.reverse()} style={{ margin: "0px", padding: "0px" }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="home" fill="#8884d8" />
  <Bar dataKey="currency" fill="#82ca9d" />
  <Bar dataKey="glod" fill="#F0BB78" />
  <Bar dataKey="detail" fill="#155E95" />
  <Bar dataKey="convert" fill="#C890A7" />
</BarChart>
      </ResponsiveContainer>
     
      
    </div>
  )
}
