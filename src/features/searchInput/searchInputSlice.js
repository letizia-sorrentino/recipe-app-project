import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchInput: '', 

};

export const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            console.log(action.payload);
            state.searchInput = action.payload;
        },

        clearSearchInput: () => {
            return '';
        },
    }
})

//export actions
export const { setSearchInput, clearSearchInput } = searchInputSlice.actions;

//export data
export const selectSearchInput = (state) => state.searchInput.searchInput;

export default searchInputSlice.reducer;
