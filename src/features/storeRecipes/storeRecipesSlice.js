import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const storeRecipesSlice = createSlice({
    name: 'storeRecipe',
    initialState,
    reducers: {
        storeRecipes: (state, action) => {
            state.recipes = action.payload;
        },

    }
})

//export actions
export const { storeRecipes } = storeRecipesSlice.actions;

//export data
export const selectRecipes = (state) => state.recipes;

export default storeRecipesSlice.reducer;
