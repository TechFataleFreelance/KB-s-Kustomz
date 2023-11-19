import React from "react";
import Iconline from "../Iconline";
import { motion, useScroll } from "framer-motion";


export default function Homepage() {

    const handleGalleryScroll = () => {
        window.scrollTo({
            top:665.9,
            behavior:'smooth'
        })
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11978.49150560841!2d-89.59253013669067!3d41.360550096337576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880988d35a88aeaf%3A0x31a2477340ef829d!2sWyanet%2C%20IL%2061379!5e0!3m2!1sen!2sus!4v1700373738676!5m2!1sen!2sus" 
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
            <div class="w-full border-t-2 p-[1.5%] border-t-white  bg-black h-[85%]">
                <motion.div animate={{opacity:[0,1]}} transition={{delay:1.6}} class="w-full h-full grid grid-cols-7 grid-rows-5 gap-2">
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.1, zIndex:2}} class=" saturate-[115%] bg-[url('src/assets/Images/IMG_0175.jpg')] row-span-3 col-span-2 brightness-[125%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.1, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0173.JPG')] brightness-[120%] saturate-[115%] col-span-3 row-span-3 bg-cover bg-blue-400 rounded-[2px]"></motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.1, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0171.JPG')] col-span-2 row-span-2 brightness-[145%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.4, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0176.JPG')] brightness-[135%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.2, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0179.JPG')] col-span-1 row-span-1 brightness-[145%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
           
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.1, zIndex:2}} class="text-center bg-[url('src/assets/Images/IMG_0174.JPG')] row-span-2 brightness-[110%] saturate-[135%] bg-cover bg-center bg-blue-400 rounded-[2px]">
                        <h1 class="absolute font-glacialBold bottom-0 left-[35%] border-solid border-b-0 border-2 border-black rounded-t-[15px] bg-white text-black p-1">Before</h1>
                    </motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.1, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0169.JPG')] saturate-[140%] row-span-2 brightness-[130%] bg-cover bg-center bg-blue-400 rounded-[2px]">
                    <h1 class="absolute font-glacialBold bottom-0 left-[40%] border-solid border-b-0 border-2 border-black rounded-t-[15px] bg-white text-black p-1">After</h1>
                    </motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.2, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0178.JPG')] row-span-2 brightness-[130%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.2, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0177.JPG')] row-span-2 brightness-[138%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.2, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0188.JPG')] row-span-2 brightness-[140%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.2, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0170.JPG')] row-span-2 brightness-[130%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
                    <motion.div whileInView={{opacity:[0,1]}} whileHover={{scale:1.2, zIndex:2}} class=" bg-[url('src/assets/Images/IMG_0172.JPG')] row-span-2 brightness-[138%] bg-cover bg-center bg-blue-400 rounded-[2px]"></motion.div>
                 
                </motion.div>
            </div>
        </>
    )
}

