import React, { useEffect } from 'react'
import FeatureRecipe from '../components/FeatureRecipe'
import boxses from '../utils/boxses'
import Boxes from '../components/static/Boxes'
import mealdata from '../utils/mealdata'
import Meal from '../components/static/Meal'
import { addToWishlist } from '../reducers/wishReducer'
import { fetchRecipedata } from '../reducers/recipeReducer'


import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';

const Home = () => {

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes.recipes);
  const wishlistData = useSelector((state) => state.wishlists.wishlistItem);
  useEffect(() => {
    dispatch(fetchRecipedata())
  }, [dispatch])
  const addWishhandler = (recipes) => {
    const isRecipeInWishlist = wishlistData.some((item) => item._id === recipes._id);
    if (isRecipeInWishlist) {
      Swal.fire({
        icon: 'error',
        title: 'your Recipe has already been saved',
      })
    } else {
      dispatch(addToWishlist(recipes));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Recipe saved',
        showConfirmButton: false,
        timer: 1500
      });
    }

  }

  return (
    <div>
      <div className='bg-cover bg-center bg-no-repeat h-[600px] bg-header mt-0 md:mt-20 lg:mt-20' style={{ backgroundImage: `url(/banner.jpg)` }}>
        <div className='flex items-center justify-center h-full'>
          <div>
            <div className='text-center'>
              <h1 className=' text-4xl md:text-7xl lg:text-7xl font-semibold mb-4'>
                Eat Healthy
              </h1>
              <h2 className='text-[#AD343E] text-3xl md:text-5xl lg:text-5xl  font-semibold'>All Week Long</h2>
            </div>
          </div>
        </div>
      </div>

      <Boxes boxses={boxses} />

      <section className='pt-20 pb-20 bg-[#F9F9F7] space_small'>
        <div className='mx-auto max-w-5xl'>
          <div className='flex items-center'>
            <div className='relative mx-auto w-3/5 md:w-3/5 lg:w-3/5'>
              <img src={'/home_img/pic_healthy_food.png'} className=' w-full lg:w-3/4 md:w-3/4' alt="breakfast" />
              <div className=' mt-8 lg:mt-0 md:mt-0 lg:-bottom-7 md:-bottom-7  md:left-52 lg:left-52  relative md:absolute lg:absolute'>
                <div className=' bg-[#474747] p-6 border rounded-md border-[#474747] max-w-[280px]'>
                  <h4 className=' text-white font-semibold mb-5'>
                    Come and visit us
                  </h4>
                  <div className='flex items-center gap-3 mt-3'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p className='text-sm text-white'>
                      +216 58 19 08 56
                    </p>
                  </div>
                  <div className='flex items-center gap-3 mt-3'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p className='text-sm text-white'>
                      mohamedehamza32@gmail.com
                    </p>
                  </div>
                  <div className='flex items-center gap-3 mt-3'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-sm text-white'>
                      Tunis , La manouba 1124
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=' hidden lg:block w-2/5'>
              <h3 className=' text-4xl text-[#2C2F24]'>
                We provide healthy food for your family.
              </h3>
              <p className=' font-semibold text-base mt-5 mb-5'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
              <p className='text-base'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-mealplans mt-10 space_small'>
        <Meal mealdata={mealdata} />
      </section>
      <section className=' mt-24 mx-auto max-w-2xl lg:max-w-5xl space_small'>
        <h2 className=' pb-10 text-4xl text-center'>Featured <span className='text-[#AD343E] font-semibold'> Recipes </span> </h2>
        <FeatureRecipe recipes={recipes} wishlistData={wishlistData} addWishhandler={addWishhandler} />
      </section>
      <section className=' mt-24 mx-auto max-w-xl lg:max-w-3xl mb-20'>
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
                  Nourishing Body and Soul, embracing the essence of wholesome ingredients. Savoring the goodness of nature, we celebrate the vitality and flavor that real food brings to our lives
                </p>
              </div>
            </div>
          </div>
          <div className=' mt-4 lg:mt-0 w-3/4 mx-auto lg:w-2/5'>
            <img src={'/home_img/healthy-means2.png'} alt="healthy meal" className=' w-full' />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home