import React ,{useState,useRef} from 'react'
import Typewriter from 'typewriter-effect';
import Headline from '../../component/Headline/Headline'
import CourseBox from '../../component/CourseBox/CourseBox'
import {picture} from './../../component/data'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Index.css"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Advantage from '../../component/Advantage/Advantage';

export default function Index() {
  const [images,setImages]=useState(picture)
  return (
  <>
     <section className="landing">
     <div className="container">
      <h1 className="landing__title text-center ">
      <Typewriter
       onInit={(typewriter) => {
       typewriter
       .typeString(' آکادمی هنرهای نمایشی نیزار !')
       .start()
       .pauseFor(2500)
        .deleteAll()
        .typeString('با جدیدترین متد آموزشی')
        .start()
       .pauseFor(2500)
        
       }}
       options={{
        loop: true,
      }}
       />
    
      </h1>
      <p className="landing__subtitle text-center">با ارایه مدرک معتبر بین المللی از سازمان آموزش فنی حرفه ای کشور در رشته های  موسیقی ارف (کودک) وبزرگسال
      </p>  
  
   </div>
     </section>
     <section className="courses">
      <div className="container">
        <Headline title='دوره های آموزشی'/>
        <div className="courses-content">
         <div className="row">
          <CourseBox />
         </div>
        </div>
      </div> 
     </section>
     <section className="gallery">
      <div className="container">
        <Headline title='گالری'/>
        <div className="gallery-content">
         <div className="row">
         <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map(image=>(
            <SwiperSlide  className='slider' key={image.id}>
          <img src={image.img} alt="gallery" className='swiper-img'/>
        </SwiperSlide>
        ))}
      
      
         </Swiper>
         </div>
        </div>
      </div> 
     </section>
     <section className='advantage'>
       <div className="container">
           <Headline title='مزیت آموزشگاه نیزار'/>
           <div className="advantage-content">
            <div className="row">
             <Advantage/>
            </div>
           </div>
       </div>
     </section>
  </>
  )
}
