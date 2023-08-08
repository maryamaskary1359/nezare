import React from 'react'
import { Outlet } from 'react-router-dom'

import './Courses.css'

export default function Courses() {
    

  return (
    <>
    <div className="music">
       <div className="muzieknootjes">
        <div class="noot-1">
        &#9835; &#9833;
        </div>
        <div class="noot-2">
        &#9833;
        </div>
       <div class="noot-3">
        &#9839; &#9834;
       </div>
       <div class="noot-4">
        &#9834;
       </div>
    
      </div>
      <h2 className="music-text text-center">به خانه موسیقی خوش آمدید</h2>
     </div>
      <Outlet/>
    
      
    </>
  )
}
