import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='w-full sm:h-[85%] xs:h-[85%]  flex bg-gray-800'>
            <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, delay: .5 }} className='w-[50%] sm:block xs:hidden h-full flex items-center justify-center'>
                <img src="/images/IMG_0237 copy.jpg" className=' absolute lg:w-[300px] sm:w-[295px]  xs:w-[160px] rounded-xl brightness-[115%] border-[5px] border-black left-[5%] sm:top-[19%] xs:top-[35%] rotate-[11deg] ' alt="" />
                <img src="/images/IMG_0244.jpg" className=' absolute lg:w-[320px] sm:w-[290px] xs:w-[170px] brightness-[115%] rounded-xl border-[5px] border-black lg:left-[15%] sm:top-[42%] xs:top-[50%] rotate-[-10deg] ' alt="" />
                <img src="/images/IMG_0241.jpg" className=' absolute lg:w-[310px] sm:w-[280px] xs:w-[165px] brightness-[115%] rounded-xl border-[5px] border-black left-[5%] sm:top-[66%] xs:top-[67%] rotate-[8deg] ' alt="" />
            </motion.div>
            <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, delay: .5 }} className='sm:w-[50%] flex justify-center  h-full '>
                <div className="sm:w-[75%] xs:w-[90%]  flex items-center justify-center p-8   h-[23%] sm:mt-20 xs:mt-[10%] shadow-2xl bg-white rounded-xl ">
                    <p className='font-glacial text-center xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[10px] xs:text-[12px] sm:p-1 xs:p-2 break-words whitespace-normal'><span className='font-glacialBold'>KB's Kustomz</span> is a shop owned by Kory Brown that is located at 13845 1650 N Ave in Wyanet, IL. This shop offers Custom Paint and Body Shop Services.
                        <br></br>  Wondering what KB's Kustomz can do for you? Call for a <span className=' font-extrabold text-yellow-600'>Free Quote</span> Today! </p>
                </div>
                <div className='absolute bottom-[0] sm:right-0 xs:right-[5%] border-[2px] border-b-[0px] sm:p-[0px] xs:p-0 sm:w-[50%] xs:w-[90%] sm:mt-[0px] xs:mt-[0px] text-white'>
                    <h1 className='text-center border-b-[2px] text-[25px] font-glacialBold border-white  pb-1 '>Shop Hours</h1>
                    <div className='  h-[24%] sm:text-[17px] xs:text-[15px]  grid grid-cols-2 grid-rows-7 sm:border-none xs:border-b-[2px] xs:border-solid border-white gap-6'>
                        <div className=' justify-center border-white border-r-[2px] pt-3 p-2 flex items-center font-glacial'><h1>Monday</h1></div>
                        <div className=' text-center border-white  p-2 pt-3 font-glacial'><h1>8am - 5pm</h1></div>
                        <div className=' justify-center border-white border-r-[2px] p-2 flex items-center font-glacial'><h1>Tuesday</h1></div>
                        <div className=' text-center border-white  p-2 font-glacial'><h1>8am - 5pm</h1></div>
                        <div className=' justify-center border-white border-r-[2px] flex items-center  '><h1>Wednesday</h1></div>
                        <div className=' text-center border-white  p-2 font-glacial'><h1>8am - 5pm</h1></div>
                        <div className=' justify-center border-white border-r-[2px] p-2  font-glacial flex items-center'><h1>Thursday</h1></div>
                        <div className=' text-center border-white  p-2 font-glacial'><h1>8am - 5pm</h1></div>
                        <div className=' justify-center border-white border-r-[2px] p-2 font-glacial flex items-center'><h1>Friday</h1></div>
                        <div className=' text-center border-white  p-2 font-glacial'><h1>8am - 5pm</h1></div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default About