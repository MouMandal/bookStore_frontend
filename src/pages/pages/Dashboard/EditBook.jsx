import React, { useEffect, useState } from 'react'
import InputField from './InputField';
import Select from './Select';
import { useForm } from 'react-hook-form'
import { useFetchBookIdQuery, useUpdateBookMutation } from '../../../redux/features/books/booksApi';
import { useParams } from 'react-router-dom';
import getbaseUrl from '../../../utils/baseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';


const EditBook = () => {
    const { id } = useParams();
    const { data: bookData } = useFetchBookIdQuery(id);
    const [updateBook] = useUpdateBookMutation();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [imageFile, setImageFile] = useState(null);
    const [imageFileName, setImageFileName] = useState('');

    useEffect(() => {
        if (bookData) {
            setValue('title', bookData.title);
            setValue('description', bookData.description);
            setValue('category', bookData.category);
            setValue('oldPrice', bookData.oldPrice);
            setValue('newPrice', bookData.newPrice);

        }
    }, [bookData, setValue])

    const onSubmit = async (data) => {
        const updateBookData = {
            title: data.title,
            description: data.description,
            category: data.category,
            oldPrice: Number(data.oldPrice),
            newPrice: Number(data.newPrice),

        };
        try {
            await axios.put(`${getbaseUrl()}/api/books/update/${id}`, updateBookData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })

            toast("Book is updated successfully");

        } catch (error) {
            console.log("Failed the update the book");
            toast("Failed to update the book");
        }
    }


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileName(file.name);
        }
    }

    return (
        <div className="max-w-lg  mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit The Book</h2>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Reusable Input Field for Title */}
                <InputField
                    label="Title"
                    name="title"
                    placeholder="Enter book title"
                    register={register}
                />

                {/* Reusable Textarea for Description */}
                <InputField
                    label="Description"
                    name="description"
                    placeholder="Enter book description"
                    type="textarea"
                    register={register}

                />

                {/* Reusable Select Field for Category */}
                <Select
                    label="Category"
                    name="category"
                    options={[
                        { value: '', label: 'Choose A Category' },
                        { value: 'business', label: 'Business' },
                        { value: 'technology', label: 'Technology' },
                        { value: 'fiction', label: 'Fiction' },
                        { value: 'horror', label: 'Horror' },
                        { value: 'adventure', label: 'Adventure' },
                        { value: 'marketing', label: 'Marketing' },
                        { value: 'story', label: 'Story' },
                        // Add more options as needed
                    ]}
                    register={register}
                />

                {/* Trending Checkbox */}
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            {...register('trending')}
                            className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
                    </label>
                </div>

                {/* Old Price */}
                <InputField
                    label="Old Price"
                    name="oldPrice"
                    type="number"
                    placeholder="Old Price"
                    register={register}

                />

                {/* New Price */}
                <InputField
                    label="New Price"
                    name="newPrice"
                    type="number"
                    placeholder="New Price"
                    register={register}

                />


                {/* Submit Button */}
                <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-bold rounded-md">

                    <span>Edit Book</span>
                </button>
            </form>
        </div>
    )

}

export default EditBook