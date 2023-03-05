import React, { useContext } from 'react';
import { FaCamera, FaMapMarkerAlt, FaPaperPlane, FaPlusCircle, FaStar, FaTrashAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const BuyerDashboard = () => {
    const { user } = useContext(AuthContext);
    const photo = user?.photoURL ? user.photoURL : 'https://i.ibb.co/m0RvzZK/buyer.jpg'

    return (
        <div className='px-4 py-5 mx-auto md:px-10 lg:px-24 lg:py-16'>


            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 xl:gap-16 items-start'>
                <div className='xl:col-span-4 bg-white flex flex-col items-center p-5 border border-slate-300'>
                    <div className='w-48 h-48 rounded-full relative'>
                        <img className='w-full h-full rounded-full' src={photo} alt="" />
                        <div div className='absolute top-[153px] left-[120px]'>
                            <label htmlFor="dropzone-file" className="flex flex-col items-center max-w-lg p-3 mx-auto text-center bg-white cursor-pointer rounded-full">
                                <FaCamera className='text-2xl' />
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 items-center mt-5'>
                        <h2 className='font-bold text-lg'>{user?.displayName}</h2>
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

                    {/* details addrees */}
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
                            <h2 className='uppercase font-bold text-sm text-start'>Orders</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-5 mt-5 xl:mt-10'>

                            {/* buyers orders  */}
                            <div className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg">
                                <img src="https://i.ibb.co/239rTWQ/gig-banner.jpg" width="100" height="80" className='rounded' alt="" />
                                <div class="flex items-center gap-x-2">
                                    <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt="" />

                                    <div>
                                        <h1 class="text-base font-semibold text-gray-700 capitalize dark:text-white">Mia John</h1>

                                        <p class="text-xs text-gray-500 dark:text-gray-400">miajohn@gmail.com</p>
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

                            <div className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg">
                                <img src="https://i.ibb.co/3fkpyW2/4.webp" width="100" height="80" className='rounded' alt="" />
                                <div class="flex items-center gap-x-2">
                                    <img class="object-cover w-8 h-8 rounded-full" src="https://i.ibb.co/JtSgm7r/p1.webp" alt="" />

                                    <div>
                                        <h1 class="text-base font-semibold text-gray-700 capitalize dark:text-white">Mr. Blake</h1>

                                        <p class="text-xs text-gray-500 dark:text-gray-400">blake243@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <small>Price</small>
                                    <p className=''>$200</p>
                                </div>
                                <div className='flex flex-col'>
                                    <small>Status</small>
                                    <small className='bg-green-400 rounded-2xl px-2 py-1 text-white'>Complete</small>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='text-green-500'>View</button>
                                    <Link to='/buyer_dashboard/chat'>
                                        <button className='text-green-500'>Message</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg">
                                <img src="https://i.ibb.co/dPSWR5K/3.jpg" width="100" height="80" className='rounded' alt="" />
                                <div class="flex items-center gap-x-2">
                                    <img class="object-cover w-8 h-8 rounded-full" src="https://i.ibb.co/C2RckjL/p2.jpg" alt="" />

                                    <div>
                                        <h1 class="text-base font-semibold text-gray-700 capitalize dark:text-white">Jack H. Lathan</h1>

                                        <p class="text-xs text-gray-500 dark:text-gray-400">jacklathan@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <small>Price</small>
                                    <p className=''>$120</p>
                                </div>
                                <div className='flex flex-col'>
                                    <small>Status</small>
                                    <small className='bg-green-400 rounded-2xl px-2 py-1 text-white'>Complete</small>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='text-green-500'>View</button>
                                    <Link to='/buyer_dashboard/chat'>
                                        <button className='text-green-500'>Message</button>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg">
                                <img src="https://i.ibb.co/1dWZdCG/2.webp" width="100" height="80" className='rounded' alt="" />
                                <div class="flex items-center gap-x-2">
                                    <img class="object-cover w-8 h-8 rounded-full" src="https://i.ibb.co/98tc8C3/p3.jpg" alt="" />

                                    <div>
                                        <h1 class="text-base font-semibold text-gray-700 capitalize dark:text-white">Adriana Perez</h1>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">adriana95@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <small>Price</small>
                                    <p className=''>$230</p>
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

                            <div className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg">
                                <img src="https://i.ibb.co/891zddv/1.webp" width="100" height="80" className='rounded' alt="" />
                                <div class="flex items-center gap-x-2">
                                    <img class="object-cover w-8 h-8 rounded-full" src="https://i.ibb.co/phzm0LT/p4.jpg" alt="" />

                                    <div>
                                        <h1 class="text-base font-semibold text-gray-700 capitalize dark:text-white">Alex Carson</h1>

                                        <p class="text-xs text-gray-500 dark:text-gray-400">alex918@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <small>Price</small>
                                    <p className=''>$300</p>
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

                            <div className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg">
                                <img src="https://i.ibb.co/7XD6xqx/5.webp" width="100" height="80" className='rounded' alt="" />
                                <div class="flex items-center gap-x-2">
                                    <img class="object-cover w-8 h-8 rounded-full" src="https://i.ibb.co/Hx6Bw9n/p5.jpg" alt="" />

                                    <div>
                                        <h1 class="text-base font-semibold text-gray-700 capitalize dark:text-white">Don Cody</h1>

                                        <p class="text-xs text-gray-500 dark:text-gray-400">dcody323@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <small>Price</small>
                                    <p className=''>$230</p>
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


                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BuyerDashboard;