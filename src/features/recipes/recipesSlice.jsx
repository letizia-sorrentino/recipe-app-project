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
        filterRecipesbyType: (state, action) => {
            state.recipes = action.payload;
        },
        filterRecipesByDiet: (state, action) => {
            state.recipes = action.payload;
        }

    }
})

//export actions
export const { storeRecipes, filterRecipesbyType, filterRecipesByDiet } = recipesSlice.actions;

//export data
export const selectAllRecipes = (state) => state.recipes.recipes;
export const selectRecipesByType = (state) => state.recipes.recipes;
export const selectRecipesbyDiet = (state) => state.recipes.recipes;



export default recipesSlice.reducer;
