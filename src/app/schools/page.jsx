import Search from '@/components/Search/Search';
import Cards from '@/components/cards/Cards';
import Loader from '@/components/loader/Loader'
import React, { Suspense } from 'react'

const getData = async () => {
  const res = await fetch(`${process.env.URL}/api/schools`,{
    cache: "no-store"
  });

  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json();
}

const Schools = async () => {
  const schools = await getData();


  // let filterSchools = null;
  // const handleFilter = async (city) => {
  //   filterSchools = schools.filter((school) => school.city === city);
  //   console.log(filterSchools);
  // }


  return (
    <Suspense fallback={<Loader />} >
          <Search schools={schools} />  
    </Suspense>
  )
}

export default Schools