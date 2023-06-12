import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchRecipeById } from '../reducers/recipeReducer';

const RecipeDetails = () => {

   const dispatch = useDispatch();
   const { id } = useParams();
   const recipes = useSelector((state) => state.Recipe.recipes);
   const status = useSelector((state) => state.Recipe.status);
   const error = useSelector((state) => state.Recipe.error);
   
   useEffect(() => {
    dispatch(fetchRecipeById(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

   console.log(id)

   console.log(recipes)


  return (
    <div>
    <h2>Recipe Details</h2>
    <p>ID: {id}</p>
    <h2>Title: {recipes.Title}</h2>
    <p> {recipes.Ingredients} </p>
    <p> {recipes.Instructions}  </p>
    <p> <img src={`${window.location.origin}/images/${recipes.Image_Name}.jpg`} alt={recipes.Title} className='w-80' /></p>


  </div>
  )
}

export default RecipeDetails