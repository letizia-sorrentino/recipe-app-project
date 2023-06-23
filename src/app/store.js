import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import storeRecipesReducer from '../features/storeRecipes/storeRecipesSlice';
import searchInputReducer from '../features/searchInput/searchInputSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    storeRecipes: storeRecipesReducer,
    searchInput: searchInputReducer,
  },
});
