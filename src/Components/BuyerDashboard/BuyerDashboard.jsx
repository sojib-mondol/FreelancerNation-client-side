import React, { useContext } from 'react';
import { FaCamera, FaMapMarkerAlt, FaStar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';



const BuyerDashboard = () => {
    const { user } = useContext(AuthContext);
    const photo = user?.photoURL ? user.photoURL : 'https://i.ibb.co/m0RvzZK/buyer.jpg'

    const orders = [
        {
            service_image: "https://cdn.pixabay.com/photo/2015/01/02/10/47/search-engine-optimization-586422_960_720.jpg",
            user_image: "https://randomuser.me/api/portraits/men/64.jpg",
            user_email: "john@example.com",
            name: "John Cheri",
            price: 29,
            status: true
        },
        {
            service_image: "https://cdn.pixabay.com/photo/2016/11/03/18/19/social-media-1795578_960_720.jpg",
            user_image: "https://randomuser.me/api/portraits/women/33.jpg",
            user_email: "bob@example.com",
            name: "Bob Smith",
            price: 60,
            status: false
        },
        {
            service_image: "https://cdn.pixabay.com/photo/2015/06/01/09/00/adwords-793034_960_720.jpg",
            user_image: "https://randomuser.me/api/portraits/women/74.jpg",
            user_email: "julia@grafin.com",
            name: "Julia Grafin",
            price: 75,
            status: true
        },
        {
            service_image: "https://cdn.pixabay.com/photo/2021/01/21/10/47/email-marketing-5937010_960_720.jpg",
            user_image: "https://randomuser.me/api/portraits/men/49.jpg",
            user_email: "john@smith.com",
            name: "John Smith",
            price: 65,
            status: true
        },
        {
            service_image: "https://cdn.pixabay.com/photo/2018/09/20/17/37/client-3691440_960_720.jpg",
            user_image: "https://randomuser.me/api/portraits/women/27.jpg",
            user_email: "alice@perry.com",
            name: "Alice Perry",
            price: 91,
            status: false
        },
        {
            service_image: "https://cdn.pixabay.com/photo/2015/02/24/02/05/website-647013_960_720.jpg",
            user_image: "https://randomuser.me/api/portraits/women/31.jpg",
            user_email: "lijiki@shunn.com",
            name: "Lijiki Shunn",
            price: 38,
            status: false
        },
        {
            service_image: "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg",
            user_image: "https://randomuser.me/api/portraits/women/63.jpg",
            user_email: "jenny@joffer.com",
            name: "Jenny Joffer",
            price: 25,
            status: true
        }

    ]

    // kaj baki ace-------------------------ok 


    return (
        <div className='px-4 py-5 mx-auto md:px-10 lg:px-24 lg:py-16 bg-gray-100'>


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
                                    return <div key={index}>
                                        <FaStar className='text-yellow-500 font-bold text-lg' />
                                    </div>
                                })
                            }
                            <span className='text-base'>5</span>
                        </div>
                    </div>
                    <div className='w-full border-t-[0.2px]'></div>

                    {/* details address */}
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
                            {
                                orders?.map((order, i) => <div
                                    key={i}
                                    className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg">
                                    <img src={order.service_image} width="100" height="80" className='rounded' alt="" />
                                    <div className="flex items-center gap-x-2">
                                        <img className={order.user_image} alt="" />

                                        <div>
                                            <h1 className="text-base font-semibold text-gray-700 capitalize dark:text-white">{order.name}</h1>

                                            <p className="text-xs text-gray-500 dark:text-gray-400">{order.user_email}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <small>Price</small>
                                        <p className=''>${order.price}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <small>Status</small>
                                        {
                                            order.status === true ?
                                                <small className='bg-green-400 rounded-2xl px-2 py-1 text-white'>Completed</small>
                                                :
                                                <small className='bg-orange-400 rounded-2xl px-2 py-1 text-white'>Incomplete</small>
                                        }
                                    </div>
                                    <div className='flex gap-2'>
                                        <Link to='/buyer_dashboard/chat'>
                                            <button className='text-green-500'>Message</button>
                                        </Link>
                                        <button className='text-green-500 mr-2'>View</button>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BuyerDashboard;