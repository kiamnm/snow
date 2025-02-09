import React from 'react'
import "./Listexchange.css"
import formatnumber from '../../utils/formatnumber'

export default function Listexchange({data}) {
  return (
    <div className='list-item-container d-flex justify-content-between bg_color_dark1 py-3 ps-2 pe-0 px-sm-3 mb-4'>
    <div className="left d-flex align-items-center">
      <img className='logo' src={data.logo} alt="" />
      <div className="right ps-2 ps-sm-3 d-flex flex-column justify-content-between py-1 vest">
        <p className='color_white fs_14 ff_medium  p-0 m-0'>{data.unit}</p>
        <p className='fs_14 ff_regular color_dim p-0 m-0 subname '>{data.name}</p>
      </div>
    </div>
    
    <div className="right price d-flex  justify-content-center align-items-center price-sell-container ">
      <p className='fs_18 color_white p-0 m-0 price ' >{formatnumber (Number(data.price)) }</p>
      {/* <p className='color_dim fs_12 p-0 m-0 sell'>Sell: {formatnumber(data.sell_price.price)}</p> */}
    </div>
  </div>
  )
}
