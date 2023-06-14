import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipedata } from '../reducers/recipeReducer';
import { addToWishlist } from '../reducers/wishReducer'
import { Link } from 'react-router-dom';
import Progressbar from './Progressbar';
import ReactPaginate from 'react-paginate';
import { HiSearch } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi"
import {HiHeart} from "react-icons/hi"


const Recipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.Recipe.recipes.recipes);
  const status = useSelector((state) => state.Recipe.status);
  const error = useSelector((state) => state.Recipe.error);
  const wishlistData = useSelector((state) => state.wishlists.wishlistItem);
  const maxLenth = 50;


  const [pageNumber, setPageNumber] = useState(0);
  const recipesPerPage = 16;
  const pageVisited = pageNumber * recipesPerPage;

  const [searchVal, setSearchVal] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchVal(value);

    const filtered = recipes.filter((recipe) =>
      recipe.Title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRecipes(filtered);
    setPageNumber(0);
  };

  const addWishhandler = (recipes) => {
    const isRecipeInWishlist = wishlistData.some((item) => item._id === recipes._id);
    if (isRecipeInWishlist) {
      console.log('Recipe already in wishlist!');
    } else {
      dispatch(addToWishlist(recipes));
    }
  }

  const recipesToDisplay = searchVal ? filteredRecipes : recipes || [];
  const displayRecipes = recipesToDisplay.length > 0 ? (
    recipesToDisplay
      .slice(pageVisited, pageVisited + recipesPerPage)
      .map((recipe) => (

        <div key={recipe._id}>
          <div className='border rounded-xl flex flex-col w-[300px] p-3'>
            <div>
              <Link to={`/recipe/${recipe._id}`}>
                <img
                  src={`${window.location.origin}/images/${recipe.Image_Name}.jpg`}
                  alt={recipe.Title}
                  className="w-80 rounded-lg"
                />
              </Link>
            </div>
            <h2 className=' color-[#252525]  text-lg font-bold mt-5'>
              {recipe.Title.length > maxLenth
                ? `${recipe.Title.substring(0, maxLenth)}...`
                : recipe.Title}

            </h2>

            <button onClick={() => addWishhandler(recipe)}>
              {wishlistData.some((item) => item._id === recipe._id) ? (
                <HiHeart />
              ) : (
                <HiOutlineHeart />
              )}
            </button>


            {/* <p>
              <strong>Ingredients:</strong>{' '}
              {recipe.Ingredients.length > maxLenth
                ? `${recipe.Ingredients.substring(0, maxLenth)}...`
                : recipe.Ingredients}
            </p> */}
            {/* <p>
              <strong>Instructions:</strong>{' '}
              {recipe.Instructions.length > maxInstr
                ? `${recipe.Instructions.substring(0, maxInstr)}...`
                : recipe.Instructions}
            </p> */}
          </div>
        </div>

      ))
  ) : (
    <h3>No recipes found.</h3>
  );

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setPageNumber(selectedPage);
  };

  useEffect(() => {
    dispatch(fetchRecipedata());
  }, [dispatch]);

  if (!recipes) {
    return <div>
      <Progressbar />
    </div>;
  }

  if (status === 'loading') {
    return <div> Loading... </div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='w-[90%] max-w-7xl mx-auto'>
      <div className='flex w-1/2 mx-auto mb-10 text-center bg-[#fff] rounded-full border border-[#D9D9D9]'>
        <input
          type="text"
          value={searchVal}
          onChange={handleSearchChange}
          placeholder="Search for recipes..."
          className=' w-full  bg-transparent focus:outline-none focus-visible:none px-5 pt-3 pb-3'
        />
        <button className='bg-[#D9D9D9] rounded-3xl pl-2'>
          <HiSearch
            className=' font-extralight text-[#000] text-3xl mr-2'
          />
        </button>

      </div>
      <div className='flex-wrap flex sm:justify-start justify-center gap-4'>
        {displayRecipes}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(recipesToDisplay.length / recipesPerPage)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        disabledClassName="hidden"
        activeClassName="paginationActive"
        className='paginate text-base flex flex-nowrap mt-10 mb-10 justify-center'
      />
    </div>
  );
};

export default Recipe;
