import { createSlice } from "@reduxjs/toolkit";

//Define the inital state of Search:
const initialState = {
  currentSub: "popular",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentSub: (state, action) => {
      state.currentSub = action.payload;
    },
  },
});

export const { setCurrentSub } = searchSlice.actions;

export default searchSlice.reducer;
