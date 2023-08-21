import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='h-16 bg-opacity-30 bg-green-600 sticky top-0 flex'>
            <div className='h-full w-52 text-white flex items-center text-2xl pl-5'>JK</div>
            <div className='w-full  flex justify-end items-end flex-auto '>
                <Link to="/application" className='w-60 text-center flex justify-center items-center text-white hover:text-green-900 transition-all duration-200'>Create Your Keypad</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
