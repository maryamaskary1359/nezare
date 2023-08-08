import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import {CourseData} from '../data'

import './CourseBox.css'
export default function CourseBox() {
  const [courses,useCourses]=useState(CourseData)
  return (
    <>
    {courses.map(course=>(
      
      <div className="col-12 col-sm-6 col-lg-4"  key={course.id}>
     <div className="card mb-5 shadow">
      <div className={course.name=='کاخن' ? 'card-header':'card-header bg-dark'}>
        <img src={course.img} alt="course" className="card-img course__img"/>
      </div>
      <div className="card-body">
        <Link to={`/${course.course}/${course.name}`} className="card-title course-content-title fw-bold "> دوره آموزشی {course.name}</Link>
      </div>
      <div className="card-text">
        <div className="course-content__teacher">
            <i className="fas fa-chalkboard-teacher course-content__teacher-icon" ></i>
            <a href="#" className="course-content__teacher-link">{course.teacher}</a>
        </div>
      </div>
      <div className="card-footer text-center py-3 bg-white course-box__footer">
        <Link to={`/${course.course}/${course.name}`} className="course-box__footer-link ">
          <div className="course-box__footer-text " >
           مشاهده اطلاعات 
          </div>
          
          <i className="fas fa-arrow-left course-box__footer-icon "></i>
        </Link>
      </div>

    </div>
    </div>
    ))}
    
    </>
  )
}
