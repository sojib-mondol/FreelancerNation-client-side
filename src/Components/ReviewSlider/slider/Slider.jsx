import React from 'react';

const Slider = ({ slider }) => {
    return (
        <div>
            <section className="bg-white py-10">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10 mx-auto space-y-6 lg:py-16">
                    <div className="mt-10 font-roboto text-start">
                        <h5 className='text-2xl text-gray-800'>{slider.title}</h5>
                        <blockquote className='font-semibold mt-3'>
                            <i className='text-gray-800'>
                                {`"${slider.reviewText}"`}
                            </i>
                        </blockquote>
                    </div>
                    <div>
                        <video className='rounded-md' controls src={slider.video_URL}></video>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Slider;