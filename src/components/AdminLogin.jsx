import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import getbaseUrl from '../utils/baseUrl';
import { toast } from 'react-toastify';

function AdminLogin() {


    const [message, setMessage] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();


    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${getbaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const auth = response.data;

            if (auth.token) {
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token');
                    toast("Token has been expired! Please login");
                    navigate('/');
                }, 24 * 3600)
            }
            toast("Admin login successful");
            navigate('/dashboard');

        } catch (error) {
            setMessage("Wrong username and password!");
            console.log(error)
        }

    };

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="w-full max-w-sm mx-auto bg-white shadow-emerald-800 rounded px-8 pt-6 pb-8 mb-4 border-2 box-border">

                    <h2 className='text-xl font-semibold mb-4 text-center'>Admin Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <label className='block text-black text-sm font-bold mb-2' htmlFor=" username">
                                Username
                            </label>
                            <input
                                {...register("username", { required: true })}
                                type='text' name='username' id=' username' placeholder='Enter  username' className='shadow-appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow ' />
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
                            {message && <p className='text-red-500 text-xs mt-2'>{message}</p>}
                        </div>
                        <div>
                            <button className='font-mono px-6 py-2 focus-outline-none bg-black w-full text-white rounded mt-4'>Login</button>
                        </div>

                    </form>
                </div>
            </div>




        </>
    )
}

export default AdminLogin