import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeFavourites, selectFavouritesRecipes } from "./recipeManagerSlice";
import { getRecipesInfo } from "./recipeAPI";
import axios from "axios";
import ToggleFavouritesButton from "../../components/ToggleFavouritesButton";
import { Link } from "react-router-dom";

const SqlRecipesList = () => {
  const favouritedRecipes = useSelector(selectFavouritesRecipes);
  const dispatch = useDispatch();

  //fetch recipes from SQL
  const fetchFavourites = useCallback(async () => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.get("http://localhost:6001/favourites/", {
        headers: {
          token: token,
        },
      });
      console.log(token);
      console.log(data);
      console.log(data.results);

      const favouritesIds = data.results
        .map((recipe) => recipe.recipeId)
        .join(",");
      //send data to the store
      dispatch(storeFavourites(favouritesIds));
      getRecipesInfo(favouritesIds);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchFavourites();
  }, [fetchFavourites]);

  const renderedFavouriteRecipes = favouritedRecipes.map((recipe) => (
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
