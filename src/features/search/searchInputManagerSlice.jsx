import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchInput: '', 

};

export const searchInputManagerSlice = createSlice({
    name: 'searchInputManager',
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            //console.log(action.payload);
            state.searchInput = action.payload;
        },

    }
})

//export actions
export const { setSearchInput } = searchInputManagerSlice.actions;

//export data
export const selectSearchInput = (state) => state.searchInputManager.searchInput;

export default searchInputManagerSlice.reducer;
