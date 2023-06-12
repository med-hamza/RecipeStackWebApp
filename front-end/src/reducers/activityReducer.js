import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Define an async thunk for fetching data
export const fetchActivities = createAsyncThunk(
  'activities/fetchActivities',
  async () => {
    const response = await fetch('http://localhost:4000/api');
    const data = await response.json();
    return data;
  }
);
export const addActivity = createAsyncThunk(
  'activities/addActivity',
  async ({ name}, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4000/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
      });

      if (!response.ok) {
        throw new Error('Failed to add activity');
      }

      const data = await response.json();
      console.log("dara",data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateActivity = createAsyncThunk(
  'activities/updateActivity',
  async ({ id, name, duration }, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:4000/api/update/${id}`, {
        method: 'PUT', // or 'PATCH' depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, duration }),
      });

      if (!response.ok) {
        throw new Error('Failed to update activity');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

  
const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    activities: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchActivities.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchActivities.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.activities = action.payload;
    })
    .addCase(fetchActivities.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(updateActivity.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const updatedActivity = action.payload;
      const index = state.activities.findIndex((activity) => activity.id === updatedActivity.id);
      if (index !== -1) {
        state.activities[index].name = updatedActivity.name; // Update the name property
      }
    })
    .addCase(addActivity.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const newActivity = action.payload;
      state.activities.push(newActivity); // Add the new activity to the state
    })
  },
});

export const { reducer: activityReducer } = activitySlice;
export default activitySlice.reducer;
