import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";




const ProfessionalServices = () => {

    const [servicesImgs, setServicesImgs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('professionalServices.json').then(res => res.json()).then(data => {
            setLoading(false)
            setServicesImgs(data)
        })
    }, [])

    if (loading) {
        return <h2 className='text-3xl font-bold text-center my-24'>Loading...</h2>
    }

    return (
        <div className='px-4 py-5 mx-auto md:px-24 lg:py-16'>
            <h2 className="text-2xl xl:text-4xl font-bold mb-5 text-[#1f2937]">Popular professional services</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
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
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
            >
                {servicesImgs.map(service => {
                    return <SwiperSlide key={service.id} className="rounded-xl">
                        <div className='relative transition-all h-72 w-full text-start'>
                            <img src={service.image} alt="service_image" className='custom-height w-full rounded-xl' />
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