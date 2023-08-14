import RecipesList from "../components/RecipesList";
import SearchBar from "../components/SearchBar";
import vegetarianDish from "../assets/vegetarianDish.png";
import veganDish from "../assets/veganDish.png";
import pescatarianDish from "../assets/pescatarianDish.png";
import whole30Dish from "../assets/Whole30Dish.png";
import { getRecipesByDiet } from "../app/recipeAPI";
import { Link } from "react-router-dom";
import "../styles/homepage.css";

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
          <div className="categoryCard">
            <Link className="categoryLink" to={"/searchResults"}>
              <div>
                <img
                  className="categoryPicture"
                  src={vegetarianDish}
                  alt="vegetarianDish"
                />
              </div>
              <div>
                <button
                  className="categoryTitle"
                  onClick={() => {
                    getRecipesByDiet("vegetarian");
                    console.log("vegetarian recipes");
                  }}
                >
                  Vegeterian
                </button>
              </div>
            </Link>
          </div>
          <div className="categoryCard">
            <Link className="categoryLink" to={"/searchResults"}>
              <div>
                <img
                  className="categoryPicture"
                  src={veganDish}
                  alt="veganDish"
                />
              </div>
              <div>
                <button
                  className="categoryTitle"
                  onClick={() => {
                    getRecipesByDiet("vegan");
                    console.log("vegan recipes");
                  }}
                >
                  Vegan
                </button>
              </div>
            </Link>
          </div>
          <div className="categoryCard">
            <Link className="categoryLink" to={"/searchResults"}>
              <div>
                <img
                  className="categoryPicture"
                  src={pescatarianDish}
                  alt="pescatarianDish"
                />
              </div>
              <div>
                <button
                  className="categoryTitle"
                  onClick={() => {
                    getRecipesByDiet("pescatarian");
                    console.log("pescatarian recipes");
                  }}
                >
                  Pescatarian{" "}
                </button>
              </div>
            </Link>{" "}
          </div>
          <div className="categoryCard">
            <Link className="categoryLink" to={"/searchResults"}>
              <div>
                <img
                  className="categoryPicture"
                  src={whole30Dish}
                  alt="whole30Dish"
                />
              </div>
              <div>
                <button
                  className="categoryTitle"
                  onClick={() => {
                    getRecipesByDiet("whole30");
                    console.log("whole30");
                  }}
                >
                  Whole30
                </button>
              </div>
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
