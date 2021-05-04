import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentFilter: 'hot'
}

export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        switchFilter: (state, action) => {
            state.currentFilter = action.payload.filter;
        } 
    }
})

export const selectFilter = (state) => state.filter.currentFilter;

export const { switchFilter } = filterSlice.actions;

export default filterSlice.reducer;