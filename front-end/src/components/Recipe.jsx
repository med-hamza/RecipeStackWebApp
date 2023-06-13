import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipedata } from '../reducers/recipeReducer';
import { Link } from 'react-router-dom';
import Progressbar from './Progressbar';
import ReactPaginate from 'react-paginate';

const Recipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.Recipe.recipes.recipes);
  const status = useSelector((state) => state.Recipe.status);
  const error = useSelector((state) => state.Recipe.error);
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

  const recipesToDisplay = searchVal ? filteredRecipes : recipes || [];
  const displayRecipes = recipesToDisplay.length > 0 ? (
    recipesToDisplay
      .slice(pageVisited, pageVisited + recipesPerPage)
      .map((recipe) => (  
     
        <div  key={recipe._id}>
           <Link to={`/recipe/${recipe._id}`}>
          <div className='border rounded-xl flex flex-col sm:w-[300px] w-[160px] p-3'>
            <div>
              <img
                src={`${window.location.origin}/images/${recipe.Image_Name}.jpg`}
                alt={recipe.Title}
                className="w-80 rounded-lg"
              />
            </div>
            <h2 className=' color-[#252525]  text-lg font-bold mt-5'>
              {recipe.Title.length>maxLenth
              ? `${recipe.Title.substring(0, maxLenth)}...`
              : recipe.Title}
             
            </h2>
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
          </Link>
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
      <input type="text" value={searchVal} onChange={handleSearchChange} placeholder="Search Recipe" />
      <div className='flex-wrap flex sm:justify-start justify-center sm:gap-4 gap-2'>
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
