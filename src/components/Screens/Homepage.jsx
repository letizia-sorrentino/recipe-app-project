import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/searchInput/SearchBar";
//import Loading from "./Loading";
//import { useSelector } from "react-redux";
//import { selectAllRecipes } from "../features/storeRecipes/storeRecipesSlice";

const Homepage = () => {
  //const recipes = useSelector(selectAllRecipes);

  // //below is the return
  // if (!recipes) return <Loading />;
  // if (recipes.length === 0) return <p>Try again!</p>;

  return (
    <> 
    <div>
        <h1>Find the best recipes:</h1>
        <SearchBar />
      </div>     
      <div>
        <h1>Recipes</h1>
        <RecipesList/>
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
