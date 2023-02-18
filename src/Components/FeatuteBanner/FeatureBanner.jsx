import React from "react";
import Player from "./video/Player/Player";



const FeatureBanner = () => {
  return (
    <section className='bg-green-50'>
      <div className='container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-2xl font-roboto font-semibold tracking-wide text-gray-800 lg:text-4xl'>
              Your freelance journey starts here!
            </h1>

            <div className='mt-4 space-y-1'>
              {/* Highlighted Feature */}
              <div>
                <div className='flex mb-3 items-center -mx-2 text-gray-700 dark:text-gray-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 mx-2 text-slate-400'
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
                  <h4 className='text-xl ml-2 font-bold text-slate-900 font-roboto'>
                    Browse Projects
                  </h4>
                </div>
                <span className='text-justify text-slate-500 font-montserrat'>
                  Browse a wide range of freelance jobs and projects from
                  clients around the world.
                </span>
              </div>

              <div>
                <div className='flex mb-3 items-center -mx-2 text-gray-700 dark:text-gray-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 mx-2 text-slate-400'
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
                  <h4 className='text-xl ml-2 font-bold font-roboto text-slate-900'>
                    Create Profile that stand out!
                  </h4>
                </div>
                <span className='text-justify text-slate-500 font-montserrat'>
                  Create a customized profile that showcases your skills,
                  experience, and portfolio to attract potential clients.
                </span>
              </div>

              <div>
                <div className='flex mb-3 items-center -mx-2 text-gray-700 dark:text-gray-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 mx-2 text-slate-400'
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
                  <h4 className='text-xl ml-2 font-bold font-roboto text-slate-900'>
                    Instant and Secure Communication
                  </h4>
                </div>
                <span className='text-justify text-slate-500 font-montserrat'>
                  Communicate with clients and collaborate on projects using our
                  secure messaging and project management tools.
                </span>
              </div>

              <div>
                <div className='flex mb-3 items-center -mx-2 text-gray-700 dark:text-gray-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 mx-2 text-slate-400'
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
                  <h4 className='text-xl ml-2 font-bold text-slate-900 font-roboto'>
                    Hassle Free Instant Payment
                  </h4>
                </div>
                <span className='text-justify text-slate-500 font-montserrat'>
                  Get paid for your work easily and securely through our
                  reliable and user-friendly payment system.
                </span>
              </div>
            </div>
          </div>
        </div>

              <div className='flex items-center justify-center w-full h-96 lg:w-1/2'>
                  <Player></Player>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
