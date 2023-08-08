import React,{useState} from 'react'
import {advantage} from './../data'
import './Advantage.css'
export default function Advantage() {
  const [items ,setItems]=useState(advantage)
  return (
    <>
    {items.map(item=>(
      <div className="col-12 col-sm-6 col-lg-3"  >
        <div className="advantage-wrapper">
           <img src={item.img} alt="advantage" className="advantage__img" />
            <span className="advantage__description">{item.title}</span>
        </div>
      
       </div>
    ))}
       

    </>
  )
}
