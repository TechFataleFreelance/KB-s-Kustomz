import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <motion.div className="w-full flex  h-[85%] bg-black">
            <div className='w-[50%] h-full flex  flex-col items-center justify-center  lg:text-[70px] md:text-[55px] sm:text-[40px] xs:text-[28px] font-glacial text-white'>
                <div className='text-left'>
                    <h1>Contact</h1>
                    <h1>KB's Kustomz</h1>
                </div>

            </div>
            <div className='flex items-center justify-center text-white text-[25px] font-glacial w-[50%] sm:h-full h-full '>
                <div className='bg-gray-800 p-10 rounded-sm sm:w-[75%] xs:w-[89%] '>
                    <h1 className='md:text-[25px] sm:text-[15px] xs:text-[18px]'>Phone Number: <br></br> <span className='text-gray-400 md:text-[25px] sm:text-[15px] xs:text-[15px]'>815-751-7039</span></h1>
                    <br></br>
                    <h1 className='md:text-[25px] sm:text-[16px] xs:text-[18px]'>Email: <br></br> <span className='text-gray-400 font-sans md:text-[25px] sm:text-[16px] xs:text-[10px]'>korybrown24@gmail.com</span> </h1>
                    <br></br>
                    <h1 className='md:text-[25px] sm:text-[18px] xs:text-[18px]'>Address: <br></br> <span className='text-gray-400 md:text-[25px] sm:text-[18px] xs:text-[14px]' >13845 1650 North Ave Wyanet, IL 61379</span> </h1>
                    <a target="_blank" href="https://maps.app.goo.gl/1dE6g77TESzYCTZu6"><span className='text-gray-400 text-[18px] underline'>Directions</span></a>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact