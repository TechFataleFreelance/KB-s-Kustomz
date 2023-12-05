import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
const paintVideo = useRef(null);

const handleHover = () =>  {
  paintVideo.current.play()
}

  return (
    <div class="h-[85%] w-full flex bg-black">
      <motion.div animate={{opacity:[0,1]}} transition={{duration: 2, delay:0.1}} className="bg-none  w-[50%] h-full flex items-center justify-center">
        <motion.div whileHover={{ scale: 1.02 }} onMouseOver={{handleHover}}  transition={{ duration: 1.3, type: 'spring' }} className="bg-gray-600 hover:bg-gray-400  cursor-pointer  w-[70%] h-[75%] rounded-[20px]">
          <div className="flex items-center justify-center h-[40%]">
            <img src="src/assets/Icons/icons8-paint-sprayer-50.png" className="w-[16%] rounded-lg bg-black p-[15px]"></img>
          </div>

          <h1 className=' font-glacial font-semibold text-[23px] drop-shadow-xl pt-[5px] pb-[5px] text-center bg-black text-white'>Custom Paint</h1>
          <video  autoPlay muted loop className=' rounded-br-[20px] rounded-bl-[20px] bg-blue-300 w-full '>
            <source src='src/assets/Video/Untitled design.mp4' type='video/mp4'/>
          </video>
        </motion.div>
      </motion.div>
      <motion.div animate={{opacity:[0,1]}} transition={{duration: 2, delay:0.1}} className="bg-none w-[50%] h-full flex items-center justify-center">
      <motion.div whileHover={{ scale: 1.02 }} onMouseOver={{handleHover}}  transition={{ duration: 1.3, type: 'spring' }} className="bg-gray-600  hover:bg-gray-400  cursor-pointer  w-[70%] h-[75%] rounded-[20px]">
          <div className="flex items-center justify-center h-[40%]">
            <img src="src/assets/Icons/icons8-car-service-50.png" className="w-[16%] rounded-lg bg-black p-[15px]"></img>
          </div>

          <h1 className=' font-glacial font-semibold text-[23px] drop-shadow-xl pt-[5px] pb-[5px] text-center bg-black text-white'>Body Shop</h1>
          <video  autoPlay muted loop className='rounded-br-[20px] rounded-bl-[20px] bg-blue-300 w-full'>
            <source src='src/assets/Video/BodyShopStockVid.mp4' type='video/mp4'/>
          </video>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Services