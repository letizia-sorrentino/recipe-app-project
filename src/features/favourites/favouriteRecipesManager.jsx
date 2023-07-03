// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
// favouriteRecipes: [],
// };

// export const favouriteRecipesManagerSlice = createSlice(
//     {
//         name: 'favouriteRecipesManager',
//         initialState,
//         reducers: {
//             addRecipe: (state, action) => {
//                 state.favouriteRecipes.push(action.payload);
//             },

//             removeRecipe: (state, action) => {
//                 state.favouriteRecipes.filter(recipe => recipe.id !== action.payload.id)
//             },

//         },
//     }
// )

// export const {addRecipe, removeRecipe} = favouriteRecipesManagerSlice.actions;

// export const selectFavouriteRecipes = (state) => state.favouriteRecipesManager.favouriteRecipes;

// export default favouriteRecipesManagerSlice.reducer;