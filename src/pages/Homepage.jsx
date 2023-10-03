import SearchBar from "../components/SearchBar";
import vegetarianDish from "../assets/vegetarianDish.png";
import veganDish from "../assets/veganDish.png";
import pescatarianDish from "../assets/pescatarianDish.png";
import whole30Dish from "../assets/Whole30Dish.png";
import { getRecipesByDiet } from "../app/recipeAPI";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import RecipesList from "../components/RecipesList";

const Homepage = () => {
  return (
    <>
      <div>
        <h2>Popular Recipes</h2>
        <div className="categoriesContainer">
          <div
            className="categoryCard"
            onClick={() => {
              getRecipesByDiet("vegetarian");
              console.log("vegetarian recipes");
            }}
          >
            <Link className="categoryLink" to={"/searchResults"}>
              <div>
                <img
                  className="categoryPicture"
                  src={vegetarianDish}
                  alt="vegetarianDish"
                />
              </div>
              <div>
                <button className="categoryTitle">Vegeterian</button>
              </div>
            </Link>
          </div>
          <div
            className="categoryCard"
            onClick={() => {
              getRecipesByDiet("vegan");
              console.log("vegan recipes");
            }}
          >
            <Link className="categoryLink" to={"/searchResults"}>
              <div>
                <img
                  className="categoryPicture"
                  src={veganDish}
                  alt="veganDish"
                />
              </div>
              <div>
                <button className="categoryTitle">Vegan</button>
              </div>
            </Link>
          </div>
          <div
            className="categoryCard"
            onClick={() => {
              getRecipesByDiet("pescatarian");
              console.log("pescatarian recipes");
            }}
          >
            <Link className="categoryLink" to={"/searchResults"}>
              <div>
                <img
                  className="categoryPicture"
                  src={pescatarianDish}
                  alt="pescatarianDish"
                />
              </div>
              <div>
                <button className="categoryTitle">Pescatarian </button>
              </div>
            </Link>{" "}
          </div>
          <div
            className="categoryCard"
            onClick={() => {
              getRecipesByDiet("whole30");
              console.log("whole30");
            }}
          >
            <Link className="categoryLink" to={"/searchResults"}>
              <div>
                <img
                  className="categoryPicture"
                  src={whole30Dish}
                  alt="whole30Dish"
                />
              </div>
              <div>
                <button className="categoryTitle">Whole30</button>
              </div>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div>
        <h2>Find the best recipes:</h2>
        <div>
          <SearchBar />
        </div>
        <div className="recipesList">
          <RecipesList />
        </div>
      </div>
    </>
  );
};

export default Homepage;
