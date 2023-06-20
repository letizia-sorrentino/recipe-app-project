import axios from 'axios';
import apiKey from './config';

// get recipes from API

const getData = async () => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`);
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

export default getData;

