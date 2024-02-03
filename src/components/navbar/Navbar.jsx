"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeToggle from '../themeToggle/ThemeToggle'
import { Oswald } from 'next/font/google'
import { FaArrowRight } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import styles from './navbar.module.css';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Modal from '../modals/Modal';
import Register from '../modals/Register';

const oswald = Oswald({ subsets: ["latin"] });

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    }

  return (
    <div id='nav' className='w-full h-20 top-0 md:px-20 px-4'>
        <header className="h-full body-font">
            {modal && <Modal closeModal={closeModal} content={<Register closeModal={closeModal} />} />}
            <div className="mx-auto h-full flex justify-between p-4 items-center">
                <div className="flex title-font font-medium items-center justify-center md:mb-0 gap-8">
                    <Link href='/' className={`${oswald.className} ml-3 text-lg md:text-xl lg:text-3xl font-bold`}><span className='text-green-500'>Go</span>School</Link>
                </div>
                <button className='px-2 py-1 md:hidden text-white bg-green-500 border-2 border-blue-400 rounded-lg inline-flex items-center justify-center gap-2 font-medium text-sm hover:bg-blue-400 transition duration-700' onClick={() => setModal(true)}>Register <FaArrowRight /></button>
                <nav className="md:ml-auto md:mr-auto md:flex items-center text-lg justify-center font-semibold gap-4 lg:gap-8 hidden">
                    <Link href='/' className="mr-5 hover:text-blue-400 transition duration-500">Home</Link>
                    <Link href='#about' scroll={true} className="mr-5 hover:text-blue-400 transition duration-500">About</Link>
                    <Link href='/' className="mr-5 hover:text-blue-400 transition duration-500">Contact</Link>
                    <button className='px-2 py-1 text-white bg-green-500 border-2 border-blue-400 rounded-lg inline-flex items-center justify-center gap-2 font-semibold hover:bg-blue-400 transition duration-700' onClick={() => setModal(true)}>Register<FaArrowRight /></button>
                </nav>
                <div className='flex items-center justify-center gap-6'>
                    <ThemeToggle />
                    <div className='block md:hidden cursor-pointer' onClick={() => setNavOpen(!navOpen)}><CgMenuRound size={35} /></div>
                </div>

                {
                    navOpen ? (
                        <div className={`flex flex-col items-center justify-center w-1/2 h-full md:hidden fixed z-10 top-0 right-0 ${styles.navMenu}`}>
                            <div className={`${styles.close} fixed top-14 right-[47%] cursor-pointer`} onClick={() => setNavOpen(false)}><FaArrowRightFromBracket size={30} /></div>
                            <div className='font-bold w-full h-2/3 text-xl flex flex-col items-center gap-10'>
                                <Link href='/' className="mr-5 hover:text-blue-400">Home</Link>
                                <Link href='/' className="mr-5 hover:text-blue-400">About</Link>
                                <Link href='/' className="mr-5 hover:text-blue-400">Contact</Link>
                            </div>
                        </div>
                    ):(null)
                }
            </div>
        </header>
    </div>
  )
}

export default Navbar