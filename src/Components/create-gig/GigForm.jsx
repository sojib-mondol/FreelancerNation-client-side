import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import LoginSkeleton from "../Shared/Skeleton/LoginSkeleton";

function GigCreationForm() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const imageHostKey = process.env.REACT_APP_IMGBB_key;

  const navigate = useNavigate();



  // handle form submission logic
  const onSubmit = (data) => {
    setLoading(true);


    const image = data.image[0]
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {

        if (imgData.success) {

          const gig = {
            title: data.title,
            serviceImage: imgData.data.display_url,
            price: data.price,
            email: user?.email,
            status: false
          }


          fetch(`https://freelancer-nation-backend.vercel.app/seller/gig`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(gig)
          })
            .then(res => res.json())
            .then(data => {
              // console.log(data);
              toast.success("Gig complete successful");
              setLoading(false)
              navigate('/seller_dashboard');


            })


        }


      })


  };


  if (loading) {
    return <LoginSkeleton></LoginSkeleton>
  }



  return (
    <div className='py-10 bg-gray-200'>
      <h2 className='text-2xl uppercase text-center font-bold'>Create gig</h2>
      <div className='flex justify-center items-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-green-400 p-10 rounded-md'
        >

          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='title'
            >
              Title
            </label>
            <input
              className='border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full'
              id='title'
              name='title'
              type='text'
              placeholder="Enter your gig title"
              {...register("title", { required: true })}
            />
            {errors.title && errors.title.type === "required" && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}
          </div>



          {/* image  */}
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='serviceImages'
            >
              Service Images
            </label>
            <input
              className='border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full'
              id='serviceImages'
              name='image'
              type='file'
              multiple
              accept='image/*'
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className='text-red-500 text-sm'>
                This field is required
              </span>
            )}

          </div>


          {/* price  */}
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='price'
            >
              Price
            </label>
            <input
              className='border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full'
              id='price'
              name='price'
              type='number'
              min='0'
              step='0.01'
              placeholder="Enter price"
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
