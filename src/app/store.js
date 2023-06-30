import { configureStore } from '@reduxjs/toolkit';
import recipeManagerReducer from '../features/recipes/recipeManagerSlice';
import searchManagerReducer from '../features/search/searchManagerSlice'
import likeManagerReducer from '../features/like/likeManagerSlice'
import controlsReducer from '../features/controls/controlsSlice'

export const store = configureStore({
  reducer: {
    recipeManager: recipeManagerReducer,
    searchInput: searchManagerReducer,
    likeInput: likeManagerReducer,
    controls: controlsReducer,
  },
});
