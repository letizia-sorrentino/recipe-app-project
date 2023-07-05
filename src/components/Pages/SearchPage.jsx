import SearchBar from "../../features/search/SearchBar";
import RecipesList from "../../features/recipes/RecipesList";
import { getRecipesByType } from "../../features/recipes/recipeAPI";

const SearchPage = () => {
  return (
    <>
      <div>
        <h1>Search</h1>
        
      </div>
      <div className="controlsBar">
      <SearchBar /> 
        
      </div>
      <div className="filtersContainer">
      <h2>Popular filters:</h2>
      <div className="searchFilters">
        <button
          onClick={() => {
            getRecipesByType("breakfast");
          }}
        >
          Breakfast
        </button>
        <button
          onClick={() => {
            getRecipesByType("lunch");
          }}
        >
          Lunch
        </button>
        <button
          onClick={() => {
            getRecipesByType("snack");
          }}
        >
          Snack
        </button>
        <button
          onClick={() => {
            getRecipesByType("dinner");
          }}
        >
          Dinner
        </button>
      </div>
      </div>
      <div className="searchResults">
        <RecipesList />
      </div>
    </>
  );
};

export default SearchPage;
