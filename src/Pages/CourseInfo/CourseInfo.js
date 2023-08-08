import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {CourseData} from './../../component/data'
import "./CourseInfo.css"
export default function CourseInfo() {
  let params=useParams(CourseData)
 console.log('params:',params);
  const [courses ,setCourses]=useState(CourseData)
  console.log(courses);
  let courseID =courses.find(course=>course.name===params.name)
  
  return (
    <div> 
      <Link to={`/${courseID.course}/${params.name}`}>
       <div className="music-home">
        <div className="container">
          <div className="row align-items-center">
           <div className="col-12 col-lg-7">
           <div className="music-biografy">
            <div className="music-biografy__teacher">
              <h1 className="music-biografy__teacher-name">{courseID.teacher}</h1>
               <span className="music-biografy__teacher-profession">مدرس {courseID.name}</span>
            </div>
            </div>
            <div className="music-biografy__description">
              <h3 className="music-biografy__description-title"> بیوگرافی :</h3>
               <p className="music-biografy__description-subtitle">
                {courseID.description}
               </p>
            </div>
           </div>
           <div className="col-12 col-lg-5">
           <div className="text-center music-profile">
             <img src={`/${courseID.profile}`} class=" music-profile__img" alt="..."></img>
           </div>
           </div>
          </div>
        </div>
       </div>
    </Link>
    </div>
  )
}
