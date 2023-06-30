import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRecipes, getRandomRecipes } from "./recipeAPI";
import { selectAllRecipes } from "./recipeManagerSlice";
import "./Recipes.css";
import { selectSearchInput } from "../searchInput/searchManagerSlice";
import Loading from "../../components/elements/Loading";
import LikeButton from "../likeInput/LikeButton";

const RecipesList = () => {
  //destructure data from slice using useSelector
  const recipes = useSelector(selectAllRecipes);
  const searchInput = useSelector(selectSearchInput);

  //get data from API

  useEffect(() => {
    getRecipes(searchInput);
  }, [searchInput]);

  useEffect(() => {
    getRandomRecipes();
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
