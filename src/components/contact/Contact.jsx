"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from './contact.module.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }
        console.log(data);
    }

  return (
    <section id='contact'>
        <div className='grid md:grid-cols-2 py-10 gap-8 overflow-hidden'>
            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: -50}, visible:{opacity: 1, x: 0}}}>
                <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-1">Contact Us</h1>
                <div className="h-1 w-20 bg-green-500 rounded mb-4"></div>
                <p className='mb-4 max-w-md text-justify'>Our inbox is always open. Whether you have a question or just want to say hi, We&#39;ll try our best to get back to you!</p>
                <div className='socials flex flex-row items-center gap-2'>
                    <Link href={'https://www.linkedin.com/in/sachin-shrivastav/'} target='_blank' >
                        <ImLinkedin size={30} />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/sachin-shrivastav/'} target='_blank' >
                        <FaSquareXTwitter size={33} />
                    </Link>
                </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity: 0, x: 50}, visible:{opacity: 1, x: 0}}}>
                <form className={`${styles.contact} flex flex-col gap-6`} id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className='block mb-2 text-sm font-medium'>Name</label>
                        <input type="text" name="name" id='name' onChange={(e) => {setName(e.target.value)}} className='border-2 border-green-500 placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5' required placeholder='Name' />
                    </div>

                    <div>
                        <label htmlFor="email" className='block mb-2 text-sm font-medium'>Your email</label>
                        <input type="email" name="email" id='email' onChange={(e) => {setEmail(e.target.value)}} className=' border-2 border-green-500 placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5' required placeholder='Enter your email...' />
                    </div>

                    <div>
                        <label htmlFor="message" className='block mb-2 text-sm font-medium'>Message</label>
                        <textarea name="message" id="message" cols="30" rows="5" onChange={(e) => {setMessage(e.target.value)}} className=' border-2 border-green-500 placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5' placeholder='Leave your message...' />
                    </div>

                    <button type='submit' className='bg-green-500 hover:bg-blue-400 transition duration-700 text-white font-semibold py-2.5 px-5 rounded-lg with-full text-center'>Send Message</button>
                    
                </form>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact