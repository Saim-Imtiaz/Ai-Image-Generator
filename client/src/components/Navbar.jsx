import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Navbar() {

    const {user, setShowLogin, logout, credit} = useContext(AppContext)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-between py-4'>
            <Link to='/'>
                <img src={assets.logo} alt="Logo" className='w-28 sm:w-32 lg:w-40' />
            </Link>
            <div>
                {
                    user ?
                        <div className='flex items-center gap-2 sm:gap-3'>
                            <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-500'>
                                <img src={assets.credit_star} alt="Credit Icon" className='w-5' />
                                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : {credit}</p>
                            </button>
                            <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
                            <div className="relative">
                                <div
                                    className="w-10 cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                >
                                    <img
                                        src={assets.profile_icon}
                                        className="w-10 drop-shadow"
                                        alt="Profile icon"
                                    />
                                </div>

                                <ul className={`absolute right-0 mt-2 w-28 z-20 bg-white border rounded-md shadow-md text-sm text-gray-800 transition-all duration-200 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>
                                    <li 
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100" 
                                    onClick={async () => {
                                        await logout();
                                        setOpen(false);
                                      }}
                                      >
                                        Log Out
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-2 sm:gap-5 '>
                            <p className='cursor-pointer' onClick={() => navigate('/buy')}>Pricing</p>
                            <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 cursor-pointer text-sm rounded-full'>
                                Login
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar