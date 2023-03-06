import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import LoginSkeleton from '../Shared/Skeleton/LoginSkeleton';
import './Registration.css';

const Registration = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const { providerSignIn, createUser, updateUserProfile } = useContext(AuthContext);
    const [isDisabled, setIsDisabled] = useState(false);

    const imageHostKey = process.env.REACT_APP_IMGBB_key;

    const navigate = useNavigate();


    // reload page
    function handleButtonClick() {
        window.location.reload();
    }

    // google login system-----------
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        providerSignIn(provider)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    image: user?.photoURL,
                    sellerAccount: false,
                }

                fetch(`https://freelancer-nation-backend.vercel.app/buyerData`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        toast.success("Login successful");
                        setError('');
                        navigate('/');
                        handleButtonClick();

                    })



            })
            .catch(err => setError(err.message))
    }





    // user sign up---------
    const handleSignUp = data => {

        createUser(data.email, data.password)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                setError('');



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


                            const fullName = data?.firstName + data?.lastName

                            //user update---------
                            const profile = { displayName: fullName, photoURL: imgData.data.display_url }

                            updateUserProfile(profile)
                                .then(() => {
                                    // save data -------------
                                    saveUser(fullName, data.email, data.seller, imgData.data.display_url)

                                })
                                .catch(err => console.log(err));
                        }

                    })
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
                setLoading(false);
            })
    };


    // //save user --------
    const saveUser = (fullName, email, seller, photoURL) => {
        const user = {
            name: fullName,
            email,
            sellerAccount: seller,
            image: photoURL
        }

        fetch(`https://freelancer-nation-backend.vercel.app/users`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("save user", data);

                toast.success("Login successful!!! ");
                setError('');
                navigate('/')


            })

    };









    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000)

    if (loading) {
        return <LoginSkeleton></LoginSkeleton>
    }



    return (
        <div className='regi-background'>
            <div className="py-10" >
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row w-10/12 lg:w-10/12 backdrop-blur-md bg-white/30  rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" >
                            <h1 className="text-white mb-3 font-bold text-5xl">Welcome</h1>
                            <div>
                                <p className="text-white text-center">Onboard to FreelanceNation. You are just one step away from experiencing out world class services.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-16 px-12">
                            <h2 className="mb-4 font-semibold text-2xl text-gray-100">Register</h2>
                            <p className="mb-4 text-white">
                                Create your account. It’s free and only take a minute
                            </p>
                            <form onSubmit={handleSubmit(handleSignUp)} className="mb-4">
                                <div className="grid grid-cols-2 gap-5">

                                    <input name='firstName' type="text"
                                        {...register('firstName', {
                                            required: true
                                        })}
                                        placeholder="FirstName" className="rounded-sm py-2 px-2" />

                                    <input name='lastName' type="text"
                                        {...register('lastName', {
                                            required: true
                                        })}
                                        placeholder="LastName" className=" rounded-sm py-2 px-2" />
                                </div>

                                <div className="mt-5">
                                    <input name='email' type="text"
                                        {...register('email', {
                                            required: true
                                        })}
                                        placeholder="Email" className="rounded-sm py-2 px-2 w-full" />
                                </div>

                                <div className="mt-5">
                                    <input name='password' type="password"
                                        {...register('password', {
                                            required: true
                                        })}
                                        placeholder="Password" className="rounded-sm py-2 px-2 w-full" />
                                </div>



                                <div className="grid grid-cols-2 gap-5 mt-4">
                                    <label htmlFor="pic" className='mt-3'>
                                        <span className='text-white p-3 border   rounded-md cursor-pointer'>Upload Your Image</span>
                                        <input type="file" id='pic'
                                            {...register('image', {
                                                required: true
                                            })}
                                            className="hidden file-input file-input-sm file-input-success file-input-bordered  w-full max-w-xs"
                                            placeholder="Your photo"
                                        />
                                    </label>

                                    <div className="form-control w-full max-w-x">
                                        <div className="form-control border rounded-md">
                                            <label className="label cursor-pointer">
                                                <span className="label-text text-white">Seller Account</span>
                                                <input type="checkbox" {...register('seller')}
                                                    className="toggle toggle-success" />
                                            </label>
                                        </div>
                                    </div>
                                </div>



                                <div className="mt-5 flex justify-start  items-center">
                                    <input onClick={() => setIsDisabled(true)} type="checkbox" className="border mr-2 pt-2 border-gray-400" />
                                    <p className='text-white font-roboto'>
                                        I accept the <Link to='#' className="text-green-400 hover:text-green-500 font-semibold">Terms of Use</Link> &  <Link to='#' className="text-green-400 hover:text-green-500 font-semibold">Privacy Policy</Link>
                                    </p>
                                </div>
                                <div className="mt-5">

                                    {
                                        isDisabled === false ?

                                            <button className="w-full flex justify-center bg-green-500 border-none border-2 hover:bg-white text-white hover:text-black  p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 " disabled>Register Now</button>
                                            :
                                            <button className="w-full flex justify-center bg-green-500 border-none border-2 hover:bg-white text-white hover:text-black  p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 ">Register Now</button>
                                    }
                                    <div>
                                        <p className='mt-2 text-center text-red-500 bg-white rounded-md'>{error}</p>
                                    </div>
                                </div>

                            </form>


                            <Link to='/login' className='text-white font-roboto'>Already have an account? <span className='font-bold underline text-green-400'> Login</span></Link>

                            <div className='mt-4'>
                                <button onClick={handleGoogleSignIn} className="w-full flex justify-center bg-green-500 border-none border-2 hover:bg-white text-white hover:text-black p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;