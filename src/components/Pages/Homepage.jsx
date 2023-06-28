import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/searchInput/SearchBar";
import CategoryCard from "../elements/CategoryCard";
import lunchIcon from "../../assets/lunchIcon.svg";
import dinnerIcon from "../../assets/dinnerIcon.svg";

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
          <CategoryCard>
            {" "}
            <h3 className="categoryTitle">Quick Lunches</h3>
            <img className="lunchIcon" src={lunchIcon} alt="lunchIcon" />
          </CategoryCard>
          <CategoryCard>
            <h3 className="categoryTitle">Easy Dinners</h3>
            <img className="dinnerIcon" src={dinnerIcon} alt="dinnerIcon" />
          </CategoryCard>
        </div>
      </div>
    </>
  );
};

export default Homepage;
