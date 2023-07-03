import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  status: "idle",
  error: null,
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
    addRecipe: (state, action) => {
      state.recipes.findIndex((recipe) => {return recipe.id === action.payload;});
      //state.recipes.push(indexOf);

    },

    removeRecipe: (state, action) => {
      const indexOf = state.recipes.findIndex((recipe) => {return recipe.id === action.payload;});
      state.recipes.splice(indexOf, 1);
    },
  },
});

//export actions
export const {
  storeRecipes,
  filterRecipesbyType,
  filterRecipesByDiet,
  addRecipe,
  removeRecipe,
} = recipeManagerSlice.actions;

//export data
export const selectAllRecipes = (state) => state.recipeManager.recipes;

export default recipeManagerSlice.reducer;
