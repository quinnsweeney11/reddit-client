import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postContainerReducer from "../containers/postContainer/postContainerSlice";
import filterReducer from "../features/filter/filterSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    postContainer: postContainerReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});
