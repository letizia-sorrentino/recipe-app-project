import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const storeRecipesSlice = createSlice({
    name: 'storeRecipes',
    initialState,
    reducers: {
        storeRecipes: (state, action) => {
            state.storeRecipes = action.payload;
        },

    }
})

//export actions
export const { storeRecipes } = storeRecipesSlice.actions;

//export data
export const selectRecipes = (state) => state.storeRecipes.storeRecipes;

export default storeRecipesSlice.reducer;
