import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Carousel from "../Carousel";
import { useState } from 'react'

export default function Homepage() {
const [carouselDisplay, setCarouseldisplay] = useState('none')
const [carouselAnimation, setCarouselanimation] = useState('')
const [gridAnimation, setGridanimation] = useState('')

    const handleGalleryScroll = () => {
        window.scrollTo({
            top:665.9,
            behavior:'smooth'
        })
    }

    const handleCarousel = () => {
        setCarouseldisplay('inline')
        setGridanimation({opacity:[0.2]})
        setCarouselanimation({opacity:[1]})
    }
    const handleXout = () => {
        setCarouseldisplay('none')
        setGridanimation({opacity:[1]})
        setCarouselanimation({opacity:0})
    }
   

    return (
        <>
            <div class=" flex w-full h-[85%] bg-black">
             
                <div class="flex items-center justify-center text-white font-glacial w-[50%] h-full bg-red-">
                    <div class="text-center ">
                        <motion.h1 animate={{y:[20,0], opacity:[0,1]}} transition={{duration:1, delay:0.3}} class="text-[90px]">KB's Kustomz</motion.h1>
                        <motion.h3 animate={{y:[20,0], opacity:[0,1]}} transition={{duration:1, delay:0.6}}  class="text-[30px]">Custom Paint & Body Shop</motion.h3 >
                        <motion.h4 animate={{y:[20,0], opacity:[0,1]}} transition={{duration:1, delay:0.6}}  class="pt-[1%]">Wyanet, Illinois</motion.h4 >
                    </div>
                   
                </div>
                <div class="h-full w-[50%] flex items-center justify-center bg-yellow ">
                <motion.iframe 
                animate={{opacity:[0,1]}}
                transition={{duration:1.5, delay:0.6}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525.927321868591!2d-89.59678379127288!3d41.38733613532469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88098ee5b6292f01%3A0x7097f7c48b058203!2sCounty%20Rd%201650%20N%2C%20Illinois!5e1!3m2!1sen!2sus!4v1701754849896!5m2!1sen!2sus" 
                width="600" 
                height="450"
                class="rounded-[22px] " ></motion.iframe>
                </div>
                <motion.div animate={{opacity:[0,1]}} transition={{duration:3, delay:2, }} class="pb-[10px] animate-bounce font-glacial absolute flex  items-center text-white w-full justify-center bottom-0"> 
                    <div   onClick={handleGalleryScroll} class="hover:cursor-pointer flex flex-col items-center">
                        <h1  class='text-[16px]'>Gallery</h1>
                        <img src='src/assets/Icons/icons8-arrow-50.png' class=' w-[50%]'></img>
                    </div>
                </motion.div>
               
            </div>
            <div class="w-full border-t-2 p-[%] pt-[0] border-t-white overflow-x-hidden bg-black ">
                <Carousel animation={carouselAnimation} display={carouselDisplay} onXout={handleXout}/>
            <div onClick={handleCarousel} class="absolute cursor-pointer hover:bg-gray-600 hover:scale-105 transition-all active:bg-gray-500  p-1 rounded-md mt-[1.2%] right-[8.5%] flex items-center justify-center bg-gray-700 ">
                    <img className="mr-[10px] " src="src/assets/Icons/icons8-gallery-25.png" alt="" />
                    <h2 className="mr-[5px] font-glacial text-white">Carousel</h2>
                </div>
                <motion.div animate={gridAnimation}  class="overflow-y-hidden ml-[6%] bg-oran w-full h-auto  pt-[4.5%]" >
                  <motion.img whileHover={{scale:1.05}}  transition={{ type:'spring'}} src="src/assets/Images/IMG_0170.JPG" className='w-[15%] brightness-125 h-[42%] p-[7px] inline' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0172.jpg" className='w-[15%] brightness-[140%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0244.jpg" className=' w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0245.jpg" className='w-[15%] brightness-[135%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0239.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0224.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0174.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0169.jpg" className='w-[15%] brightness-[132%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0234.jpg" className='w-[26%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0238.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0175.jpg" className='w-[26%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0176.jpg" className='w-[26%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0179.jpg" className='w-[29%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0241.jpg" className='w-[26%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0178.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0188.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0177.jpg" className='w-[15%] brightness-[140%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0186.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="src/assets/Images/IMG_0223.jpg" className='w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                </motion.div>
            </div>
        </>
    )
}

