import axios from 'axios';
import apiKey from './config';
import { store } from '../../app/store';
import { storeRecipes } from './recipesSlice';

// get recipes from API based on search input
export const getRecipes = async (searchInput) => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&query=${searchInput}`);
        //send data to the store
        store.dispatch(storeRecipes(data.results));

    } catch (error) {
        console.log(error);
    }
}

// get random recipes results from API
export const getRandomRecipes = async () => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}`);
        //send data to the store
        store.dispatch(storeRecipes(data.recipes));

    } catch (error) {
        console.log(error);
    }
}



