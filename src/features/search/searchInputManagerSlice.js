import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchInput: '', 
    quantity: 1,
};

export const searchInputManagerSlice = createSlice({
    name: 'searchInputManager',
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setQuantity: (state, action) => {
            state.quantity = action.payload;
        },

    }
})

//export actions
export const { setSearchInput, setQuantity } = searchInputManagerSlice.actions;

//export data
export const selectSearchInput = (state) => state.searchInputManager.searchInput;
export const selectQuantity = (state) => state.controls.quantity;


export default searchInputManagerSlice.reducer;
