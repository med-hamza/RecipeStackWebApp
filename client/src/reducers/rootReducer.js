import { combineReducers } from 'redux';
import activityReducer from './activityReducer';
import recipeReducer from './recipeReducer';
import wishReducer from './wishReducer';
import recipeplanner from './recipeplanner';
import authReducer from './authReducer';
import { apiSlice } from './slices/apiSlice';

const rootReducer = combineReducers({
  activity: activityReducer,
  recipe: recipeReducer,
  wishlists: wishReducer,
  planner: recipeplanner,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;