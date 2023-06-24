import { useEffect } from "react";
import { useSelector } from "react-redux";
import getRecipes from './recipeAPI';
import {selectRecipes } from './storeRecipesSlice';
import './Recipes.css'

const Recipes = () => { 

    //state hooks (destructure data from slice using useSelector)
const allRecipes = useSelector(selectRecipes);
//const dispatch = useDispatch();

useEffect(() => {
    getRecipes();
 
}, []); //[] means it runs once
return (
    <>
    <img 
    className="recipeImage" 
    src={allRecipes.recipes[0].image} 
    alt={allRecipes.recipes[0].title}
    />
    <h2 className="recipeTitle">{allRecipes.recipes[0].title}</h2>
    
    </>
);
}
export default Recipes;