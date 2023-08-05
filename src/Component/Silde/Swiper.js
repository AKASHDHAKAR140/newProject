import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function Swiper1() {
  return (
    <Swiper
    slidesPerView={4}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
     <SwiperSlide>
    <img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-4-200x150.png"/></SwiperSlide>
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-9-200x150.png"/></SwiperSlide>
    <SwiperSlide>
    <img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-2-200x150.png"/></SwiperSlide>
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-7-200x150.png"/></SwiperSlide>
    <SwiperSlide>
    <img  src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-4-200x150.png"/></SwiperSlide>
    
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-7-200x150.png"/></SwiperSlide>
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-7-200x150.png"/></SwiperSlide>
    <SwiperSlide><img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-7-200x150.png"/></SwiperSlide>
    <SwiperSlide>
    <img src ="https://agnitotechnologies.com/wp-content/uploads/2020/07/artboard-4-200x150.png"/></SwiperSlide>
  </Swiper>

  )
}

export default Swiper1