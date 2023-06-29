import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/searchInput/SearchBar";
import CategoryCard from "../elements/CategoryCard";
import FilterButton from "../elements/FilterButton";
import vegetarianDish from "../../assets/vegetarianDish.png";
import veganDish from "../../assets/veganDish.png";
import pescatarianDish from "../../assets/pescatarianDish.png";
import whole30Dish from "../../assets/Whole30Dish.png";

const SearchPage = () => {
  return (
    <>
      <div>
        <h1>Search</h1>
      </div>
      <div>
        <SearchBar />
      </div>
      <h2>Filter Recipes</h2>
      <div className="searchFilters">
        <FilterButton>
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
        <h2>Recipes Ideas</h2>
        <RecipesList />
      </div>

      <div>
        <h2>Recipes by Diet</h2>
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
            <h3 className="categoryTitle">Pescetarian </h3>
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
