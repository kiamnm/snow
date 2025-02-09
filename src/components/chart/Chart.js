import React, { useState,useEffect } from 'react'
import "./Chart.css"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
 

export default function Chart({trend,spots}) {
  const [spotsdata,setspotsdata]=useState([])
  const [miny,setminy]=useState(0)
  const [maxy,setmaxy]=useState(0)
  useEffect(()=>{
    const finaldata=spots.data;
      setminy(spots.min_y)
      setmaxy(spots.max_y)
    
    finaldata.map((item,index)=>{
      let newspot={x:item.x,y:item.y}
      setspotsdata((prev) => [...prev, newspot]);
    })
    
  },[])
 

  return (
    <div className='d-flex flex-column justify-content-centern align-items-center '>
      {spotsdata && (
        <LineChart
      width={110}
      height={60}
      data={spotsdata}
      margin={{  right: 0, left: 0,top:20 }}
    >
      {/* برای مشخص کردن حد بالا و پایین، محور Y را اضافه می‌کنیم */}
      <YAxis domain={[miny, maxy]} hide={true} /> {/* محور Y مخفی است */}
      <XAxis dataKey="x" hide={true} label={{ value: "Time", position: "insideBottom", offset: -5 }} />
      
      
      
      <Line type="monotone" dataKey="y" stroke={trend<0?"#E6123D":"#00920F"} strokeWidth={2} dot={false} />
    </LineChart>
      )
    }
    </div>
  )
}
