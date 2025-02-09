import React from 'react'
import "./Listtitle.css"

export default function Listtitle({imgsrc,title,path}) {
  return (
    <div className='List-title-container d-flex justify-content-between align-items-center'>
        <div className="left d-flex align-items-center">
            <img className='icon' src={imgsrc} alt="" />
            <p className='color_white p-0 m-0 ps-2 fs_16 ff_medium'>{title}</p>
        </div>
    </div>
  )
}
