import { configureStore } from '@reduxjs/toolkit';
import storeRecipesReducer from '../features/storeRecipes/recipesSlice';
import searchInputReducer from '../features/searchInput/searchInputSlice'


export const store = configureStore({
  reducer: {
    storeRecipes: storeRecipesReducer,
    searchInput: searchInputReducer,
  },
});
