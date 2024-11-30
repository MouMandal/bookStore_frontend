import React from 'react';
import { getImg } from '../utils/getImage';
import { useFetchBookIdQuery } from '../redux/features/books/booksApi';
import { Link, useParams } from 'react-router-dom';
import { UseAuth } from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SingleBook() {
    const { id } = useParams();
    const { data: books, isLoading } = useFetchBookIdQuery(id);
    const { currentUser, loggedIn } = UseAuth();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!books) {
        return <p>There was an error loading the book details.</p>;
    }



    const showAlerts = () => {
        toast("Login first");
    }




    return (
        <>
            <div className="max-w-xl mt-32 shadow-2xl p-5 gap-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-2xl font-bold mb-6">{books.title}</h1>


                <div>
                    <img
                        src={getImg(books.coverImage)}
                        alt={books.title}
                        className="mb-8 h-50 w-40"
                    />
                </div>

                <div className="mb-5">
                    <p className="text-gray-700 mb-2"><strong>Author:</strong> {books.author || 'admin'}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {new Date(books.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {books.category}
                    </p>

                    <p className="text-gray-700 mb-4"><strong>Description:</strong> {books.description}</p>
                    <p className="text-gray-700"><strong>new price : </strong>  $ {books.newPrice}</p>


                    {!currentUser ? (
                       <button className='mt-8 px-10 py-4 cursor-pointer bg-yellow-500 rounded-sm font-bold' onClick={showAlerts}>Order Now</button>
                    ) :
                        <Link to="/orders"><button className='mt-8 px-10 py-4 cursor-pointer bg-yellow-500 rounded-sm font-bold'>Order Now</button></Link>}

                </div>

            </div>


        </>
    )


}

export default SingleBook;
