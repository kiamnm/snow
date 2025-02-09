import React,{useState,useEffect} from 'react'
import "./Mainchart.css"
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#1A1521",
            border: "none",
            padding: "12px 40px",
            borderRadius: "25px",
            fontSize: "14px",
            color:"white"
          }}
        >
          {/* ترکیب مقدار X و Y با "-" */}
          <p style={{ margin: 0 }}>{` ${label} - ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };
  
export default function Mainchart({spots,minvalue,maxvalue}) {
  const [data,setdata]=useState([])
  
  
  useEffect(()=>{
    spots.map((item)=>{
      if(item.y){
        setdata((prev)=>{
          return [...prev,{x:item.xLabel,y:item.y
          }]
        })
      }
    })
  },[spots])
  
  return (
    <>
    
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data.reverse()}
        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        
      >
        
        <defs>
          {/* تعریف گرادیانت */}
          <linearGradient id="colorSales" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f7b83b" stopOpacity={1} />
            <stop offset="100%" stopColor="#8B6312" stopOpacity={0.35} />
          </linearGradient>
        </defs>
        <XAxis dataKey="x" style={{ fontSize: '12px', fontFamily: 'Arial' }} tick={{ fill: 'white' }} tickMargin={10} />
        <YAxis orientation="right" domain={[minvalue,maxvalue]} style={{ fontSize: '12px', fontFamily: 'Arial' }} tickFormatter={(value) => value.toFixed(2)} tick={{ fill: 'white' }} tickMargin={10}  /> 
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="y"
          stroke="none" // رنگ خط نمودار
          fill="url(#colorSales)"   // رنگ زیر نمودار
          fillOpacity={0.4} // شفافیت رنگ زیر نمودار
        />
      </AreaChart>
    </ResponsiveContainer>
    </>
  )
}
