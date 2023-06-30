import { configureStore } from '@reduxjs/toolkit';
import recipeManagerReducer from '../features/recipes/recipeManagerSlice';
import searchInputManagerReducer from '../features/search/searchInputManagerSlice'
import likeManagerReducer from '../features/like/likeManagerSlice'
import controlsReducer from '../features/controls/controlsSlice'

export const store = configureStore({
  reducer: {
    recipeManager: recipeManagerReducer,
    searchInputManager: searchInputManagerReducer,
    likeInput: likeManagerReducer,
    controls: controlsReducer,
  },
});
