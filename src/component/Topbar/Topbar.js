import React from 'react'
import { useState } from 'react'

import './Topbar.css'
export default function Topbar() {
  const [history]=useState([])
  const date=new Date()

  const option={
    year:'numeric',
    month:'numeric',
   day:'numeric',
}


  return (
    <div className='topbar'>
      <div className="container">
        <div className="topbar-wrapper">
        <div className="topbar-right">
        {history.innerHTML=date.toLocaleDateString("fa-IR",option)}
        </div>
        <div className="topbar-left">
           <div className="topbar-left__email">
           <a href="#" className="topbar__email-text top-bar__link">
            askary.maryam@gmail.come
           </a>
           <i className="fas fa-envelope mx-1  top-bar__icon "></i>
           </div>
           <div className="topbar-left__phone">
           <a href="#" className="topbar__phone-text top-bar__link">09036721792</a>
        
           <i className="fas fa-phone mx--1 top-bar__icon "></i>
           </div>
        </div>
        </div>
    </div>
    </div>
  )
}
