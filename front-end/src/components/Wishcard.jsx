import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillMinusCircle } from "react-icons/ai";


const Wishcard = ({ item, onRemove }) => {

  const maxLenth = 50;
  return (

    <div className='mb-5 sm:w-[300px] w-[280px] mx-auto  relative'>
      <Link to={`/recipes/${item._id}`}>
        <img className='rounded-xl w-56 h-52' src={`${window.location.origin}/images/${item.Image_Name}.jpg`} alt={item.Title} />
      </Link>
      <div className='mt-5'>
        <Link to={`/recipes/${item._id}`}>
          <h2 className=' color-[#252525]  text-lg font-bold '>
            {item.Title.length > maxLenth
              ? `${item.Title.substring(0, maxLenth)}...`
              : item.Title}

          </h2>
        </Link>
        <div className=' absolute top-[-12px]  sm:right-14 right-11'>
          <button className='text-3xl text-[#AD343E]' onClick={() => onRemove(item)}><AiFillMinusCircle />
          </button>
        </div>
      </div>

    </div>

  )
}

export default Wishcard