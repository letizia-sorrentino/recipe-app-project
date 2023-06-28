import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/searchInput/SearchBar";
import Button from "../elements/Button"
import CategoryCard from "../elements/CategoryCard";


const SearchPage = () => {


    return (
      <> 
      <div><h1>Search</h1></div>
  <div>
      <SearchBar />
  </div>
  <div className="searchFilters">
      <Button />
      <Button />
      <Button />
  </div>

<div className="searchResults">
  
  <RecipesList/>

</div>


<div>
  <h3>Categories</h3>
  <div className="categoriesContainer">
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
    <CategoryCard/>
  </div>
</div>
  </>
  );
  };
  
  export default SearchPage;