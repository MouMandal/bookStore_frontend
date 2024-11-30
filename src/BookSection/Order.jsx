import React from 'react';
import { useForm } from "react-hook-form"
import { UseAuth } from "../context/AuthContext"
import { useCreateOrderMutation } from '../redux/order/orderApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Order() {

    const { currentUser } = UseAuth();
    const { handleSubmit, register, formState: { errors } } = useForm()

    const [createOrder] = useCreateOrderMutation();

    const onSubmit = async (data) => {
        const newOrder = {

            name: data.name,
            email: currentUser?.email,
            address: data.address,
            phone: data.phone,
            totalPrice: data.totalPrice,
        }
        try {
            await createOrder(newOrder).unwrap();
            toast("Order is successfull");
        } catch (error) {
            console.log(error);
            toast("An error is occured.Please try again");
        }
    };
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold italic mb-10">Purchase Order</h1>

            <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Your Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className="w-full bg-gray-50 placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-400"
                            placeholder="Enter your name"
                            type="text"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Your Email</label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            className="w-full bg-gray-50 placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-400"
                            placeholder="Enter your email"
                            type="email"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input
                            {...register("phone", { required: "Phone number is required" })}
                            className="w-full bg-gray-50 placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-400"
                            placeholder="Enter your phone number"
                            type="tel"
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Address</label>
                        <input
                            {...register("address", { required: "Address is required" })}
                            className="w-full bg-gray-50 placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-400"
                            placeholder="Enter your address"
                            type="text"
                        />
                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Total Amount</label>
                        <input
                            {...register("totalPrice", { required: "Amount is required" })}
                            className="w-full bg-gray-50 placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-gray-500 hover:border-gray-400"
                            placeholder="Enter the amount"
                            type="string"
                        />
                        {errors.totalPrice && <p className="text-red-500">{errors.totalPrice.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                    >
                        Submit Order
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Order;
