import React from 'react'
import CardItem from './CardItem'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';

export default function Testimonial(props) {
  let reviews = props.reviews

  const [index, setIndex] = useState(0)
  function leftShiftHandler(params) {
    if (index === 0) {
      console.log(reviews.length - 1);
      setIndex(reviews.length-1)
    } else {
      console.log(index - 1);
      setIndex(index - 1)
    }   
  }
  function rightShiftHandler(params) {
    if (index === reviews.length - 1) {
          setIndex(0)
    } else {
      setIndex(index+1)
     }   
  }
  function surpriseMe() {
    let randomIndex = Math.floor(Math.random() * reviews.length)
    setIndex(randomIndex)
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-5 transition-all duration-700 hover:shadow-xl rounded-md'>
      <CardItem review={reviews[index]} />
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto align-middle justify-center">
        <button
          className="cursor-pointer hover:text-violet-500 "
          onClick={leftShiftHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className="cursor-pointer hover:text-violet-500 "
          onClick={rightShiftHandler}
        >
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button
          className="bg-violet-400 hover:bg-violet-400 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-2"
          onClick={surpriseMe}
        >
          suprise me
        </button>
      </div>
    </div>
  );
}
