import { createSlice } from '@reduxjs/toolkit';

//Define the inital state of Post:
const initialState = {
    title: '',
    text: '',
    gallery: [],
    timestamp: '',
    points: '',
    children: ''
}

export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers: {
        setGallery: (state, action) => {
            console.log(action.payload)
            state.gallery = [action.payload]
        }
    }
})

export const { setGallery } = postSlice.actions;

export default postSlice.reducer;