import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/search/SearchBar";
import Controls from "../../features/controls/Controls";
import CategoryCard from "../elements/CategoryCard";
import LikeButton from "../../features/like/LikeButton";
import vegetarianDish from "../../assets/vegetarianDish.png";
import veganDish from "../../assets/veganDish.png";
import pescatarianDish from "../../assets/pescatarianDish.png";
import whole30Dish from "../../assets/Whole30Dish.png";
import { getRecipesByDiet } from "../../features/recipes/recipeAPI";
import RecipesByDiet from "../../features/recipes/RecipesByDiet";

const Homepage = () => {
  return (
    <>
      <div>
        <h1>Find the best recipes:</h1>
        <div className="controlsBar">
          <SearchBar /> <Controls />
        </div>
      </div>
      <div>
        <h2>Recipes</h2>
        <RecipesList />
      </div>
      <div>
        <h2>Popular Recipes</h2>
        <div className="categoriesContainer">
          <CategoryCard>
            <img
              className="categoryPicture"
              src={vegetarianDish}
              alt="vegetarianDish"
            />
            <h3
              className="categoryTitle"
              onClick={() => {
                getRecipesByDiet("vegetarian");
                console.log("vegetarian recipes");
              }}
            >
              Vegeterian
            </h3>
          </CategoryCard>
          <CategoryCard>
            <img className="categoryPicture" src={veganDish} alt="veganDish" />
            <h3
              className="categoryTitle"
              onClick={() => {
                getRecipesByDiet("vegan");
                console.log("vegan recipes");
              }}
            >
              Vegan
            </h3>
          </CategoryCard>
          <CategoryCard>
            <img
              className="categoryPicture"
              src={pescatarianDish}
              alt="pescatarianDish"
            />
            <h3
              className="categoryTitle"
              onClick={() => {
                getRecipesByDiet("pescatarian");
              }}
            >
              Pescatarian{" "}
            </h3>
          </CategoryCard>
          <CategoryCard>
            <img
              className="categoryPicture"
              src={whole30Dish}
              alt="whole30Dish"
            />
            <h3
              className="categoryTitle"
              onClick={() => {
                getRecipesByDiet("whole30");
              }}
            >
              Whole30
            </h3>
          </CategoryCard>
        </div>

        <div className="searchResults">
          <RecipesByDiet />
        </div>
      </div>
    </>
  );
};

export default Homepage;
