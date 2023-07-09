import { configureStore } from '@reduxjs/toolkit';
import recipeManagerReducer from '../features/recipes/recipeManagerSlice';
import searchInputManagerReducer from '../features/search/searchInputManagerSlice';
import accountManagerReducer from '../features/account/accountSlice'

export const store = configureStore({
  reducer: {
    recipeManager: recipeManagerReducer,
    searchInputManager: searchInputManagerReducer,
    accountManager: accountManagerReducer,

  },
});
