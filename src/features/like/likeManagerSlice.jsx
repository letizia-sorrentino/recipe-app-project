import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    likeInput: '',
    fillColour: 'none',

};

export const likeManagerSlice = createSlice({
    name: 'likeManager',
    initialState,
    reducers: {
        setLikeInput: (state, action) => {
            state.likeInput = action.payload;
        },
        setFillColour: (state, action) => {
            state.fillColour = action.payload;
        }
    }
})

///export actions
export const { setLikeInput, setFillColour } = likeManagerSlice.actions;

//export data
export const selectLikeInput = (state) =>state.likeManager.likeInput;
export const selectFillColour = (state) => state.likeManager.fillColour;

export default likeManagerSlice.reducer;