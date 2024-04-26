import React from 'react'
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addToWishlist } from '../reducers/wishReducer';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";

const SingleRecipe = ({ recipedetails, wishlistData }) => {

    const dispatch = useDispatch();
    const maxInstr = 150;


    const addWishhandler = (recipedetails) => {
        const isRecipeInWishlist = wishlistData.some((item) => item._id === recipedetails._id);
        if (isRecipeInWishlist) {
            Swal.fire({
                icon: 'error',
                title: 'your Recipe has already been saved',
            })
        } else {
            dispatch(addToWishlist(recipedetails));
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
        <div className='w-[90%] max-w-7xl mx-auto  mt-32'>
            <div className='grid grid-cols-1 divide-y divide-[#AD343E]'>

                <div className='mt-2 mb-10 block sm:flex flex-row justify-center items-center'>
                    <div className='flex-1 mt-5'>
                        <div className='flex items-start'>
                            <Link to="../" relative="path"> <MdKeyboardArrowLeft className='text-4xl mt-1 text-[#AD343E]' />
                            </Link>
                            <h1 className=' text-4xl mb-8  font-bold'> {recipedetails.Title}</h1>
                        </div>

                        <p>
                            <strong>Instructions:</strong>{' '}
                            {recipedetails.Instructions && recipedetails.Instructions.length > maxInstr
                                ? `${recipedetails.Instructions.substring(0, maxInstr)}....`
                                : recipedetails.Instructions}
                        </p>
                        <a href='#nutrition-section' className='text-sm text-[#AD343E]'>Read More</a>

                        <div className='mt-10 mb-10  divide-x flex items-center'>
                            <div className='mr-5 text-center'>
                                <p className=' text-xl font-bold'> {recipedetails.Ingredients && recipedetails.Ingredients.split(',').length}</p>
                                <p className='text-xl'> Ingredients </p>
                            </div>
                            <div>
                                <button className='bg-[#AD343E] text-white ml-5 pt-3 pb-3 text-base border-[#AD343E] rounded-full px-5' aria-label="Add favorite" onClick={() => addWishhandler(recipedetails)}>
                                    Add to my list
                                </button>
                            </div>
                        </div>



                    </div>
                    <div className='flex-1 flex justify-center'>
                        <img src={`${window.location.origin}/images/${recipedetails.Image_Name}.jpg`} alt={recipedetails.Title} className='sm:max-w-none max-w-full h-[400px] object-cover w-[400px] rounded-2xl' />
                    </div>
                </div>

                <div className='grid grid-cols-1 divide-y divide-[#AD343E]'>
                    <div className='mt-10'>
                        <h2 className=' text-3xl font-bold mb-8'>Ingredients</h2>
                        {recipedetails.Ingredients && (
                            recipedetails.Ingredients.slice(1, -1).split(',').map((ingredient, index) => (
                                <div className='flex items-center' key={index}><p> <HiOutlineBadgeCheck className='text-[#AD343E] text-base mr-2' /> </p> <p className=' text-lg'> {ingredient.trim()}</p></div>
                            ))
                        )}
                    </div>
                    <div className='mt-10'>
                        <h2 className='mt-10 text-3xl font-bold mb-8'> Nutrition</h2>
                        <p className='mb-10 ' id='nutrition-section'> {recipedetails.Instructions}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRecipe
