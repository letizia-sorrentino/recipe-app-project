import React from "react";
import { useSelector } from "react-redux";
import { selectAllRecipes, selectRecipesByDiet } from "./recipeManagerSlice";
import { useEffect } from "react";
import { getRecipesByDiet } from "./recipeAPI";
import Loading from "../../components/elements/Loading";
import RecipesList from "../recipes/RecipesList";
import LikeButton from "../like/LikeButton";

const RecipesByDiet = () => {
  const recipes = useSelector(selectAllRecipes);
  //const diet = useSelector(selectRecipesByDiet);

  useEffect(() => {
    getRecipesByDiet(diet);
    console.log("use effect run -GET RECIPES BY DIET")
  }, []);


  const filteredRecipesByDiet =
    Array.isArray(recipes) &&
    recipes.map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <LikeButton />

        <img className="recipeImage" src={recipe.image} alt={recipe.title} />
        <h2 className="recipeTitle">{recipe.title}</h2>
      </div>
    ));

  if (!recipes || recipes.length === 0) return <Loading />;
  if (!recipes.diet || recipes.diet.length === 0) return <RecipesList />;
  if (recipes.diet === diet) return <section>{filteredRecipesByDiet}</section>;
};

export default RecipesByDiet;
