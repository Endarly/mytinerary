import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/carousel.css';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
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
        <SwiperSlide>  <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2FMURALLA-WEB.jpg?alt=media&token=d74f37e8-8109-4a9c-bb3e-2404a63c8136&_gl=1*1ka1nxe*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUxNTU2Mi4xNi4xLjE2ODY1MTY5OTguMC4wLjA." alt=" Muralla China" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2Ftorre-eiffel-fuera.jpg?alt=media&token=eaa8f885-7537-4634-93cf-da30eb2b4666&_gl=1*1u0ztf3*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUxNTU2Mi4xNi4xLjE2ODY1MTcyNDQuMC4wLjA." alt="Torre Eiffel" /></SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2FMachu_Picchu%2C_Peru.jpg?alt=media&token=affb9194-14cc-4f3c-a71d-1f624fe56573&_gl=1*3caw6j*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUxNTU2Mi4xNi4xLjE2ODY1MTgxNDcuMC4wLjA." alt="Machu Picchu" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2Ftaj-mahal.jpg?alt=media&token=4b851d61-928e-4fbd-a0fe-56c084a52ee8&_gl=1*dl9clb*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUzMjExMC4xOC4wLjE2ODY1MzIxMTAuMC4wLjA." alt="Taj Mahal" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2FEgipto.avif?alt=media&token=4f881353-af90-4d4b-94be-b21e1b700ca7&_gl=1*dvjkc2*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUyMzgwMC4xNy4xLjE2ODY1MjQxMjUuMC4wLjA." alt="Egipto" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2Ffoto-estatua-de-la-libertad-1024x683.jpg?alt=media&token=bb230361-e611-4ca6-9703-432b34460e93&_gl=1*1cvpsqq*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUzMjExMC4xOC4xLjE2ODY1MzI1NjQuMC4wLjA." alt="Estatua de la Libertad" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2FSantorini_HDR_sunset.jpg?alt=media&token=b79fc317-8f0b-44ca-bbb5-bb4d6dca800b&_gl=1*1mb6gl3*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUzMjExMC4xOC4xLjE2ODY1MzI2NzguMC4wLjA." alt="Santorini" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2FbarreraCoral.jpg?alt=media&token=5d30841b-15e7-4f6a-884f-fd333a207eb0&_gl=1*dti7bu*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUzMjExMC4xOC4xLjE2ODY1MzMxOTEuMC4wLjA." alt="Barrera de Coral" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2Fcoliseo-romano_16022ed4_1280x853.jpg?alt=media&token=7d803bf7-49ad-4cf4-8680-c55594c87d94&_gl=1*d4b48g*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjUzNTkyOS4xOS4xLjE2ODY1MzU5MzkuMC4wLjA." alt="Coliseo de Roma" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2Fcataratas.jpg?alt=media&token=7c580b31-463f-4a86-b16d-e3fcfb6584a2&_gl=1*bag8pu*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjYxNTM5My4yMC4xLjE2ODY2MTU0NTkuMC4wLjA." alt="Cataratas del Iguazú" /> </SwiperSlide>
        <SwiperSlide> <img src="https://firebasestorage.googleapis.com/v0/b/viajerisimo-arg.appspot.com/o/mytinerary%2FmonteEv.jpg?alt=media&token=7e566c9e-81f6-4d39-a50b-c9f23626dd9d&_gl=1*1c5cykh*_ga*MjE0Mzg4Mjg5NC4xNjg1NDA5ODEx*_ga_CW55HF8NVT*MTY4NjYxNTM5My4yMC4xLjE2ODY2MTU4ODUuMC4wLjA." alt="Monte Everest" /> </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}