import React from 'react';

const LoginSkeleton = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 my-10 mx-auto w-96">
            <div className="animate-pulse flex flex-col space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-10 flex justify-center">
                    <div className="w-3/4 h-full bg-gray-200 rounded"></div>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/3 h-8 bg-gray-200 rounded"></div>
                    <div className="w-1/3 h-8 bg-gray-200 rounded"></div>
                    <div className="w-1/3 h-8 bg-gray-200 rounded"></div>
                </div>
                <button className="bg-gray-200 h-10 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                    <span className="mx-auto w-24 block h-full"></span>
                </button>
            </div>
        </div>
    );
};

export default LoginSkeleton;