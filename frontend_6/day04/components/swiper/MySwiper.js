import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './MySwiper.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import bgs from '../../assets/img_index'

export default function App() {
  return (
    <>
 
      <Swiper className="mySwiper swiper-h"
              navigation={true} 
              // pagination={true}
              pagination={{ clickable: true   }}
              // direction={'vertical'}
              modules={[Navigation, Pagination]}
              >
        {
            bgs.map((bg, index)=>(
                <SwiperSlide>
                    <img src={bg} />
                </SwiperSlide> 
            ))
        }
      </Swiper>
    </>
  );
}
