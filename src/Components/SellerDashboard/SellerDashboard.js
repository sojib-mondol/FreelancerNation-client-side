import React from 'react';
import { FaCamera, FaStar, FaTrashAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SellerDashboard = () => {
    return (
        <div className='px-4 py-5 mx-auto md:px-10 lg:px-24 lg:py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 xl:gap-16 items-start'>
                <div className='xl:col-span-4 bg-white flex flex-col items-center p-5 border border-slate-300'>
                    <div className='w-48 h-48 rounded-full relative'>
                        <img className='w-full h-full rounded-full' src="https://i.ibb.co/wQz38mT/wordpress.jpg" alt="" srcSet="" />
                        <div className='absolute top-[153px] left-[120px]'>
                            <label htmlFor="dropzone-file" className="flex flex-col items-center max-w-lg p-3 mx-auto text-center bg-white cursor-pointer rounded-full">
                                <FaCamera className='text-2xl' />
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center mt-5'>
                        <h2 className='font-bold text-lg'>Webattom</h2>
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
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 xl:mt-10'>
                            {
                                [1, 2, 3, 4, 5, 6].map((cart, index) => {
                                    return <div key={index}>
                                        <div className="w-full overflow-hidden bg-white border border-slate-300" key={index}>
                                            <img className="object-cover w-full h-36" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />

                                            <div className="py-5 px-3 text-star">
                                                <span className="text-sm text-slate-600">Software Engineer</span>

                                                <div className='mt-5 flex justify-between flex-row-reverse items-center'>
                                                    <h3 className='font-semibol uppercase text-green-600'>starting at $15</h3>
                                                    <button>
                                                        <FaTrashAlt className='text-slate-500' />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                })
                            }
                            <Link to='/' className="w-full overflow-hidden bg-white border border-slate-300 flex flex-col justify-center items-center py-7">
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