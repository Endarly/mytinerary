import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/carousel.css';
import muralla from '../assests/MURALLA.jpg';
import torreEiffel from '../assests/torre-eiffel-fuera.jpg';
import machuPichu from '../assests/Machu_Picchu_Peru.jpg';
import estatuaLibertad from '../assests/estatua-libertad.jpg';
import grecia from '../assests/Santorini_HDR_sunset.jpg'
import coliseo from '../assests/coliseo.jpg'
import cataratas from '../assests/cataratas.jpg'
import monteEverest from '../assests/monteEv.jpg'
import tajMahal from '../assests/tajMahal.jpg'
import bariloche from '../assests/Bariloche.jpg'
import granCanon from '../assests/gran-canon.jpg'
import pekin from '../assests/pekin.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const numSlides = 3;
  const imagesPerSlide = 4;

  const generateSlides = () => {
    const slides = [];

    for (let i = 0; i < numSlides; i++) {
      const slideImages = [];

      for (let j = 0; j < imagesPerSlide; j++) {
        let imagePath;

        if (i === 0) {
          if (j === 0) {
            imagePath = muralla;
          } else if (j === 1) {
            imagePath = torreEiffel;
          } else if (j === 2) {
            imagePath = machuPichu;
          } else {
            imagePath = estatuaLibertad;
          }
        } else if (i === 1) {
          if (j === 0) {
            imagePath = grecia;
          } else if (j === 1) {
            imagePath = coliseo;
          } else if (j === 2) {
            imagePath = cataratas;
          } else {
            imagePath = monteEverest;
          }
        } else if (i === 2) {
          if (j === 0) {
            imagePath = tajMahal;
          } else if (j === 1) {
            imagePath = bariloche;
          } else if (j === 2) {
            imagePath = granCanon;
          } else {
            imagePath = pekin;
          }
        }

        slideImages.push(
          <img
            key={`image-${i}-${j}`}
            className="imageCarousel"
            src={imagePath}
            alt=""
          />
        );
      }

      slides.push(
        <SwiperSlide key={`slide-${i}`}>
          <div className="containerImages">{slideImages}</div>
        </SwiperSlide>
      );
    }

    return slides;
  };

  return (
    <div className="containerglobal">
      <h2>POPULAR MYTINERARIES</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.loopedSlides = swiper.slides.length;
        }}
      >
        {generateSlides()}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
