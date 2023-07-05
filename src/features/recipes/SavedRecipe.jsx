import { useSelector } from "react-redux";
import { selectAllRecipes, selectFavourites } from "./recipeManagerSlice";
import RemoveButton from "../../components/elements/RemoveButton";
import { Link } from "react-router-dom";

const SavedRecipe = () => {
  const recipes = useSelector(selectAllRecipes);
  const favourites = useSelector(selectFavourites);

  const favouriteRecipes = recipes.filter((recipe) => {
    return favourites.includes(recipe.id);
  });
console.log(favouriteRecipes, recipes);

  const renderedFavouriteRecipes =
    favouriteRecipes.map((recipe) => (
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
            <RemoveButton />
          </div>
        </div>
      </div>
    ));

  return <section>{renderedFavouriteRecipes}</section>;
};
export default SavedRecipe;
