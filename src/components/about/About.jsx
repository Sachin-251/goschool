"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about' className='w-full h-full mt-20 py-10 overflow-hidden'>
        <div className='w-full flex flex-col justify-center xl:flex-row gap-14 px-5'>
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}} className='w-full flex justify-end items-center'>
                    <Image className='rounded-lg border-2 w-full h-auto border-green-500 hover:border-blue-400 transition duration-700' src='/assets/about.jpg' width={400} height={400} alt='about' />                
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: 50}, visible:{opacity: 1, x: 0}}} className="flex flex-col flex-wrap w-full mb-20 gap-6">
                <div className="w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2">About GoSchool</h1>
                    <div className="h-1 w-20 bg-green-500 rounded"></div>
                </div>
                <p className='text-justify font-medium'>At <span className='text-green-500 font-semibold'>GoSchool</span>, we believe every child deserves an education that unlocks their potential. That's why we've created a comprehensive school finder tool, empowering families to discover institutions that align with their unique needs and values. We're passionate about making the school search journey smooth and stress-free, so let us guide you towards a learning environment where your child can thrive.</p>
                <p className='text-justify font-medium'>But our commitment goes beyond simply finding the right school. We understand that choosing an education is a complex decision, filled with questions and anxieties. That's why we offer a wealth of additional resources, from articles on navigating the application process to webinars featuring educational experts. So join our community, and find the perfect school where your child's educational adventure can begin.</p>
            </motion.div>
        </div>
    </section>
  )
}

export default About