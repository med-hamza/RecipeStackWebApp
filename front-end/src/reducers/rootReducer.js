import { combineReducers } from 'redux';
import activityReducer from './activityReducer'; 
import recipeReducer from './recipeReducer';
import wishReducer from './wishReducer';

const rootReducer = combineReducers({
  activity: activityReducer,
  Recipe: recipeReducer,
  wishlists: wishReducer,
});

export default rootReducer;