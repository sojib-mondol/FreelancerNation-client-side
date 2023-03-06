import { useState } from "react";
import { useForm } from "react-hook-form";

function GigCreationForm() {
  const [serviceImages, setServiceImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleServiceImageChange = (event) => {
    const files = event.target.files;
    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        urls.push(event.target.result);
        if (urls.length === files.length) {
          setServiceImages(urls);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    // handle form submission logic
    console.log(data);
      const serviceImg1 = data.serviceImg1
      const serviceImg2 = data.serviceImg2
      const description = data.description
      const price = data.price
      console.log(serviceImg1,serviceImg2,description,price);
  };

  return (
    <div className='my-10'>
      <h2 className='text-2xl uppercase text-center'>Create gig</h2>
      <div className='flex justify-center items-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-green-400 p-10'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='serviceImages'
            >
              Service Images1
            </label>
            <input
              className='border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              id='serviceImages'
              name='serviceImage1'
              type='file'
              multiple
              accept='image/*'
              onChange={handleServiceImageChange}
              {...register("serviceImage1", { required: true })}
            />
            {errors.serviceImages && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}
            <div className='flex flex-wrap mt-2'>
              {serviceImages.map((url, index) => (
                <div key={index} className='w-1/3 p-2'>
                  <img
                    src={url}
                    alt={`ServiceImage ${index + 1}`}
                    className='w-full'
                  />
                </div>
              ))}
            </div>

            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='serviceImages'
            >
              Service Images2
            </label>
            <input
              className='border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              id='serviceImages'
              name='serviceImage2'
              type='file'
              multiple
              accept='image/*'
              onChange={handleServiceImageChange}
              {...register("serviceImage2", { required: true })}
            />
            {errors.serviceImages && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}
            <div className='flex flex-wrap mt-2'>
              {serviceImages.map((url, index) => (
                <div key={index} className='w-1/3 p-2'>
                  <img
                    src={url}
                    alt={`ServiceImage ${index + 1}`}
                    className='w-full'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='description'
            >
              Description
            </label>
            <textarea
              className='border rounded py-3 px-3 leading-tight focus:outline-none focus:shadow-outline'
              id='description'
              name='description'
              rows='5'
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='price'
            >
              Price
            </label>
            <input
              className='border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              id='price'
              name='price'
              type='number'
              min='0'
              step='0.01'
              {...register("price", { required: true, min: 0 })}
            />
            {errors.price && errors.price.type === "required" && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}
            {errors.price && errors.price.type === "min" && (
              <span className='text-red-500 text-sm'>
                Price must be greater than or equal to 0
              </span>
            )}
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Create Gig
          </button>
        </form>
      </div>
    </div>
  );
}
export default GigCreationForm;
