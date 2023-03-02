import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Registration.css';

const Registration = () => {
    const [error, setError] = useState('');
    const { providerSignIn, createUser, updateUserProfile } = useContext(AuthContext);

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
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;

        const name = firstName + ' ' + lastName;

        createUser(email, password)
            .then(result => {
                setError('');
                handleUpdateUserProfile(name)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message))

    }

    // reset user password
    const handleUpdateUserProfile = (name) => {
        const profile = { displayName: name };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
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
                            <form onSubmit={handleSubmit} className="mb-4">
                                <div className="grid grid-cols-2 gap-5">
                                    <input name='firstName' type="text" placeholder="Firstname" className="rounded-sm py-2 px-2" />
                                    <input name='lastName' type="text" placeholder="Lastname" className=" rounded-sm py-2 px-2" />
                                </div>
                                <div className="mt-5">
                                    <input name='email' type="text" placeholder="Email" className="rounded-sm py-2 px-2 w-full" />
                                </div>
                                <div className="mt-5">
                                    <input name='password' type="password" placeholder="Password" className="rounded-sm py-2 px-2 w-full" />
                                </div>

                                <div className="mt-5 flex justify-start  items-center">
                                    <input type="checkbox" className="border mr-2 pt-2 border-gray-400" />
                                    <p className='text-white font-roboto'>
                                        I accept the <Link to='#' className="text-green-400 hover:text-green-500 font-semibold">Terms of Use</Link> &  <Link to='#' className="text-green-400 hover:text-green-500 font-semibold">Privacy Policy</Link>
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <button className="w-full flex justify-center bg-green-500 border-none border-2 hover:bg-white text-white hover:text-black  p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 ">Register Now</button>
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