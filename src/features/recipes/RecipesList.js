import { useEffect } from "react";
import { useSelector } from "react-redux";
import getRecipes from './recipeAPI';
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

    //console.log(recipes.recipes[0])
    const recipesInfo = recipes.recipes;
    //console.log(recipesInfo);

    const renderedRecipes = Array.isArray(recipesInfo) && recipesInfo.map((recipe) => (
        <div key={recipe.id}>
             <h2>{recipe.title}</h2>
            <img className="recipeImage" src={recipe.image}
                alt={recipe.title}
            />
        </div>

    ))
    return (
        <section>
            <h1>Recipes</h1>
            {renderedRecipes}
        </section>

    )
};
export default RecipesList;