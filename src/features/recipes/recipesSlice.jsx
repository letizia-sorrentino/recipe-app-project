import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipes: [],
    status: 'idle',
    error: null
};

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        storeRecipes: (state, action) => {
            state.recipes = action.payload;
        },
        setLikeInput: (state, action) => {
            state.likeInput = action.payload;
        }

    }
})

//export actions
export const { storeRecipes, setLikeInput } = recipesSlice.actions;

//export data
export const selectAllRecipes = (state) => state.recipes.recipes;
export const selectLikeInput = (state) =>state.recipes.likeInput;

export default recipesSlice.reducer;
