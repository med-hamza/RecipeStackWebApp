import { combineReducers } from 'redux';
import activityReducer from './activityReducer';
import recipeReducer from './recipeReducer';
import wishReducer from './wishReducer';
import recipeplanner from './recipeplanner';

const rootReducer = combineReducers({
  activity: activityReducer,
  recipe: recipeReducer,
  wishlists: wishReducer,
  planner: recipeplanner,
});

export default rootReducer;