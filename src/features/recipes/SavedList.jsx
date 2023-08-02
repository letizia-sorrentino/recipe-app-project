import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectAllRecipes, selectFavourites } from "./recipeManagerSlice";
import ToggleFavouritesButton from "../../components/ToggleFavouritesButton";
import { Link } from "react-router-dom";
import axios from "axios";

const SavedList = () => {
  const recipes = useSelector(selectAllRecipes);
  const favourites = useSelector(selectFavourites);

  const favouriteRecipes = recipes.filter((recipe) => {
    return favourites.includes(recipe.id);
  });
  //console.log(favouriteRecipes);

  const token = localStorage.getItem("token");
  let recipeId = null;
  if (favouriteRecipes.length > 0) {
    recipeId = favouriteRecipes[0].id;
  }
  console.log(recipeId);

  //save recipes to SQL
  const savedToDatabase = async (token) => {
    try {
      const results = await axios.post(
        `http://localhost:6001/favourites/`,
        { recipeId },

        {
          headers: {
            token: token,
          },
        }
      );

      console.log(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    savedToDatabase(token);
  }, [recipeId, token]);

  //fetch saved recipes from SQL
  const fetchFromDatabase = async (token) => {
    try {
      const results = await axios.get("http://localhost:6001/favourites/", {
        headers: {
          token: token,
        },
      });
      console.log(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFromDatabase(token);
  }, [token]);

  // //delete saved recipes from SQL
  // const deleteFromDatabase = async (token) => {
  //   try {
  //     const result = await axios.delete(
  //       `http://localhost:6001/favourites/${recipeId}`, { recipeId },
  //       {
  //         headers: {
  //           token: token,
  //         },
  //       }
  //     );
  //     console.log(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   deleteFromDatabase(token);
  // }, [recipeId, token]);

  const renderedFavouriteRecipes = favouriteRecipes.map((recipe) => (
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
    <section>
      {renderedFavouriteRecipes.length === 0 && (
        <p className="userMessage">You have not saved any recipes yet!</p>
      )}{" "}
      {renderedFavouriteRecipes}
    </section>
  );
};
export default SavedList;
