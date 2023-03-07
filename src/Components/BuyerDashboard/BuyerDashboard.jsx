import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaMapMarkerAlt, FaStar, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const BuyerDashboard = () => {
  const { user } = useContext(AuthContext);

  const { data: buyerOrders = [] } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://freelancer-nation-backend.vercel.app/buyer/gigOrders/${user?.email}`
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="px-4 py-5 mx-auto md:px-10 lg:px-24 lg:py-16 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 xl:gap-16 items-start">
        <div className="xl:col-span-4 bg-white flex flex-col items-center p-5 border border-slate-300">
          <div className="w-48 h-48 rounded-full relative">
            <img
              className="w-full h-full rounded-full"
              src={user?.photoURL}
              alt="buyer pic"
            />
          </div>

          <div className="flex flex-col gap-2 items-center mt-5 mb-2">
            <h2 className="font-bold text-lg">{user?.displayName}</h2>
            <div className="flex gap-2 justify-center items-center">
              {[1, 2, 3, 4, 5].map((start, index) => {
                return (
                  <div key={index}>
                    <FaStar className="text-yellow-500 font-bold text-lg" />
                  </div>
                );
              })}
              <span className="text-base mt-1">5</span>
            </div>
          </div>
          <div className="w-full border-t-[0.2px]"></div>

          {/* details address */}
          <div className="grid grid-cols-2 gap-2 text-slate-500 py-5">
            <div className="flex gap-10">
              <FaMapMarkerAlt />
              <h3 className="text-end">From</h3>
            </div>
            <h3 className="text-end">Bangladesh</h3>
            <div className="flex gap-10">
              <FaUser />
              <h3 className="text-end">Member Since</h3>
            </div>
            <h3 className="text-end">Feb 2023</h3>
          </div>

          <div className="w-full border-t-[0.2px]"></div>
        </div>

        <div className="xl:col-span-8">
          <div>
            <div className="bg-white p-3 border border-slate-300">
              <h2 className="uppercase font-bold text-sm text-start">Orders</h2>
            </div>

            {buyerOrders.length ? (
              <div className="grid grid-cols-1 gap-5 mt-5 xl:mt-10">
                {/* buyers orders  */}
                {buyerOrders?.map((order, i) => (
                  <div
                    key={i}
                    className="w-full overflow-hidden bg-white border border-slate-300 px-3 py-2 flex items-center justify-between rounded-lg"
                  >
                    <img
                      src={order.gigInfo?.serviceImage}
                      width="100"
                      height="80"
                      className="rounded"
                      alt=""
                    />
                    <div className="flex items-center gap-x-2">
                      <div>
                        <h1 className="text-base font-semibold text-gray-700 capitalize dark:text-white">
                          {order.gigInfo?.title}
                        </h1>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {order.gigInfo?.email}
                        </p>
                      </div>
                    </div>
                    <div>
                      <small>Price</small>
                      <p className="">${order.gigInfo?.price}</p>
                    </div>
                    <div className="flex flex-col">
                      <small>Status</small>
                      {order.gigInfo?.status === true ? (
                        <small className="bg-green-400 rounded-2xl px-2 py-1 text-white">
                          Completed
                        </small>
                      ) : (
                        <small className="bg-orange-400 rounded-2xl px-2 py-1 text-white">
                          Incomplete
                        </small>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Link to="/buyer_dashboard/chat">
                        <button className="text-green-500">Message</button>
                      </Link>
                      <button className="text-green-500 mr-2">View</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-screen">
                <button
                  type="button"
                  className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]"
                  disabled
                >
                  <div className="flex items-center justify-center m-[10px]">
                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                    <div className="ml-2"> Processing... </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
