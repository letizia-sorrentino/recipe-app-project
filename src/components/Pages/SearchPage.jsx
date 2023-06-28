import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/searchInput/SearchBar";
import CategoryCard from "../elements/CategoryCard";
import FilterButton from "../elements/FilterButton";
import lunchIcon from "../../assets/lunchIcon.svg"


const SearchPage = () => {


    return (
      <> 
      <div><h1>Search</h1></div>
  <div>
      <SearchBar />
  </div>
  <div className="searchFilters">
      <FilterButton><p>Breakfast</p></FilterButton>
      <FilterButton><p>Lunch</p></FilterButton>
      <FilterButton><p>Snack</p></FilterButton>
      <FilterButton><p>Dinner</p></FilterButton>
  </div>

<div className="searchResults">
  <h2>Recipes Ideas</h2>
  <RecipesList/>

</div>


<div>
  <h3>Recipes by Diet</h3>
  <div className="categoriesContainer">
    <CategoryCard>
    <h3 className="categoryTitle">Vegeterian</h3>
    <img className="lunchIcon" src={lunchIcon} alt="lunchIcon" />

    </CategoryCard>
    <CategoryCard>
    <h3 className="categoryTitle">Vegan</h3>
    <img className="lunchIcon" src={lunchIcon} alt="lunchIcon" />

    </CategoryCard>
    <CategoryCard>
    <h3 className="categoryTitle">Pescetarian </h3>
    <img className="lunchIcon" src={lunchIcon} alt="lunchIcon" />

    </CategoryCard>
    <CategoryCard>
    <h3 className="categoryTitle">Whole30</h3>
    <img className="lunchIcon" src={lunchIcon} alt="lunchIcon" />

    </CategoryCard>
  </div>
</div>
  </>
  );
  };
  
  export default SearchPage;