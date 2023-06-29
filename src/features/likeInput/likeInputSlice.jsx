import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    likeInput: '',
    fillColour: 'none',

};

export const likeInputSlice = createSlice({
    name: 'like',
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
export const { setLikeInput, setFillColour } = likeInputSlice.actions;

//export data
export const selectLikeInput = (state) =>state.likeInput.likeInput;
export const selectFillColour = (state) => state.likeInput.fillColour;

export default likeInputSlice.reducer;