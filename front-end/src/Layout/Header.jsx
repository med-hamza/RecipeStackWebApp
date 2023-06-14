import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const wishlistData = useSelector((state) => state.wishlists.wishlistItem);
  return (
    <nav className='flex  px-2 pl-2 pr-2  bg-transparent'>
         
 <Link to="/"> Logo </Link>
 <Link to="/wishlist"> Wishlist ({wishlistData?.length}) </Link>
    </nav>
  )
}

export default Header