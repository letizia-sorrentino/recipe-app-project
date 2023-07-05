import React from "react";
import { useSelector } from "react-redux";
import { selectAllRecipes } from "./recipeManagerSlice";
import { useEffect } from "react";
import { getRecipesByType } from "./recipeAPI";
import Loading from "../../components/elements/Loading";
import RecipesList from "../recipes/RecipesList";
import AddButton from "../../components/elements/AddButton";
import { Link } from "react-router-dom";

const RecipesByType = () => {
  const recipes = useSelector(selectAllRecipes);

  useEffect(() => {
    getRecipesByType();
    console.log("useEffect run - GET RECIPES BY TYPE");
  }, []);

  const filteredRecipesByType =
    Array.isArray(recipes) &&
    recipes.map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <AddButton />

        <img className="recipeImage" src={recipe.image} alt={recipe.title} />
        <div className="recipeListInfo"> 

        <Link className="recipeLink" to={"/recipe/"+recipe.id}> 
        <h3 className="recipeTitle">{recipe.title}</h3>
        </Link>
      </div>
      </div>
    ));

  if (!recipes || recipes.length === 0) return <Loading />;
  if (!recipes.type || recipes.type.length === 0) return <RecipesList />;
  if (recipes.type === "") return <section>{filteredRecipesByType}</section>;
};

export default RecipesByType;
