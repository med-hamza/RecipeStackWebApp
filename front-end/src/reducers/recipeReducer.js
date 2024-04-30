import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchRecipedata = createAsyncThunk(
  'data/fetchRecipedata',
  async (_, { extraArgument }) => {
    const response = await fetch('http://localhost:4000/data/recipes');
    const data = await response.json();
    return data;
  }

);

export const fetchRecipeById = createAsyncThunk('recipe/fetchRecipeById', async (id) => {
  const response = await fetch(`http://localhost:4000/data/recipes/${id}`);
  const data = await response.json();
  return data;
});


const recipedata = createSlice({
  name: 'recipe',
  initialState: {
    recipes: [],
    status: 'idle',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipedata.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipedata.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
      })
      .addCase(fetchRecipedata.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(fetchRecipeById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const { reducer: recipeReducer } = recipedata;
export default recipedata.reducer;