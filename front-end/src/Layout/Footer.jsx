import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<div>
<div className='text-center mt-20 p-16 bg-[#000c]'>
  <div>
  <div className='p-4'>
  <h2 className='text-5xl text-white mb-5'> HamLicious cuisine </h2>
  <p className='text-white text-lg'>Delightful culinary creations for every palate.</p>
  </div>
  <div className='menu-footer mt-5 mb-5'>
   <nav className='flex items-center justify-center '>
    <div className='menu_item px-14'>
    <Link to="/">HOME</Link>
    </div>
    <div className='menu_item px-14'>
    <Link to="/about">ABOUT</Link>
    </div>
    <div className='menu_item  px-14'>
    <Link to="/contact">CONTACT</Link>
    </div>
    </nav>
  </div>
  </div>
</div>


</div>
  )
}

export default Footer