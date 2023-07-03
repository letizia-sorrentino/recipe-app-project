import { configureStore } from '@reduxjs/toolkit';
import recipeManagerReducer from '../features/recipes/recipeManagerSlice';
import searchInputManagerReducer from '../features/search/searchInputManagerSlice'
// /import favouriteRecipesManagerReducer from "../features/favourites/favouriteRecipesManager"
import controlsReducer from '../features/controls/controlsSlice'

export const store = configureStore({
  reducer: {
    recipeManager: recipeManagerReducer,
    searchInputManager: searchInputManagerReducer,
    controls: controlsReducer,
   // favouriteRecipesManager: favouriteRecipesManagerReducer,
  },
});
