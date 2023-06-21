import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDays: [], 
  recipeTitle: "",
  plannerItems: localStorage.getItem('plannerItems') ? JSON.parse(localStorage.getItem('plannerItems')) : [],
};

if (!Array.isArray(initialState.plannerItems)) {
  initialState.plannerItems = []; // Initialize as an empty array if not already an array
}


export const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    addToPlanner: (state, action) => {
      const { recipeId, days, Title } = action.payload;
      console.log("plannerItems type:", typeof state.plannerItems);
    
      const newItem = {
        recipeId,
        days,
        Title,
      };
    
      state.plannerItems = [...state.plannerItems, newItem];
    
      state.selectedDays = days;
      state.recipeTitle = Title;
    
      console.log("reducer", Title, recipeId, days);
      localStorage.setItem('plannerItems', JSON.stringify(state.plannerItems));
    },
    
    
    removeFromPlanner: (state, action) => {
      const recipeId = action.payload;
      state.plannerItems = state.plannerItems.filter(item => item.recipeId !== recipeId);
      localStorage.setItem('plannerItems', JSON.stringify(state.plannerItems));
    },    
    clearPlanner: (state) => {
      state.plannerItems = []; // Set plannerItems as an empty array
    },
    setSelectedDays: (state, action) => {
        state.selectedDays = action.payload;
      }, 
  },
});

export const { addToPlanner, removeFromPlanner, clearPlanner, setSelectedDays } = plannerSlice.actions;
export default plannerSlice.reducer;
