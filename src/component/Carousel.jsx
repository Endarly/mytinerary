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
        let imageTitle;

        if (i === 0) {
          if (j === 0) {
            imagePath = muralla;
            imageTitle = 'Chinese wall';
          } else if (j === 1) {
            imagePath = torreEiffel;
            imageTitle = 'Eiffel Tower';
          } else if (j === 2) {
            imagePath = machuPichu;
            imageTitle = 'Machu Picchu';
          } else {
            imagePath = estatuaLibertad;
            imageTitle = 'Statue of Liberty';
          }
        } else if (i === 1) {
          if (j === 0) {
            imagePath = grecia;
            imageTitle = 'Greece';
          } else if (j === 1) {
            imagePath = coliseo;
            imageTitle = 'Colosseum';
          } else if (j === 2) {
            imagePath = cataratas;
            imageTitle = ' Iguazu Falls';
          } else {
            imagePath = monteEverest;
            imageTitle = 'Mount Everest';
          }
        } else if (i === 2) {
          if (j === 0) {
            imagePath = tajMahal;
            imageTitle = 'Taj Mahal';
          } else if (j === 1) {
            imagePath = bariloche;
            imageTitle = 'Bariloche';
          } else if (j === 2) {
            imagePath = granCanon;
            imageTitle = 'Grand Canyon';
          } else {
            imagePath = pekin;
            imageTitle = 'Beijing';
          }
        }

        slideImages.push(
          <div key={`image-${i}-${j}`} className="imageContainer">
            <img
              className="imageCarousel"
              src={imagePath}
              alt=""
            />
            <div className="imageTitle">{imageTitle}</div>
          </div>
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
      <div className="flight-info-search">
        <h1>Popular MyTineraries</h1>
        <div id="globe">
          <div id="plane"></div>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
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
