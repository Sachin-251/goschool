"use client";
import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';

const poppins = Poppins({weight: ["400", "500", "600", "700", "800"], subsets: ["latin"] });

const Landing = () => {
  return (
    <section id='landing' className='py-8'>
        <div className='w-full h-2/3 flex flex-col justify-center items-center md:flex-row gap-4 md:gap-0'>
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}} className='md:w-1/2 w-full flex flex-col justify-center items-center md:items-start order-2 md:order-1'>
                <h1 className={`${poppins.className} md:text-5xl text-3xl text-center md:text-start font-semibold`}>Quality <span className='text-green-500'>Education</span> By Any Means Necessary.</h1>
                <Link href='/schools' className='px-2 py-2 text-white inline-flex items-center gap-2 bg-green-500 rounded-md border-2 border-blue-400 hover:bg-blue-400 transition duration-700 font-semibold mt-6'>All Schools <FaArrowRight /></Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: 50}, visible:{opacity: 1, x: 0}}} className='md:w-1/2 w-2/3 h-full flex justify-end items-center order-1 md:order-2'>
                  <Image className='rounded-full border-8 border-green-500 hover:border-blue-400 transition duration-700' src='/assets/landing.png' width={450} height={450} alt='landing' />                
            </motion.div>
        </div>
      </section>
  )
}

export default Landing