
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../ProductCard";
import { Container,GradientSide } from "./styles";
// import required modules
import { Navigation, Autoplay} from "swiper";

export default function MySwiper () {
    let MinWidth = window.screen.width;
    console.log(MinWidth)

  return (
    <Container>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={MinWidth <= 600 ? false : true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 30,
            
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        className="mySwiper"
      >
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <GradientSide className="left"/>
      <GradientSide className="right"/>
      </Swiper>
      
      </Container>
  );
}