import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/others/Navbar'

function Home() {
  return (
    <>
      <Navbar/>
      <div className='bg-white h-[91%] flex justify-center items-center w-full flex-col'>
          <h1 className='h-fit w-fit text-[50px] font-bold'>Build your <span className='text-green-600'>Design</span> with US</h1>
          <h1 className='h-fit w-fit tracking-[5.2px]'>We build custom home and offices digital Design</h1>
          <Link className='w-[200px] py-3 h-fit border flex justify-center items-center text-lg my-3 rounded-md border-green-500 text-green-500 hover:bg-green-500 hover:text-white' to={"/application"}>Let's Build</Link>
      </div>
    </>
  )
}

export default Home
