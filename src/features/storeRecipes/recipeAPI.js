import axios from 'axios';
import apiKey from './config';
import { store } from '../../app/store';
import { storeRecipes } from '../storeRecipes/storeRecipesSlice';

// get recipes from API
const getData = async () => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`);
        //console.log(data);
        store.dispatch(storeRecipes(data));
        //console.log(data.recipes[0].title);

    } catch (error) {
        console.log(error);
    }
}

export default getData;

