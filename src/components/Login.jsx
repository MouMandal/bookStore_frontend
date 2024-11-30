import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { UseAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

    const [message, setMessage] = useState("");
    const { loginUser, googleSigning } = UseAuth() || {};
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            toast("User login succeeded");
            navigate("/");
        } catch (error) {
            setMessage("Wrong email and password!");
            console.log(error)
        }

    };

    //google login
    const googleSign = async () => {
        
        try {
            await googleSigning();
            toast("Google sign in succeeded")
            navigate("/");
        } catch (error) {
            toast("Google signin is failed");
            console.log(error);
        }
    }



    return (
        <div className="h-[calc(100h-120h)] flex justify-center items-center ">
            <div className="w-full max-w-sm mx-auto bg-white shadow-emerald-800 rounded px-8 pt-6 pb-8 mb-4 border-2 box-border">

                <h2 className='text-xl font-semibold mb-4 text-center'>Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type='email' name='email' id='email' placeholder='Email Address' className='shadow-appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow ' />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-black text-sm font-bold mb-2' htmlFor="email">
                            Password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type='password' name='password' id='password' placeholder='Password' className='shadow-appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow ' />
                    </div>
                    <div>
                        <button className='font-mono px-6 py-2 focus-outline-none bg-black text-white rounded'>Login</button>
                    </div>

                </form>
                <p className="align-baseline mt-4 text-sm font-thin">
                    Haven't an account? please <Link to="/register" className='font-medium text-black'>Register</Link>
                </p>


                <div>
                    {message && <p className='text-red-500 text-xs mt-2'>{message}</p>}
                </div>


                <div className="mt-4">
                    <button className="w-full flex flex-wrap gap-1 items-center justify-center focus:outline-none bg-black text-white font-bold py-2 px-4 rounded" onClick={googleSign}>
                        <FaGoogle className='mr-2' />
                        sign in with Google
                    </button>

                </div>
                <p className="mt-5 text-center text-gray-500 text-sm">GitanJali Book Store. All rights reserved</p>
            </div>
        </div>
    )
}

export default Login