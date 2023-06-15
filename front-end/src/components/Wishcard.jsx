import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWishlist } from '../reducers/wishReducer';
import { Link } from 'react-router-dom';


const Wishcard = ({item}) => {

    const dispatch = useDispatch();

       const onRemove= (item)=> {
        dispatch(removeWishlist(item))
       }
       const maxLenth = 50;
  return (
   
    <div className='mb-5 w-[240px]'>
        <Link to={`/recipe/${item._id}`}>
      <img  className='rounded-xl w-56 h-52' src={`${window.location.origin}/images/${item.Image_Name}.jpg`} alt={item.Title} />
      </Link>
      <div className='mt-5'>
      <Link to={`/recipe/${item._id}`}>
      <h2 className=' color-[#252525]  text-lg font-bold '>
                    {item.Title.length > maxLenth
                      ? `${item.Title.substring(0, maxLenth)}...`
                      : item.Title}

                  </h2>
                  </Link>
      <button onClick={() => onRemove(item)}>Remove</button>
      </div>
     
    </div>
    
  )
}

export default Wishcard