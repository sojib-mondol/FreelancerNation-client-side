import React from 'react';

const BusinessSection = () => {
    return (
        <div>

            <h3>Get inspired with projects made by our freelancers</h3>
            

           <section className='bg-[#0d084d]'>
                <div className='container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[40rem] lg:py-16 lg:flex-row lg:items-center'>
                    <div className='w-full lg:w-1/2'>
                        <div className='lg:max-w-lg'>

                            <h1 className='mb-5 text-2xl font-roboto font-semibold tracking-wide text-gray-100 lg:text-2xl'>
                                FreelanceNation Business <span className='bg-sky-500 text-white
               px-2 text-xl rounded-2xl'>new</span>
                            </h1>

                            <h1 className='mb-5 text-2xl font-roboto font-semibold text-green-500 lg:text-3xl'>
                                A business solution <br /> designed for teams
                            </h1>
                            <p className='mb-5 text-xl font-roboto  text-gray-200 '>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>

                            <div className='mt-4 space-y-1'>


                                <div>
                                    <div className='flex mb-3 items-center text-gray-200'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-8 h-8 lg:w-7 lg:h-7 mx-2 mb-5 text-slate-400'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                        <h4 className=' text-xl ml-2 text-slate-100'>
                                            Connect to freelancers with proven business experience
                                        </h4>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex mb-3 items-center text-gray-200'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-8 h-8 mx-2 mb-5 text-slate-400'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                        <h4 className=' text-xl ml-2 text-slate-100'>
                                            Get matched with the perfect talent by a customer success manager
                                        </h4>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex mb-3 items-center text-gray-200'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='w-8 h-8 mx-2 mb-5 text-slate-400'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                        <h4 className=' text-xl ml-2 text-slate-100'>
                                            Manage teamwork and boost productivity with one powerful workspace
                                        </h4>
                                    </div>
                                </div>


                            </div>
                            <button className=' mt-10 bg-green-500 text-xl font-semibold rounded-md text-white px-3 py-2 '>Explore Business</button>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-full h-96 lg:w-1/2'>
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BusinessSection;