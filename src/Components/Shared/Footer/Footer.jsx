import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
           <footer className="">
    <div className="px-4 pt-9 pb-4 mx-auto md:px-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <div>
                <div className="text-xs text-black font-bold uppercase">
                    Categories
                </div>

                <Link className="block mt-5 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Graphics & Design
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Digital Marketing
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Writing & Translation
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Video & Animation
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Music & Audio
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Programming & Tech
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Data
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Business
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                LifeStyle
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Photography
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Sitemap
                </Link>
            </div>

            <div>
                <div className="text-xs text-black font-bold uppercase">
                    About
                </div>

                <Link className="block mt-5 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Carrers
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Press & News
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Partnership 
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Privacy & policy
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Intellectual Property Claims
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                Investor Relations
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    IntelliSense
                </Link>
            </div>

            <div>
                <div className="text-xs text-black font-bold uppercase">
                    Support
                </div>

                <Link className="block mt-5 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Help & Support
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Trust & Safety
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Selling on Freelancer Nation
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Buying on Freelancer Nation
                </Link>
                
            </div>

            <div>
                <div className="text-xs  text-black font-bold uppercase">
                    Community
                </div>

                <Link className="block mt-5 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Installation
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Release Notes
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Upgrade Guide
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Using with Preprocessors
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Optimizing for Production
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    Browser Support
                </Link>
                <Link className="block mt-3 text-sm font-medium text-gray-500 duration-700  hover:text-gray-400 hover:underline">
                    IntelliSense
                </Link>
            </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700"/>

        
    </div>
</footer>
        
    );
};

export default Footer;