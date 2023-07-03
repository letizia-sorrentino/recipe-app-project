import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRandomRecipes } from "./recipeAPI";
import { selectAllRecipes } from "./recipeManagerSlice";
import "./Recipes.css";
import Loading from "../../components/elements/Loading";
import AddButton from "../favourites/AddButton";


const RecipesList = () => {
  //destructure data from slice using useSelector
  const recipes = useSelector(selectAllRecipes);

  useEffect(() => {
    getRandomRecipes();
    console.log("use effect run -GET RANDOM RECIPES")
  }, []);

  if (!recipes || recipes.length === 0) return <Loading />;

  const renderedRecipes =
    Array.isArray(recipes) &&
    recipes.map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <div className="recipeTile"> 
        <img className="recipeImage" src={recipe.image} alt={recipe.title} />
        <div className="recipeListInfo"> 
        <h2 className="recipeTitle">{recipe.title}</h2>
        <AddButton/>
        </div>
        </div>
      </div>
    ));
  return <section>{renderedRecipes}</section>;
};
export default RecipesList;
