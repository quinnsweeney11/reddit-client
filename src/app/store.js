import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postContainerReducer from '../containers/postContainer/postContainerSlice';
import postReducer from '../features/post/postSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    postContainer: postContainerReducer,
  },
});
