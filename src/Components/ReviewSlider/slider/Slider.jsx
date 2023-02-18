import React from 'react';

const Slider = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900 ">
    

                    <div class="container grid grid-cols-2 gap-10 py-10 px-5">
                        <div class="mt-10 font-roboto">
                            
                            <h5 className='text-2xl text-gray-400'>Caitlin Tormey, Chief Commercial Officer | NAADAM</h5>
                            <blockquote>
                                <i>
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