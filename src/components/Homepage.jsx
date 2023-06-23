import SearchBar from "../features/searchInput/SearchBar";
import Recipes from "../features/storeRecipes/Recipes";

const Homepage = () => {
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
