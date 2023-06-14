import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWishlist } from '../reducers/wishReducer';


const Wishcard = ({item}) => {

    const dispatch = useDispatch();

       const onRemove= (item)=> {
        dispatch(removeWishlist(item))
       }

  return (
   
    <div>
      <img  src={`${window.location.origin}/images/${item.Image_Name}.jpg`} alt={item.Title} />
      <h3>{item.Title}</h3>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
    
  )
}

export default Wishcard