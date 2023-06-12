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
  const maxInstr = 200;

  const [pageNumber, setPageNumber] = useState(0);
  const recipesPerPage = 15;
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
        <div key={recipe._id}>
            <h2>
              <Link to={`/recipe/${recipe._id}`}>{recipe.Title}</Link>
            </h2>
            <p>
              <strong>Ingredients:</strong>{' '}
              {recipe.Ingredients.length > maxLenth
                ? `${recipe.Ingredients.substring(0, maxLenth)}...`
                : recipe.Ingredients}
            </p>
            <p>
              <strong>Instructions:</strong>{' '}
              {recipe.Instructions.length > maxInstr
                ? `${recipe.Instructions.substring(0, maxInstr)}...`
                : recipe.Instructions}
            </p>
            <p>
              <img
                src={`${window.location.origin}/images/${recipe.Image_Name}.jpg`}
                alt={recipe.Title}
                className="w-80"
              />
            </p>
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
    return  <div>
       <Progressbar />
       </div>;
  }

  if (status === 'loading') {
    return   <div> Loading... </div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recipe</h2>
      <input type="text" value={searchVal} onChange={handleSearchChange} placeholder="Search Recipe" />
      {displayRecipes}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(recipesToDisplay.length / recipesPerPage)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
};

export default Recipe;
