import React from 'react'
import styles from './cards.module.css';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({weight: ["400","500","700"], subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"] });

const Cards = ({name, address, city, image}) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 w-full p-4 hover:scale-105 transition duration-700">
        <div className={`bg-gray-100 p-3 h-full shadow-lg shadow-black rounded-lg ${styles.card} w-full`}>
            <Image className="h-80 rounded w-full object-cover object-center mb-6" src={`/schoolImages/${image}`} alt="content" width={400} height={400} />
            <h2 className={`${roboto.className} text-2xl text-center text-green-500 font-bold title-font mb-4`}>{name}</h2>
            <h3 className="tracking-widest text-lg font-semibold title-font"><span className='text-blue-400'>City:</span> {city}</h3>
            <p className="leading-relaxed font-medium"><span className='text-blue-400'>Address:</span> {address}</p>
        </div>
    </div>
  )
}

export default Cards