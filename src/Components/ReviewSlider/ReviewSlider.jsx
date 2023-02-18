import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Slider from "./slider/Slider";

const ReviewSlider = () => {
    return (
        <div className='font-roboto'>
           
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                        <Slider></Slider> 
                </SwiperSlide>
                <SwiperSlide>
                        <Slider></Slider> 
                </SwiperSlide>
                <SwiperSlide>
                        <Slider></Slider> 
                </SwiperSlide>
                <SwiperSlide>
                        <Slider></Slider> 
                </SwiperSlide>
                <SwiperSlide>
                        <Slider></Slider> 
                </SwiperSlide>
        
        
            </Swiper>
        </div>
    );
};

export default ReviewSlider;




