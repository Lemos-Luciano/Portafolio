import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

const LuchoflixSlice = createSlice ({
  name: "Lucho",
  initialState,
  extraReducers: (builder) => {

  }
})

export const store = configureStore ({
  reducer: {
    lucho : LuchoflixSlice.reducer,
  }
})