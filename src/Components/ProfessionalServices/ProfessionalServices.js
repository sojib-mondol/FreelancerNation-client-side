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
        name: "SEO",
        shortDes: "Unlock growth online",
        image: "seo.jpg",
        id: 4

    },
    {
        name: "Social Media",
        shortDes: "Reach more customers",
        image: "social-media.jpg",
        id: 5

    },
    {
        name: "Logo Design",
        shortDes: "Build your brand",
        image: "logo-design.jpg",
        id: 3

    },
    {
        name: "Video Explainer",
        shortDes: "Engage your audience",
        image: "video-explainer.jpg",
        id: 6

    },
    {
        name: "Voice Over",
        shortDes: "Share your message",
        image: "voice-over.jpg",
        id: 7

    },
    {
        name: "WordPress",
        shortDes: "Customize your site",
        image: "wordpress.jpg",
        id: 8

    },
    {
        name: "illustration",
        shortDes: "Color your dream",
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
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
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