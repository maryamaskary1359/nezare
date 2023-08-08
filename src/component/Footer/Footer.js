import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  return (
  <>
   <div className="footer">
    <div className="container">
        <div className="row">
        <div class="col-12 col-md-6 col-lg-3 footer__wrapper m-lg-0">
          <h3 class="footer__title mb-5 ">مشاوره رایگان</h3>
          <div class="footer__subtitle">
            <button class="footer__subtitle-btn   mb-4">
              <span class="footer__btn-text text-white">09036721792</span>
              <i class="fas fa-phone ms-1 text-white"></i>
            </button>
            <div class="footer__subtitle-icons">
              <i class="fa-brands fa-instagram footer__btn-icon bg-danger"></i>
              <i class="fa-brands fa-whatsapp footer__btn-icon ms-3 bg-success"></i>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 footer__wrapper m-lg-0">
          <h3 class="footer__title mb-5 ">دوره های آموزشی ویژه</h3>
           <div className="footer__links">
            <Link className='footer__link' to='music/ارف'>موسیقی کودک (ارف) </Link>
            <Link className='footer__link' to='music/تنبک'>تنبک</Link>
            <Link className='footer__link' to='music/دف'>دف</Link>
            <Link className='footer__link' to='music/کاخن'>کاخن</Link>
            <Link className='footer__link' to='music/سنتور'>سنتور </Link>
            <Link className='footer__link' to='music/گیتار'>گیتار </Link>
            <Link className='footer__link' to='music/ستار'>ستار</Link>
           </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 footer__wrapper m-lg-0  ">
          <h3 class="footer__title mb-5 ">اطلاعات تماس</h3>
          <p class=" footer_address mb-3 footer_address-text "> نشانی : شیراز- شهرک گلستان -بلوار علامه امینی- خیابان 34</p>
          <p class="  mb-3 footer_address-text" > کد پستی: 781898388</p>
          <p class=" footer_address-text"> شماره همراه: 09036721792</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 footer__wrapper m-lg-0">
         
          <div class="arm ">
            <img src="./images/logo-removebg-preview.png" alt="..." class="img-thumbnail" />
          </div>
        </div>
        </div>
        <div class="footer__copywright text-center mt-5 pb-0 ">کلیه حقوق برای آکادمی هنرهای نمایشی 
        {' '}
        <span class="footer__copywright-word">نیزار</span>
        {' '}
        محفوظ است
       </div>
    </div>
   </div>
  </>
  )
}
