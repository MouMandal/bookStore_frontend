import React, { useState } from 'react'
import InputField from './InputField';
import Select from './Select';
import { useForm } from 'react-hook-form'
import { useAddBookMutation } from '../../../redux/features/books/booksApi';
import { toast } from 'react-toastify';

function AddNewBook() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageFile, setimageFile] = useState(null);
  const [imageFileName, setimageFileName] = useState('');
  const [addBook] = useAddBookMutation()

  const onSubmit = async (data) => {
    const newBookData = {
      ...data,
      coverImage: imageFileName
    }
    try {
      await addBook(newBookData).unwrap();
      toast("Book is added");
    } catch (error) {
      console.error(error);
      tost("Failed to add this book. Please try again");
    }
    console.log(data)
  }


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimageFile(file);
      setimageFileName(file.name);
    }
  }


  return (
    <div className="max-w-lg  mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>

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

        {/* Cover Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
          {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">

          <span>Add Book</span>
        </button>
      </form>
    </div>
  )
}

export default AddNewBook