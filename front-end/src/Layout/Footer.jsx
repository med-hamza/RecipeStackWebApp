import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='text-center mt-20 p-16 bg-[#000c]'>
        <div>
          <div className='p-4'>
            <h2 className='text-5xl text-white mb-5'> HamLicious cuisine </h2>
            <p className='text-[#AD343E] text-lg'>Delightful culinary creations for every palate.</p>
          </div>
        </div>
      </div>
      <div className="  bg-[#000c] copyright border-t-[1px] py-3 px-10 border-dashed border-white">
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <div><p className="text-white text-base sm:text-left text-center sm:mb-0 mb-5">© 2023 Mohamed Hamza Trabelsi. All rights Reserved</p></div>
          <div className="flex items-center"><Link className="sm:text-right text-center" target="blank" to="https://www.linkedin.com/in/mohamed-hamza-trabelsi"><img class="mr-2" src={process.env.PUBLIC_URL + '/icones/linkedin.svg'} alt="linkedin" /></Link>
            <Link to="https://www.instagram.com/t_m_hamza/" target="blank"><img src={process.env.PUBLIC_URL + '/icones/instagram.svg'} alt="instgram" /></Link>
          </div></div></div>
    </div>
  )
}

export default Footer