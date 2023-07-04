import RecipesList from "../../features/recipes/RecipesList";
import SearchBar from "../../features/search/SearchBar";
import CategoryCard from "../elements/CategoryCard";
import vegetarianDish from "../../assets/vegetarianDish.png";
import veganDish from "../../assets/veganDish.png";
import pescatarianDish from "../../assets/pescatarianDish.png";
import whole30Dish from "../../assets/Whole30Dish.png";
import { getRecipesByDiet } from "../../features/recipes/recipeAPI";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div>
        <h1>Find the best recipes:</h1>
        <div>
          <SearchBar />
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
            <Link className="categoryLink" to={"/searchResults"}>
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
            </Link>
          </CategoryCard>
          <CategoryCard>
            <Link className="categoryLink" to={"/searchResults"}>
              <img
                className="categoryPicture"
                src={veganDish}
                alt="veganDish"
              />
              <h3
                className="categoryTitle"
                onClick={() => {
                  getRecipesByDiet("vegan");
                  console.log("vegan recipes");
                }}
              >
                Vegan
              </h3>
            </Link>
          </CategoryCard>
          <CategoryCard>
            <Link className="categoryLink" to={"/searchResults"}>
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
            </Link>{" "}
          </CategoryCard>
          <CategoryCard>
            <Link className="categoryLink" to={"/searchResults"}>
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
            </Link>{" "}
          </CategoryCard>
        </div>
      </div>
    </>
  );
};

export default Homepage;
