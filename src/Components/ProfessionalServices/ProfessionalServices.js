import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";

const servicesImgs = [
    {
        name: "AI Artists",
        shortDes: "Add talent to AI",
        image: "ai-artics.jpg",
        id: 1

    },
    {
        name: "AI Artists",
        shortDes: "Add talent to AI",
        image: "seo.jpg",
        id: 4

    },
    {
        name: "AI Artists",
        shortDes: "Add talent to AI",
        image: "social-media.jpg",
        id: 5

    },
    {
        name: "AI Artists",
        shortDes: "Add talent to AI",
        image: "logo-design.jpg",
        id: 3

    },
    {
        name: "AI Artists",
        shortDes: "Add talent to AI",
        image: "video-explainer.jpg",
        id: 6

    },
    {
        name: "AI Artists",
        shortDes: "Add talent to AI",
        image: "voice-over.jpg",
        id: 7

    },
    {
        name: "AI Artists",
        shortDes: "Add talent to AI",
        image: "wordpress.jpg",
        id: 8

    },
    {
        name: "AI Artists",
        shortDes: "Add talent to AI",
        image: "illustration.jpg",
        id: 2

    },
]


const ProfessionalServices = () => {
    return (
        <div className='px-4 py-5 mx-auto md:px-24'>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                navigation={true} modules={[Navigation]}
                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {servicesImgs.map(service => {
                    return <SwiperSlide key={service.id} className="rounded-xl">
                        <div className='relative transition-all'>
                            <img src={service.image} alt="service_image" className='h-72 w-full rounded-xl' />
                            <div className='absolute top-2 text-white px-5'>
                                <span className='text-sm'>{service.shortDes}</span>
                                <h1 className='font-black text-2xl'>{service.name}</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};

export default ProfessionalServices;