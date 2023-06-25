import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipes: [],
    status: 'idle',
};

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        storeRecipes: (state, action) => {
            state.recipes = action.payload;
        },

    }
})

//export actions
export const { storeRecipes } = recipesSlice.actions;

//export data
export const selectRecipes = (state) => state.storeRecipes.recipes;

export default recipesSlice.reducer;
