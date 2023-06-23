import { useEffect } from "react";
import { useSelector } from "react-redux";
import getRecipes from './recipeAPI';
import {selectRecipes } from './storeRecipesSlice';
import Loading from '../../components/Loading'

const Recipes = () => { 

    //state hooks (destructure data from slice using useSelector)
const allRecipes = useSelector(selectRecipes);
//const searchInput = useSelector(selectSearchInput);

//const dispatch = useDispatch();

useEffect(() => {
    getRecipes();
}, []); //[] means it runs once

//below is the return
   if (!allRecipes) return <Loading />;
   if (allRecipes.length === 0) return <p>Try again!</p>;

return (
    <>
    <img 
    className="recipeImage" 
    src={allRecipes.image} 
    alt={allRecipes.title}
    />
    <h2 className="recipeTitle">{allRecipes.title}</h2>
    
    </>
);
}
export default Recipes;