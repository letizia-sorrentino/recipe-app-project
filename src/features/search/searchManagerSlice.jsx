import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchInput: '', 

};

export const searchManagerSlice = createSlice({
    name: 'searchManager',
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
export const { setSearchInput, clearSearchInput } = searchManagerSlice.actions;

//export data
export const selectSearchInput = (state) => state.searchManager.searchInput;

export default searchManagerSlice.reducer;
