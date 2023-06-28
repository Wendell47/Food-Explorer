import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../ProductCard";
import { Container,GradientSide } from "./styles";
// import required modules
import { Navigation, Autoplay} from "swiper";


import img1 from '../../assets/Mask-group-1.png'
import img2 from '../../assets/Mask-group-2.png'
import img3 from '../../assets/Mask-group-3.png'
import img4 from '../../assets/Mask-group-4.png'
import img5 from '../../assets/Mask-group-5.png'
import img6 from '../../assets/Mask-group-6.png'

let ProductInfo = [
    {
     id: 1,
     Image:img3,   
     title: "Salada Ravanello",
     description:"Rabanetes, folhas verde e molho agridoce salpicados com gergelim",
     price:"79,97",      

    },
    {
        id: 2,
        Image:img2,   
        title: "Spaguetti Gambe",
        description:"Massa fresca com camarões e pesto. ",
        price:"79,97",      
   
       },
    {
        id: 3,
        Image:img1,   
        title: "Torradas de Parma",
        description:"Presunto de parma e rúcula em um pão com fermentação natural.",
        price:"25,97",      
   
       },
       
       {
           id: 4,
           Image:img3,   
           title: "Spagueti",
           description:"Massa fresca com camarões e pesto. ",
           price:"79,97",      
      
          },
       {
           id: 4,
           Image:img3,   
           title: "Spagueti",
           description:"Massa fresca com camarões e pesto. ",
           price:"79,97",      
      
          },
       {
           id: 4,
           Image:img3,   
           title: "Spagueti",
           description:"Massa fresca com camarões e pesto. ",
           price:"79,97",      
      
          },
          {
            id: 4,
            Image:img3,   
            title: "Spagueti",
            description:"Massa fresca com camarões e pesto. ",
            price:"79,97",      
       
           },
           {
            id: 4,
            Image:img3,   
            title: "Spagueti",
            description:"Massa fresca com camarões e pesto. ",
            price:"79,97",      
       
           },
]


export default function MySwiper () {
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
            spaceBetween: 30,
          },
        }}

        className="mySwiper"
      >
        {
            ProductInfo.map(product =>(
            <SwiperSlide key={String(product.id)}>
            <ProductCard
            FoodPicture={product.Image}
            FoodTitle={product.title}
            Description={product.description}
            Price={product.price}
            
        />
        </SwiperSlide>
            ))
        }
       
       
        <GradientSide className="left"/>
      <GradientSide className="right"/>
      </Swiper>
      
      </Container>
  );
}