import { useSelector } from "react-redux";
import { selectAllRecipes } from "./recipeManagerSlice";
import Loading from "../../components/Loading";
import ToggleFavouritesButton from "../../components/ToggleFavouritesButton";
import { Link } from "react-router-dom";

const RecipesList = () => {
  //destructure data from slice using useSelector
  const recipes = useSelector(selectAllRecipes);

  if (!recipes || recipes.length === 0) return <Loading />;

  const renderedRecipes = recipes.map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <div className="recipeTile">
          <img className="recipeImage" src={recipe.image} alt={recipe.title} />
          <div className="recipeListInfo">
            <Link className="recipeLink" to={"/recipe/" + recipe.id}>
              <h3 className="recipeTitle">{recipe.title}</h3>
            </Link>
            <ToggleFavouritesButton id={recipe.id}/>
          </div>
        </div>
      </div>
    ));
  

  return <section>{renderedRecipes}</section>;
};
export default RecipesList;
