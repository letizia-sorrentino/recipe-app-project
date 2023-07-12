import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import apiKey from "../features/recipes/config";
import {
  storeRecipesDetails,
  selectRecipesDetails,
} from "../features/recipes/recipeManagerSlice";
import ToggleFavouritesButton from "../components/ToggleFavouritesButton";
import "../styles/recipeCard.css";

const RecipeCard = () => {
  let params = useParams();
  const details = useSelector(selectRecipesDetails);
  const dispatch = useDispatch();

  // get single recipe details
  const getRecipesDetails = async () => {
    try {
      //console.log("get recipes details");

      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?&apiKey=${apiKey}`
      );
      //storeRecipesDetails(data);
      dispatch(storeRecipesDetails(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipesDetails();
    //console.log(details);
  }, [params.id]);

  return (
    <div className="recipeCardContainer">
      <img
        className="recipeCardImage"
        src={details.image}
        alt={details.title}
      />

      <div className="recipeCardContent">
        <div className="recipeCardIntro">
          <div className="recipeCardTitle">
            <h2>{details.title}</h2>
          </div>

          <div className="buttonContainer">
            <ToggleFavouritesButton id={details.id} />{" "}
          </div>
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
