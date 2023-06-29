import axios from "axios";
import apiKey from "./config";
import { store } from "../../app/store";
import { storeRecipes } from "./recipesSlice";

// get recipes from API based on search input
export const getRecipes = async (searchInput) => {
  try {
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
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&diet=${diet}`
    );
    //send data to the store
    store.dispatch(storeRecipes(data.results));
  } catch (error) {
    console.log(error);
  }
};

// //get breakfast recipes
// export const getBreakfastRecipes = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&type=breakfast`
//     );
//     //send data to the store
//     store.dispatch(storeRecipes(data.results));
//   } catch (error) {
//     console.log(error);
//   }
// };
// //get lunch recipes
// export const getLunchRecipes = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&type=lunch`
//     );
//     //send data to the store
//     store.dispatch(storeRecipes(data.results));
//   } catch (error) {
//     console.log(error);
//   }
// };

// //get snack recipes
// export const getSnackRecipes = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&type=snack`
//     );
//     //send data to the store
//     store.dispatch(storeRecipes(data.results));
//   } catch (error) {
//     console.log(error);
//   }
// };

// //get dinner recipes
// export const getDinnerRecipes = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&type=dinner`
//     );
//     //send data to the store
//     store.dispatch(storeRecipes(data.results));
//   } catch (error) {
//     console.log(error);
//   }
// };
