import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  storeFavourites,
  selectFavourites,
  selectFavouritesInfo,
} from "./recipeManagerSlice";
import { getRecipesInfo } from "./recipeAPI";
import axios from "axios";
import ToggleFavouritesButton from "../../components/ToggleFavouritesButton";
import { Link } from "react-router-dom";

const SqlRecipesList = () => {
  const favourites = useSelector(selectFavourites);
  const favouritesInfo = useSelector(selectFavouritesInfo);
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
      dispatch(storeFavourites(results.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  const favouritesIds = favourites.map((recipe) => recipe.recipeId).join(",");
  //console.log("ARRAY 1:", favouritesIds);

  useEffect(() => {
    getRecipesInfo(favouritesIds);
  }, []);

  //console.log("ARRAY 2:", favouritesInfo);

  const renderedFavouriteRecipes = favouritesInfo.map((recipe) => (
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
