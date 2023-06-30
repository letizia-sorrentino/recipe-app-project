import SearchBar from "../../features/search/SearchBar";
import Controls from "../../features/controls/Controls";
import CategoryCard from "../elements/CategoryCard";
import FilterButton from "../elements/FilterButton";
import vegetarianDish from "../../assets/vegetarianDish.png";
import veganDish from "../../assets/veganDish.png";
import pescatarianDish from "../../assets/pescatarianDish.png";
import whole30Dish from "../../assets/Whole30Dish.png";
import RecipesByType from "../../features/recipes/RecipesByType";
import { getRecipesByType } from "../../features/recipes/recipeAPI";


const SearchPage = () => {
  console.log("search page loading")
  return (
    <>
      <div>
        <h1>Search</h1>
      </div>
      <div className="controlsBar">
        <SearchBar /> <Controls/>
      </div>
      <h2>Popular filters:</h2>
      <div className="searchFilters">
        <FilterButton onClick={() => {getRecipesByType('breakfast')}}>
          <p>Breakfast</p>
        </FilterButton>
        <FilterButton>
          <p>Lunch</p>
        </FilterButton>
        <FilterButton>
          <p>Snack</p>
        </FilterButton>
        <FilterButton>
          <p>Dinner</p>
        </FilterButton>
      </div>

      <div className="searchResults">
        
        <RecipesByType/>
      </div>

      <div>
        <h2>Filter recipes by diet:</h2>
        <div className="categoriesContainer">
          <CategoryCard>
            <img
              className="categoryPicture"
              src={vegetarianDish}
              alt="vegetarianDish"
            />
            <h3 className="categoryTitle">Vegeterian</h3>
          </CategoryCard>
          <CategoryCard>
            <img className="categoryPicture" src={veganDish} alt="veganDish" />
            <h3 className="categoryTitle">Vegan</h3>
          </CategoryCard>
          <CategoryCard>
            <img
              className="categoryPicture"
              src={pescatarianDish}
              alt="pescatarianDish"
            />
            <h3 className="categoryTitle">Pescatarian </h3>
          </CategoryCard>
          <CategoryCard>
            <img
              className="categoryPicture"
              src={whole30Dish}
              alt="whole30Dish"
            />
            <h3 className="categoryTitle">Whole30</h3>
          </CategoryCard>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
