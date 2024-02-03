"use client";
import React, { useEffect, useState } from 'react'
import styles from './schools.module.css';
import { IoIosSearch } from "react-icons/io";
import Cards from '../cards/Cards';

const Search = ({schools}) => {
    const [filter, setFilter] = useState('All Cities');
    const [filterSchools, setFilterSchools] = useState([]);
    const cities = [...new Set(schools?.map(item => item.city))];
    cities.sort();
    const [searchInput, setSearchInput] = useState(''); 

    useEffect(() => {
      if(searchInput === ""){
        setFilterSchools(schools.filter((school) => school.city === filter));
      }else{
        setFilterSchools(schools.filter((school) => (school.name).toLowerCase().includes(searchInput.toLowerCase()) && school.city === filter));
      }
      
    },[filter])

    const handleSearch = () => {
      if(filter === 'All Cities'){
        setFilterSchools(schools.filter((school) => (school.name).toLowerCase().includes(searchInput.toLowerCase())));
      }else{
        setFilterSchools(schools.filter((school) => (school.name).toLowerCase().includes(searchInput.toLowerCase()) && school.city === filter));
      }
      
    }

  return (
    <div className={`w-full h-full mt-14`}>
      <div className='flex flex-col gap-4'>
        <div className={`${styles.search} flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 px-6`} >
            <input type="text" className='border-2 w-full md:w-1/2 border-green-500 p-1 rounded-md' onChange={(e) => setSearchInput(e.target.value)} placeholder='School Name...' />
            
            <select name="cityFilter" className='w-full md:w-fit px-3 py-1 border-2 border-green-500 rounded-md' id="cityFilter" onChange={(e) => setFilter(e.target.value)}>
                <option value="All Cities">All Cities</option>
                {
                cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))
                }
            </select>

            <button className='py-1 w-full md:w-fit px-2 font-bold border-2 bg-green-500 border-blue-400 rounded-md inline-flex justify-center items-center gap-2 hover:bg-blue-400 transition duration-700 text-white' onClick={handleSearch}>Search <IoIosSearch size={20} /></button>
        </div>
    </div>

    <div className='px-5 mt-14 mx-auto py-10'>
      <div className="flex flex-wrap -m-4">
        {
          filter === 'All Cities' && filterSchools.length === 0 ? (
            schools?.map((school) => (
                <Cards key={school?.id} name={school?.name} address={school?.address} city={school?.city} image={school?.image} />
            ))
          ):(
            filterSchools?.map((school) => (
              <Cards key={school?.id} name={school?.name} address={school?.address} city={school?.city} image={school?.image} />
            ))
          )   
        } 
      </div> 
  </div>
</div>
  )
}

export default Search