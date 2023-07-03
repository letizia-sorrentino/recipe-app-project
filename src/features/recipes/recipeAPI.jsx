import axios from "axios";
import apiKey from "./config";
import { store } from "../../app/store";
import { storeRecipes } from "./recipeManagerSlice";

// get recipes from API based on search input
export const getRecipes = async (searchInput) => {
  try {
    console.log("get recipes");
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&query=${searchInput}`
    );
    
    //send data to the store
    store.dispatch(storeRecipes(data.results));
  } catch (error) {
    console.log(error);
  }
};

// get random recipes results from API
export const getRandomRecipes = async () => {
  try {
    console.log("get recipes");

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}`
    );
    //send data to the store
    store.dispatch(storeRecipes(data.recipes));
  } catch (error) {
    console.log(error);
  }
};

//get recipes by meal type
export const getRecipesByType = async (type) => {
  try {
    console.log("get recipes");

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&type=${type}`
    );
    //send data to the store
    store.dispatch(storeRecipes(data.results));
  } catch (error) {
    console.log(error);
  }
};

// get recipes by diet
export const getRecipesByDiet = async (diet) => {
  try {
    console.log("get recipes");

    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&diet=${diet}`
    );
    console.log(data);
    //send data to the store
    store.dispatch(storeRecipes(data.results));
  } catch (error) {
    console.log(error);
  }
};
