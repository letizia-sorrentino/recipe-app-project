import SearchBar from "../features/searchInput/SearchBar";
import Recipes from "../features/storeRecipes/Recipes";
//import Loading from "./Loading";
//import { useSelector } from "react-redux";
//import { selectRecipes } from "../features/storeRecipes/storeRecipesSlice";

const Homepage = () => {
  //const recipes = useSelector(selectRecipes);

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
