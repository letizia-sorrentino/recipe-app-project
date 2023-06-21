import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,

    reducers: {

        storeRecipes: (state, action) => {
            state.recipes = action.payload;
        }
    }
})

export const { storeRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
