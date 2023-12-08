import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div  className='w-full h-[85%] flex bg-gray-800'>
            <motion.div animate={{opacity:[0,1]}} transition={{duration:1, delay:.5}} className='w-[50%] h-full flex items-center justify-center'>
                <img src="src/assets/Images/IMG_0237 copy.jpg" className=' absolute w-[20%] rounded-xl brightness-[115%] border-[5px] border-black left-[5%] top-[19%] rotate-[11deg] ' alt="" />
                <img src="src/assets/Images/IMG_0244.jpg" className=' absolute w-[21%] brightness-[115%] rounded-xl border-[5px] border-black left-[15%] top-[42%] rotate-[-10deg] ' alt="" />
                <img src="src/assets/Images/IMG_0241.jpg" className=' absolute w-[22%] brightness-[115%] rounded-xl border-[5px] border-black left-[5%] top-[67%] rotate-[8deg] ' alt="" />
            </motion.div>
            <motion.div animate={{opacity:[0,1]}} transition={{duration:1, delay:.5}} className='w-[50%]  h-full '>
                <div className="w-[75%] ml-[13.5%] flex items-center justify-center p-8  h-[23%] mt-10 shadow-2xl bg-white rounded-xl ">
                    <p className='font-glacial text-center text-[17px] break-words whitespace-normal'><span className='font-glacialBold'>KB's Kustomz</span> is a shop owned by Kory Brown that is located at 13845 1650 N Ave in Wyanet, IL. This shop offers Custom Paint and Body Shop Services.
                        <br></br>  Wondering what KB's Kustomz can do for you? Call for a <span className=' font-extrabold text-yellow-600'>Free Quote</span> Today! </p>
                </div>
                <div className=' border-[2px] border-b-[0px] p-[35px]  w-full mt-[48px] text-white'>
                    <h1 className='text-center border-b-[2px] text-[25px] font-glacialBold border-white  pb-1 '>Shop Hours</h1>
                    <div className='  h-[25%] w-[full] grid grid-cols-2 grid-rows-7 gap-6'>
                        <div className=' text-center border-white border-r-[2px] text-[17px] pt-3 p-2 font-glacial'><h1>Monday</h1></div>
                        <div className=' text-center border-white  text-[17px] p-2 pt-3 font-glacial'><h1>8am - 5pm</h1></div>
                        <div className=' text-center border-white border-r-[2px] text-[17px] p-2 font-glacial'><h1>Tuesday</h1></div>
                        <div className=' text-center border-white  text-[17px] p-2 font-glacial'><h1>8am - 5pm</h1></div>
                        <div className=' text-center border-white border-r-[2px] text-[17px] p-2 font-glacial'><h1>Wednesday</h1></div>
                        <div className=' text-center border-white  text-[17px] p-2 font-glacial'><h1>8am - 5pm</h1></div>
                        <div className=' text-center border-white border-r-[2px] text-[17px] p-2 font-glacial'><h1>Thursday</h1></div>
                        <div className=' text-center border-white  text-[17px] p-2 font-glacial'><h1>8am - 5pm</h1></div>
                        <div className=' text-center border-white border-r-[2px] text-[17px] p-2 font-glacial'><h1>Friday</h1></div>
                        <div className=' text-center border-white  text-[17px] p-2 font-glacial'><h1>8am - 5pm</h1></div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default About