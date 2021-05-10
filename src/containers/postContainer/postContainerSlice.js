import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts:[],
    isLoading: false,
    hasError: false,
    showPosts: false,
};

export const getLocalData = createAsyncThunk(
    'postContainer/getLocalData',
    async () => {
        const response = await fetch('fakedata.json');
        const output = await response.json()
        return output;
    }
)

export const getRedditData = createAsyncThunk(
    'postContainer/getRedditData',
    async (url) => {
        const response = await fetch(url);
        const output = await response.json();
        return output;
    }
)

export const postContainerSlice = createSlice({
    name:'postContainer',
    initialState,
    reducers:{
        toggleShowPosts: (state, action) => {
            state.showPosts = action.payload
        }
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
        },
        [getRedditData.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getRedditData.fulfilled]: (state, action) => {
            state.posts = [...action.payload.data.children];
            state.isLoading = false;
            state.hasError = false;
        },
        [getRedditData.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectPosts = (state) => state.postContainer.posts

export const selectLoading = (state) => {
    return state.postContainer.loading;
}

export const { toggleShowPosts } = postContainerSlice.actions;

export default postContainerSlice.reducer;