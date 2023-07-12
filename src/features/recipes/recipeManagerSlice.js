import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  status: "idle",
  error: null,

  favourites: [],

  recipesDetails: [],
};

export const recipeManagerSlice = createSlice({
  name: "recipeManager",
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
    },
    toggleFavouritedRecipe: (state, action) => {
      if (state.favourites.includes(action.payload)) {
        //remove item
        const indexOf = state.favourites.indexOf(action.payload);
        state.favourites.splice(indexOf, 1);
      } else {
        state.favourites.push(action.payload)
      }
    },
    storeRecipesDetails: (state,action) => {
      state.recipesDetails = action.payload;
    }

  },
});

//export actions
export const {
  storeRecipes,
  filterRecipesbyType,
  filterRecipesByDiet,
  toggleFavouritedRecipe,
  storeRecipesDetails
} = recipeManagerSlice.actions;

//export data
export const selectAllRecipes = (state) => state.recipeManager.recipes;
export const selectFavourites = (state) => state.recipeManager.favourites;
export const selectRecipesDetails = (state) => state.recipeManager.recipesDetails;

export default recipeManagerSlice.reducer;
