import React from "react";
import { useSelector } from "react-redux";
import { selectAllRecipes } from "./recipeManagerSlice";
import { useEffect } from "react";
import { getRecipesByDiet } from "./recipeAPI";
import Loading from "../../components/elements/Loading";
import LikeButton from "../like/LikeButton";
import { Link } from "react-router-dom";

const RecipesByDiet = () => {
  const recipes = useSelector(selectAllRecipes);

  useEffect(() => {
    getRecipesByDiet();
    console.log("useEffect run -GET RECIPES BY DIET");
  }, []);

  const filteredRecipesByDiet =
    Array.isArray(recipes) &&
    recipes.map((recipe) => (
      <div className="recipeListContainer" key={recipe.id}>
        <LikeButton />

        <img className="recipeImage" src={recipe.image} alt={recipe.title} />
        <div className="recipeListInfo">
          <Link className="recipeLink" to={"/recipe/" + recipe.id}>
            <h3 className="recipeTitle">{recipe.title}</h3>
          </Link>
        </div>
      </div>
    ));

  if (!recipes || recipes.length === 0) return <Loading />;
  if (recipes.diet === "") return <div>{filteredRecipesByDiet}</div>;
};

export default RecipesByDiet;
