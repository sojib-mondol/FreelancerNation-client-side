import React, { useContext, useState } from 'react';
import { FaCamera, FaStar, FaTrashAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Skeleton from '../Shared/Skeleton/Skeleton';


const SellerDashboard = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    const photo = user?.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'

    const gigs = [
        {
            service_name: "Creative Logo Design",
            service_image: "https://cdn.pixabay.com/photo/2014/11/17/18/10/gears-534991_960_720.jpg",
            price: 75
        },
        {
            service_name: "Social Media Management",
            service_image: "https://cdn.pixabay.com/photo/2020/08/22/14/33/social-media-5508549__340.png",
            price: 150
        },
        {
            service_name: "Website Development",
            service_image: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg",
            price: 500
        },
        {
            service_name: "Video Editing",
            service_image: "https://cdn.pixabay.com/photo/2021/11/27/18/52/sony-6828729__340.jpg",
            price: 100
        },
        {
            service_name: "Copywriting",
            service_image: "https://cdn.pixabay.com/photo/2020/08/07/05/58/copywrite-5469752__340.jpg",
            price: 50
        },
        {
            service_name: "Virtual Assistance",
            service_image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274__340.jpg",
            price: 25
        },
        {
            service_name: "Search Engine Optimization",
            service_image: "https://cdn.pixabay.com/photo/2017/12/09/09/08/seo-3007488_960_720.jpg",
            price: 200
        },
        {
            service_name: "Graphic Design",
            service_image: "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg",
            price: 75
        },
        {
            service_name: "Content Writing",
            service_image: "https://cdn.pixabay.com/photo/2020/02/22/22/06/note-book-4871741_960_720.jpg",
            price: 75
        },
        {
            service_name: "Logo Animation",
            service_image: "https://cdn.pixabay.com/photo/2016/11/01/23/06/ball-closure-rings-1789995_960_720.jpg",
            price: 250
        }
    ]

   
    setTimeout(() => {
        setLoading(false);
    }, 2000);

    if (loading) {
        return <Skeleton></Skeleton>
    };

    return (
        <div className='px-4 py-5 mx-auto md:px-10 lg:px-24 lg:py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 xl:gap-16 items-start'>
                <div className='xl:col-span-4 bg-white flex flex-col items-center p-5 border border-slate-300'>

                    <div className='w-48 h-48 rounded-full relative'>
                        <img className='w-full h-full rounded-full' src={photo} alt="user" />
                        <div className='absolute top-[153px] left-[120px]'>
                            <label htmlFor="dropzone-file" className="flex flex-col items-center max-w-lg p-3 mx-auto text-center bg-white cursor-pointer rounded-full">
                                <FaCamera className='text-2xl' />
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 items-center mt-5'>
                        <h2 className='font-bold text-lg'>{user?.displayName}</h2>

                        {/* set expert  */}
                        <h3 className='italic'>WordPress And eCommerce expert</h3>


                        <div className='flex gap-2 justify-center'>
                            {
                                [1, 2, 3, 4, 5].map((start, index) => {
                                    return <div key={index}>
                                        <FaStar className='text-yellow-500 font-bold text-lg' />

                                    </div>
                                })
                            }
                            <span className='text-base'>{`6 ( reviews )`}</span>
                        </div>


                    </div>
                    <div className='w-full border-t-[0.2px]'></div>

                    <div className='grid grid-cols-2 gap-2 text-slate-500 py-5'>
                        <div className='flex gap-10'>
                            <FaMapMarkerAlt />
                            <h3 className='text-end'>From</h3>
                        </div>
                        <h3 className='text-end'>Bangladesh</h3>
                        <div className='flex gap-10'>
                            <FaUser />
                            <h3 className='text-end'>Member Since</h3>
                        </div>
                        <h3 className='text-end'>Feb 2023</h3>
                        <div className='flex gap-10'>
                            <FaPaperPlane />
                            <h3 className='text-end'>Last Delivery</h3>
                        </div>
                        <h3 className='text-end'>3 months</h3>
                    </div>

                    <div className='w-full border-t-[0.2px]'></div>
                </div>
                <div className='xl:col-span-8'>
                    <div>
                        <div className='bg-white p-3 border border-slate-300'>
                            <h2 className='uppercase font-bold text-sm text-start'>Active gigs</h2>
                        </div>

                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5 xl:mt-10'>
                            {
                                gigs?.map((gig, index) => {
                                    return <div key={index}>
                                        <div className="w-full overflow-hidden bg-white border border-slate-300 rounded-md hover:shadow-2xl">

                                            <img className="object-cover w-full h-36" src={gig?.service_image} alt="avatar" />

                                            <div className="py-5 px-3 text-star">
                                                <span className="text-sm text-slate-600">{gig?.service_name}</span>

                                                <div className='mt-5 flex justify-between flex-row-reverse items-center'>
                                                    <h3 className='font-semibol uppercase text-green-600'>starting at ${gig?.price}</h3>
                                                    <button>
                                                        <FaTrashAlt className='text-red-500' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                })
                            }

                            <Link to='/seller_dashboard/create-gig' className="w-full overflow-hidden bg-white border border-slate-300 flex flex-col justify-center items-center py-7">
                                <div className='w-24 text-green-600'>
                                    <FaPlusCircle className='w-full text-8xl' />
                                </div>
                                <h3 className='font-semibold'>Create a new gig</h3>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;