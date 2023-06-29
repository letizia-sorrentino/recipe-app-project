import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../features/recipes/recipesSlice';
import searchInputReducer from '../features/searchInput/searchInputSlice'
import likeInputReducer from '../features/likeInput/likeInputSlice'

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    searchInput: searchInputReducer,
    likeInput: likeInputReducer,
  },
});
