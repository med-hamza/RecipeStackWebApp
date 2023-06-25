import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchRecipeById } from '../reducers/recipeReducer';
import { addToWishlist } from '../reducers/wishReducer'
import {HiOutlineBadgeCheck} from "react-icons/hi";
import Progressbar from '../components/Progressbar';
import Swal from 'sweetalert2';

const RecipeDetails = () => {

   const dispatch = useDispatch();
   const { id } = useParams();
   const recipes = useSelector((state) => state.Recipe.recipes);
   const status = useSelector((state) => state.Recipe.status);
   const error = useSelector((state) => state.Recipe.error);
   const wishlistData = useSelector((state) => state.wishlists.wishlistItem);
   
   
   useEffect(() => {
    dispatch(fetchRecipeById(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div className=" text-center grid items-center justify-center m-auto"> <Progressbar /> </div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
 const maxInstr = 150;
   console.log(id)

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

  //  const number = recipes.Ingredients.split(',').length

  //  console.log("dezdez", number)

  return (
    <div className='w-[90%] max-w-7xl mx-auto'>
    <div className='grid grid-cols-1 divide-y'>
     
      <div className='mt-2 mb-10 block sm:flex flex-row justify-center items-center'>
       <div className='flex-1'>
       <h1 className=' text-4xl mb-8 mt-5 font-bold'> {recipes.Title}</h1>

        <p>
              <strong>Instructions:</strong>{' '}
              {recipes.Instructions && recipes.Instructions.length > maxInstr
                ? `${recipes.Instructions.substring(0, maxInstr)}....`
                : recipes.Instructions} 
            </p>
            <a href='#nutrition-section' className='text-sm text-[#F6784C]'>Read More</a>

            <div className='mt-10 mb-10  divide-x flex items-center'>
              <div className='mr-5 text-center'>
           <p className=' text-xl font-bold'> {recipes.Ingredients && recipes.Ingredients.split(',').length}</p>
           <p className='text-xl'> Ingredients </p>
           </div>
           <div>
           <button className='bg-[#F6784C] text-white ml-5 pt-3 pb-3 text-base border-[#F6784C] rounded-full px-5' aria-label="Add favorite" onClick={() => addWishhandler(recipes)}>
           Add to my list
            </button>
           </div>
            </div>

           
    
       </div>
       <div className='flex-1 flex justify-center'>
       <img src={`${window.location.origin}/images/${recipes.Image_Name}.jpg`} alt={recipes.Title} className='sm:max-w-none max-w-full h-[400px] object-cover w-[400px]' />
       </div>
      </div>

      <div className='grid grid-cols-1 divide-y'>
        <div className='mt-10'>
          <h2 className=' text-3xl font-bold mb-8'>Ingredients</h2>
      {recipes.Ingredients && (
          recipes.Ingredients.slice(1, -1).split(',').map((ingredient, index) => (
            <div className='flex items-center' key={index}><p> <HiOutlineBadgeCheck className='text-[#F6784C] text-base mr-2' /> </p> <p className=' text-lg'> {ingredient.trim()}</p></div>
          ))
        )}
        </div>
        <div className='mt-10'>
          <h2 className='mt-10 text-3xl font-bold mb-8'> Nutrition</h2>
    <p className='mb-10 ' id='nutrition-section'> {recipes.Instructions} 
     </p>
    </div>
      </div>
  </div>
  </div>
  )
}

export default RecipeDetails