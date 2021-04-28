import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//Define the inital state of Post:
const initialState = {
    title: '',
    text: '',
    media: [],
    timestamp: '',
    points: '',
    children: ''
}

export const getLocalData = createAsyncThunk('post/fetchLocalData', async () => {
    const response = await fetch('fakedata.json').catch(err => {console.log(err)});
    return response
})


export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers: {
        
    }
})