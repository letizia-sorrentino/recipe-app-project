import { useEffect } from "react";
import { useSelector } from "react-redux";
import getRecipes from './recipeAPI';
import { selectAllRecipes } from './recipesSlice';
import './Recipes.css'

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

            <img className="recipeImage" src={recipe.image}
                alt={recipe.title}
            />
            <h2>{recipe.title}</h2>
        </div>

    ))
    return (
        <section>
            {renderedRecipes}
        </section>

    )
};
export default RecipesList;