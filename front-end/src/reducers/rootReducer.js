import { combineReducers } from 'redux';
import activityReducer from './activityReducer'; 
import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({
  activity: activityReducer,
  Recipe: recipeReducer,
});

export default rootReducer;