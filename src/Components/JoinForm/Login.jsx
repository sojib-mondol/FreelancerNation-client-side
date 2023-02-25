import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { providerSignIn, signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        providerSignIn(provider)
            .then(result => {
                const user = result.user;
                setError('');
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(err => setError(err.message))
    }

    return (
        <div>
            <div className="bg-no-repeat bg-cover bg-center relative   "

                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)` }}  >

                <div className="absolute bg-gradient-to-b md:from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col  text-white">

                            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back Aji </h1>
                            <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                                and publishing industries for previewing layouts and visual mockups</p>
                        </div>
                    </div>

                    {/* form  */}
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100">
                            <form onSubmit={handleSubmit} className='mb-4'>
                                <div className="mb-4">
                                    <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                                    <p className="text-gray-500">Please sign in to your account.</p>
                                </div>
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                        <input name='email' className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                            Password
                                        </label>
                                        <input name='password' className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="text-sm">
                                            <a href="/" className="text-green-400 hover:text-green-500">
                                                Forgot your password?
                                            </a>
                                        </div>

                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                            Sign in
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <Link to='/registration'>Didn't have any account? <span className='font-bold underline'>Register</span></Link>
                            <div>
                                <p className='text-red-500'>{error}</p>
                            </div>
                            <div className='mt-4'>
                                <button onClick={handleGoogleSignIn} className="w-full flex justify-center bg-black border-solid border-2 hover:bg-white text-white hover:text-black p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
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

export default Login;