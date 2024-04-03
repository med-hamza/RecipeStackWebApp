import React from 'react'


const Meal = ({ mealdata }) => {
    return (
        <div className='mx-auto max-w-5xl sp-meal ' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/specialty-meal.png)` }}>
            <h2 className=' pb-7 text-4xl text-center'>Specialty <span className='text-[#AD343E] font-semibold'> Meal Plans</span> </h2>
            <div className='pt-10 pb-10 flex justify-start'>
                <div className=' hidden md:hidden lg:block w-3/5'>
                    <div>
                        <h4 className=' text-4xl mb-4 font-semibold'> Too busy to plan?</h4>
                        <p className=' text-sm font-light'>
                            Subscribe to our dietitian-prepared Specialty <br /> Meal Plans which offer balanced nutrition each <br /> and every week and can be easily customized to your <br /> personal tastes.
                        </p>
                    </div>
                </div>
                <div className=' w-3/4 md:w-2/3 lg:w-2/5 mx-auto'>
                    <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2 gap-8">
                        {mealdata.map((item) => (
                            <div key={item.title} className=' mb-5 relative block'>
                                <img src={process.env.PUBLIC_URL + `/home_img/${item.picture}`} alt="breakfast"
                                    className=' rounded-lg border-2 border-white' />
                                <div className="p-3 text-[#AD343E] bg-white rounded-lg border absolute -left-4 -bottom-4 font-bold"> {item.title}</div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meal
