"use client";
import React from 'react'
import Link from 'next/link';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ["latin"] });

const Footer = () => {

  const moveToTop = (e) => {
    e.preventDefault();
    const elem = document.getElementById('nav');
    elem.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <footer>
        <div className='w-full flex items-center justify-between gap-6 px-6 md:px-16 pt-4 pb-8 border-t-2 border-green-500'>
            <span><Link href={'/'} onClick={moveToTop} className='text-2xl md:text-2xl font-bold font-serif'>
                <div className={`${oswald.className} ml-3 text-xl md:text-3xl font-bold`}><span className='text-green-500'>Go</span>School</div>    
            </Link></span>
            <p className='text-[#828485] text-right font-semibold'>ALL RIGHTS RESERVED &copy; GoSchool</p>
        </div>
    </footer>
  )
}

export default Footer