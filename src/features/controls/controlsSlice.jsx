import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quantity: 1, 

};

export const controlsSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        setQuantity: (state, action) => {
            state.quantity = action.payload;
        },
       
    }
})

//export actions
export const { setQuantity } = controlsSlice.actions;

//export data
export const selectQuantity = (state) => state.controls.quantity;

export default controlsSlice.reducer;