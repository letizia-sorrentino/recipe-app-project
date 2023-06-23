import RecipeCard from "./RecipeCard";

const allRecipes = (props) => {
    const { allRecipes } = props;
    return (
        <div>
            {allRecipes.map((recipe) => (
                <RecipeCard 
                recipe={recipe}
                key={recipe.id}  
                />
            ))}
        </div>
    );
};
export default allRecipes;
