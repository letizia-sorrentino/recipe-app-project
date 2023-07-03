import { configureStore } from '@reduxjs/toolkit';
import recipeManagerReducer from '../features/recipes/recipeManagerSlice';
import searchInputManagerReducer from '../features/search/searchInputManagerSlice'

export const store = configureStore({
  reducer: {
    recipeManager: recipeManagerReducer,
    searchInputManager: searchInputManagerReducer,
   
  },
});
