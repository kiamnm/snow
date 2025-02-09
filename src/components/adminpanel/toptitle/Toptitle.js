import React from 'react'
import "./Toptitle.css"

export default function Toptitle({icon,top_title,main_title,text}) {
  return (
    <div>
        <div className="top-icon-container d-flex align-items-start">
    {icon}
    <p className='ff_regular fs_16 ps-2'>{top_title}</p>
    </div>
    <div className="product-header-container mt-2 ">
      <h3 className='ff_bold fs_25'>{main_title}</h3>
      <p className='fs_16 ff_regular'>{text}</p>
    </div>
    </div>
  )
}
