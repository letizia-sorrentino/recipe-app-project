import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRandomRecipes } from "./recipeAPI";
import { selectAllRecipes } from "./recipeManagerSlice";
import "./Recipes.css";
import Loading from "../../components/elements/Loading";
import LikeButton from "../like/LikeButton";

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
        <LikeButton />
        <img className="recipeImage" src={recipe.image} alt={recipe.title} />
        <h2 className="recipeTitle">{recipe.title}</h2>
      </div>
    ));
  return <section>{renderedRecipes}</section>;
};
export default RecipesList;
