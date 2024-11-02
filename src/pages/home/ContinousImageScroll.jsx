import React from 'react';
import './home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import Shopify from './assets/svg/shopify.svg';
import Duolingo from './assets/svg/duolingo.svg';
import Pinterest from './assets/svg/pinterest.svg';

const ContinousImageScroll = () => {
  return (
    
      <section className='autoscroll'>
        <span>Already choosen by the leaders</span>
        <Swiper
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2},
          1000: { slidesPerView: 4 },
          1200: { slidesPerView: 5},
          1560: { slidesPerView: 6},
        }}
      >
          <SwiperSlide className="myswiper-slider">
            <img className='logo_image' src={Shopify} alt="Shopify logo" />
          </SwiperSlide>
          <SwiperSlide className="myswiper-slider">
            <img className='logo_image' src={Duolingo} alt="Shopify logo" />
          </SwiperSlide>
          <SwiperSlide className="myswiper-slider">
            <img className='logo_image' src={Pinterest} alt="Shopify logo" />
          </SwiperSlide>
          <SwiperSlide className="myswiper-slider">
            <img className='logo_image' src={Shopify} alt="Shopify logo" />
          </SwiperSlide>
          <SwiperSlide className="myswiper-slider">
            <img className='logo_image' src={Shopify} alt="Shopify logo" />
          </SwiperSlide>
          <SwiperSlide className="myswiper-slider">
            <img className='logo_image' src={Shopify} alt="Shopify logo" />
          </SwiperSlide>
          <SwiperSlide className="myswiper-slider">
            <img className='logo_image' src={Shopify} alt="Shopify logo" />
          </SwiperSlide>
          <SwiperSlide className="myswiper-slider">
            <img className='logo_image' src={Shopify} alt="Shopify logo" />
          </SwiperSlide>
        </Swiper>
      </section>
      
    );
  }
  
  export default ContinousImageScroll;
  

