import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import UseSeller from "../../API/UseSeller";
import { AuthContext } from "../../context/AuthProvider";

const Gigcard = ({ gig }) => {
  
  const { title, serviceImage, price } = gig;
  const { user } = useContext(AuthContext);
  const [isSeller] = UseSeller(user?.email);

  const handleOrderConfirm = (orderGigNew) => {
    const agree = window.confirm("Proceed to buy ?");

    if (agree) {
      const newOrder = {
        sellerGigId: orderGigNew._id,
        gigInfo: orderGigNew,
        buyerEmail: user?.email,
      };

      fetch(`https://freelancer-nation-backend.vercel.app/order/gig`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          toast.success("Gig order completed successfully!");
        });
    }
  };

  return (
    <div>
      <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img
          className="w-full object-cover h-52 rounded-t-md"
          src={serviceImage}
          alt=""
        />
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-700">{title}</h1>

          <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
            <button className="block text-xl font-semibold text-gray-700 cursor-auto">
              ${price}
            </button>

            {!isSeller && 
              
                !user?.uid ? 
                <>
                <Link to="/login">
                <label
           
                className="cursor-pointer text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                Order
              </label>
                </Link>
                </>
                :
              <label
                onClick={() => handleOrderConfirm(gig)}
                className="cursor-pointer text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                Order
              </label>
              
              
              
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigcard;
