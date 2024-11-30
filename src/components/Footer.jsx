import React from 'react'
import { GiBookCover } from "react-icons/gi";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";



function Footer() {
    return (
        <>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-10 lg:p-12 bg-black text-white mt-8'>

                {/* Gitanjali Book Store Section */}
                <div className='text-center md:text-left'>
                    <div className='flex justify-center md:justify-start items-center gap-2 text-4xl'>
                        <GiBookCover />
                    </div>
                    <h2 className='text-lg font-bold mt-4'>Gitanjali Book Store</h2>
                    <p className='text-sm mt-2'>India's No. 1 Book Store</p>
                    <div className='flex justify-center md:justify-start space-x-4 mt-6 text-2xl'>
                        <FaFacebook />
                        <FaInstagramSquare />
                        <FaLinkedin />
                        <FaTwitterSquare />
                    </div>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h2 className='text-lg font-bold mb-4 text-center md:text-left'>Quick Links</h2>
                    <ul className='space-y-2 text-center md:text-left'>
                        <li>Home</li>
                        <li>Books</li>
                        <li>Pricing</li>
                        <li>Authors</li>
                        <li>About</li>
                        <li>Resources</li>
                    </ul>
                </div>

                {/* Support Section */}
                <div>
                    <h2 className='text-lg font-bold mb-4 text-center md:text-left'>Support</h2>
                    <ul className='space-y-2 text-center md:text-left'>
                        <li>Order Track</li>
                        <li>Contact Us</li>
                        <li>Find My Product</li>
                        <li>Guide</li>
                        <li>FAQ</li>
                        <li>FAQ - Happy Return</li>
                        <li>Help Desk</li>
                        <li>Writer/Publisher Request</li>
                    </ul>
                </div>

                {/* Policies Section */}
                <div>
                    <h2 className='text-lg font-bold mb-4 text-center md:text-left'>Policies</h2>
                    <ul className='space-y-2 text-center md:text-left'>
                        <li>Term of Use</li>
                        <li>Privacy Policy</li>
                        <li>Happy Return</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>

            </div>


        </>
    )
}

export default Footer