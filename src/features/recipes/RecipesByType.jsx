import React from "react";
import { useSelector } from "react-redux";
import { selectAllRecipes, selectRecipesByType } from "./recipeManagerSlice";
import { useEffect } from "react";
import { getRecipesByType } from "./recipeAPI";
import Loading from "../../components/elements/Loading";
import LikeButton from "../like/LikeButton";

const RecipesByType = () => {
  const recipes = useSelector(selectAllRecipes);
  const type = useSelector(selectRecipesByType);

  useEffect(() => {
    getRecipesByType(type);
  }, [type]);

  const filteredRecipesByType =
    Array.isArray(recipes) &&
    recipes.map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <LikeButton />

        <img className="recipeImage" src={recipe.image} alt={recipe.title} />
        <h2 className="recipeTitle">{recipe.title}</h2>
      </div>
    ));

  if (!recipes || recipes.length === 0) return <Loading />;
  if (recipes.type === "breakfast")
    return <section>{filteredRecipesByType}</section>;
  if (recipes.type === "lunch")
    return <section>{filteredRecipesByType}</section>;
  if (recipes.type === "snack")
    return <section>{filteredRecipesByType}</section>;
  if (recipes.type === "dinner")
    return <section>{filteredRecipesByType}</section>;
};

export default RecipesByType;
