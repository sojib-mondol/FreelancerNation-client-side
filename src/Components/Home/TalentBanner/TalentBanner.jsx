import React from 'react';
import "./TalentBanner.css"

const TalentBanner = () => {
    return (
        <section className="talentBanner flex justify-center mt-10 flex-col px-4 py-5 mx-auto md:px-24 overflow-hidden">
        <h2 className='text-5xl font-bold text-white'>Find the <span className='font-semibold italic'>talent</span> needed to <br />get your business <span className='font-semibold italic'>growing.</span></h2>

      <div className='mt-10'>
      <button class="px-10 py-4 font-medium tracking-wide text-white text-lg capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-[#1b1919] focus:outline-none ">
    Get Started
</button>
      </div>
        </section>
    );
};

export default TalentBanner;