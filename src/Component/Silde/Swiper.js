import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Swiper1() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-4-200x150.png"/></SwiperSlide>
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-9-200x150.png"/></SwiperSlide>
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-2-200x150.png"/></SwiperSlide>
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-7-200x150.png"/></SwiperSlide>
    
  </Swiper>



  )
}

export default Swiper1