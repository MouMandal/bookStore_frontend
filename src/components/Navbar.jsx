import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import BookLogo from "../assets/logos/BookLogo.png"
import { RiShoppingBag4Fill } from "react-icons/ri";
import { UseAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';



const navigation = [
    { name: "Dashboard", href: "/admin" },
    { name: "Orders", href: "/orders" },

]
export const Navbar = () => {


    const [isDropDown, setDropDown] = useState(false);

    const { currentUser, logOut } = UseAuth() || {};

    const navigate = useNavigate();

    /*handleAlert*/
    const showAlerts = () => {
        toast("Please login first")
    };



    //logout
    const handleLogout = async () => {
        try {
            await logOut();
            toast("logout successfully");
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <header className='max-w-screen-2xl mx-auto px-5 ' >

                <nav className='flex justify-between items-center sm:my-3 '>

                    {/* left Side */}
                    <div className='flex items-center md:gap-14'>
                        <img src={BookLogo} className=" max-w-32 cursor-pointer" />


                        <div className='flex items-center md:gap-14 gap-4 '>
                            <Link to="/" className='cursor-pointer  text-2xl font-bold'>Home</Link>
                            <Link to="/book" className='cursor-pointer  text-2xl font-bold'>Books</Link>
                            <div>
                                {
                                    currentUser ?
                                        <>
                                            <button onClick={() => setDropDown(!isDropDown)}>
                                                <span className='cursor-pointer  text-xl font-bolder flex items-center justify-center md:gap-1'>Shopping<RiShoppingBag4Fill /></span>
                                            </button>

                                            {/* show dropdown */}
                                            {isDropDown && (
                                                <div className='absolute font-thin mt-2 w-44 bg-white shadow-lg rounded-lg z-40'>
                                                    <ul className='py-2'>
                                                        {
                                                            navigation.map((item) => (
                                                                <li key={item.name} onClick={() => setDropDown(false)}>
                                                                    <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                                        {item.name}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            )}
                                        </> :


                                        <div>
                                            <div>
                                                <button onClick={showAlerts} className='cursor-pointer  text-xl font-bolder flex items-center justify-center md:gap-1'>Shopping<RiShoppingBag4Fill /></button>
                                            </div>
                                        </div>
                                }
                            </div>

                        </div>
                    </div>


                    {/* right side */}
                    <div className='flex items-center md:gap-14 gap-4  md:mr-7'>
                        {!currentUser ? (
                            <button className="border border-amber-400 text-black px-4 py-2 w-full md:w-auto font-bold">

                                <Link to="/login"> Log in</Link>
                            </button>
                        ) : (<button className="border border-amber-400 text-black px-4 py-2 w-full md:w-auto font-bold" onClick={handleLogout}>
                            Log out
                        </button>

                        )}


                    </div>

                </nav>
            </header>
            
        </>


    )
}
