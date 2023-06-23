import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState,
    reducers: {
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        }
    }
})

//export actions
export const { setSearchInput } = searchInputSlice.actions;

//export data
export const selectSearchInput = (state) => state.searchInput;

export default searchInputSlice.reducer;
