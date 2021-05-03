import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts:[],
    isLoading: false,
    hasError: false,
};

export const getLocalData = createAsyncThunk(
    'postContainer/getLocalData',
    async () => {
        const response = await fetch('fakedata.json');
        const output = await response.json()
        return output;
    }
)

export const postContainerSlice = createSlice({
    name:'postContainer',
    initialState,
    reducers:{
        
    },
    extraReducers: {
        [getLocalData.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getLocalData.fulfilled]: (state, action) => {
            state.posts = [...state.posts, ...action.payload.data.children];
            state.isLoading = false;
            state.hasError = false;
        },
        [getLocalData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectPosts = (state) => state.postContainer.posts

export const selectLoading = (state) => {
    return state.postContainer.loading;
}

export default postContainerSlice.reducer;