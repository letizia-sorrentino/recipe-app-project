import { useSelector } from "react-redux";
import { selectAllRecipes } from "../../features/recipes/recipeManagerSlice";
import RemoveButton from "./RemoveButton";
import {Link} from "react-router-dom";

const SavedRecipe = () => {
  const favourites = useSelector(selectAllRecipes);
  console.log(favourites);

  const renderedFavouriteRecipes =
    Array.isArray(favourites) &&
    favourites.map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <div className="recipeTile">
          <img className="savedRecipeImage" src={recipe.image} alt={recipe.title} />
          <div className="recipeListInfo">
          <Link className="recipeLink" to={"/recipe/"+recipe.id}>
            <h2 className="recipeTitle">{recipe.title}</h2>
           </Link>
            <RemoveButton />
          </div>
        </div>
      </div>
    ));

  return <section>{renderedFavouriteRecipes}</section>;
};
export default SavedRecipe;
