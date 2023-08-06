import {
  storeSqlRecipes,
  selectFavourites,
  storeFavoritesRecipesInfo,
  selectFavouritesRecipesInfo,
} from "./recipeManagerSlice";
import { useEffect } from "react";
import axios from "axios";
import ToggleFavouritesButton from "../../components/ToggleFavouritesButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import apiKey from "./config";

const SqlRecipesList = () => {
  const favourites = useSelector(selectFavourites);
  const favouritesRecipesInfo = useSelector(selectFavouritesRecipesInfo);
  const dispatch = useDispatch();

  //fetch recipes from SQL
  const fetchFavourites = async () => {
    const token = localStorage.getItem("token");

    try {
      const results = await axios.get("http://localhost:6001/favourites/", {
        headers: {
          token: token,
        },
      });
      //console.log(results.data.results); //console log the array containing the recipeIds;
      //send data to the store
      dispatch(storeSqlRecipes(results.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  const favouriteRecipesIds = favourites.map((recipe) => recipe.recipeId);
  //console.log("ARRAY 1:", favouriteRecipesIds);

  const favouriteRecipesString = favouriteRecipesIds.join(",");
  //console.log(favouriteRecipesString);

  // get bulk recipes info
  const getRecipesInfo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/informationBulk?ids=${favouriteRecipesString}?&apiKey=${apiKey}`
      );

      dispatch(storeFavoritesRecipesInfo(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipesInfo();
    console.log("ARRAY 2:", favouritesRecipesInfo);
  }, [favouriteRecipesString]);

  const renderedFavouriteRecipes = favouritesRecipesInfo.map((recipe) => (
    <div className="recipeListContainer" key={recipe.id}>
      <div className="recipeTile">
        <img
          className="savedRecipeImage"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="recipeListInfo">
          <Link className="recipeLink" to={"/recipe/" + recipe.id}>
            <h3 className="recipeTitle">{recipe.title}</h3>
          </Link>
          <ToggleFavouritesButton id={recipe.id} />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section>
        {renderedFavouriteRecipes.length === 0 && (
          <p className="userMessage">You have not saved any recipes yet!</p>
        )}{" "}
        {renderedFavouriteRecipes}
      </section>
    </>
  );
};

export default SqlRecipesList;
