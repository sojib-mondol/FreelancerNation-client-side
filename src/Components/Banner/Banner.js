import { FaSistrix } from "react-icons/fa";
import './Banner.css'

const Banner = () => {
    return (
        <div className={`xl:min-h-screen banner-container px-4 py-5 mx-auto md:px-24`}>
            <div className='grid grid-cols-1 justify-center items-center'>
                <div className='my-20 xl:mt-52 md:w-11/12 lg:w-8/12 xl:w-7/12 text-white'>
                    <div>
                        <h1 className=' text-3xl xl:text-5xl leading-snug font-semibold'>Find the perfect <i>freelance</i> services for your business</h1>
                    </div>
                    <div>
                        <div className="relative flex flex-col md:flex-row items-center mt-2">
                            <span className="absolute pl-5">
                                <FaSistrix className='text-slate-400 text-xl text-start hidden md:block' ></FaSistrix>
                            </span>

                            <input type="email" placeholder={`Try "building mobile app"`} className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:text-gray-300 dark:focus:border-blue-300 focus:outline-none " />

                            <button className="px-6 py-2.5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 w-full mt-3 md:mt-0 md:w-36 xl:w-52">
                                Search
                            </button>
                        </div>
                    </div>

                    <div className='mt-5 hidden md:block xl:block'>
                        <ul className='flex gap-3 items-center font-semibold'>
                            <li>
                                <h2>Popular:</h2>
                            </li>
                            <li className='text-sm md:text-xs border border-white px-3 rounded-2xl'>Web Design</li>
                            <li className='text-sm md:text-xs border border-white px-3 rounded-2xl'>WordPress</li>
                            <li className='text-sm md:text-xs border border-white px-3 rounded-2xl'>Logo Design</li>
                            <li className='text-sm md:text-xs border border-white px-3 rounded-2xl'>AI Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;