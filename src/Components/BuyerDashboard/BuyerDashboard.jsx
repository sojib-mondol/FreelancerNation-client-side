import React from 'react';
import { FaCamera, FaMapMarkerAlt, FaPaperPlane, FaPlusCircle, FaStar, FaTrashAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BuyerDashboard = () => {
    return (
        <div className='px-4 py-5 mx-auto md:px-10 lg:px-24 lg:py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 xl:gap-16 items-start'>
                <div className='xl:col-span-4 bg-white flex flex-col items-center p-5 border border-slate-300'>
                    <div className='w-48 h-48 rounded-full relative'>
                        <img className='w-full h-full rounded-full' src="https://i.ibb.co/m0RvzZK/buyer.jpg" alt="" srcSet="" />
                        <div className='absolute top-[153px] left-[120px]'>
                            <label htmlFor="dropzone-file" className="flex flex-col items-center max-w-lg p-3 mx-auto text-center bg-white cursor-pointer rounded-full">
                                <FaCamera className='text-2xl' />
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center mt-5'>
                        <h2 className='font-bold text-lg'>upgradeyourself</h2>
                        <div className='flex gap-2 justify-center items-center'>
                            {
                                [1, 2, 3, 4, 5].map((start, index) => {
                                    return <>
                                        <FaStar className='text-yellow-500 font-bold text-lg' key={index} />

                                    </>
                                })
                            }
                            <span className='text-base'>5</span>
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
                    </div>
                    <div className='w-full border-t-[0.2px]'></div>
                </div>
                <div className='xl:col-span-8'>
                    <div>
                        <div className='bg-white p-3 border border-slate-300'>
                            <h2 className='uppercase font-bold text-sm text-start'>Active Orders</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-5 mt-5 xl:mt-10'>
                            {
                                [1, 2, 3, 4, 5, 6].map((cart, index) => {
                                    return <>
                                        <div className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg" key={index}>
                                            <img src="https://i.ibb.co/239rTWQ/gig-banner.jpg" width="100" height="80" className='rounded' alt="" />
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt="" />

                                                <div>
                                                    <h1 class="text-base font-semibold text-gray-700 capitalize dark:text-white">Mia John</h1>

                                                    <p class="text-xs text-gray-500 dark:text-gray-400">miajohn@merakiui.com</p>
                                                </div>
                                            </div>
                                            <div>
                                                <small>Price</small>
                                                <p className=''>$100</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <small>Status</small>
                                                <small className='bg-orange-400 rounded-2xl px-2 py-1 text-white'>Incomplete</small>
                                            </div>
                                            <div className='flex gap-2'>
                                                <button className='text-green-500'>View</button>
                                                <Link to='/buyer_dashboard/chat'>
                                                <button className='text-green-500'>Message</button>
                                                </Link>
                                            </div>
                                        </div>

                                    </>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerDashboard;