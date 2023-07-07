
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../ProductCard";
import { Container,GradientSide } from "./styles";
// import required modules
import { Navigation, Autoplay} from "swiper";




export default function MySwiper ({children}) {
    let MinWidth = window.screen.width;
    

  return (
    <Container>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={MinWidth <= 600 ? false : true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter:true
          }}
        centeredSlides = {MinWidth <= 800 ? true: false}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
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
            spaceBetween: 20,
          },
        }}

        className="mySwiper"
      >
       
       {children}
       
        <GradientSide className="left"/>
      <GradientSide className="right"/>
      </Swiper>
      
      </Container>
  );
}