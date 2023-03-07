import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SellerRegistrationForm() {
  const { register, handleSubmit,
    formState: { errors }, reset
  } = useForm();

  const [ServiceCategories, setServiceCategories] = useState([]);
  const navigate = useNavigate();
  const handelSellerData = (data) => {

    const fullname = data.fullName;
    const email = data.email;
    const location = data.location;
    const phoneNumber = data.phoneNumber;
    const service = data.service;
    const pricing = data.pricing;
    const skills = data.skills;
    const expert = data.expert;
    const paymentMethod = data.paymentMethod;

    const sellerInfo = {
      fullname, email, location, phoneNumber, pricing, service, skills, expert, paymentMethod
    }
    // console.log(sellerInfo);
    fetch(`https://freelancer-nation-backend.vercel.app/saveseller`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(sellerInfo)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        reset();
        toast.success(`Successfully Registered!!`);
        navigate('/seller_dashboard')
      })

  };
  // loaded service category
  useEffect(() => {
    fetch(`https://freelancer-nation-backend.vercel.app/serviceCategoty`)
      .then((res) => res.json())
      .then((data) => setServiceCategories(data));
  }, []);



  return (
    <div className='p-2 md:p-8 flex flex-col bg-gray-100'>
      <form
        onSubmit={handleSubmit(handelSellerData)}
        className='bg-gradient-to-l from-green-400 to-green-600 py-10 px-4 sm:w-full md:w-3/4 md:mx-auto md:grid md:grid-cols-1 md:gap-4 rounded-lg'
      >
        <label htmlFor='fullName' className='block font-bold text-white '>
          Full Name:
        </label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          {...register("fullName", { required: true })}
          placeholder='Enter your full name'
          className='w-full bg-gray-100 rounded-md py-2 px-4 mb-4'
        />
        {errors.fullName && (
          <span className='text-red-500'>This field is required</span>
        )}

        <label htmlFor='email' className='block font-bold text-white '>
          Email:
        </label>
        <input
          type='email'
          id='email'
          name='email'
          {...register("email", { required: true })}
          placeholder='Enter your email address'
          className='w-full bg-gray-100 rounded-md py-2 px-4 mb-4'
        />
        {errors.email && (
          <span className='text-red-500'>This field is required</span>
        )}


        <label htmlFor='address' className='block font-bold text-white '>
          Address:
        </label>
        <input
          type='text'
          id='address'
          name='location'
          {...register("location", { required: true })}
          placeholder='Enter your location'
          className='w-full bg-gray-100 rounded-md py-2 px-4 mb-4'
        />
        {errors.location && (
          <span className='text-red-500'>This field is required</span>
        )}




        <label
          htmlFor='phoneNumber'
          className='block text-white font-bold '
        >
          Phone Number:
        </label>
        <input
          type='tel'
          id='phoneNumber'
          name='phoneNumber'
          {...register("phoneNumber", { required: true, pattern: /^\d{11}$/ })}
          placeholder='Enter your phone number'
          className='w-full bg-gray-200 rounded-md py-2 px-4 mb-4'
        />
        {errors.phoneNumber?.type === "required" && (
          <span className='text-red-500'>This field is required</span>
        )}
        {errors.phoneNumber?.type === "pattern" && (
          <span className='text-red-500'>
            Please enter a valid phone number (exactly 11 digits)
          </span>
        )}

        <label htmlFor='paymentMethod' className='block font-bold text-white '>
          Select Service:
        </label>
        <select
          id='service'
          name='service'
          {...register("services", { required: true })}
          className='w-full bg-gray-100 rounded-md py-2 px-4 mb-4'
        >
          <option defaultValue=''>Select a Desire Service</option>

          {
            ServiceCategories?.map((service, i) => <option key={i} value={service?.service_name}>{service?.service_name}</option>)
          }

        </select>
        {errors.service && (
          <span className='text-red-500'>This field is required</span>
        )}







        <label htmlFor='skills' className='block text-white font-bold '>
          Skills:
        </label>
        <div className='flex flex-wrap gap-2 mb-4'>
          <input
            type='text'
            id='skills'
            name='skills'
            {...register("skills", { required: true })}
            placeholder='Enter your skills'
            className='w-full bg-gray-200 rounded-md py-2 px-4'
          />
        </div>
        {errors.skills && (
          <span className='text-red-500'>This field is required</span>
        )}

        <label htmlFor='Expert' className='block text-white font-bold '>
          Expert:
        </label>
        <div className='flex flex-wrap gap-2 mb-4'>
          <input
            type='text'
            id='Expert'
            name='expert'
            {...register("expert", { required: true })}
            placeholder='Enter your tag line'
            className='w-full bg-gray-200 rounded-md py-2 px-4'
          />
        </div>
        {errors.expert && (
          <span className='text-red-500'>This field is required</span>
        )}


        <label htmlFor='pricing' className='block font-bold text-white '>
          Pricing:
        </label>
        <input
          type='number'
          name='pricing'
          id='pricing'
          {...register("pricing", { required: true })}
          placeholder='Enter your pricing'
          className='w-full bg-gray-100 rounded-md py-2 px-4 mb-4'
        />
        {errors.pricing && (
          <span className='text-red-500'>This field is required</span>
        )}

        <label htmlFor='paymentMethod' className='block font-bold text-white '>
          Payment Method:
        </label>
        <select
          id='paymentMethod'
          name='paymentMethod'
          {...register("paymentMethod", { required: true })}
          className='w-full bg-gray-100 rounded-md py-2 px-4 mb-4'
        >
          <option value=''>Select a payment method</option>
          <option value='paypal'>PayPal</option>
          <option value='bankTransfer'>Bank Transfer</option>
          <option value='paymentGateway'>Payment Gateway</option>
        </select>
        {errors.paymentMethod && (
          <span className='text-red-500'>This field is required</span>
        )}

        <div className="flex justify-center ">
          <button
            type='submit'
            className='bg-yellow-300 text-black font-roboto font-black  py-4 px-5 rounded-md  transition-colors duration-300'
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}
export default SellerRegistrationForm;
