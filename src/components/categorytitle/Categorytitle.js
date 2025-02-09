import React from 'react'
import "./Categorytitle.css"
import { Link } from 'react-router-dom'

export default function Categorytitle({title,route,paddingtop}) {
  return (
    <div className={`category-title-container d-flex justify-content-between align-items-center pb-4   ${!paddingtop && "pt-4 pt-sm-5 "}`}>
        <p className='color_white fs_16 ff_regular p-0 m-0'>{title}</p>
        <Link className='delete_link_defult color_white fs_14 ff_regular' to={route}><p className='p-0 m-0 '>See All</p></Link>
    </div>
  )
}
