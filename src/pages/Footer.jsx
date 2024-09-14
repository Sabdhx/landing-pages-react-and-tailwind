import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiThreadsLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <>
    <div className='bg-black h-[40vh] flex justify-center text-white gap-[15%]  py-[6%]'> 
    <div className=''>
    <h1 className='my-3 font-merriweather '>Company</h1>
    <h1 className='my-3 mt-10'>Catagories</h1>
    <h1 className='my-3'>Blogs</h1>
    <h1 className='my-3'>Testemonials</h1>
    <h1 className='my-3'>Jobs</h1>
    </div>
    <div className=''>
    <h1 className='my-3 font-merriweather '>Help</h1>
    <h1 className='my-3 mt-10'>Catagories</h1>
    <h1 className='my-3'>Blogs</h1>
    <h1 className='my-3'>Testemonials</h1>
    <h1 className='my-3'>Jobs</h1>
    </div>
    <div className=''>
    <h1 className='my-3 font-merriweather '>Resources</h1>
    <h1 className='my-3 mt-10'>Catagories</h1>
    <h1 className='my-3'>Blogs</h1>
    <h1 className='my-3'>Testemonials</h1>
    <h1 className='my-3'>Jobs</h1>
    </div>
    <div className=''>
    <h1 className='my-3 font-merriweather '>Company</h1>
    <h1 className='my-3 mt-10'>Catagories</h1>
    <h1 className='my-3'>Blogs</h1>
    <h1 className='my-3'>Testemonials</h1>
    <h1 className='my-3'>Jobs</h1>
    </div>
      
    </div>
    <div className='text-white bg-black'>
   <hr className='mx-[10%] bg-black text-white'/>

    </div>
    <div className='text-white font-bold bg-black flex justify-between px-[9%] pt-10 pb-[1%]'>
       <h1>Find Jobs</h1>
       <h1>© Copyright 2024, All Rights Reserved by Findjobs</h1>
       <div className='flex justify-center'>
        <h1><FaFacebook /></h1>
        <h1><AiFillTwitterCircle /></h1>
        <h1><FaInstagram /></h1>
        <h1><PiThreadsLogoFill /></h1>
       </div>
    </div>
    </>
  )
}

export default Footer