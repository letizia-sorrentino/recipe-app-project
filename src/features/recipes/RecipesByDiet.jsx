import React from "react";
import { useSelector } from "react-redux";
import { selectAllRecipes, selectRecipesByDiet } from "./recipeManagerSlice";
import { useEffect } from "react";
import { getRecipesByDiet } from "./recipeAPI";
import Loading from "../../components/elements/Loading";
import LikeButton from "../like/LikeButton";

const RecipesByDiet = () => {
  const recipes = useSelector(selectAllRecipes);
  const diet = useSelector(selectRecipesByDiet);

  useEffect(() => {
    getRecipesByDiet(diet);
  }, [diet]);

  if (!recipes || recipes.length === 0) return <Loading />;

  const filteredRecipesByDiet =
    Array.isArray(recipes) &&
    recipes.map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <LikeButton />

        <img className="recipeImage" src={recipe.image} alt={recipe.title} />
        <h2 className="recipeTitle">{recipe.title}</h2>
      </div>
    ));
  return <section>{filteredRecipesByDiet}</section>;
};

export default RecipesByDiet;
