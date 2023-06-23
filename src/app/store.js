import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import recipesReducer from '../features/storeRecipes/storeRecipesSlice';
import searchInputReducer from '../features/searchInput/searchInputSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipes: recipesReducer,
    searchInput: searchInputReducer,
  },
});
