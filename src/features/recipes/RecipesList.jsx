import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes, getRandomRecipes } from './recipeAPI';
import { setLikeInput, selectAllRecipes, selectLikeInput } from './recipesSlice';
import './Recipes.css'
import { selectSearchInput } from "../searchInput/searchInputSlice";
import Loading from '../../components/Pages/Loading'
import LikeIcon from '../../components/elements/LikeIcon'

const RecipesList = () => {

    //destructure data from slice using useSelector
    const recipes = useSelector(selectAllRecipes);
    const searchInput = useSelector(selectSearchInput);
    const likeInput = useSelector(selectLikeInput);

    const dispatch = useDispatch();

    useEffect(() => {
        getRecipes(searchInput);
    }, [searchInput]); 


    useEffect(() => {
        getRandomRecipes();
    }, []); 

    const onLikeInput = (e) => {
        setLikeInput(e.target.value);
        dispatch(setLikeInput(e.target.value));
      };


    if (!recipes || recipes.length === 0)
        return <Loading />


    const renderedRecipes = Array.isArray(recipes) && recipes.map((recipe) => (
        <div key={recipe.id}>
            <LikeIcon className="likeIcon" onLikeInput={onLikeInput} />
            
            <img className="recipeImage" src={recipe.image}
                alt={recipe.title}
            />
            <h2 className="recipeTitle">{recipe.title}</h2>
        </div>

    ))
    return (
        <section>
            {renderedRecipes}
        </section>

    )
};
export default RecipesList;