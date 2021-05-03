import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pics:[],
    currentPic:0
}

export const picCarouselSlice = createSlice({
    name:'picCarousel',
    initialState,
    reducers:{
        nextPic: (state) => {
            state.currentPic += 1;
        },
        previousPic: (state) => {
            state.currentPic -= 1;
        }
    }
})

export const { nextPic, previousPic } = picCarouselSlice.actions;

export default picCarouselSlice.reducers;