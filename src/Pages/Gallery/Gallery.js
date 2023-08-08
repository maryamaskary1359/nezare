import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Gallery.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import {mainGallery} from './../../component/data'

export default function Gallery() {
  const [images ,setImages]=useState(mainGallery)
  return (
    <div className="music-gallery">
        <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map(imag=>(
            <SwiperSlide key={imag.id}>
          <img src={`/${imag.img}`} className="music-gallery__img"/>
        </SwiperSlide>
        ))}
      
       
      
      </Swiper>
      </div>
    </div>
  )
}
