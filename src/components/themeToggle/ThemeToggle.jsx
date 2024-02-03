"use client";
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemeToggle = () => {

    const {toggle , theme} = useContext(ThemeContext);

  return (
    <div className='flex justify-center'>
        <label className="relative inline-flex items-center cursor-pointer" >
            <input className="sr-only peer select-none border-2" value="" type="checkbox" onClick={toggle} checked={theme === "light"? false: true}/>
            <div
                className="md:w-12 md:h-6 w-8 h-5 border-2 border-blue-400 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute md:before:h-5 md:before:w-5 before:h-3 before:w-3 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-blue-300 after:content-['🌑'] after:bg-[#1d1d1d] after:absolute after:rounded-full md:after:top-[2px] after:top-[4px] after:right-1 after:translate-y-full md:after:w-5 md:after:h-5 after:h-3 after:w-3 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
            ></div>
        </label>
    </div>
  )
}

export default ThemeToggle