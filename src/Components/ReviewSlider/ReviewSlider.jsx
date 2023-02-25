import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Slider from "./slider/Slider";

const ReviewSlider = () => {
    const [loading, setLoading] = useState(false)
    const [sliders, setSliders] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch("reviewSlider.json").then(res => res.json()).then(data => {
            setSliders(data)
            setLoading(false)
        })
    }, [])


    if (loading) {
        return <h2 className='text-3xl font-bold text-center my-24'>Loading...</h2>
    }
    return (
        <div className='font-roboto my-10'>

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
                {
                    sliders.map(slider => {
                        return <SwiperSlide key={slider.id}>
                            <Slider slider={slider}></Slider>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
};

export default ReviewSlider;