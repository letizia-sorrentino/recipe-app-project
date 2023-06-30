import React from "react";
import { useSelector } from "react-redux";
import { selectAllRecipes, selectRecipesByType } from "./recipeManagerSlice";
import { useEffect } from "react";
import { getRecipesByType } from "./recipeAPI";
import Loading from "../../components/elements/Loading";
import RecipesList from "../recipes/RecipesList";
import LikeButton from "../like/LikeButton";

const RecipesByType = () => {
  const recipes = useSelector(selectAllRecipes);

  useEffect(() => {
    getRecipesByType('breakfast');
    //console.log(type);
    console.log("use effect run -GET RECIPES BY TYPE")

  }, []);

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
  if (!recipes.type || recipes.type.length === 0) return <RecipesList />;
  //if (recipes.type === type) return <section>{filteredRecipesByType}</section>;
};

export default RecipesByType;
