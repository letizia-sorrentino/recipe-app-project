import SearchBar from "../components/SearchBar";
import RecipesList from "../components/RecipesList";
import { getRecipesByType } from "../app/recipeAPI";
import "../styles/searchPage.css";

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
