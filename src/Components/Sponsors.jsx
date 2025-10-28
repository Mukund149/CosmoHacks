import React, { useRef, useState } from 'react';
import '../Components/sponsors.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import belgian from '../img/belgian.png'
import dominos from '../img/dominos.png'
import jetbrains from '../img/jetbrains.png'
import mishra from '../img/mishra.png'
import taco from '../img/tacoBell.png'
import unstop from '../img/unstop.png'
import veron from '../img/veron.png'
import vmm from '../img/vmm.png'
import webipher from '../img/webipher.png'
import xyz from '../img/xyz.png'
import morph from '../img/morph.png'
import skoda from '../img/skoda.png'
import geek from '../img/geek.png'
import chocolate from '../img/chocolate.png'
import tambo from '../img/tamboo.png'
import sigo from '../img/sigo.png'
import cravekart from '../img/cravekart.png'
import mits from '../img/mits2.png'
import oman from '../img/oman.jpg'

const Sponsors = () => {
  return (
        <div className='sponsor-main'>
            <div className="sponsors">
            <Swiper
            slidesPerView={10}
            spaceBetween={50}
            speed={2000}
            allowTouchMove={true}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: false,
            // }}
            navigation={false}
            modules={[Navigation, Autoplay]}
            className="mySwiper">
            <SwiperSlide><img src={belgian} alt="" /></SwiperSlide>
            <SwiperSlide><img src={jetbrains} alt="" /></SwiperSlide>
            <SwiperSlide><img src={mishra} alt="" /></SwiperSlide>
            <SwiperSlide><img src={taco} alt="" /></SwiperSlide>
            <SwiperSlide><img src={dominos} alt="" /></SwiperSlide>
            <SwiperSlide><img src={unstop} alt="" /></SwiperSlide>
            <SwiperSlide><img src={veron} alt="" /></SwiperSlide>
            <SwiperSlide><img src={vmm} alt="" /></SwiperSlide>
            <SwiperSlide><img src={webipher} alt="" /></SwiperSlide>
            <SwiperSlide><img src={xyz} alt="" /></SwiperSlide>
            <SwiperSlide><img src={morph} alt="" /></SwiperSlide>
            <SwiperSlide><img src={skoda} alt="" /></SwiperSlide>
            <SwiperSlide><img src={geek} alt="" /></SwiperSlide>
            <SwiperSlide><img src={chocolate} alt="" /></SwiperSlide>
            <SwiperSlide><img src={tambo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sigo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={cravekart} alt="" /></SwiperSlide>
            <SwiperSlide><img src={mits} alt="" /></SwiperSlide>
            <SwiperSlide><img src={oman} alt="" /></SwiperSlide>
            <SwiperSlide><img src={belgian} alt="" /></SwiperSlide>
            <SwiperSlide><img src={jetbrains} alt="" /></SwiperSlide>
            <SwiperSlide><img src={mishra} alt="" /></SwiperSlide>
            <SwiperSlide><img src={taco} alt="" /></SwiperSlide>
            <SwiperSlide><img src={dominos} alt="" /></SwiperSlide>
            <SwiperSlide><img src={unstop} alt="" /></SwiperSlide>
            <SwiperSlide><img src={veron} alt="" /></SwiperSlide>
            <SwiperSlide><img src={vmm} alt="" /></SwiperSlide>
            <SwiperSlide><img src={webipher} alt="" /></SwiperSlide>
            <SwiperSlide><img src={xyz} alt="" /></SwiperSlide>
            <SwiperSlide><img src={morph} alt="" /></SwiperSlide>
            <SwiperSlide><img src={skoda} alt="" /></SwiperSlide>
            <SwiperSlide><img src={geek} alt="" /></SwiperSlide>
            <SwiperSlide><img src={chocolate} alt="" /></SwiperSlide>
            <SwiperSlide><img src={tambo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={sigo} alt="" /></SwiperSlide>
            <SwiperSlide><img src={cravekart} alt="" /></SwiperSlide>
            <SwiperSlide><img src={mits} alt="" /></SwiperSlide>
            <SwiperSlide><img src={oman} alt="" /></SwiperSlide>
          </Swiper>
            </div>
        </div>
  )
}

export default Sponsors
