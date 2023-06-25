import { useEffect } from "react";
import { useSelector } from "react-redux";
import getRecipes from './recipeAPI';
import { selectRecipes } from './recipesSlice';
import './Recipes.css'
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Recipes = () => {

    //state hooks (destructure data from slice using useSelector)
    const recipesInfo = useSelector(selectRecipes);

    useEffect(() => {
        getRecipes();
    }, []); //[] means it runs once

    //console.log(recipesInfo)

    return (
        <div>{Array.isArray(recipesInfo) && recipesInfo.map((recipe) => (
            < RecipeCard
                key={recipe.id}
                recipe={recipe}
            />
        ))}
        </div>

    )
};
export default Recipes;