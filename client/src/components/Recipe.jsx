import { addToPlanner } from "../reducers/recipeplanner"
import React, { useState } from 'react';
import { addToWishlist } from '../reducers/wishReducer'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { HiSearch } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi"
import { HiHeart } from "react-icons/hi"
import Swal from 'sweetalert2';
import { HiPlusSmall } from "react-icons/hi2";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch } from "react-redux";



const Recipe = ({ recipes, wishlistData }) => {
  const dispatch = useDispatch();
  const maxLenth = 28;

  const [pageNumber, setPageNumber] = useState(0);
  const [showDaysMap, setShowDaysMap] = useState({});

  const recipesPerPage = 16;
  const pageVisited = pageNumber * recipesPerPage;



  const [searchVal, setSearchVal] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const [Days, setDays] = useState([]);


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


  const handleDaySelect = (recipeId, day, Title) => {
    const recipeIndex = Days.findIndex((item) => item.recipeId === recipeId);

    const newSelectedDays = [...Days];

    if (recipeIndex >= 0) {
      const recipeDays = newSelectedDays[recipeIndex].days;
      const dayIndex = recipeDays.indexOf(day);

      if (dayIndex >= 0) {
        recipeDays.splice(dayIndex, 1);
        if (recipeDays.length === 0) {
          newSelectedDays.splice(recipeIndex, 1);
        }
      } else {
        recipeDays.push(day);
      }
    } else {
      const recipe = recipes.find((recipe) => recipe._id === recipeId);
      const recipeTitle = recipe ? recipe.Title : '';
      newSelectedDays.push({ recipeId, days: [day], title: recipeTitle });
    }

    setDays(newSelectedDays);

  };





  const isRecipeDaySelected = (recipeId, day) => {
    return Days.some((item) => item.recipeId === recipeId && item.days.includes(day));
  };



  const plannerdays = Days.map((pindex) => (
    <div key={pindex.recipeId}>
      {pindex.recipeId}
      {pindex.title}
      <div>
        {pindex.days}
      </div>
      <div> </div>

    </div>
  ));


  const renderDayCheckboxes = (recipeId) => {
    const showDays = showDaysMap[recipeId];
    if (!showDays) {
      return null;
    }
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const recipe = recipes.find((recipe) => recipe._id === recipeId);
    const recipeTitle = recipe ? recipe.Title : '';

    return days.map((day, index) => (
      <div key={index} className="px-5">
        <input
          className=" mr-3"
          type="checkbox"
          checked={isRecipeDaySelected(recipeId, day)}
          onChange={() => handleDaySelect(recipeId, day, recipe.Title)} // Use recipe.Title instead of recipeTitle
        />
        <label className="text-[#9b9b9b] text-sm">{day}</label>
      </div>
    ));
  };



  const recipesToDisplay = searchVal ? filteredRecipes : (recipes || []);


  const displayRecipes = recipesToDisplay.length > 0 ? (
    recipesToDisplay
      .slice(pageVisited, pageVisited + recipesPerPage)
      .map((recipe) => (

        <div key={recipe._id}>
          <div className='border rounded-xl flex flex-col mx-auto sm:w-[300px] w-[280px]  relative shadow-md'>
            <div className=''>
              <Link to={`/recipes/${recipe._id}`}>
                <img
                  src={`${window.location.origin}/images/${recipe.Image_Name}.jpg`}
                  alt={recipe.Title}
                  className="w-80 rounded-t-lg rounded-r-lg"
                />
                <div className='pb-2 pt-2'>
                  <h2 className=' color-[#252525] px-3 text-lg font-bold mt-2'>
                    {recipe.Title.length > maxLenth
                      ? `${recipe.Title.substring(0, maxLenth)}...`
                      : recipe.Title}

                  </h2>
                </div>
                <div >
                  <p className=' pr-2 pb-2 text-sm text-right  text-[#AD343E]'> {recipe.Ingredients.split(',').length} ingredients </p>
                </div>
              </Link>
              <div className='  border-t-2 border-[#D8D8D8] '>
                <div className=" flex flex-row gap-3 items-center justify-center px-2 pb-2 pt-2">
                  <button aria-label="Add favorite" onClick={() => addWishhandler(recipe)}>
                    {wishlistData.some((item) => item._id === recipe._id) ? (
                      <HiHeart className=' text-[#AD343E]  text-2xl' />
                    ) : (
                      <HiOutlineHeart className='text-[#B7B7B8] hover:text-[#AD343E] text-2xl' />
                    )}
                  </button>
                  <button onClick={() => setShowDaysMap(prevState => ({ ...prevState, [recipe._id]: !prevState[recipe._id] }))}>
                    <CiCirclePlus className=" text-2xl text-[#B7B7B8] hover:text-[#AD343E]" />
                  </button>
                </div>

              </div>


              <div className="day-checkboxes">
                {showDaysMap[recipe._id] ? (<div className="absolute checkbox w-[200px] bg-white top-[-20px]  sm:top-14  sm:right-20 right-[-13px]">
                  <p className="mt-3 mb-2 px-5">Add Your Recipe</p>
                  <div
                    className="flex items-center cursor-pointer add-to-planner-button px-5 mt-2 mb-2 w-full text-[#AD343E] text-left bg-[#f5f5f5]"
                    onClick={() =>
                      dispatch(
                        addToPlanner({
                          recipeId: recipe._id,
                          days: Days,
                          Title: recipe.Title,
                        })
                      )
                    }
                  >
                    <HiPlusSmall />   Add to Planner
                  </div>
                  <div className=" overflow-x-hidden overflow-y-auto max-h-[120px]">
                    {renderDayCheckboxes(recipe._id)}
                  </div>
                </div>) : null}
              </div>
            </div>
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




  return (
    <div className='w-full max-w-7xl mx-auto mt-32'>
      <div className='flex sm:w-1/2 w-4/5 mx-auto mb-10 text-center bg-[#fff] rounded-full border border-[#D9D9D9]'>
        <input
          type="text"
          value={searchVal}
          onChange={handleSearchChange}
          placeholder="Search for recipes..."
          className=' w-full  bg-transparent focus:outline-none focus-visible:none px-5 pt-3 pb-3'
        />
        <button aria-label="search recipe" className='bg-[#D9D9D9] rounded-3xl pl-2'>
          <HiSearch
            className=' font-extralight text-[#000] text-3xl mr-2'
          />
        </button>

      </div>
      <div className=' relative'>
        <div className=' absolute sm:top-20 top-2 left-10'>
          <p className='text-[#DC582A] text-lg sm:text-2xl  mb-1 sm:mb-3'>Trending now </p>
          <h1 className='sm:text-5xl text-xl  text-white font-bold'>Mike’s famous salad <br />
            with cheese</h1>
        </div>
        <img src={'/recipe_cover.png'} alt="Background" className='mb-10' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {displayRecipes}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(recipesToDisplay.length / recipesPerPage)}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        disabledClassName="hidden"
        activeClassName="paginationActive color-[#F6784C]"
        className='paginate text-base flex flex-nowrap mt-10 mb-10 justify-center'
      />
    </div>
  );
};

export default Recipe;
