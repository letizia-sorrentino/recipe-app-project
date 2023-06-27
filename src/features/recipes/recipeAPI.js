import axios from 'axios';
import apiKey from './config';
import { store } from '../../app/store';
import { storeRecipes } from './recipesSlice';

// get recipes from API


export const getRecipes = async (searchInput) => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&query=${searchInput}`);
        //send data to the store
        store.dispatch(storeRecipes(data.results));
        //console.log(data.recipes[0].title);
        console.log(data)

    } catch (error) {
        console.log(error);
    }
}


export const getRandomRecipes = async () => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}`);
        //send data to the store
        store.dispatch(storeRecipes(data.recipes));
        //console.log(data.recipes[0].title);
        console.log(data)

    } catch (error) {
        console.log(error);
    }
}



