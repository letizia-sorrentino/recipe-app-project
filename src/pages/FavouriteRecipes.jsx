import SavedList from "../features/recipes/SavedList";
import SqlRecipesList from "../features/recipes/SqlRecipesList";

const FavouriteRecipes = () => {
  return (
    <div>
      <div>
        <h1>Saved Recipes</h1>
      </div>
      <SqlRecipesList />
      {/* <SavedList /> */}
    </div>
  );
};

export default FavouriteRecipes;
