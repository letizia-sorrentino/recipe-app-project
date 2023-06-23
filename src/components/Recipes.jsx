import RecipeCard from "./RecipeCard";

const Recipes = (props) => {
    const { recipes } = props;
    return (
        <div>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};
export default Recipes;
