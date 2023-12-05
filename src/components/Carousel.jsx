import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Carousel = (props) => {
  const carousel = useRef()
  const slideShow = useRef()
  const [carouselDisplay, setCarouseldisplay] = useState()

  const handleLeft = () => {
    carousel.current.scrollLeft -= 800
  }

  const handleRight = () => {
    carousel.current.scrollLeft += 800
  }



  return (
    <motion.div animate={props.aniamtion} ref={slideShow} style={{display:props.display}}>
    <img onClick={props.onXout}  src="src/assets/Icons/icons8-x-64 (1).png" alt="" class="absolute right-[16.8%] w-[2.4%] cursor-pointer hover:scale-110 transition-all hover:bg-red-600 active:scale-100  bg-white rounded-[100px] p-2 mt-[8.8%] z-[5]" />
      <img onClick={handleLeft} src="src/assets/Icons/icons8-arrow-64.png" className="hover:scale-110 hover:shadow-sm active:shadow-none active:scale-100 hover:shadow-black rounded-[100px] transition-all cursor-pointer absolute z-[9] w-[7%] mt-[22%] left-[15.5%] rotate-180 " alt="" />
      <img onClick={handleRight} src="src/assets/Icons/icons8-arrow-64.png" className="hover:scale-110 hover:shadow-sm active:shadow-none active:scale-100 hover:shadow-black rounded-[100px] transition-all cursor-pointer absolute z-[9] w-[7%] mt-[22%] right-[17.5%]" alt="" />
      <div ref={carousel} className="absolute mt-[8%] z-[2] ml-[14%] w-[70%] h-[60%] snap-x snap-mandatory  overflow-x-auto overflow-y-visible no-scrollbar bg-gray-800 drop-shadow-2xl whitespace-nowrap">
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0170.JPG')] snap-center brightness-[120%] bg-center bg-contain bg-no-repeat h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0172.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0244.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0245.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0239.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0224.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0174.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0169.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0234.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0238.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0175.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0176.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0179.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0241.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0178.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0188.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0177.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0186.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>
        <img className="w-[100%] bg-[url('src/assets/Images/IMG_0223.jpg')] brightness-[120%] bg-center bg-contain bg-no-repeat snap-center h-[100%] inline "></img>

      </div>
    </motion.div>

  )
}

export default Carousel