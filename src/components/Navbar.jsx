import React from "react";
import { NavLink, Link } from "react-router-dom";
import {  easeIn, motion } from "framer-motion";

export default function Navbar() {


    return (
        <>
            <motion.nav animate={{ opacity:[0,1]}} viewport={{once:true}} transition={{duration:1, delay:1}} class="sticky z-10 bg-gray-200 top-0 w-full h-[15%]">
            <Link path to='/'>
                <motion.img whileHover={{scale:1.05}} transition={{type:'spring', duration: .7}} alt="KB's Kustomz custom paint and autobody logo" className=" sm:w-[95px] text-white text-[8px] absolute top-[-4.8px] pb-[0px] xs:w-[65px] md:w-[110px] xl:w-[130px] lg:w-[130px] " src="/Images/Logo(1).png"></motion.img>
            </Link>
            
                <div class="flex items-center justify-end text-white font-glacialBold bg-black w-full h-[30%]">
                    <a class="inline " href="tel: 815-751-7039">
                    <img src="/icons/icons8-phone-50 (1).png" class="mb-[2px] mr-[10px] hover:scale-105 inline w-[12%]"></img>
                    815-751-7039
                    </a>
                </div>
                <ul class=" flex items-center justify-evenly font-glacial bg-white w-full h-[70%]">
                    <motion.li
                        whileHover={{scale:[1,1.08]}}
                        transition={{duration:0.5, ease:easeIn}}
                      
                    ><NavLink   class="p-[10px]" path to="/">Home</NavLink></motion.li>
                     <motion.li
                       whileHover={{scale:[1,1.08]}}
                       transition={{duration:0.5, ease:easeIn}}
                    ><NavLink  path to="/services">Services</NavLink></motion.li>
                    <motion.li
                       whileHover={{scale:[1,1.08]}}
                       transition={{duration:0.5, ease:easeIn}}
                    ><NavLink path to="/about">About</NavLink></motion.li>
                    <motion.li
                       whileHover={{scale:[1,1.08]}}
                       transition={{duration:0.5, ease:easeIn}}
                    ><NavLink path to="/contact">Contact</NavLink></motion.li>
                    
                </ul>
               
            </motion.nav>

        </>
    )
}