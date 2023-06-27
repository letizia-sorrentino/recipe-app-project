import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipes: [],
    status: 'idle',
    error: null
};

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        storeRecipes: (state, action) => {
            state.recipes = action.payload;
        },
        // filterRecipesbyIngredients: (state, action) => {
        //     const filteredRecipes = state.recipes.filter((recipe) => {
        //         return recipe.ingredients === action.payload;
        //     })
        // },
    }
})

//export actions
export const { storeRecipes, filterRecipesbyIngredients } = recipesSlice.actions;

//export data
export const selectAllRecipes = (state) => state.recipes.recipes;

export default recipesSlice.reducer;
