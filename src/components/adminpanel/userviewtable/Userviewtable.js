import React,{useState,useEffect} from 'react'
import "./Userviewtable.css"

export default function Userviewtable({userviews}) {
    const [data,setdata]=useState([])
    useEffect(()=>{
        const transformdata = Object.keys(userviews).map((key) => {
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
    <div className="vertical-table-container">
      <table className="vertical-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Page</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {/* ستون Date به شکل عمودی */}
              <tr>
                <td rowSpan="6" className="date-column ">
                  {item.date}
                </td>
                <td>Home</td>
                <td>{item.home}</td>
              </tr>
              <tr>
                <td>Convert</td>
                <td>{item.convert}</td>
              </tr>
              <tr>
                <td>Currency</td>
                <td>{item.currency}</td>
              </tr>
              <tr>
                <td>Gold</td>
                <td>{item.glod}</td>
              </tr>
              <tr>
                <td>Detail</td>
                <td>{item.detail}</td>
              </tr>
              <tr>
                <td>Auth</td>
                <td>{item.auth}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
