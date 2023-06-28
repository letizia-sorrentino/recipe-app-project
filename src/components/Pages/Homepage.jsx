import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/searchInput/SearchBar";
import CategoryCard from "../elements/CategoryCard";

const Homepage = () => {

  return (
    <>
      <div>
        <h1>Find the best recipes:</h1>
        <SearchBar />
      </div>
      <div>
        <h2>Recipes</h2>
        <RecipesList />
      </div>
      <div>
        <h2>Categories</h2>
        <div className="categoriesContainer"> 
        <CategoryCard />
        <CategoryCard />
        </div>
      </div>
    </>
  );
};

export default Homepage;
