import { useEffect } from "react";
import { useSelector } from "react-redux";
import getRecipes from './recipeAPI';
import { selectRecipes } from './storeRecipesSlice';
import './Recipes.css'
import RecipeCard from "../../components/RecipeCard";

const Recipes = () => {

    //state hooks (destructure data from slice using useSelector)
    const recipes = useSelector(selectRecipes);

    useEffect(() => {
        getRecipes();
    }, []); //[] means it runs once
     
    //console.log(recipes);
    
    return (
        < RecipeCard 
            recipes={recipes}
        />     
    );
}
export default Recipes;