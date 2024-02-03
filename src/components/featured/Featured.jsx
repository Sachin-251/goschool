import React from 'react'
import styles from './featured.module.css';
import Image from 'next/image';
import Cards from '../cards/Cards';

const getData = async () => {
    const res = await fetch(`${process.env.URL}/api/schools`,{
      cache: "no-store"
    });
  
    if(!res.ok){
      throw new Error("Failed")
    }
    return res.json();
  }

const Featured = async () => {
    const schools = await getData();
  return (
    <section id='featured' className='py-10'>
        <div className='px-5 mt-14 mx-auto'>
            <div className="flex flex-wrap w-full mb-20 items-center">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2">Featured Schools</h1>
                    <div className="h-1 w-20 bg-green-500 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed font-medium">Unlocking Bright Futures, One School at a Time. Discover excellence in education with <span className='text-green-500 font-semibold'>GoSchool</span> – where every click leads to a world of knowledge and opportunities.</p>
            </div>

            <div className="flex flex-wrap -m-4">
                {
                    schools?.map((school) => (
                      school.isFeatured === 'true' ? (
                        <Cards key={school?.id} name={school?.name} address={school?.address} city={school?.city} image={school?.image} />
                      ):(
                        null
                      )                       
                    ))
                }              
            </div>
        </div>
    </section>
  )
}

export default Featured