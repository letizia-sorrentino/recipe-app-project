import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/searchInput/SearchBar";
import Controls from "../../features/controls/Controls";
import CategoryCard from "../elements/CategoryCard";
// import easyLunch from "../../assets/easyLunch.png";
// import quickDinner from "../../assets/quickDinner.png";

const Homepage = () => {
  return (
    <>
      <div>
        <h1>Find the best recipes:</h1>
        <SearchBar /> <Controls/>
      </div>
      <div>
        <h2>Recipes</h2>
        {/* <RecipesList /> */}
      </div>
      <div>
        <h2>Popular Recipes</h2>
        <div className="categoriesContainer">
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard>
            {/* <img className="categoryPicture" src={easyLunch} alt="easyLunch" /> */}
            <h3 className="categoryTitle">Quick Lunches</h3>
          </CategoryCard>
          <CategoryCard>
            {/* <img className="categoryPicture" src={quickDinner} alt="quickDinner" /> */}
            <h3 className="categoryTitle">Easy Dinners</h3>
          </CategoryCard>
        </div>
      </div>

      <div>
        <h2>Other recipes</h2>
        {/* <RecipesList /> */}
      </div>
    </>
  );
};

export default Homepage;
