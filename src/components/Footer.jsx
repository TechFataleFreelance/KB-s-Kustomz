import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="h-[40%] w-full bg-black border-white border-solid border-t-[1px] flex">
            <div className='border-r-[0.5px] border-r-gray-500 w-[50%]'>
                <h1 className=' text-left text-white font-glacial text-[25px] mt-[5%] ml-[5%] tracking-wider'> Navigation</h1>
                <div className='w-full font-glacial  h-[70%] flex flex-col justify-evenly  '>
                    <h2 className='text-white flex items-center underline pl-[5%] hover:bg-gray-700 w-full'><Link path to="/">Home</Link></h2>
                    <h2 className='text-white flex items-center underline pl-[5%] hover:bg-gray-700 w-full'><Link path to="/services">Services</Link></h2>
                    <h2 className='text-white flex items-center underline pl-[5%] hover:bg-gray-700 w-full'><Link path to="/about">About</Link></h2>
                    <h2 className='text-white flex items-center underline pl-[5%] hover:bg-gray-700 w-full'><Link path to="/contact">Contact</Link></h2>
                </div>
            </div>
            <div className='w-[50%]'>
                <h1 className=' text-left text-white font-glacial text-[25px] mt-[5%] ml-[5%] tracking-wider'>Contact Information</h1>
                <div className='w-full font-glacial  h-[70%] flex flex-col justify-evenly  '>
                    <h2 className='text-white flex  items-center font-sans  pl-[5%] w-full md:text-[16px] xs:text-[9.5px]'><span className='font-glacialBold xs:text-[16px] pr-[5px]'>Email:</span>korybrown24@gmail.com</h2>
                    <h2 className='text-white flex items-center pl-[5%] w-full md:text-[16px] xs:text-[13px]'><span className='font-glacialBold xs:text-[16px] pr-[5px]'>Phone Number:</span>815-751-7039</h2>
                    <h2 className='text-white flex items-center md:text-[18px] xs:text-[13px] pl-[5%] w-full'><span className=' xs:text-[16px] font-glacialBold pr-[5px]'>Address:</span>13845 1650 North Ave Wyanet, IL 61379</h2>
                    <h2  className='text-white flex items-center pl-[5%] w-full text-[15px] underline active:text-gray-500'><a target="_blank"  href="https://maps.google.com/maps/dir//County+Rd+1650+N+Illinois/@41.3873341,-89.5954769,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88098ee5b6292f01:0x7097f7c48b058203">Directions</a></h2>
                    <h2  className='text-white flex items-center pl-[5%] w-full text-[15px] underline active:text-gray-500 tracking-wider'><Link path to ="/about" >Shop Hours</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Footer