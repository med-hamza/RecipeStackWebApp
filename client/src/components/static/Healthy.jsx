import React from 'react'

const Healthy = () => {



    return (
        <div>
            <h2 className=' pb-16 text-4xl text-center'>What Does<span className='text-[#AD343E] font-semibold'>   Healthy </span> <br />Even Mean? </h2>
            <div className=' block  md:flex lg:flex items-start justify-center mx-auto gap-14 mb-20'>
                <div className=' w-3/4 mx-auto lg:w-2/5'>
                    <img src={'/home_img/healthy-means3.png'} alt="healthy meal" className=' w-full' />
                </div>
                <div className=' w-11/12   lg:basis-1/2 mx-auto'>
                    <div className=''>
                        <h3 className=' mt-4 lg:mt-0 text-center lg:text-left text-3xl  font-semibold mb-4'>
                            Healthy Means <br />
                            <span className='text-[#AD343E] font-semibold'>   Cooking at Home </span>
                        </h3>
                        <div className=''>
                            <p>
                                We believe that the first step to healthy eating begins simply with cooking at home. Knowing what goes into your food is the best way to get the most out of it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' block  md:flex lg:flex items-start justify-center mx-auto gap-14'>
                <div className=' w-11/12   lg:basis-1/2 mx-auto'>
                    <div className=''>
                        <h3 className=' lg:mt-0 text-center lg:text-left text-3xl  font-semibold mb-4'>
                            Healthy Means <br />
                            <span className='text-[#AD343E] font-semibold'>  Real Food</span>
                        </h3>
                        <div className=''>
                            <p>
                                We believe that the first step to healthy eating begins simply with cooking at home. Knowing what goes into your food is the best way to get the most out of it.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' mt-4 lg:mt-0 w-3/4 mx-auto lg:w-2/5'>
                    <img src={'/home_img/healthy-means2.png'} alt="healthy meal" className=' w-full' />
                </div>
            </div>
        </div>
    )
}

export default Healthy
