import { useSelector } from "react-redux";
import { selectAllRecipes, selectFavourites } from "./recipeManagerSlice";
import ToggleFavouritesButton from "../../components/ToggleFavouritesButton";
import { Link } from "react-router-dom";

const SavedList = () => {
  const recipes = useSelector(selectAllRecipes);
  const favourites = useSelector(selectFavourites);

  const favouriteRecipes = recipes.filter((recipe) => {
    return favourites.includes(recipe.id);
  });
  //console.log(favouriteRecipes, recipes);

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
