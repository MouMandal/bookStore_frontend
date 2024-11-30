import React from 'react'
import store from "../../assets/logos/store.png"
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <>
            <div className='flex flex-col md:flex-row-reverse px-2 justify-between items-center gap-12'>

                <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                    <img src={store} className='h-72 md:mr-16 cursor-pointer ' />
                </div>


                <div className='md:w-1/2 w-full'>
                    <h1 className='md:text-3xl text-2xl font-medium mb-7 mt-0 md:ml-7 '>"Welcome to Gitanjali Book Store – A World of Stories, Poetry, and Dreams."</h1>
                    <p className='mb-10  md:ml-7'>A framed quote from Rabindranath Tagore's "Gitanjali," such as: "Where the mind is without fear and the head is held high...into that heaven of freedom, my Father, let my country awake." Soft lighting with books displayed artistically around. Perhaps a small fountain or greenery to create a peaceful reading space.</p>
                    <button className="border border-amber-500 hover:bg-amber-400 text-black px-4 py-2 font-bold  md:ml-7 ">
                        <Link to="/book">Get Started</Link>
                       
                    </button>
                </div>

            </div>
        </>
    )
}

export default Banner