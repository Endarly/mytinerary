import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/carousel.css';
import imageCanda from '../assests/coliseo.jpg'
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
        slideImages.push(
          <img
            key={`image-${i}-${j}`}
            className="imageCarousel"
            src={imageCanda}
            alt="Muralla China"
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
