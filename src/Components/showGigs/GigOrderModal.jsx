import React from "react";

const GigOrderModal = ({ handleOrderConfirm }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="bg-white py-14 rounded-md text-center">
            <h1 className="text-xl mb-4 font-bold text-slate-500">
              Do you Want Order
            </h1>

            <label
              htmlFor="my-modal"
              className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
            >
              Cancel
            </label>

            <label
              htmlFor="my-modal"
              onClick={() => handleOrderConfirm()}
              className="bg-green-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
            >
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigOrderModal;
