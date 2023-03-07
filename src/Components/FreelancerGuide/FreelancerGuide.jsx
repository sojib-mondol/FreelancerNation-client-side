import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const FreelancerGuide = () => {
    const guidelineData = useLoaderData();

    console.log(guidelineData)
    return (
        <section className='bg-white py-10'>
            {
                guidelineData.map(guideline => <div key={guideline.id}>
                    <div className="max-w-screen-xl mx-auto mt-5 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <img className="object-cover w-full h-96" src={guideline.img} alt="Article" />

                        <div className="p-6">
                            <div>
                                <h2 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{guideline.title}</h2>
                                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    <p>{guideline.line1}</p><br />
                                    <p>{guideline.line2}</p><br />
                                    <p>{guideline.line3}</p><br />
                                    <p>{guideline.line4}</p><br />
                                    <p>{guideline.line5}</p><br />
                                    <p>{guideline.line6}</p><br />
                                    <p>{guideline.line7}</p><br />
                                    <p>{guideline.line8}</p><br />
                                    <p>{guideline.line9}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                )}
        </section>
    );
};

export default FreelancerGuide;