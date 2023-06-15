import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const wishlistData = useSelector((state) => state.wishlists.wishlistItem);
  return (
    <div className=''>
    <nav className='flex items-center mt-5 mb-5  px-2 pl-2 pr-2  bg-transparent justify-center'>
  <div className='mr-5'>       
 <Link to="/">  <img src={process.env.PUBLIC_URL + '/hamlicious.png'} alt="logo" /></Link>
 </div>
<div className='flex-row'>
 <Link className='mr-8' to="/explore">About </Link>
 <Link className='mr-8' to="/Help">  Help</Link>
 <Link className='mr-8' to="/Help"> Contact</Link>
 <Link className='mr-8' to="/explore">Explore </Link>
 <Link className='mr-8' to="/wishlist"> My Recipes ({wishlistData?.length}) </Link>
 </div>
    </nav>
    </div>
  )
}

export default Header