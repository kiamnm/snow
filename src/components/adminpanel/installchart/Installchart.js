import React, { useState, useEffect } from "react";
import "./Installchart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Installchart({ userinstall }) {
    const [data,setdata]=useState(userinstall);
    const [filtereddata,setfiltereddata]=useState(null)
    const [datatype,setdatatype]=useState(10)
    useEffect(()=>{
        const filter5=data.slice(0,5)
        const filter10=data.slice(0,10)
     
        
        if(datatype==5){
            setfiltereddata(filter5)
        }else if(datatype==10){
            setfiltereddata(filter10)
        }else if(datatype==="All"){
            setfiltereddata(data)
        }
        
    },[datatype])
    
  return (
    <div className="installchart-component-container  ">
        
      <select onChange={(e)=>setdatatype(e.currentTarget.value)} defaultValue={10} className="edit-banner-input cursor_pointer mb-2" name="" id="">
      <option value={5}>5</option>
        <option value={10}>10</option>
        <option value="All">All</option>
      </select>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
        
        data={filtereddata}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          
        </defs>
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#333' }} interval={datatype==5?0:(datatype==10?0:2)} reversed={true} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend></Legend>
        <Area
          type="monotone"
          dataKey="count"
          stroke="#ffc658"
          
          fill="#ffc658"
        />
        <Area
          type="monotone"
          dataKey="android"
          stroke="#82ca9d"
          
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="ios"
          stroke="#8884d8"
          
          fill="#8884d8"
        />
      </AreaChart>
      </ResponsiveContainer>
      
    </div>
  );
}
