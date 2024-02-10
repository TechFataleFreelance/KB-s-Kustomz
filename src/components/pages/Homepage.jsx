import React from "react";
import { motion } from "framer-motion";
import Carousel from "../Carousel";
import { useState, useEffect } from 'react'

export default function Homepage() {
const [carouselDisplay, setCarouseldisplay] = useState('')
const [carouselAnimation, setCarouselanimation] = useState('')
const [gridAnimation, setGridanimation] = useState('')
const [scrollDisplay, setScrolldisplay] = useState('none')


 

    const handleGalleryScroll = () => {
        window.scrollTo({
            top:665.9,
            behavior:'smooth'
        })
    }


    const handleCarousel = () => {
        setCarouseldisplay('inline')
        if((window.innerWidth > 500)){
            setGridanimation({opacity:[0.2]})
        }
        setCarouselanimation({opacity:[1]})
    }
    const handleXout = () => {
        setCarouseldisplay('none')
        setCarouseldisplay('none')
        setGridanimation({opacity:[1]})
        setCarouselanimation({opacity:0})
    }
   const handleScrolldisplay = () => {
        if(window.scrollY>800){
            setScrolldisplay('block')
        }else{
            setScrolldisplay('none')
        }
   }

   const handleScrolltoTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
   }

   window.onscroll=handleScrolldisplay

    return (
        <>
            <div class="  xl:flex-row xl:flex lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-row xs:flex xs:flex-col  w-full h-[85%]  bg-black">
             
                <div class="flex xs:w-full items-center justify-center text-white font-glacial w-[50%] h-full bg-red-">
                    <div class="text-center ">
                        <motion.h1 animate={{y:[20,0], opacity:[0,1]}} transition={{duration:1, delay:0.3}} class=" xl:text-[90px] lg:text-[60px] md:text-[50px] sm:text-[45px] xs:text-[50px] ">KB's Kustomz</motion.h1>
                        <motion.h3 animate={{y:[20,0], opacity:[0,1]}} transition={{duration:1, delay:0.6}}  class="xl:text-[30px] lg:text-[22pxpx] md:text-[15px] sm:text-[18px] xs:text-[20px]">Custom Paint & Body Shop</motion.h3 >
                        <motion.h4 animate={{y:[20,0], opacity:[0,1]}} transition={{duration:1, delay:0.6}}  class="pt-[1%] ">Wyanet, Illinois</motion.h4 >
                    </div>
                   
                </div>
                <div class="h-full w-[50%] xs:w-full flex xs:items-top  lg:items-center md:items-center xl:items-center sm:items-center justify-center bg-yellow ">
                <motion.iframe 
                animate={{opacity:[0,1]}}
                transition={{duration:1.5, delay:0.6}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525.927321868591!2d-89.59678379127288!3d41.38733613532469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88098ee5b6292f01%3A0x7097f7c48b058203!2sCounty%20Rd%201650%20N%2C%20Illinois!5e1!3m2!1sen!2sus!4v1701754849896!5m2!1sen!2sus" 
                width="600" 
                height="450"
                class="rounded-[22px] xl:w-[600px] xl:h-[450px] lg:w-[450px] lg:h-[350px]  md:w-[400px] md:h-[360px] sm:w-[330px] sm:h-[300px] xs:w-[280px] xs:h-[200px]" ></motion.iframe>
                </div>
                <motion.div animate={{opacity:[0,1]}} transition={{duration:3, delay:2, }} class="pb-[10px] animate-bounce font-glacial absolute flex  items-center text-white w-full justify-center bottom-0"> 
                    <div  onClick={handleGalleryScroll} class="hover:cursor-pointer sm:flex xs:hidden flex-col items-center">
                        <h1  class='text-[16px] xs:text-[14px]'>Gallery</h1>
                        <img src='/icons/icons8-arrow-50.png' class=' w-[50%] xs:w-[35%]'></img>
                    </div>
                </motion.div>
               
            </div>
            <div   class="lg:w-full xl:w-full md:w-full sm:w-full xs:w-full lg:h-auto xl:h-auto sm:h-auto md:h-auto xs:h-[85%] overflow-hidden border-t-2 p-[%] pt-[0] border-t-white overflow-x-hidden bg-black ">
                <div onClick={handleScrolltoTop} style={{display:scrollDisplay}} className="hover:bg-gray-700 hover:text-white shadow-2xl font-glacial cursor-pointer fixed bottom-[2%] sm:text-[16px] xs:text-[11px] right-[2%] z-[999] sm:p-3 xs:p-[4px] bg-white">
                    <h1>Back To Top</h1>
                </div>
                <Carousel animation={carouselAnimation} display={carouselDisplay} onXout={handleXout}/>
            <motion.div id='gallery'  animate={{opacity:[0,1]}} transition={{delay:1.5}} onClick={handleCarousel} class=" absolute cursor-pointer hover:bg-gray-600 xl:w-auto lg:w-auto md:w-auto sm:w-auto xs:w-screen sm:hover:scale-105 xs:hover:scale-100 transition-all active:bg-gray-500  p-1 xs:rounded-none md:rounded-md sm:rounded-md xl:rounded-md lg:rounded-md xl:mt-[1.2%] lg:mt-[1.2%] sm:mt-[2.3%] md:mt-[0.98%] xs:mt-[9%] xl:right-[8.5%] lg:right-[8.5%] md:right-[8.5%] sm:right-[8.5%] xs:right-0  items-center justify-center bg-gray-700 2xl:hidden xs:flex">
                    <img className="mr-[10px] " src="/icons/icons8-gallery-25.png" alt="" />
                    <h2 className="mr-[5px] font-glacial text-white">Carousel</h2>
                </motion.div>
                <motion.div  animate={gridAnimation}  class="overflow-y-hidden  xl:pb-[2%] lg:pb-[2%] md:pb-[2%] sm:pb-[2%] xs:pb-[12%]  ml-[6%]  bg-oran w-full h-auto xl:pt-[4.5%] md:pt-[5%] sm:pt-[8%]  lg:pt-[4.5%] xs:pt-[24%] sm:block xs:hidden " >
                 

                <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/image000001.JPG" className=' w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/image000002.JPG" className=' w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />


                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0244.jpg" className=' w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0245.jpg" className='w-[15%] brightness-[135%] h-[42%]  p-[7px] inline ' alt="" />

                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/1.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/2.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />

                 <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/after1.jpg" className=' w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/after2.jpg" className=' w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />

                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0234.jpg" className='w-[26%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0230.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0175.jpg" className='w-[26%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0176.jpg" className='w-[26%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0238.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0241.jpg" className='w-[26%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0178.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0188.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0177.jpg" className='w-[15%] brightness-[140%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0186.jpg" className='w-[15%] brightness-[130%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0223.jpg" className='w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/images/IMG_0225.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/Images/1.png" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/Images/2.png" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/Images/3.png" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/Images/4.png" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/Images/IMG_0261.JPG" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/Images/IMG_0262.JPG" className='w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img  whileHover={{scale:1.05}}  transition={{ type:'spring'}} src="/images/IMG_0170.JPG" className='w-[15%] brightness-125 h-[42%] p-[7px] inline' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0172.jpg" className='w-[15%] brightness-[140%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0239.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0224.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0174.jpg" className='w-[15%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/images/IMG_0169.jpg" className='w-[15%] brightness-[132%] h-[42%]  p-[7px] inline ' alt="" />

                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/image000003.JPG" className='w-[15%] brightness-[112%] h-[42%]  p-[7px] inline ' alt="" />
                  
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/image000005.JPG" className='w-[15%] brightness-[132%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/image000000 4.JPG" className='w-[15%] brightness-[132%] h-[42%]  p-[7px] inline ' alt="" />
                 
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/image000002 2.JPG" className='w-[15%] brightness-[132%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.05}}  transition={{type:'spring'}} src="/Images/image000004.JPG" className='w-[15%] brightness-[100%] h-[42%]  p-[7px] inline ' alt="" />
                  <motion.img whileHover={{scale:1.03}}  transition={{type:'spring'}} src="/Images/image000006.JPG" className='w-[26%] brightness-[125%] h-[42%]  p-[7px] inline ' alt="" />
                 
                </motion.div>

            </div>
        </>
    )
}

