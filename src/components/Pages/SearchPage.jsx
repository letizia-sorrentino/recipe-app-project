import SearchBar from "../../features/search/SearchBar";
import Controls from "../../features/controls/Controls";
//import FilterButton from "../elements/FilterButton";
import RecipesByType from "../../features/recipes/RecipesByType";
import { getRecipesByType } from "../../features/recipes/recipeAPI";

const SearchPage = () => {
  return (
    <>
      <div>
        <h1>Search</h1>
      </div>
      <div className="controlsBar">
        <SearchBar /> <Controls />
      </div>
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

      <div className="searchResults">
        <RecipesByType />
      </div>
    </>
  );
};

export default SearchPage;
