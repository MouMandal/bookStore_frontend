import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <>
            <h1 className='text-center text-4xl font-sans mt-10 text-green-400'>Welcome To Admin Dashboard</h1>
            <div className="flex flex-col md:flex-row items-start justify-center -mb-3 mt-10">
                <Link to="/dashboard/manage-book" className="inline-flex px-5 py-3 text-green-400 hover:text-green-400 focus:text-green-400 hover:bg-purple-100 focus:bg-purple-100 border border-green-400 rounded-md mb-3">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Manage Books
                </Link>
                <Link to="/dashboard/add-new-book" className="inline-flex px-5 py-3 text-white bg-green-400 hover:bg-green-300 focus:bg-green-400 rounded-md mb-3 sm:ml-10 ">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add New Book
                </Link>
            </div>
            <Outlet />
        </>
    )
}
