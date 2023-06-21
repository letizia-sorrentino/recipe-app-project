import axios from 'axios';
import apiKey from './config';
import { store } from '../../app/store';
//import { storeRecipes } from '../counter/counterSlice';
import { storeRecipes } from '../recipe/recipeSlice';

// get recipes from API
const getData = async () => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`);
        console.log(data);

        store.dispatch(storeRecipes(data));


    } catch (error) {
        console.log(error);
    }
}

export default getData;

