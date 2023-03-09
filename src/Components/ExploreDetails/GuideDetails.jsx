import React from 'react';
import { Link } from 'react-router-dom';
import { blogDetailsData } from './BlogDetails';

const GuideDetails = () => {
    return (
        <div className="mt-6 bg-gray-50">
        <div className=" px-10 py-6 mx-auto">
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
            <Link className="block transition duration-200 ease-out transform ">
              <img
                className="object-cover w-full shadow-sm h-full"
                src={blogDetailsData[3].image_url}
                alt=""
              />
            </Link>
  
            <div className="flex items-center justify-start mt-4 mb-4">
              {blogDetailsData[3].tags.map((blogTag) => (
                <Link className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">
                  {blogTag}
                </Link>
              ))}
            </div>
            <div className="mt-2">
              <Link className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline">
                {blogDetailsData[3].title}
              </Link>
  
              <div className="flex justify-start items-center mt-2">
                <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">
                  3000
                </p>
                <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
              </div>
  
              <div className="font-light text-gray-600">
                <Link className="flex items-center mt-6 mb-6">
                  <img
                    src="https://avatars.githubusercontent.com/u/71964085?v=4"
                    alt="avatar"
                    className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
                  />
                  <h1 className="font-bold text-gray-700 hover:underline">
                      {blogDetailsData[3].author}
                  </h1>
                </Link>
              </div>
            </div>
  
            <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
              <div>
                <p className="mt-2 p-8">{blogDetailsData[3].content[0].text}</p>
              </div>
            </div>
          </div>
  
          {/* related posts  */}
  
          <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">
            Related Posts
          </h2>
          <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div className="grid grid-cols-12 col-span-12 gap-7">
              {blogDetailsData[3].related.map((related) => (
                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                  <Link
                    href="#_"
                    className="block transition duration-200 ease-out transform hover:scale-110"
                  >
                    <img
                      className="object-cover w-full shadow-sm h-full"
                      src={related.image}
                      alt=""
                    />
                  </Link>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                    <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                      <span>Flask</span>
                    </div>
                    <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl">
                      <Link href="#_">{related.title}</Link>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Learn how to authenticate users to your application using
                      facebook.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* from form component  */}
  
          <div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto">
            <div className="w-full mt-16 md:mt-0 ">
              <form className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 className="mb-6 text-2xl font-medium text-center">
                  Write a comment
                </h3>
                <textarea
                  type="text"
                  name="comment"
                  className="w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your comment"
                  rows="5"
                  cols="33"
                ></textarea>
                <input
                  type="submit"
                  value="Submit comment"
                  name="submit"
                  className=" text-white px-4 py-3 bg-blue-500  rounded-lg"
                />
              </form>
            </div>
          </div>
  
          {/* comments 				 */}
          <div className="max-w-4xl px-10 py-16 mx-auto bg-gray-100  bg-white min-w-screen animation-fade animation-delay  px-0 px-8 mx-auto sm:px-12 xl:px-5">
            <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center sm:mx-0">
              All comments on this post
            </p>
  
            <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
              <Link className="flex items-center mt-6 mb-6 mr-6">
                <img
                  src="https://avatars.githubusercontent.com/u/71964085?v=4"
                  alt="avatar"
                  className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
                />
              </Link>
  
              <div>
                <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
                  By James Amos
                </h3>
                <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                  Please help with how you did the migrations for the blog
                  database fields.I tried mine using exactly what you instructed
                  but its not working!!.
                </p>
              </div>
            </div>
  
            <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
              <Link className="flex items-center mt-6 mb-6 mr-6">
                <img
                  src="https://avatars.githubusercontent.com/u/71964085?v=4"
                  alt="avatar"
                  className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
                />
              </Link>
  
              <div>
                <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
                  By James Amos
                </h3>
                <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                  Especially I dont understand the concepts of multiple
                  models.What really is the difference between the blog model and
                  blogApp model? Am stuck
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default GuideDetails;