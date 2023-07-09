import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import apiKey from "../features/recipes/config";

const RecipeCard = () => {
  let params = useParams();
  const [details, setDetails] = useState({});

  // get single recipe details
  const getRecipesDetails = async () => {
    try {
      console.log("get recipes details");

      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?&apiKey=${apiKey}`
      );
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipesDetails();
    console.log(details);
  }, [params.id]);

  return (
    <div className="recipeCardContainer">
      <img
        className="recipeCardImage"
        src={details.image}
        alt={details.title}
      />

      <div className="recipeCardContent">
        <div>
          <h2>{details.title}</h2>
        </div>

        <div className="recipeCardInfo">
          <p>
            Serves: {details.servings} - Ready in {details.readyInMinutes}{" "}
            minutes
          </p>
        </div>

        <div className="recipeCardIngredients">
          <h3>Ingredients</h3>
          {details.extendedIngredients ? (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients found</p>
          )}
        </div>

        <div className="recipeCardInstructions">
          <h3>Instructions</h3>
          <div dangerouslySetInnerHTML={{ __html: details.instructions }}></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
