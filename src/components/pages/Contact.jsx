import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.div className="w-full flex  h-[85%] bg-black">
            <div className='w-[50%] h-full flex  flex-col items-center justify-center  text-[70px] font-glacial text-white'>
                <div className='text-left'>
                    <h1>Contact</h1>
                    <h1>KB's Kustomz</h1>
                </div>

            </div>
            <div className='flex items-center justify-center text-white text-[25px] font-glacial w-[50%] h-full '>
                <div className='bg-gray-800 p-10 rounded-sm w-[75%]'>
                    <h1>Phone Number: <br></br> <span className='text-gray-400'>815-751-7039</span> </h1>
                    <br></br>
                    <h1>Email: <br></br> <span className='text-gray-400 font-sans text-[22px]'>korybrown24@gmail.com</span> </h1>
                    <br></br>
                    <h1>Address: <br></br> <span className='text-gray-400'>13845 1650 North Ave Wyanet, IL 61379</span> </h1>
                    <a target="_blank" href="https://maps.google.com/maps/dir//County+Rd+1650+N+Illinois/@41.3873341,-89.5954769,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88098ee5b6292f01:0x7097f7c48b058203"><span className='text-gray-400 text-[18px] underline'>Directions</span></a>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact