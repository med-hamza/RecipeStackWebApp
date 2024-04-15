import React, { useState } from 'react'

import { HiOutlineHeart } from "react-icons/hi"
import { HiHeart } from "react-icons/hi"
import { Link } from 'react-router-dom'
import { HiPlusSmall } from "react-icons/hi2";
import { addToPlanner } from "../reducers/recipeplanner"
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch } from 'react-redux'


const FeatureRecipe = ({ recipes, wishlistData, addWishhandler }) => {

    const maxLenth = 28;
    const [Days, setDays] = useState([]);
    const [showDaysMap, setShowDaysMap] = useState({});

    const dispatch = useDispatch()



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
        console.log("Selected Days:", newSelectedDays);
    };





    const isRecipeDaySelected = (recipeId, day) => {
        return Days.some((item) => item.recipeId === recipeId && item.days.includes(day));
    };

    return (
        <div className='mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {recipes && recipes.slice(13, 16).map((recipe) => (
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
                                    {showDaysMap[recipe._id] ? (<div className="absolute checkbox w-[200px] bg-white top-[7px] sm:top-14  sm:right-20 right-[-6px]">
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
                ))}

            </div>
        </div>
    )
}

export default FeatureRecipe
