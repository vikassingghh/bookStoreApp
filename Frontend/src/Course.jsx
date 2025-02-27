//import React from 'react'
import { useEffect, useState } from "react"
import Card from "./Components/Card"
import axios from "axios"

const Course = () => {
  const[book, setbook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("https://book-store-app-tan-eight.vercel.app/book");
        console.log(res.data);
        setbook(res.data);
        console.log("All good");
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);

  return (
    <>
      <div className='max-w-screen-2xl mx-auto container md:px-20 px-4 mt-16'>
      <h1 className="text-4xl font-bold text-black text-center py-16">
            We are Delighted to have you{" "}
            <span className="text-pink-500">Here:)</span>
          </h1>
          <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos consequatur, aspernatur quae sint illo quis saepe natus expedita dolorum. Quidem, architecto consequatur quam veniam optio provident quibusdam quis. Corrupti, pariatur?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {
                book.map((item)=>(
                    <Card key={item.id} item={item}/>
                ))
            }
          </div>
      </div>
    </>
  )
}

export default Course
