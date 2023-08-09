import SqlRecipesList from "../features/recipes/SqlRecipesList";

const FavouriteRecipes = () => {
  return (
    <div>
      <div>
        <h1>Saved Recipes</h1>
      </div>
      <SqlRecipesList />
      
    </div>
  );
};

export default FavouriteRecipes;
