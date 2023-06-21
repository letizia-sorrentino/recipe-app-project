import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import recipeReducer from '../features/recipe/recipeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipe: recipeReducer,
  },
});
