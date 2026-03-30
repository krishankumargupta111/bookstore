import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Freebook() {
    const [book,setBook]=useState([])
    useEffect(()=>{
  const getBook=async()=>{
    try{
     const res=  await axios.get("http://localhost:4001/book");
     console.log(res.data)
    const data=(res.data.filter((data)=>data.category==="Free"));
     setBook(data);
    }
    catch(error){
      console.log(error)
  
    }
  }
  getBook();
    },[])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
        }
      },
      {
           breakpoint:640,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
      }}
    ]
  };
    
  return (
    <>
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 ">
      <h1 className="font-bold text-xl pb-2">Free offered Courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam reprehenderit reiciendis possimus iste fugit consequuntur, qui labore delectus esse ad quos odit totam tenetur numquam commodi, fugiat, explicabo quae.</p>
   
    </div>
    <div className="pt-12 md:pt-24 pb-10 mx-auto ">
         <Slider {...settings}>
     {book.map((item)=>{
         return <Cards item={item} key={item.id}/>
     }
    )}
    </Slider>
  );

    </div>
    </div>
    </>
  )
}

export default Freebook
