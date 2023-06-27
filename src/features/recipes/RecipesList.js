import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getRecipes, getRandomRecipes } from './recipeAPI';

import { selectAllRecipes } from './recipesSlice';
import './Recipes.css'
import { selectSearchInput } from "../searchInput/searchInputSlice";
import Loading from '../../components/Pages/Loading'

const RecipesList = () => {

    //destructure data from slice using useSelector
    const recipes = useSelector(selectAllRecipes);
    const searchInput = useSelector(selectSearchInput)
    //const dispatch = useDispatch();
    console.log(recipes);

    useEffect(() => {
        getRecipes(searchInput);
    }, [searchInput]); //[] means it runs once


    useEffect(() => {
        getRandomRecipes();
    }, []); //[] means it runs once


    //console.log(recipes.recipes[0])
    //const recipesInfo = recipes.recipes;
    //console.log(recipesInfo);

    if (!recipes || recipes.length === 0)
        return <Loading />


    const renderedRecipes = Array.isArray(recipes) && recipes.map((recipe) => (
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