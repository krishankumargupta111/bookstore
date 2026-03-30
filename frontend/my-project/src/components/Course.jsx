import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
const getBook=async()=>{
  try{
   const res=  await axios.get("http://localhost:4001/book");
   console.log(res.data)
   setBook(res.data)
  }
  catch(error){
    console.log(error)

  }
}
getBook();
  },[])
  return (
    <>
    <div >
     <div className="mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
      <h1 className="text-2xl font-semibold md:text-4xl dark:bg-slate-900 dark:text-white  ">
          We're delighted to have you
         <span className="text-pink-500"> Here! :)</span></h1>
<p className="mt-12">
  Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Perferendis voluptas
   maiores magnam quo autem praesentium porro 
   consequatur eos, eius rem deleniti distinctio
    aspernatur quibusdam sapiente nam suscipit 
    sequi mollitia? Iure?
</p>
<Link to="/">
<button className="mt-6 bg-pink-500
 text-white px-4 py-2 rounded-md
  hover:bg-pink-700 duration-300">Back</button>
  </Link >
     </div>
     
     <div className="mt-12 grid grid-cols-1 md:grid-cols-3 place-items-center">
{
  book.map((item)=>{
     return <Cards key={item.id} item={item}/>
  })
}
     </div>
    </div>
    </>
  )
}

export default Course
