import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Progressbar from '../components/Progressbar';
import useFetch from '../hooks/useFetch';
import SingleRecipe from '../components/SingleRecipe';

const RecipeDetails = () => {

  const { id } = useParams();
  const { recipedetails, status, error } = useFetch(id);
  const wishlistData = useSelector((state) => state.wishlists.wishlistItem);


  if (status === 'loading') {
    return (
      <div className="text-center h-screen grid items-center justify-center m-auto">
        <Progressbar />
      </div>
    );
  }


  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SingleRecipe recipedetails={recipedetails} status={status} error={error} wishlistData={wishlistData} />
    </>
  )
}

export default RecipeDetails