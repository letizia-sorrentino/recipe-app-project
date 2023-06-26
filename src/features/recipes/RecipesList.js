import { useEffect } from "react";
import { useSelector } from "react-redux";
import  getRecipes  from './recipeAPI';
import { selectAllRecipes } from './recipesSlice';
import './Recipes.css'
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const RecipesList = () => {

    //destructure data from slice using useSelector
    const recipes = useSelector(selectAllRecipes);

    //const dispatch = useDispatch();

    useEffect(() => {
        getRecipes();
    }, []); //[] means it runs once

    //console.log(recipes)
    const renderedRecipes = Array.isArray(recipes) && recipes.map((recipe) => (
        < RecipeCard
            key={recipe.id}
            recipe={recipe}
        />
    ))
    return (
        <div> 
            {renderedRecipes}
        </div>

    )
};
export default RecipesList;