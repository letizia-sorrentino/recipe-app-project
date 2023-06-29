import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getRecipes,
  getRandomRecipes,
  getRecipesByType,
  getRecipesByDiet
} from "./recipeAPI";
import { selectAllRecipes, selectRecipesByType, selectRecipesbyDiet } from "./recipesSlice";
import "./Recipes.css";
import { selectSearchInput } from "../searchInput/searchInputSlice";
import Loading from "../../components/elements/Loading";
import LikeButton from "../likeInput/LikeButton";

const RecipesList = () => {
  //destructure data from slice using useSelector
  const recipes = useSelector(selectAllRecipes);
  const searchInput = useSelector(selectSearchInput);
  const type = useSelector(selectRecipesByType);
  const diet = useSelector(selectRecipesbyDiet);

  //get data from API

  useEffect(() => {
    getRecipes(searchInput);
  }, [searchInput]);

  useEffect(() => {
    getRandomRecipes();
  }, []);

  useEffect(() => {
    getRecipesByType(type);
  }, [type]);

  useEffect(() => {
    getRecipesByDiet(diet);
  }, [diet]);

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
