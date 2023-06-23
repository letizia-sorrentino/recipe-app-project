//import RecipeCard from "./RecipeCard";
import Recipes from "../features/storeRecipes/Recipes";
import Search from "./Search";

const Homepage = () => {
  return (
    <> 
    <div>
        <h1>Find the best recipes:</h1>
        <Search />
      </div>     
      <div>
        <h1>Recipes</h1>
        <Recipes />
      </div>
      <div>
        <h1>Categories</h1>
      </div>
      <div>
        <h1>Other Recipes</h1>
      </div>
      </>
  );
};

export default Homepage;
