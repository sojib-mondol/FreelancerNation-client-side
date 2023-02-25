import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function SellerRegistrationForm() {
  const {register,handleSubmit,
    formState: { errors }, reset
  } = useForm();
  
  const [skills, setSkills] = useState([]);
  const handelSellerData = (data) => {
    
    const fullname = data.fullName;
    const email = data.email;
    const phoneNumber = data.phoneNumber;
    const pricing = data.pricing;
    const skills = data.skills;
    const paymentMethod = data.paymentMethod;

    const sellerinfo = {
      fullname, email, phoneNumber, pricing, skills, paymentMethod
    }
    console.log(sellerinfo);
    fetch(`http://localhost:5000/saveseller`, {
      method: 'POST',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(sellerinfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        reset();
        toast.success(`Succesfully Registered as a ${sellerinfo?.skills}`)
    })

  };

  return (
    <div className='p-8 flex flex-col'>
      <form
        onSubmit={handleSubmit(handelSellerData)}
        className='bg-gradient-to-b from-green-500 to-green-700 py-10 px-4 sm:w-full md:w-3/4 md:mx-auto md:grid md:grid-cols-1 md:gap-4 rounded-lg'
      >
        <label htmlFor='fullName' className='block text-white mb-2'>
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

        <label htmlFor='email' className='block text-white mb-2'>
          Email Address:
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

        <label
          htmlFor='phoneNumber'
          className='block text-gray-700 font-bold mb-2'
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

        <label htmlFor='skills' className='block text-gray-700 font-bold mb-2'>
          Skills:
        </label>
        <div className='flex flex-wrap gap-2 mb-4'>
          {skills.map((skill) => (
            <div
              key={skill}
              className='bg-blue-500 text-white rounded-md py-2 px-4 flex items-center'
            >
              <span className='mr-2'>{skill}</span>
              <button
                type='button'
                className='text-white hover:text-gray-200 focus:outline-none'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm-1.414-8.414a1 1 0 011.414 0L10 10.586l1.414-1.414a1 1 0 011.414 1.414L11.414 12l1.414 1.414a1 1 0 01-1.414 1.414L10 13.414l-1.414 1.414a1 1 0 01-1.414-1.414L8.586 12 7.172 10.586a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          ))}
          <input
            type='text'
            id='skills'
            name='skills'
            {...register("skills", { required: true })}
            placeholder='Enter your skills separated by commas'
            className='w-full bg-gray-200 rounded-md py-2 px-4'
          />
        </div>
        {errors.skills && (
          <span className='text-red-500'>This field is required</span>
        )}

        <label htmlFor='pricing' className='block text-white mb-2'>
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

        <label htmlFor='paymentMethod' className='block text-white mb-2'>
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
        <button
          type='submit'
          className='bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default SellerRegistrationForm;
