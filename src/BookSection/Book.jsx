import React from 'react'
import { useEffect, useState } from 'react'
import { getImg } from '../utils/getImage';
import { useFetchAllBooksQuery } from '../redux/features/books/booksApi';
import { Link } from 'react-router-dom';


function Book() {


    const { data: books = [] } = useFetchAllBooksQuery();


    return (
        <><div className="">


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-auto px-4 '>

                {books.slice(10, 25).map((book, index) => (
                    <Link to={`/books/${book._id}`} key={book._id}>
                        <div key={index} className='bg-lime-100 shadow-emerald-400 rounded-lg overflow-hidden mt-4 cursor-pointer'>
                            <img src={`${getImg(book.coverImage)}`} className="w-full h-60 object-cover hover:scale-125" />
                            <div className='mt-8'>
                                <h3 className='text-lg font-semibold'>{book && book.title.length > 20 ? ` ${book.title.slice(0.30)}...` : book?.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {book && book.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}
                                </p>




                                <p className='mb-5 text-gray-800 mt-3'>${book?.newPrice}<span className="line-through font-normmal ml-2">${book?.oldPrice}</span>

                                </p>



                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div></>
    )
}

export default Book