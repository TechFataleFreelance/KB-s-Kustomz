import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const Services = () => {
  const paintVideo = useRef(null);

  const handleHover = () => {
    paintVideo.current.play()
  }

  return (
    <div class="h-[85%] w-full flex bg-black">
    <div className='absolute w-full text-center sm:mt-0 xs:mt-[10%]' > <Link smooth to="/#gallery" > <button class="w-[45%]  bg-black text-white border-white border-2 hover:bg-white hover:bg-opacity-70 hover:text-black transition-all  font-glacial   p-1">Go to Gallery</button></Link></div>
     
      <button className='fixed bg-white sm:w-full xs:w-[175px] sm:rounded-none xs:rounded-lg font-glacial bg-opacity-[85%] active:text-yellow-500 hover:bg-opacity-100 hover:font-glacialBold transition-all sm:right-0 sm:left-0 xs:left-[-3px] sm:bottom-0 xs:bottom-[25px] tracking-wider'><a href="tel: 815-751-7039">Call for a <span className='text-green-800'>Free</span> Quote</a></button>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 2, delay: 0.1 }} className="bg-none xs:p-3 w-[50%] h-full lg:p-0 flex items-center justify-center">
        <motion.div whileHover={{ scale: 1.02 }} onMouseOver={{ handleHover }} transition={{ duration: 1.3, type: 'spring' }} className="border-solid border-white border-[2px] bg-gray-600   cursor-pointer  w-[480px] sm:h-[530px] rounded-none ">

          <div className="flex items-center justify-center h-[210px]">
            <img src="/icons/icons8-paint-sprayer-50.png" className="w-[75px] rounded-lg bg-black p-[15px]"></img>

          </div>

          <h1 className=' font-glacial  font-semibold text-[23px] drop-shadow-xl pt-[5px] pb-[5px] text-center bg-black text-white'>Custom Paint</h1>
          <div className="">
            <video autoPlay muted loop className=' '>
              <source src='/Video/Untitled design.mp4' type='video/mp4' />

            </video>
        
          </div>


        </motion.div>

      </motion.div>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 2, delay: 0.1 }} className=" bg-none xs:p-3 sm:p-0 w-[50%] h-full flex items-center justify-center">
        <motion.div whileHover={{ scale: 1.02 }} onMouseOver={{ handleHover }} transition={{ duration: 1.3, type: 'spring' }} className="border-solid border-white border-[2px] bg-gray-600    cursor-pointer  w-[480px] sm:h-[530px] rounded-none">
          <div className="flex items-center justify-center h-[210px]">
            <img src="/icons/icons8-car-service-50.png" className=" w-[75px] rounded-lg bg-black p-[15px]"></img>
          </div>

          <h1 className=' font-glacial font-semibold text-[23px] drop-shadow-xl pt-[5px] pb-[5px] text-center bg-black text-white'>Body Shop</h1>
          <video autoPlay muted loop className=" ">
            <source src='/Video/BodyShopStockVid.mp4' type='video/mp4' />
          </video>


        </motion.div>
      </motion.div>
    </div>
  )
}

export default Services