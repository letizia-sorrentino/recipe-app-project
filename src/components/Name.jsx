// import { useSelector } from 'react-redux';
// import { selectRecipe } from '../features/recipe/recipeSlice';

// const Name = () => {
// //const recipes = useSelector(selectRecipe);
// const { title } = useSelector((state) => state.recipe);
// return <h1 className="recipeName">{title}</h1>;

// }

const Name = (props) => {

const {title} = props
    return <h1 className="recipeName">{title}</h1>;
}

export default Name;