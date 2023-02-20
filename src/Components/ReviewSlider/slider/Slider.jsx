import React from 'react';

const Slider = () => {
    return (
        <div>
            <section class="bg-white py-10">
    

                    <div class="container grid grid-cols-2 gap-10 py-10 px-5">
                        <div class="mt-10 font-roboto">
                            
                            <h5 className='text-2xl text-gray-800'>Caitlin Tormey, Chief Commercial Officer | NAADAM</h5>
                            <blockquote className='font-semibold mt-3'>
                                <i className='text-gray-800'>
                                "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."
                                </i>
                            </blockquote>
                        </div>

                        <div class="">

                            <video className='rounded-md' controls src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi"></video> 

                        </div>
                    </div>
            </section>
        </div>
    );
};

export default Slider;